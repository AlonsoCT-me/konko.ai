"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function RevolutionSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      image: "/images/doctor-clinical.jpg",
      logo: "/images/urologia-avanzada.svg",
      quote: t("testimonial_1_quote"),
      name: t("testimonial_1_name"),
      role: t("testimonial_1_role"),
    },
  ];

  const hasMultipleTestimonials = testimonials.length > 1;

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#DED9C8_1.2px,transparent_1.2px)] opacity-70 [background-size:28px_28px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-12">
          <h2 className="relative inline-block max-w-[780px] text-[46px] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-950 md:text-[48px] lg:text-[48px]">
            {t("The healthcare revolution in Latam")}
            <span className="absolute -bottom-2 left-[70px] hidden h-[10px] w-[280px] bg-[url('/images/gold-underline.svg')] bg-contain bg-no-repeat md:block" />
          </h2>

          <p className="mt-4 text-[30px] leading-tight tracking-[-0.03em] text-neutral-500 md:text-[28px]">
            {t("Told by its true protagonists")}
          </p>
        </div>

        {/* Desktop accordion */}
        <div className="hidden h-[550px] gap-5 lg:flex">
          {testimonials.map((item, index) => {
            const isDefaultOpen = index === 0;

            return (
              <article
                key={item.name}
                className={`group relative overflow-hidden rounded-[24px] transition-all duration-500 ease-out ${
                  hasMultipleTestimonials
                    ? isDefaultOpen
                      ? "flex-[3.2]"
                      : "flex-1"
                    : "flex-1"
                } ${hasMultipleTestimonials ? "hover:flex-[3.2]" : ""} `}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                <div
                  className={`absolute inset-x-0 bottom-0 z-10 p-10 text-white transition-opacity duration-300 ${
                    isDefaultOpen || !hasMultipleTestimonials
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  } `}
                >
                  <p className="max-w-[760px] text-[24px] italic leading-[1.35]">
                    “{item.quote}”
                  </p>

                  <div className="mt-8 flex items-end justify-between gap-8">
                    <div>
                      <p className="text-lg font-bold">{item.name}</p>
                      <p className="text-base text-white/90">{item.role}</p>
                    </div>

                    <Image
                      src={item.logo}
                      alt=""
                      width={170}
                      height={60}
                      className="h-auto max-w-[170px] object-contain"
                    />
                  </div>

                  <Link
                    href="#demo"
                    className="group mt-8 inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-brand-gold"
                  >
                    {t("Know story")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {hasMultipleTestimonials && !isDefaultOpen && (
                  <div className="absolute inset-0 bg-black/15 transition-opacity duration-300 group-hover:opacity-0" />
                )}
              </article>
            );
          })}
        </div>

        {/* Mobile touch slider */}
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className={`relative h-[835px] snap-start overflow-hidden rounded-[20px] ${
                testimonials.length === 1
                  ? "min-w-full"
                  : "min-w-[86%] sm:min-w-[70%]"
              } `}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes={
                  testimonials.length === 1
                    ? "100vw"
                    : "(max-width: 768px) 86vw, 70vw"
                }
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-8 text-white">
                <p className="text-[26px] leading-[1.28]">"{item.quote}"</p>

                <div className="mt-10 flex items-end justify-between gap-5">
                  <div>
                    <p className="text-[22px] font-bold">{item.name}</p>
                    <p className="text-[20px] leading-snug text-white/90">
                      {item.role}
                    </p>
                  </div>

                  <Image
                    src={item.logo}
                    alt=""
                    width={150}
                    height={52}
                    className="h-auto max-w-[140px] object-contain"
                  />
                </div>

                <button className="mt-8 inline-flex items-center gap-3 text-base font-medium">
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
