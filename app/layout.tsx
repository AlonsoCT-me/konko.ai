import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ClientProviders } from "@/components/layout/ClientProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://konko.ai"),
  title: {
    default: "Konko.ai — IA para clínicas en Latam | Más citas, mejor atención",
    template: "%s | Konko.ai",
  },
  description:
    "Kora, la asistente IA de Konko, transforma tu clínica: agenda citas 24/7 por WhatsApp, fideliza pacientes y reduce la carga operativa de tu equipo. Partner oficial de Meta.",
  keywords: [
    "IA para clínicas",
    "asistente IA médica",
    "WhatsApp para clínicas",
    "agendamiento automático",
    "Kora IA",
    "salud Latam",
    "clínica digital",
    "automatización médica",
  ],
  authors: [{ name: "Konko.ai" }],
  creator: "Konko.ai",
  publisher: "Konko.ai",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_419",
    url: "https://konko.ai",
    siteName: "Konko.ai",
    title: "Konko.ai — IA para clínicas en Latam | Más citas, mejor atención",
    description:
      "Kora, la asistente IA de Konko, transforma tu clínica: agenda citas 24/7 por WhatsApp, fideliza pacientes y reduce la carga operativa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Konko.ai — IA para clínicas en Latam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Konko.ai — IA para clínicas en Latam",
    description:
      "Kora agenda citas 24/7 por WhatsApp, fideliza pacientes y transforma tu clínica.",
    images: ["/og-image.jpg"],
    creator: "@konkoai",
  },
  alternates: {
    canonical: "https://konko.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Konko.ai",
              url: "https://konko.ai",
              logo: "https://konko.ai/logo.png",
              description:
                "Asistente IA para clínicas en Latinoamérica. Agenda citas 24/7 por WhatsApp.",
              sameAs: [
                "https://twitter.com/konkoai",
                "https://linkedin.com/company/konkoai",
                "https://instagram.com/konkoai",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                availableLanguage: "Spanish",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ClientProviders>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
