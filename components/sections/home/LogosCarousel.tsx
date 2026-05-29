"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Carousel } from "@/components/shared/Carousel";

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
    <div className="flex items-center justify-center [filter:grayscale(100%)_brightness(1.1)] [opacity:0.55] [transition:filter_0.25s_ease,opacity_0.25s_ease,transform_0.25s_ease] group-hover:[filter:grayscale(100%)_brightness(0.2)] group-hover:opacity-100 group-hover:scale-[1.08]">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={300}
        height={100}
        className="w-full max-w-full object-contain"
      />
    </div>
  );

  if (logo.href) {
    return (
      <Link
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group outline-none focus-visible:[&>div]:[filter:grayscale(100%)_brightness(0.2)] focus-visible:[&>div]:opacity-100 focus-visible:[&>div]:scale-[1.08]"
      >
        {img}
      </Link>
    );
  }

  return <div className="group">{img}</div>;
}

export function LogosCarousel() {
  const { t } = useTranslation();

  const items = logos.map((logo) => <LogoItem key={logo.src} logo={logo} />);

  return (
    <section className="overflow-hidden border-y border-neutral-100 bg-white py-10">
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-neutral-400">
          {t("Hundreds of clinics already trust us")}
        </p>
      </div>
      <Carousel items={items} speed={35} gap={56} pauseOnHover />
    </section>
  );
}
