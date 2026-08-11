# FALAK — Youth for Physics

The public website for FALAK, YFP's student-run aerospace and engineering
program. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and
Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # production build
npm run start   # run the production build locally (run `build` first)
npm run lint    # ESLint
```

## Deploying to Vercel

This project needs no special configuration for Vercel:

1. Push this repository to GitHub (or GitLab/Bitbucket)
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel auto-detects Next.js — leave the default build settings as-is
4. Deploy

No environment variables are required for the current build (the Join and
Contact forms are front-end only for now — see "Wiring up the forms" below).

## Project structure

```
app/
  layout.tsx              Root layout: fonts, header, footer, motion provider
  page.tsx                Home
  about/page.tsx           About
  programs/page.tsx        Programs (3 pillars)
  projects/page.tsx        Projects grid, with pillar filtering
  projects/[slug]/page.tsx Dynamic project detail page
  join/page.tsx             Join
  contact/page.tsx          Contact
  globals.css               Design tokens, fonts, base styles

components/                 Shared UI: Header, Footer, Card, Timeline,
                             TeamCard, ProjectCard, OrbitArc, etc.

lib/
  projects.ts               Project data — add a new project here and its
                             detail page + grid card are generated automatically
  programs.ts                Program pillar data

public/images/               Image assets (see "Images" below)
```

## Content you'll likely want to edit first

- **`lib/projects.ts`** — add, edit, or remove projects here. Each entry
  automatically gets a grid card on `/projects` and a full detail page at
  `/projects/[slug]` — no other file needs to change.
- **`lib/programs.ts`** — the three program pillar descriptions shown on
  `/programs`.
- **`app/about/page.tsx`** — the `MILESTONES` and `TEAM` arrays near the top
  of the file.
- **`components/Footer.tsx`** and **`app/contact/page.tsx`** — contact email,
  social links, and location text (currently placeholders).

## Logos

- **Youth for Physics**: the real YFP logo is already in place at
  `public/images/yfp-logo.png` (background already made transparent), and
  wired into the header badge, About page, and footer via
  `components/Logo.tsx`.
- **FALAK**: no FALAK logo file was supplied yet, so `components/Logo.tsx`
  currently renders a typographic placeholder wordmark (a ring mark + "FALAK"
  in the site's display type) instead. Once a real logo file exists:
  1. Drop it into `public/images/falak-logo.png`
  2. In `components/Logo.tsx`, replace the `<FalakLogo>` mark/wordmark
     `<span>` elements with an `<Image src="/images/falak-logo.png" ... />`,
     following the same pattern already used for `YfpMark`
  3. If the supplied file has a white or solid background that clashes with
     the site's dark sections, remove that background first (an image
     editor, or a tool like `rembg`, works well) — the same treatment
     already applied to the YFP logo.

## Images

Every photo/render on the site is currently a labeled placeholder
(`components/PlaceholderImage.tsx`) rather than a broken image, so every page
reads correctly before real photography exists. Each placeholder shows the
exact file path it expects (e.g. `/images/projects/stingray-hero.jpg`).

To swap in a real image once you have one:
1. Drop the file into `public/images/...` at the path shown in the
   placeholder label
2. Replace the `<PlaceholderImage ... />` call with
   `<Image src="..." alt="..." fill className="object-cover" />` (wrap in a
   `position: relative` container, which the existing placeholder's aspect
   -ratio wrapper already provides)

## Wiring up the forms (Join + Contact)

Both `components/JoinForm.tsx` and `components/ContactForm.tsx` are front-end
only right now — submitting shows a success state but doesn't send anywhere.
Each file has a comment block at the top with the exact 3-step change needed
to point it at a real backend (e.g. [Formspree](https://formspree.io)):
create a form endpoint, then swap the simulated `setTimeout` in
`handleSubmit` for a real `fetch()` call. Field names (`name`, `email`,
`interest`/`message`) are already written to match what most form backends
expect, so no restructuring is needed beyond that.

## Design system

- **Colors**: deep space navy/indigo base, a burnt-copper accent, warm paper
  white for light editorial sections. Full token list in
  `tailwind.config.ts` under `theme.extend.colors`.
- **Type**: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono
  (labels/specs/data). Self-hosted via `@fontsource` packages rather than
  Google Fonts' CDN — no external font requests at runtime.
- **Signature motif**: an orbital arc, referencing "Falak" (فلك), the
  classical Arabic word for a celestial orbit. Most visible in the About
  page's milestone timeline, which plots history along a shallow arc rather
  than a straight line (`components/Timeline.tsx`), and collapses to a plain
  vertical line on mobile.
- **Motion**: a single restrained fade-up-on-scroll used consistently
  (`components/FadeIn.tsx`), rather than a different effect per section. The
  whole app is wrapped in Framer Motion's `MotionConfig` (see
  `components/MotionProvider.tsx`) so this — and any future animation built
  with Framer Motion — automatically respects a user's OS-level "reduce
  motion" setting.

## Notes on a few open questions from the brief

- **Team roster**: only Elie El Khoury (President) and Salim Rizkallah
  (Co-President) were specified. Two additional "Open Role" placeholder
  cards are shown on the About page — edit the `TEAM` array in
  `app/about/page.tsx` as more members are confirmed.
- **Brand colors**: none were specified beyond "navy/space blue... one clean
  accent," so a full palette was chosen freely — see "Design system" above.
  All of it lives in `tailwind.config.ts` and is easy to adjust in one place.
- **Forms**: kept front-end only, per the brief, structured for easy backend
  wiring later (see above).

## Dependency maintenance note

This project pins `next@14.2.35` — the latest patched release in the 14.x
line, which resolves a critical RCE advisory that affected earlier 14.2.x
versions. `npm audit` will still flag a number of broader Next.js advisories
that only affect self-hosted deployments using custom servers, Server
Actions, or Pages Router i18n — none of which this project uses (forms are
front-end only, no custom server, App Router throughout). Fixing those
would require a breaking Next 15/16 + React 19 migration, which wasn't made
here without a deliberate decision to do so. Worth planning that upgrade
consciously at some point rather than indefinitely staying on the 14.x line.
