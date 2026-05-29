"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white before:pointer-events-none before:absolute before:inset-0 before:opacity-50 before:content-[''] before:[background-image:radial-gradient(circle,#d4d4d4_1px,transparent_1px)] before:[background-size:28px_28px]">
      <div className="relative mx-auto w-full max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="max-w-3xl py-32 lg:py-40">
          <h1 className="[font-size:clamp(3rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-neutral-950">
            {t("More appointments")}
            <br />
            {t("Better care")}
            <br />
            {t("Less")}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-500 lg:text-lg">
            {t("Meet Kora and Nora, AI assistants that have handled over 127 conversations in clinics and seek the most advanced cases on the planet.")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button size="xl" variant="default" asChild>
              <Link href="#demo">
                {t("Schedule Demo")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="#kora">
                {t("Try Kora")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
