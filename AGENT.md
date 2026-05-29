# AGENT.md — Konko.ai Conventions

This file is the source of truth for code style and tooling in this project. Follow it when generating or reviewing code.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS — **no CSS modules** |
| UI primitives | shadcn/ui (only components actually used) |
| i18n | i18next + react-i18next + i18next-scanner |
| Package manager | pnpm |

---

## Naming Patterns

- **Components** — PascalCase, named exports: `export function HeroSection()`
- **Files** — match the exported component name: `HeroSection.tsx`
- **Hooks** — `use` prefix: `useLocale`, `useScrolled`
- **Utilities** — camelCase in `lib/`
- **i18n keys** — literal English text (see i18n section below)
- **CSS classes** — Tailwind inline; `cn()` from `lib/utils` for conditionals

---

## Component Structure

```
components/
  layout/         # Navbar, Footer, ClientProviders
  sections/
    home/         # One file per page section
    about-us/
  shared/         # Reusable cross-page components (Logo, Carousel, LanguageSwitcher)
  ui/             # shadcn/ui primitives (only what is actually imported)
```

- One component per file.
- `'use client'` only when the component uses browser APIs, state, or effects.
- No barrel index files — import by exact path.

---

## Styling — Tailwind-first

- **All styles go in `className`**. No CSS modules, no CSS-in-JS, no separate `.css` files per component.
- Use `cn()` (`clsx` + `tailwind-merge`) for conditional classes:
  ```tsx
  import { cn } from '@/lib/utils';
  <div className={cn('base-class', condition && 'conditional-class')} />
  ```
- For pseudo-elements use Tailwind's `before:` / `after:` variants.
- For parent-hover affecting a child use `group` / `group-hover:`.
- Arbitrary values are fine for one-off values: `w-[700px]`, `[background:radial-gradient(...)]`.
- Custom tokens (colors, spacing, shadows, animations) live in `tailwind.config.ts` — don't hardcode design values as arbitrary strings if a token already exists.

**Custom tokens available:**

| Category | Keys |
|---|---|
| Colors | `brand-gold`, `brand-gold-light`, `brand-gold-dark`, `brand-black`, `brand-off-white`, `brand-cream` |
| Shadows | `shadow-card`, `shadow-card-sm`, `shadow-card-lg`, `shadow-card-xl`, `shadow-gold`, `shadow-gold-lg` |
| Animations | `animate-marquee`, `animate-fade-in`, `animate-fade-in-left`, `animate-fade-in-right`, `animate-scale-in`, `animate-pulse-slow`, `animate-spin-slow` |
| Backgrounds | `bg-gradient-brand`, `bg-hero-gradient`, `bg-dark-gradient` |

---

## i18n

Uses **i18next + react-i18next**. The key is the literal English text — no dot-notation keys to invent.

### In components

```tsx
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t } = useTranslation();
  return (
    <h1>{t("Manage who has access to this organization.")}</h1>
  );
}
```

### Interpolation

```tsx
t("{{count}} members with access", { count: members.length })
```

### Locale files

```
locales/
  en/translation.json   ← key === value (English)
  es/translation.json   ← key === English, value === Spanish
```

### Scanning

```bash
pnpm scan   # extracts every t() call and syncs all locale files
```

- Adds new keys to every locale file.
- Removes stale keys from all locale files (`removeUnusedKeys: true`).
- Spanish values start empty (`""`) — signal to translators.

### Language switching

```tsx
import i18next from 'i18next';
i18next.changeLanguage('es');
```

---

## ESLint & Prettier

```bash
pnpm lint        # check
pnpm lint:fix    # auto-fix
pnpm typecheck   # tsc --noEmit
pnpm check       # lint + typecheck
```

Active ESLint plugins:
- `eslint-config-next` — Next.js rules
- `@typescript-eslint` — TypeScript-aware rules
- `eslint-plugin-import` — import order + missing modules
- `eslint-plugin-unused-imports` — catch and remove unused imports

---

## Packages

Only install packages that are already used or explicitly approved. Before adding a new dependency check whether the needed functionality can be covered by packages already in `package.json`.

**Preferred packages (already installed):**

| Need | Package |
|---|---|
| Icons | `lucide-react` |
| Utilities | `clsx`, `tailwind-merge` (via `cn()`) |
| Forms | `react-hook-form` + `@hookform/resolvers` + `zod` |
| Animation | Tailwind keyframes in `tailwind.config.ts` |
| i18n | `i18next`, `react-i18next` |

---

## Scripts

| Command | Purpose |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm lint` / `pnpm lint:fix` | ESLint |
| `pnpm typecheck` | TypeScript check |
| `pnpm check` | lint + typecheck |
| `pnpm scan` | i18next-scanner — sync translation keys |
