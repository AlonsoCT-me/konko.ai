"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const specialties = [
  { key: "Internal Medicine", image: "medicina-interna.png" },
  { key: "Neonatology", image: "neonatologia.png" },
  { key: "Pediatrics", image: "pediatria.png" },
  { key: "Geriatrics", image: "geriatria.png" },
  { key: "Urology", image: "urologia.png" },
  { key: "Clinical Nutrition", image: "nutricion-clinica.png" },
  { key: "Hematology", image: "hematologia.png" },
  { key: "Cardiology", image: "cardiologia.png" },
  { key: "Pulmonology", image: "neumologia.png" },
  { key: "Gastroenterology", image: "gastroenterologia.png" },
  { key: "Nephrology", image: "nefrologia.png" },
  { key: "Endocrinology", image: "endocrinologia.png" },
  { key: "Rheumatology", image: "reumatologia.png" },
  { key: "Oncology", image: "oncologia.png" },
  { key: "General Medicine", image: "medicina-general.png" },
  { key: "Family Medicine", image: "medicina-familiar.png" },
  { key: "Gynecology", image: "ginecologia.png" },
  { key: "Obstetrics", image: "obstetricia.png" },
  { key: "Clinical Immunology", image: "inmunologia-clinica.png" },
  { key: "Allergology", image: "alergologia.png" },
];

function SpecialtyCard({ name, image }: { name: string; image: string }) {
  return (
    <article className="relative h-[190px] w-[190px] shrink-0 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.04]">
      <Image
        src={`/images/${image}`}
        alt={name}
        fill
        className="select-none object-cover"
        sizes="190px"
        draggable={false}
      />

      <span className="absolute bottom-4 left-4 text-sm font-medium text-brand-burgundy">
        {name}
      </span>
    </article>
  );
}

export function SpecialtiesSection() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const firstRow = specialties.slice(0, 10);
  const secondRow = specialties.slice(10);

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    const centerScroll = () => {
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    };

    centerScroll();

    window.addEventListener("resize", centerScroll);

    return () => {
      window.removeEventListener("resize", centerScroll);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      isDown = true;
      setIsDragging(true);
      startX = event.clientX;
      scrollLeft = el.scrollLeft;
      el.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDown) return;

      event.preventDefault();

      const walk = event.clientX - startX;
      el.scrollLeft = scrollLeft - walk;
    };

    const stopDragging = (event: PointerEvent) => {
      if (!isDown) return;

      isDown = false;
      setIsDragging(false);

      if (el.hasPointerCapture(event.pointerId)) {
        el.releasePointerCapture(event.pointerId);
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", stopDragging);
    el.addEventListener("pointercancel", stopDragging);
    el.addEventListener("pointerleave", stopDragging);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", stopDragging);
      el.removeEventListener("pointercancel", stopDragging);
      el.removeEventListener("pointerleave", stopDragging);
    };
  }, []);

  return (
    <section
      id="especialidades"
      className="w-full overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mb-14 max-w-[860px] lg:mb-20">
          <h2 className="text-[44px] font-semibold leading-[52px] text-brand-black md:text-[48px] md:leading-[58px]">
            {t("Designed for your")}{" "}
            <span className="gold-underline">{t("specialty")}</span>
          </h2>

          <p className="mt-4 max-w-[760px] text-[28px] font-normal leading-[34px] text-neutral-600">
            {t(
              "Kora adapts and understands the processes and complexities of each type of clinic",
            )}
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={[
          "scrollContent scrollbar-hide w-full overflow-x-auto overflow-y-hidden overscroll-x-contain px-6 pb-2 lg:px-20",
          "touch-pan-x select-none",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        ].join(" ")}
      >
        <div className="mx-auto flex w-max flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-[13px]">
            {firstRow.map(({ key, image }) => (
              <SpecialtyCard key={key} name={t(key)} image={image} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-[13px]">
            {secondRow.map(({ key, image }) => (
              <SpecialtyCard key={key} name={t(key)} image={image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
