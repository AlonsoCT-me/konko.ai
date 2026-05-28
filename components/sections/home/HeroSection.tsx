"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale-context";
import s from "./styles/HeroSection.module.css";

export function HeroSection() {
  const { t } = useLocale();
  const hero = t.hero;

  return (
    <section className={s.heroSection}>
      {/* Decorador radial gold — esquina superior derecha */}
      <div className={s.bgDecor} aria-hidden="true">
        <div className={s.bgDecorInner}>
          <svg
            viewBox="0 0 520 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            {Array.from({ length: 48 }).map((_, i) => {
              const angle = (i / 48) * Math.PI; // semicírculo (0 → 180°)
              const r1 = 200;
              const r2 = 200 + 60 + (i % 3) * 20; // longitud variable
              const cx = 520;
              const cy = 0;
              const x1 = cx + Math.cos(Math.PI + angle) * r1;
              const y1 = cy + Math.sin(Math.PI + angle) * r1;
              const x2 = cx + Math.cos(Math.PI + angle) * r2;
              const y2 = cy + Math.sin(Math.PI + angle) * r2;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#C9A84C"
                  strokeWidth="2"
                  opacity={0.7 + (i % 4) * 0.075}
                />
              );
            })}
          </svg>
        </div>
      </div>

      <div className={s.heroContainer}>
        <div className={s.heroContent}>
          <h1 className={s.heroHeading}>
            {hero.heading.line1}
            <br />
            {hero.heading.line2}
            <br />
            {hero.heading.line3}
          </h1>

          <p className={s.heroDescription}>{hero.description}</p>

          <div className={s.ctas}>
            <Button size="xl" variant="default" asChild>
              <Link href="#demo">
                {hero.cta.demo}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="#kora">
                {hero.cta.try}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
