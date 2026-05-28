# konko.ai

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-muhzqc8l)

AI-powered assistant platform for healthcare clinics across Latin America. Kora handles patient scheduling, follow-ups, and communication via WhatsApp — so clinic staff can focus on care.

## Features

- **Kora AI Assistant** — 24/7 WhatsApp bot that schedules appointments, answers patient questions, and sends personalized reminders
- **127+ Medical Specialties** — trained to understand the context of each specialty and the Latin American medical landscape
- **Meta Business Partner** — built on the official WhatsApp Business API (99.9% uptime, no number bans)
- **Analytics Dashboard** — real-time visibility into consultations, conversations, and clinic performance
- **Security** — SOC 2, GDPR, ISO 27001, HL7/FHIR compliant; AES-256 encryption; no patient data used for model training
- **i18n** — English and Spanish support out of the box

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 13](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + Radix UI |
| Icons | Lucide React |
| Backend/Auth | Supabase |
| Forms | React Hook Form + Zod |
| Deployment | Netlify (`@netlify/plugin-nextjs`) |

## Getting Started

### Prerequisites

- Node.js 22+
- npm or pnpm

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The root `/` redirects to `/home`.

### Build

```bash
npm run build
npm run start
```

### Lint & Type-check

```bash
npm run lint
npm run typecheck
```

## Project Structure

```text
├── app/
│   ├── home/           # Main landing page
│   ├── about-us/       # About Us page
│   ├── layout.tsx      # Root layout with providers
│   └── page.tsx        # Root redirect → /home
├── components/
│   ├── layout/         # Navbar, Footer, ClientProviders
│   ├── sections/       # Page sections (Hero, MeetKora, Security, …)
│   ├── shared/         # Reusable pieces (Logo, LanguageSwitcher)
│   └── ui/             # shadcn/ui primitives
├── lib/
│   ├── i18n.ts         # Locale loader
│   └── locale-context.tsx
├── locales/
│   ├── en/             # English translations
│   └── es/             # Spanish translations
└── netlify.toml        # Netlify deployment config
```

## Deployment

The project is configured for Netlify. Push to your connected branch and Netlify will run `npx next build` automatically.

## About Konko

Founded in 2019 in Costa Rica, Konko.ai's mission is to give back time and simplicity to every clinic, so teams can focus on what matters most: the patient. The platform currently processes 2,000,000+ messages per month across 15 countries in Latin America.
