/* ============================================================
   AEONIQ — single source of truth for navigation & page content.
   Keeps marketing copy out of components so it's easy to edit.
   ============================================================ */

import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Plane,
  Languages,
  MessagesSquare,
  Briefcase,
  BookOpen,
  Sparkles,
  Bot,
  CalendarClock,
  Compass,
  LineChart,
  Users,
  Globe2,
  Clock,
  Route,
  Headphones,
  Mic,
  GaugeCircle,
  Trophy,
  Presentation,
  ClipboardCheck,
  Rocket,
} from "lucide-react";

export type NavLink = { label: string; href: string };
export type NavItem = { label: string; href: string; desc: string; icon: LucideIcon };
export type NavGroup = { label: string; items: NavItem[] };

/** Grouped primary navigation — rendered as animated dropdowns on desktop
 *  and an accordion on mobile. */
export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Programs",
    items: [
      { label: "English Lab", href: "/programs/english-lab", desc: "Confidence in communication", icon: MessagesSquare },
      { label: "Languages", href: "/programs/languages", desc: "French, German & Arabic", icon: Languages },
      { label: "Test Prep", href: "/programs/test-prep", desc: "IELTS, PTE, TOEFL & more", icon: Trophy },
      { label: "Skill Studio", href: "/programs/skill-studio", desc: "Career & workplace skills", icon: Briefcase },
    ],
  },
  {
    label: "Explore",
    items: [
      { label: "Learning Concierge", href: "/learning-concierge", desc: "Your personal mentor & coaching", icon: Headphones },
      { label: "Academic Pathways", href: "/academic-pathways", desc: "OSSD — study from home", icon: BookOpen },
      { label: "Bundles", href: "/bundles", desc: "Goal-based program bundles", icon: Sparkles },
    ],
  },
];

/** Top-level links with no children. */
export const NAV_SINGLE: NavLink[] = [
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

/* ---------- Section 2: What is your goal ---------- */
export type Goal = {
  title: string;
  desc: string;
  icon: LucideIcon;
  href: string;
  accent: string; // tailwind gradient stops
};

export const GOALS: Goal[] = [
  { title: "Study Abroad", desc: "Prepare for global university admissions.", icon: GraduationCap, href: "/academic-pathways", accent: "from-purple-500 to-violet" },
  { title: "Canada PR", desc: "Build language and immigration readiness.", icon: Plane, href: "/bundles", accent: "from-violet to-pink" },
  { title: "Language Learning", desc: "Master a new language for life and career.", icon: Languages, href: "/programs/languages", accent: "from-purple-500 to-pink" },
  { title: "Better English", desc: "Speak confidently in academic and professional settings.", icon: MessagesSquare, href: "/programs/english-lab", accent: "from-purple-500 to-orange" },
  { title: "Job Readiness", desc: "Develop workplace and career skills.", icon: Briefcase, href: "/programs/skill-studio", accent: "from-violet to-orange" },
  { title: "Academic Pathway", desc: "Explore OSSD and global academic opportunities.", icon: BookOpen, href: "/academic-pathways", accent: "from-purple-600 to-violet" },
];

/* ---------- Section 3: Explore programs ---------- */
export type Program = {
  title: string;
  desc: string;
  icon: LucideIcon;
  href: string;
  tags: string[];
};

export const PROGRAMS: Program[] = [
  { title: "English Lab", desc: "Build confidence in communication for life, work and study.", icon: MessagesSquare, href: "/programs/english-lab", tags: ["Spoken", "Professional", "Academic"] },
  { title: "Languages", desc: "French, German & Arabic for study, work and global mobility.", icon: Languages, href: "/programs/languages", tags: ["French", "German", "Arabic"] },
  { title: "Test Prep", desc: "IELTS, PTE, CELPIP, TOEFL & Duolingo — built around outcomes.", icon: Trophy, href: "/programs/test-prep", tags: ["IELTS", "PTE", "TOEFL"] },
  { title: "Skill Studio", desc: "Career and workplace skills that prepare you for tomorrow.", icon: Briefcase, href: "/programs/skill-studio", tags: ["Career", "Google Suite", "Biz Tech"] },
  { title: "Learning Concierge", desc: "Personalized coaching, mentoring and dedicated support.", icon: Headphones, href: "/learning-concierge", tags: ["1-on-1", "Roadmaps", "Mentoring"] },
];

/* ---------- Section 4: Featured bundles ---------- */
export type Bundle = {
  name: string;
  for: string;
  courses: string[];
  outcome: string;
  savings: string;
  accent: string;
};

export const BUNDLES: Bundle[] = [
  {
    name: "Canada PR Bundle",
    for: "Express Entry & PR aspirants targeting higher CRS scores.",
    courses: ["IELTS / CELPIP", "French for TEF", "Career Essentials"],
    outcome: "Test-ready English + bonus French points for immigration.",
    savings: "Save up to 25%",
    accent: "from-purple-500 to-violet",
  },
  {
    name: "France PR Bundle",
    for: "Movers building French proficiency for TEF / TCF.",
    courses: ["French A1–B2", "TEF / TCF Prep", "Speaking Practice Club"],
    outcome: "Conversational + exam-ready French for relocation.",
    savings: "Save up to 22%",
    accent: "from-violet to-pink",
  },
  {
    name: "Germany Job Seeker Bundle",
    for: "Professionals headed to German employers & universities.",
    courses: ["German A1–B1", "Interview English", "Career Essentials"],
    outcome: "Job-seeker-visa-ready German plus interview polish.",
    savings: "Save up to 20%",
    accent: "from-purple-600 to-orange",
  },
  {
    name: "USA Graduate School Bundle",
    for: "Applicants to US graduate programs.",
    courses: ["TOEFL / IELTS", "Academic English", "Presentation English"],
    outcome: "Admission-ready scores and academic communication.",
    savings: "Save up to 20%",
    accent: "from-purple-500 to-pink",
  },
  {
    name: "Global Career Bundle",
    for: "Professionals building a future-ready, worldwide profile.",
    courses: ["Professional English", "Skill Catalyst", "Google Suite Hub"],
    outcome: "Communication + productivity skills for global roles.",
    savings: "Save up to 18%",
    accent: "from-violet to-orange",
  },
];

/* ---------- Section 5: Why AEONIQ ---------- */
export type Feature = { title: string; desc: string; icon: LucideIcon };

export const WHY: Feature[] = [
  { title: "Live Interactive Classes", desc: "Learn with expert trainers in real time.", icon: Presentation },
  { title: "AI Learning Support", desc: "Personalized learning assistance, always on.", icon: Bot },
  { title: "Progress Tracking", desc: "Monitor improvement toward your goal.", icon: LineChart },
  { title: "Flexible Learning", desc: "Study anywhere, at your own pace.", icon: Clock },
  { title: "Structured Learning Paths", desc: "Goal-based roadmaps, step by step.", icon: Route },
  { title: "Learning Concierge", desc: "A dedicated mentor in your corner.", icon: Headphones },
];

/* ---------- Section 6: Real results ---------- */
export const RESULTS = [
  { value: 8.0, suffix: "+", label: "IELTS Band Achieved", plus: false },
  { value: 79, suffix: "+", label: "PTE Score Reached", plus: false },
  { value: 100, suffix: "%", label: "TEF Success Focus", plus: false },
  { value: 40, suffix: "+", label: "University Admissions", plus: true },
];

export const RESULT_TAGS = [
  "IELTS 8.0+",
  "PTE 79+",
  "TEF Success",
  "University Admissions",
  "Canada PR Journeys",
  "German University Pathways",
];

/* ---------- Section 7: Learning experience timeline ---------- */
export type Step = { title: string; desc: string; icon: LucideIcon };

export const EXPERIENCE: Step[] = [
  { title: "Discover", desc: "Find the right pathway for your goal.", icon: Compass },
  { title: "Learn", desc: "Attend live and recorded expert classes.", icon: BookOpen },
  { title: "Practice", desc: "Assignments, drills and mock assessments.", icon: ClipboardCheck },
  { title: "Improve", desc: "Personalized feedback and mentoring.", icon: LineChart },
  { title: "Achieve", desc: "Reach your target score or milestone.", icon: Trophy },
];

/* ---------- Section 8: AI-powered learning ---------- */
export const AI_FEATURES: Feature[] = [
  { title: "AI Speaking Partner", desc: "Practice real conversations, anytime.", icon: Mic },
  { title: "AI Study Planner", desc: "Personalized schedules that adapt to you.", icon: CalendarClock },
  { title: "AI Goal Recommender", desc: "Find the right learning pathway instantly.", icon: Compass },
  { title: "AI Progress Dashboard", desc: "Track growth across every skill.", icon: GaugeCircle },
];

/* ---------- Hero trust strip ---------- */
export const TRUST_STRIP = [
  { icon: Globe2, label: "Learn from Anywhere" },
  { icon: Route, label: "Goal-Focused Learning" },
  { icon: BookOpen, label: "Practice. Improve. Achieve." },
  { icon: Rocket, label: "Your Future. Our Mission." },
];

export const HERO_CHIPS = [
  "IELTS", "PTE", "Duolingo", "TOEFL", "CELPIP", "French",
  "German", "Spoken English", "Career Essentials", "Arabic (Soon)",
];

export const FEATURE_CARDS = [
  { icon: Presentation, label: "Live & Interactive Classes" },
  { icon: Users, label: "Expert Mentors" },
  { icon: Globe2, label: "Global Learning Network" },
  { icon: Clock, label: "Flexible Learning Anytime" },
];

export const LANG_ICONS = ["EN", "FR", "DE", "عربي", "PTE", "IELTS"];

/* ---------- Shared: program page detail data ---------- */
export const ENGLISH_LAB_COURSES = [
  { title: "Spoken English for Confidence", desc: "Speak naturally and confidently in everyday life.", icon: MessagesSquare },
  { title: "Professional English for Work", desc: "Business communication and workplace English.", icon: Briefcase },
  { title: "Interview & Presentation English", desc: "Ace interviews and high-stakes presentations.", icon: Presentation },
  { title: "Academic English for Study Abroad", desc: "University-focused reading, writing and speaking.", icon: GraduationCap },
  { title: "English Foundation for IELTS / PTE", desc: "Build the language base needed for test success.", icon: BookOpen },
];

export const LANGUAGES = [
  {
    name: "French",
    greeting: "Bonjour",
    tagline: "French for Canada PR, Study Abroad & Global Careers.",
    highlights: ["TEF", "TCF", "Canada PR", "French-speaking careers"],
    icon: Languages,
  },
  {
    name: "German",
    greeting: "Willkommen",
    tagline: "German for Study, Work & Career Growth.",
    highlights: ["German universities", "German employers", "Job-seeker pathways"],
    icon: Languages,
  },
  {
    name: "Arabic",
    greeting: "مرحباً",
    tagline: "Arabic for Communication, Business & Cultural Understanding.",
    highlights: ["Conversational", "Business Arabic", "Cultural fluency"],
    icon: Languages,
  },
];

export const TEST_PREP = [
  {
    code: "IELTS",
    who: "Study-abroad & migration aspirants.",
    features: ["Academic & General", "Band-boost strategy", "Live speaking mocks"],
    plan: "8-week structured plan",
    outcome: "Target Band 7.0 – 8.0+",
  },
  {
    code: "PTE",
    who: "Fast-track visa & admission candidates.",
    features: ["AI-scored practice", "Template mastery", "Fluency drills"],
    plan: "6-week intensive plan",
    outcome: "Target 79+ (Superior)",
  },
  {
    code: "Duolingo",
    who: "Applicants needing a quick, at-home test.",
    features: ["Adaptive practice", "Speaking & writing focus", "Rapid feedback"],
    plan: "4-week sprint plan",
    outcome: "Target 120 – 140+",
  },
  {
    code: "CELPIP",
    who: "Canada PR & citizenship candidates.",
    features: ["Canadian-context tasks", "Listening accuracy", "Timed writing"],
    plan: "6-week structured plan",
    outcome: "Target CLB 9+",
  },
  {
    code: "TOEFL",
    who: "US & global university applicants.",
    features: ["Integrated tasks", "Note-taking systems", "Academic vocabulary"],
    plan: "8-week structured plan",
    outcome: "Target 100+ / 120",
  },
];

export const SKILL_STUDIO = [
  { title: "Career Essentials", desc: "Workplace readiness — communication, etiquette and productivity.", icon: Briefcase },
  { title: "Google Suite Hub", desc: "Master Docs, Sheets, Slides and collaboration tools.", icon: Sparkles },
  { title: "Bizz Tech", desc: "Practical business technology and digital fluency.", icon: GaugeCircle },
  { title: "Skill Catalyst", desc: "Hands-on career acceleration and project skills.", icon: Rocket },
];

export const CONCIERGE_PACKS = [
  { title: "Self Prep + Live Practice Pack", desc: "Structured self-study paired with live practice sessions.", icon: Route },
  { title: "IELTS Writing Correction Pack", desc: "Expert, detailed corrections with model rewrites.", icon: ClipboardCheck },
  { title: "Speaking Practice Club", desc: "Small-group speaking rooms with a mentor.", icon: Mic },
  { title: "Vocabulary Bootcamp", desc: "Systematic vocabulary building for real fluency.", icon: BookOpen },
];

/* ---------- Featured programs (home Section) ---------- */
export const FEATURED_PROGRAMS = [
  { title: "IELTS Champion Program", desc: "Comprehensive preparation for international education and migration.", duration: "8 weeks", mode: "Live + Recorded", level: "All levels", icon: Trophy },
  { title: "PTE Success Program", desc: "Focused training to maximize your performance and confidence.", duration: "6 weeks", mode: "Live + AI Practice", level: "All levels", icon: GaugeCircle },
  { title: "Spoken English Accelerator", desc: "Build fluency, confidence and real-world communication.", duration: "10 weeks", mode: "Live", level: "Beginner – Intermediate", icon: MessagesSquare },
  { title: "French Foundations", desc: "Practical language skills for education, work and mobility.", duration: "12 weeks", mode: "Live + Recorded", level: "Beginner", icon: Languages },
  { title: "German Pathway", desc: "Learn German through structured, interactive experiences.", duration: "12 weeks", mode: "Live", level: "Beginner – A2", icon: Languages },
  { title: "Career Essentials Bootcamp", desc: "Workplace communication, productivity and professional skills.", duration: "6 weeks", mode: "Live + Projects", level: "All levels", icon: Briefcase },
];

/* ---------- Resources ---------- */
export const RESOURCES = [
  { tag: "IELTS", title: "How to Cross Band 7 in Writing Task 2", read: "6 min read" },
  { tag: "PTE", title: "PTE Speaking: Templates That Actually Work", read: "5 min read" },
  { tag: "French", title: "A Beginner's Roadmap to TEF for Canada PR", read: "7 min read" },
  { tag: "Study Abroad", title: "Choosing Between IELTS, PTE and TOEFL", read: "8 min read" },
  { tag: "German", title: "From Zero to A1: Your First 30 Days of German", read: "6 min read" },
  { tag: "Careers", title: "Interview English: 10 Phrases That Signal Confidence", read: "4 min read" },
];

/* ---------- OSSD ---------- */
export const OSSD_FAQ = [
  { q: "What is OSSD?", a: "The Ontario Secondary School Diploma — a globally recognized Canadian high-school credential you can earn online from home." },
  { q: "Who is it for?", a: "Students aiming for admission to Canadian and international universities without traditional board-exam pressure." },
  { q: "University opportunities", a: "OSSD graduates apply directly to top universities in Canada, the US, UK, Australia and beyond." },
  { q: "Counselling support", a: "Dedicated academic counsellors guide course selection, credits and university applications." },
  { q: "Parent guidance", a: "Clear progress reporting and regular check-ins keep parents informed at every step." },
];
