"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function RevolutionSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const testimonials = [
    {
      image: "/images/doctor-clinical.jpg",
      logo: "/images/urologia-avanzada.svg",
      quote: t("testimonial_1_quote"),
      name: t("testimonial_1_name"),
      role: t("testimonial_1_role"),
    },
    {
      image: "/images/san-rafael-doctor.png",
      logo: "/images/logo-san-joaquin.png",
      logoSize: 84,
      objectPosition: "53% center",
      quote: t("testimonial_2_quote"),
      name: t("testimonial_2_name"),
      role: t("testimonial_2_role"),
    },
    {
      image: "/images/vallejo-doctor.png",
      logo: "/images/logo-vallejo.png",
      logoSize: 84,
      quote: t("testimonial_3_quote"),
      name: t("testimonial_3_name"),
      role: t("testimonial_3_role"),
    },
  ];

  const hasMultipleTestimonials = testimonials.length > 1;

  return (
    <section data-navbar-theme="light" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#DED9C8_1.2px,transparent_1.2px)] opacity-70 [background-size:28px_28px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-12">
          <h2 className="relative inline-block max-w-[780px] text-[40px] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-950 md:text-[48px] lg:text-[48px]">
            {t("The healthcare revolution in Latam")}
            <span className="absolute -bottom-2 left-[60px] hidden h-[10px] w-[240px] bg-[url('/images/gold-underline.svg')] bg-contain bg-no-repeat md:block" />
          </h2>

          <p className="mt-4 text-[24px] leading-tight tracking-[-0.03em] text-neutral-500 md:text-[28px]">
            {t("Told by its true protagonists")}
          </p>
        </div>

        {/* Desktop accordion */}
        <div className="hidden h-[550px] gap-5 lg:flex">
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={item.name}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(0)}
                className={`relative overflow-hidden rounded-[24px] transition-all duration-700 ease-in-out ${
                  hasMultipleTestimonials
                    ? isActive
                      ? "flex-[3.2]"
                      : "flex-1"
                    : "flex-1"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${isActive ? "scale-105" : "scale-100"}`}
                  style={{
                    objectPosition:
                      "objectPosition" in item ? item.objectPosition : "center",
                  }}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                <div
                  className={`absolute inset-x-0 bottom-0 z-10 p-7 text-white ${
                    isActive || !hasMultipleTestimonials
                      ? "opacity-100 transition-opacity delay-200 duration-500"
                      : "opacity-0 transition-opacity duration-200"
                  }`}
                >
                  <p className="max-w-[520px] text-[18px] italic leading-[1.35]">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-5 flex items-center gap-5">
                    <div>
                      <p className="text-base font-semibold">{item.name}</p>
                      <p className="text-sm text-white/90">{item.role}</p>
                    </div>

                    <Image
                      src={item.logo}
                      alt=""
                      width={"logoSize" in item ? item.logoSize : 120}
                      height={"logoSize" in item ? item.logoSize : 48}
                      className="h-auto object-contain"
                      style={{
                        maxWidth: "logoSize" in item ? item.logoSize : 120,
                      }}
                    />
                  </div>

                  <Link
                    href="#demo"
                    className="mt-5 inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-brand-gold"
                  >
                    {t("Know story")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {hasMultipleTestimonials && !isActive && (
                  <div className="absolute inset-0 bg-black/15 transition-opacity duration-500" />
                )}
              </article>
            );
          })}
        </div>

        {/* Mobile stacked cards */}
        <div className="flex flex-col gap-6 lg:hidden">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="relative min-h-[640px] overflow-hidden rounded-[20px]"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
                <p className="text-[18px] font-light leading-[1.2]">
                  “{item.quote}”
                </p>

                <div className="mt-6 flex flex-col gap-1">
                  <div>
                    <p className="text-[18px] font-bold leading-4">
                      {item.name}
                    </p>
                    <p className="mt-1 text-[14px] leading-snug text-white/90">
                      {item.role}
                    </p>
                  </div>

                  <Image
                    src={item.logo}
                    alt=""
                    width={150}
                    height={52}
                    className="mt-2 h-auto max-w-[100px] object-contain"
                  />
                </div>

                <button className="mb-4 mt-8 inline-flex items-center gap-3 text-base font-medium">
                  {t("Know story")}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
