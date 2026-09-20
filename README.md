# Youcef Zouaoui — Portfolio

A production-ready personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the URL that prints in your terminal (usually `http://localhost:5173`).

## Before you deploy

1. **Profile photo** — drop your photo at `public/images/profile.jpg` (see `public/images/README.txt`). The hero section will pick it up automatically and stop showing the placeholder.
2. **CV** — drop your PDF at `public/cv/Youcef-Zouaoui-CV.pdf` (see `public/cv/README.txt`). Every "Download CV" button already points there.
3. **Social links** — `src/data/content.ts` has `linkedin`, `instagram`, and `facebook` set to `null` because exact URLs weren't provided; the site falls back to search links using your handles. Add the real URLs there once you have them.
4. **Contact form** — the form is fully functional on the frontend but has no email backend yet. `src/components/Contact.tsx` has a comment showing exactly where to plug in a service like Formspree or EmailJS.
5. **Open Graph image** — `index.html` references `/images/og-cover.png` for social share previews. Add a ~1200×630 image there if you want link previews to show something other than a blank card.

Everything else — name, bio, skills, experience, project, achievements, education, career goal, contact details — is centralized in **`src/data/content.ts`**. Edit that one file to update copy anywhere on the site.

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/`. Preview it locally with `npm run preview`.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — no configuration needed. Click **Deploy**.

(Netlify, Cloudflare Pages, and GitHub Pages all work the same way — it's a static Vite build.)

## Tech stack

- React 18 + TypeScript
- Tailwind CSS (CSS-variable-driven theming for dark/light mode)
- Framer Motion (animations, respects `prefers-reduced-motion`)
- lucide-react (icons)
- Vite

## Project structure

```
src/
  components/     # One component per section (Hero, About, Skills, ...)
  data/
    content.ts    # Single source of truth for all personal content
  hooks/
    useTheme.ts         # Dark/light mode with localStorage persistence
    useActiveSection.ts # Scroll-spy for navbar highlighting
  App.tsx
  main.tsx
  index.css
```
