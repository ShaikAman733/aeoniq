# AEONIQ Learning — Website

> Smarter Learning. Limitless Future.

A goal-focused learning platform marketing site — premium, animated and
mobile-first. Built to the AEONIQ brand brief: **70% premium (Apple + Stripe),
20% Gen Z energy (BoomPanda), 10% gamification (Duolingo).**

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-first `@theme` tokens in `src/app/globals.css`)
- **motion** (Framer Motion) for scroll reveals, counters and micro-interactions
- **lucide-react** for icons (no emoji icons)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Brand system

| Token | Value |
|-------|-------|
| Primary Purple | `#6E2BFF` |
| Secondary Purple | `#A855F7` |
| Orange | `#FF7A00` |
| Pink | `#FF4FD8` |
| Background | `#F8F7FF` |
| Dark | `#0B0B12` |
| Headings | Space Grotesk |
| Body | Inter |

All tokens live in `@theme` inside `src/app/globals.css` and are consumed as
Tailwind utilities (`bg-purple`, `text-gradient`, `bg-brand-gradient`, …).

## Structure

```
src/
  app/
    layout.tsx                # fonts, metadata, Navbar + Footer shell
    page.tsx                  # Home (11 composed sections)
    programs/
      english-lab/            # English Lab
      languages/              # French · German · Arabic
      test-prep/              # IELTS · PTE · Duolingo · CELPIP · TOEFL
      skill-studio/           # Career skills
    learning-concierge/       # Premium dark vertical
    academic-pathways/        # OSSD (separate vertical)
    bundles/                  # Goal bundles
    resources/                # Resources & insights
    about/                    # About
    book-assessment/          # Conversion hub + form
  components/
    brand/Logo.tsx            # Inline SVG "AQ" monogram + wordmark
    layout/                   # Navbar (glass pill), Footer
    ui/                       # Button, Reveal, Counter, SectionHeading, PageHero, CtaBand
    home/                     # One component per homepage section
    forms/AssessmentForm.tsx  # Accessible booking form (front-end demo)
  lib/
    content.ts                # Single source of truth for nav + copy
    utils.ts                  # cn() class merge
```

## Content

All marketing copy, nav links, programs, bundles and results live in
`src/lib/content.ts` — edit there, not in components.

## Notes

- `AssessmentForm` simulates submission on the front end. Wire `handleSubmit`
  to your CRM / API endpoint when ready.
- Every animation respects `prefers-reduced-motion`.
- Fully responsive at 375 / 768 / 1024 / 1440 px.
