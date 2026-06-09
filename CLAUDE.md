# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Type-check (tsc -b) then Vite production build
npm run lint       # ESLint validation
npm run preview    # Preview production build locally
```

There are no tests. The build command runs TypeScript type checking — always run `npm run build` to verify changes are type-safe before pushing.

## Architecture

Single-page portfolio built with Vite + React + TypeScript, deployed on Vercel.

**Page sections** (`src/components/`) are rendered in order in `src/App.tsx`: `Nav → Hero → Work → Projects → About → Posts → Contact`. Each component has a co-located CSS Module (e.g. `Hero.module.css`).

**Animations** (`src/lib/motion.ts`) — two reusable Framer Motion variants:
- `fadeUp` — fade in + slide up (0.9s)
- `stagger(delay?)` — staggers children 0.15s apart

All animated sections use `whileInView` with `viewport={{ once: true, amount: 0.1 }}`. `App.tsx` wraps everything in `<MotionConfig reducedMotion="user">` to respect `prefers-reduced-motion`.

**Theming** — `useTheme()` hook (`src/hooks/useTheme.ts`) toggles `[data-theme="dark"]` on `<html>` and persists to localStorage. Dark mode overrides only the semantic tokens.

**Substack posts** — fetched at build time by the custom Vite plugin (`src/plugins/substack.ts`), exposed as a virtual module: `import { posts } from 'virtual:substack-posts'`. Not fetched at runtime.

## Design Tokens

All styles use semantic CSS custom properties defined in `src/tokens.css`. Global resets and base styles live in `src/global.css`. Never use raw color values, font sizes, or font weights directly in components — always use tokens.

### Color

| Token | Purpose |
|---|---|
| `--color-surface` | Page/card background |
| `--color-surface-overlay` | Semi-transparent overlay |
| `--color-text` | Primary text |
| `--color-text-subtle` | Secondary/muted text |
| `--color-accent` | Interactive elements (orange) |
| `--color-border` | Dividers |

### Typography

| Token | Size | Weight | Usage |
|---|---|---|---|
| `--font-size-display` / `--font-weight-display` | fluid 56–120px | 900 | Hero heading |
| `--font-size-heading-1` / `--font-weight-heading-1` | fluid 48–104px | 900 | Section display headings |
| `--font-size-heading-2` / `--font-weight-heading-2` | fluid 32–56px | 800 | Company names |
| `--font-size-heading-3` / `--font-weight-heading-3` | fluid 32–52px | 700 | Page titles |
| `--font-size-heading-4` / `--font-weight-heading-4` | fluid 22–32px | 700 | Sub-section headings |
| `--font-size-heading-5` / `--font-weight-heading-5` | 20px | 700 | Card titles |
| `--font-size-heading-6` / `--font-weight-heading-6` | 18px | 600 | Small headings |
| `--font-size-subtitle` / `--font-weight-subtitle` | fluid 15–18px | 600 | Post titles |
| `--font-size-body-lg` | fluid 16–20px | — | Hero subtitle |
| `--font-size-body` | 16px | — | Standard body |
| `--font-size-body-sm` | 15px | — | Smaller body |
| `--font-weight-body` | — | 400 | Body text weight |
| `--font-size-caption` / `--font-weight-caption` | 14px | 600 | Nav, buttons, CTAs |
| `--font-size-caption-sm` | 13px | — | Small captions, links |
| `--font-size-label` / `--font-weight-label` | 12px | 500 | Meta, tags |
| `--font-size-overline` / `--font-weight-overline` | 11px | 700 | Section labels |
| `--font-family` | Inter, system-ui | — | Font stack |

## Accessibility Conventions

- Decorative icons use `aria-hidden="true"`
- External links include a visually hidden `<span className="sr-only">(opens in new tab)</span>`
- Section headings use `id` attributes; sections use `aria-labelledby` pointing to them
- Scroll margin on sections is `88px` to account for the fixed nav (`WCAG 2.4.11`)
- Focus indicators: `2px solid var(--color-accent)`

## Workflow

- Working branch: `claude/create-portfolio-site-7JrXV` | Main: `main`
- After every `git push`, open a PR with `gh pr create`
- Never include Claude Code session URLs in commit messages or PR descriptions
