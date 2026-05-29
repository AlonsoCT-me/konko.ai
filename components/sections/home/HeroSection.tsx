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
