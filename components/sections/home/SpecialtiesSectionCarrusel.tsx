"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Carousel } from "@/components/shared/Carousel";

const specialties: { key: string; image: string; href?: string }[] = [
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

function SpecialtyCard({
  name,
  image,
  href,
}: {
  name: string;
  image: string;
  href?: string;
}) {
  const content = (
    <article
      className={[
        "relative h-[190px] w-[190px] shrink-0 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.04]",
        href ? "cursor-pointer" : "",
      ].join(" ")}
    >
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

  if (href) return <Link href={href}>{content}</Link>;
  return content;
}

export function SpecialtiesSection() {
  const { t } = useTranslation();
  const [paused, setPaused] = useState(false);

  const firstRow = specialties.slice(0, 10);
  const secondRow = specialties.slice(10);

  return (
    <section
      id="especialidades"
      data-navbar-theme="light"
      className="w-full overflow-hidden bg-white py-20 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mb-14 max-w-[860px] lg:mb-20">
          <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-brand-black lg:text-5xl">
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
        className="flex flex-col gap-2"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Carousel
          items={firstRow.map(({ key, image, href }) => (
            <SpecialtyCard key={key} name={t(key)} image={image} href={href} />
          ))}
          gap={13}
          speed={40}
          sharedPaused={paused}
          onSharedPauseChange={setPaused}
          pauseGroupOnHover
        />

        <Carousel
          items={secondRow.map(({ key, image, href }) => (
            <SpecialtyCard key={key} name={t(key)} image={image} href={href} />
          ))}
          gap={13}
          speed={40}
          sharedPaused={paused}
          onSharedPauseChange={setPaused}
          pauseGroupOnHover
        />
      </div>
    </section>
  );
}
