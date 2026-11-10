# Vito Aditya — Portfolio v2

> Software Engineer & Creative Designer — *where beautiful design meets robust logic.*

Personal portfolio website inspired by the [magicuidesign/portfolio](https://github.com/magicuidesign/portfolio) template, rebuilt for **Vito Aditya** with Next.js 16, Tailwind CSS v4, and a collection of hand-written Magic UI-style components.

**Live (old):** https://vitoaditya-portfolio-2026.netlify.app/
**GitHub:** https://github.com/viesloxy

---

## ✨ Features

- **Dock navbar** — macOS-style magnifying dock (Magic UI `dock`) with tooltips for navigation, socials, and theme toggle.
- **Dark mode first** — `next-themes` with a clean oklch token system (shadcn-style), light mode included.
- **Hero** — blur-fade text reveal, rotating role ticker, avatar with orbiting social icons, animated shiny-text availability badge.
- **Tech marquee** — two opposite-direction infinite marquees with 24 real brand icons (simple-icons) + fade masks.
- **About** — markdown summary with inline links + animated number-ticker stats (GPA 3.66, 23+ repos, 2× film awards, 3+ BNSP certs).
- **Experience** — expandable accordion timeline of organization roles (HIMTI, BEM FV UNAIR, UKM Fotografi, UKM Sinematografi, TV9 Nusantara).
- **Education** — Universitas Airlangga (D4 Teknologi Informasi, 2024–2028) & SMKN 1 Mojokerto.
- **Projects** — 10 real GitHub projects with screenshots, tech badges, live-demo/source links, and an animated border-beam on the featured card.
- **Achievements** — awards & certifications grid with real photos (1st place Festival Sinemakom, UNHASY, BNSP Digital Marketer, BNSP Graphic & Multimedia Designer, Audio & Video Processing, 11+ course certificates).
- **Contact** — cobe-powered rotating globe background + multilingual "Let's work together" word rotator in 10 languages.
- **SEO ready** — dynamic metadata, generated OpenGraph image (`opengraph-image.tsx`), SVG favicon.
- **Magic UI components** (hand-implemented): `blur-fade`, `blur-fade-text`, `dock`, `flickering-grid`, `marquee`, `number-ticker`, `word-rotate`, `animated-shiny-text`, `border-beam`, `orbiting-circles`, `dot-pattern`, `globe`, `shimmer-button`.

## 🛠️ Tech Stack

| Layer      | Tech                                                        |
| ---------- | ----------------------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)                          |
| Styling    | Tailwind CSS v4 + tw-animate-css + @tailwindcss/typography  |
| Animation  | Motion (framer-motion v12)                                  |
| UI         | Radix UI (accordion, tooltip, separator, avatar, slot) + CVA|
| Icons      | Lucide React + simple-icons (local SVGs in `public/icons`)  |
| Globe      | cobe                                                        |
| Themes     | next-themes                                                 |
| Content    | react-markdown + remark-gfm                                 |

## 🚀 Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start
```

> Note: the folder name must stay lowercase for npm (`vitoaditya-portfolio` is set in `package.json`).

## ✏️ Editing Content

Everything personal lives in **one file**: [`src/data/resume.tsx`](src/data/resume.tsx) — name, bio, skills, experience, education, projects, achievements, socials, stats, and languages. Edit there and the whole site updates.

- Avatar: `public/me.jpg`
- Achievement photos: `public/images/*.jpg`
- Project screenshots: `public/images/projects/*.jpg`
- Tech brand icons: `public/icons/*.svg` (downloaded from simple-icons)
- Section labels & languages: also in `src/data/resume.tsx`

## 📁 Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout: dock navbar, flickering grid bg, theme provider, metadata
│   ├── page.tsx              # Hero, marquee, about+stats, experience, education, skills, footer
│   ├── not-found.tsx         # 404 page
│   ├── opengraph-image.tsx   # Generated OG image (next/og)
│   ├── icon.svg              # Favicon
│   └── globals.css           # Design tokens + Magic UI keyframes (Tailwind v4)
├── components/
│   ├── magicui/              # Hand-written Magic UI components
│   ├── section/              # Projects, Work, Achievements, Contact sections
│   ├── ui/                   # shadcn-style primitives (button, badge, avatar, accordion, …)
│   ├── navbar.tsx            # Dock navbar
│   ├── project-card.tsx      # Project card w/ border beam + fallback pattern
│   ├── tech-icon.tsx         # simple-icons loader
│   └── icons.tsx             # Brand SVG icons
├── data/
│   └── resume.tsx            # ⭐ ALL personal data — edit this
└── lib/
    └── utils.ts              # cn()
```

## 📄 Data Notes

Content was migrated from portfolio v1 (React/Vite) and the GitHub profile (`viesloxy`):

- LinkedIn: https://www.linkedin.com/in/vitoaditya/
- Email: vitoaditya42@gmail.com
- Resume (Google Drive): https://drive.google.com/file/d/1Bdm-hVJQkhXLvfqbIjmAOvNPF-jF0q1D/view
- Project dates are taken from each repository's creation date.
- The HIMTI start date is shown as **Feb 2025** (v1 listed "Feb 2024", which predates the 2024 college intake — assumed typo). Change it back in `resume.tsx` if needed.

## 📄 License

Design inspired by [magicuidesign/portfolio](https://github.com/magicuidesign/portfolio) (MIT). Personal content © Vito Aditya.
