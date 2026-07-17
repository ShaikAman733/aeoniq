"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive dotted world map, Stripe-style.
 * - Continents are rasterised from coarse elliptical "blobs" into a dot grid.
 * - Animated great-circle-ish routes draw between global education hubs, with
 *   a travelling comet head, glowing origin nodes and arrival ripples.
 * - Cursor parallax + proximity highlight make it feel alive.
 * - Falls back to a static frame when prefers-reduced-motion is set.
 */

type Blob = { x: number; y: number; rx: number; ry: number };

// Normalised (0..1) equirectangular land approximation.
const CONTINENTS: Blob[] = [
  // North America
  { x: 0.2, y: 0.26, rx: 0.1, ry: 0.1 },
  { x: 0.16, y: 0.19, rx: 0.09, ry: 0.07 },
  { x: 0.24, y: 0.34, rx: 0.055, ry: 0.06 },
  // Greenland
  { x: 0.33, y: 0.13, rx: 0.04, ry: 0.05 },
  // Central America
  { x: 0.245, y: 0.42, rx: 0.03, ry: 0.05 },
  // South America
  { x: 0.3, y: 0.6, rx: 0.06, ry: 0.1 },
  { x: 0.32, y: 0.73, rx: 0.04, ry: 0.08 },
  // Europe
  { x: 0.49, y: 0.24, rx: 0.05, ry: 0.06 },
  // Africa
  { x: 0.52, y: 0.52, rx: 0.07, ry: 0.13 },
  { x: 0.55, y: 0.44, rx: 0.05, ry: 0.05 },
  // Middle East
  { x: 0.58, y: 0.4, rx: 0.04, ry: 0.05 },
  // Asia
  { x: 0.68, y: 0.28, rx: 0.12, ry: 0.1 },
  { x: 0.76, y: 0.34, rx: 0.08, ry: 0.07 },
  // India
  { x: 0.69, y: 0.44, rx: 0.04, ry: 0.05 },
  // SE Asia
  { x: 0.79, y: 0.48, rx: 0.05, ry: 0.04 },
  { x: 0.81, y: 0.55, rx: 0.06, ry: 0.03 },
  // Australia
  { x: 0.86, y: 0.68, rx: 0.06, ry: 0.05 },
];

type Pt = { x: number; y: number };
const CITIES: Record<string, Pt> = {
  Toronto: { x: 0.235, y: 0.27 },
  NewYork: { x: 0.25, y: 0.31 },
  London: { x: 0.485, y: 0.235 },
  Paris: { x: 0.495, y: 0.26 },
  Berlin: { x: 0.515, y: 0.235 },
  Dubai: { x: 0.6, y: 0.385 },
  Delhi: { x: 0.685, y: 0.42 },
  Mumbai: { x: 0.675, y: 0.455 },
  Singapore: { x: 0.795, y: 0.5 },
  Sydney: { x: 0.865, y: 0.68 },
  SaoPaulo: { x: 0.32, y: 0.7 },
};

const ROUTES: [string, string][] = [
  ["Delhi", "Toronto"],
  ["Mumbai", "London"],
  ["Delhi", "Berlin"],
  ["Mumbai", "Sydney"],
  ["Delhi", "Paris"],
  ["Dubai", "Toronto"],
  ["Singapore", "Sydney"],
  ["SaoPaulo", "Paris"],
  ["NewYork", "London"],
  ["Delhi", "Dubai"],
  ["Toronto", "London"],
];

const COLORS = ["#6e2bff", "#a855f7", "#ff4fd8", "#ff7a00"];

function isLand(nx: number, ny: number) {
  for (const b of CONTINENTS) {
    const dx = (nx - b.x) / b.rx;
    const dy = (ny - b.y) / b.ry;
    if (dx * dx + dy * dy <= 1) return true;
  }
  return false;
}

type Arc = {
  from: Pt;
  ctrl: Pt;
  to: Pt;
  color: string;
  t: number;
  speed: number;
  phase: "draw" | "fade";
  fade: number;
  arrived: boolean;
};
type Ripple = { x: number; y: number; r: number; alpha: number; color: string };

function qPoint(a: Pt, c: Pt, b: Pt, t: number): Pt {
  const mt = 1 - t;
  return {
    x: mt * mt * a.x + 2 * mt * t * c.x + t * t * b.x,
    y: mt * mt * a.y + 2 * mt * t * c.y + t * t * b.y,
  };
}

export function WorldMap({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0,
      H = 0,
      mapW = 0,
      mapH = 0,
      offX = 0,
      offY = 0;
    let dots: { x: number; y: number; a: number }[] = [];
    const arcs: Arc[] = [];
    const ripples: Ripple[] = [];
    const pointer = { x: -999, y: -999, active: false };
    const par = { x: 0, y: 0, tx: 0, ty: 0 };
    let raf = 0;
    let spawnAcc = 0;
    let last = performance.now();

    const toPx = (p: Pt): Pt => ({ x: p.x * mapW + offX, y: p.y * mapH + offY });

    function layout() {
      const rect = canvas!.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Preserve a ~1.75:1 map aspect, centered, cover-biased.
      mapW = W;
      mapH = W / 1.75;
      offX = 0;
      offY = (H - mapH) / 2;

      buildDots();
    }

    function buildDots() {
      dots = [];
      const spacing = W > 900 ? 11 : W > 560 ? 10 : 8;
      for (let py = offY; py < offY + mapH; py += spacing) {
        for (let px = 0; px < W; px += spacing) {
          const nx = (px - offX) / mapW;
          const ny = (py - offY) / mapH;
          if (nx < 0 || nx > 1 || ny < 0 || ny > 1) continue;
          if (isLand(nx, ny)) {
            dots.push({
              x: px + (Math.random() * 2 - 1) * 1.3,
              y: py + (Math.random() * 2 - 1) * 1.3,
              a: 0.32 + Math.random() * 0.34,
            });
          }
        }
      }
    }

    function spawnArc() {
      if (arcs.length > 6) return;
      const [a, b] = ROUTES[(Math.random() * ROUTES.length) | 0];
      const from = toPx(CITIES[a]);
      const to = toPx(CITIES[b]);
      const mx = (from.x + to.x) / 2;
      const my = (from.y + to.y) / 2;
      const dist = Math.hypot(to.x - from.x, to.y - from.y);
      const lift = Math.min(dist * 0.4, mapH * 0.32);
      arcs.push({
        from,
        to,
        ctrl: { x: mx, y: my - lift },
        color: COLORS[(Math.random() * COLORS.length) | 0],
        t: 0,
        speed: 0.5 + Math.random() * 0.35,
        phase: "draw",
        fade: 1,
        arrived: false,
      });
    }

    function drawDots() {
      for (const d of dots) {
        let a = d.a;
        let r = 1.1;
        if (pointer.active) {
          const dd = Math.hypot(d.x - pointer.x, d.y - pointer.y);
          if (dd < 130) {
            const boost = (1 - dd / 130) * 0.7;
            a = Math.min(1, a + boost);
            r = 1.1 + boost * 0.9;
          }
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(110,43,255,${a})`;
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawArcPath(arc: Arc, t0: number, t1: number, width: number, alpha: number) {
      const seg = 26;
      ctx.beginPath();
      for (let i = 0; i <= seg; i++) {
        const t = t0 + ((t1 - t0) * i) / seg;
        const p = qPoint(arc.from, arc.ctrl, arc.to, t);
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = arc.color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    function drawCities() {
      for (const name in CITIES) {
        const p = toPx(CITIES[name]);
        ctx.beginPath();
        ctx.fillStyle = "rgba(110,43,255,0.55)";
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function frame(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // parallax easing
      par.x += (par.tx - par.x) * 0.06;
      par.y += (par.ty - par.y) * 0.06;

      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.translate(par.x, par.y);

      drawDots();
      drawCities();

      // spawn
      spawnAcc += dt;
      if (spawnAcc > 0.7) {
        spawnAcc = 0;
        spawnArc();
      }

      for (let i = arcs.length - 1; i >= 0; i--) {
        const arc = arcs[i];
        if (arc.phase === "draw") {
          arc.t += arc.speed * dt;
          if (arc.t >= 1) {
            arc.t = 1;
            arc.phase = "fade";
            if (!arc.arrived) {
              arc.arrived = true;
              ripples.push({ x: arc.to.x, y: arc.to.y, r: 2, alpha: 0.9, color: arc.color });
            }
          }
          // faint full guide
          drawArcPath(arc, 0, 1, 1, 0.08);
          // bright drawn portion
          drawArcPath(arc, 0, arc.t, 1.6, 0.9);
          // comet head
          const head = qPoint(arc.from, arc.ctrl, arc.to, arc.t);
          ctx.beginPath();
          ctx.fillStyle = arc.color;
          ctx.shadowColor = arc.color;
          ctx.shadowBlur = 12;
          ctx.arc(head.x, head.y, 2.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          arc.fade -= dt / 1.1;
          drawArcPath(arc, 0, 1, 1.4, Math.max(0, arc.fade) * 0.7);
          if (arc.fade <= 0) arcs.splice(i, 1);
        }
        // origin node
        ctx.beginPath();
        ctx.fillStyle = arc.color;
        ctx.arc(arc.from.x, arc.from.y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.r += 34 * dt;
        r.alpha -= dt * 1.4;
        ctx.beginPath();
        ctx.strokeStyle = r.color;
        ctx.globalAlpha = Math.max(0, r.alpha);
        ctx.lineWidth = 1.4;
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
        if (r.alpha <= 0) ripples.splice(i, 1);
      }

      ctx.restore();
      raf = requestAnimationFrame(frame);
    }

    function drawStatic() {
      ctx.clearRect(0, 0, W, H);
      drawDots();
      drawCities();
      // a few static guide arcs
      for (let i = 0; i < 5; i++) {
        const [a, b] = ROUTES[i];
        const from = toPx(CITIES[a]);
        const to = toPx(CITIES[b]);
        const mx = (from.x + to.x) / 2;
        const my = (from.y + to.y) / 2;
        const dist = Math.hypot(to.x - from.x, to.y - from.y);
        arcs.length = 0;
        const arc: Arc = {
          from,
          to,
          ctrl: { x: mx, y: my - Math.min(dist * 0.4, mapH * 0.32) },
          color: COLORS[i % COLORS.length],
          t: 1,
          speed: 0,
          phase: "draw",
          fade: 1,
          arrived: true,
        };
        drawArcPath(arc, 0, 1, 1.2, 0.5);
      }
    }

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
      par.tx = ((pointer.x / W) * 2 - 1) * 10;
      par.ty = ((pointer.y / H) * 2 - 1) * 8;
    };
    const onPointerLeave = () => {
      pointer.active = false;
      pointer.x = -999;
      par.tx = 0;
      par.ty = 0;
    };

    layout();
    const ro = new ResizeObserver(() => {
      layout();
      if (reduce) drawStatic();
    });
    ro.observe(canvas);

    if (reduce) {
      drawStatic();
    } else {
      canvas.addEventListener("pointermove", onPointerMove);
      canvas.addEventListener("pointerleave", onPointerLeave);
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
