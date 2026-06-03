"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const [active, setActive] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  function handleMouseEnter() { setActive(true); }
  function handleMouseLeave() { setActive(false); }
  function handleTouchStart() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(true);
    timerRef.current = setTimeout(() => setActive(false), 3000);
  }

  const activeStyle = { filter: "grayscale(100%) brightness(0.2)", opacity: 1, transform: "scale(1.08)" };
  const defaultStyle = { filter: "grayscale(100%) brightness(1.1)", opacity: 0.55, transform: "scale(1)" };

  const inner = (
    <div
      style={active ? activeStyle : defaultStyle}
      className="flex items-center justify-center [transition:filter_0.25s_ease,opacity_0.25s_ease,transform_0.25s_ease]"
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={300}
        height={100}
        className="w-full max-w-full object-contain"
      />
    </div>
  );

  const wrapperProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onTouchStart: handleTouchStart,
  };

  if (logo.href) {
    return (
      <Link href={logo.href} target="_blank" rel="noopener noreferrer" className="outline-none" {...wrapperProps}>
        {inner}
      </Link>
    );
  }

  return <div {...wrapperProps}>{inner}</div>;
}

export function LogosCarousel() {
  const { t } = useTranslation();

  const items = logos.map((logo) => <LogoItem key={logo.src} logo={logo} />);

  return (
    <section data-navbar-theme="light" className="overflow-hidden border-y border-neutral-100 bg-[#F8F9FB] py-10">
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-neutral-400">
          {t("Hundreds of clinics already trust us")}
        </p>
      </div>
      <Carousel items={items} speed={35} gap={56} pauseOnHover fadeColor="#F8F9FB" />
    </section>
  );
}
