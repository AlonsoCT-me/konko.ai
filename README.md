# konko.ai

AI-powered assistant platform for healthcare clinics across Latin America. Kora handles patient scheduling, follow-ups, and communication via WhatsApp — so clinic staff can focus on care.

---

## Features

- **Kora AI Assistant** — 24/7 WhatsApp bot that schedules appointments, answers patient questions, and sends personalized reminders
- **127+ Medical Specialties** — trained to understand the context of each specialty and the Latin American medical landscape
- **Meta Business Partner** — built on the official WhatsApp Business API (99.9% uptime, no number bans)
- **Analytics Dashboard** — real-time visibility into consultations, conversations, and clinic performance
- **Security** — SOC 2, GDPR, ISO 27001, HL7/FHIR compliant; AES-256 encryption; no patient data used for model training
- **i18n** — English and Spanish support out of the box

---

## Tech Stack

| Layer           | Technology                 |
| --------------- | -------------------------- |
| Framework       | Next.js 15 (App Router)    |
| Language        | TypeScript                 |
| Styling         | Tailwind CSS + CSS Modules |
| UI Components   | shadcn/ui + Radix UI       |
| Icons           | Lucide React               |
| Backend/Auth    | Supabase                   |
| Forms           | React Hook Form + Zod      |
| Deployment      | Netlify                    |
| Package Manager | pnpm                       |

---

## Requirements

- Node.js 21+
- pnpm 10+

---

## Installation

```bash
pnpm install
```

---

## Development

```bash
pnpm dev
```

Open:

```txt
http://localhost:3000
```

---

## Available Scripts

| Command          | Description                              |
| ---------------- | ---------------------------------------- |
| `pnpm dev`       | Start development server                 |
| `pnpm build`     | Create production build                  |
| `pnpm start`     | Run production server                    |
| `pnpm lint`      | Run ESLint                               |
| `pnpm lint:fix`  | Auto-fix ESLint issues                   |
| `pnpm typecheck` | Run TypeScript checks                    |
| `pnpm check`     | Run lint + typecheck                     |
| `pnpm clean`     | Remove `.next` cache                     |
| `pnpm reset`     | Full reinstall (node_modules + lockfile) |

---

## Recommended VSCode Extensions

- Tailwind CSS IntelliSense
- ESLint
- Prettier
- PostCSS Language Support
- CSS Modules IntelliSense

---

## Project Structure

```txt
├── app/
├── components/
├── lib/
├── locales/
├── public/
├── styles/
├── netlify.toml
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

---

## Notes

### Package Manager

This project uses:

```txt
pnpm
```

Do not mix:

- npm
- yarn
- pnpm

---

### Native Dependencies

The project uses native packages such as:

- sharp
- unrs-resolver

The repository includes an `.npmrc` configured for pnpm builds.

---

## Deployment

Configured for Netlify.

Production build:

```bash
pnpm build
```

---

## About Konko

Founded in 2019 in Costa Rica, Konko.ai's mission is to give back time and simplicity to every clinic, so teams can focus on what matters most: the patient.
