"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Carousel } from "@/components/shared/Carousel";
import s from "./styles/LogosCarousel.module.css";

interface LogoItem {
  src: string;
  alt: string;
  href?: string;
}

const logos: LogoItem[] = [
  { src: "/images/logo-1.svg", alt: "Ética Oral" },
  { src: "/images/logo-2.svg", alt: "Lab Echandi" },
  { src: "/images/logo-3.svg", alt: "Laboratorios Méndez" },
  { src: "/images/logo-4.svg", alt: "Urología Avanzada" },
  { src: "/images/logo-5.svg", alt: "TeraMedic" },
  { src: "/images/logo-6.svg", alt: "Neuro+" },
  { src: "/images/logo-7.svg", alt: "Centro Médico San Joaquín" },
  { src: "/images/logo-8.svg", alt: "Jackson's Memorial" },
  { src: "/images/logo-9.svg", alt: "Vallejo" },
];

function LogoItem({ logo }: { logo: LogoItem }) {
  const img = (
    <div className={s.logoWrap}>
      <Image
        src={logo.src}
        alt={logo.alt}
        width={300}
        height={100}
        className={s.logoImg}
      />
    </div>
  );

  if (logo.href) {
    return (
      <Link
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className={s.logoLink}
      >
        {img}
      </Link>
    );
  }

  return img;
}

export function LogosCarousel() {
  const { t } = useLocale();

  const items = logos.map((logo) => <LogoItem key={logo.src} logo={logo} />);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <p className={s.label}>{t.trustedBy.label}</p>
      </div>
      <Carousel items={items} speed={35} gap={56} pauseOnHover />
    </section>
  );
}
