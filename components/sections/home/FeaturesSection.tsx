"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/locale-context";
import s from "./styles/FeaturesSection.module.css";

const featureImages = [
  "https://images.pexels.com/photos/5207099/pexels-photo-5207099.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const featureBgs = [
  { bg: "bg-brand-cream", dark: false },
  { bg: "bg-neutral-950", dark: true },
  { bg: "bg-neutral-100", dark: false },
  { bg: "bg-brand-off-white", dark: false },
  { bg: "bg-brand-cream", dark: false },
];

const featureKeys = [
  "scheduling",
  "loyalty",
  "efficiency",
  "analytics",
  "implementation",
] as const;

export function MeetKoraSection() {
  const { t } = useLocale();
  const section = t.theFeatures;

  const features = featureKeys.map((key, i) => ({
    ...section.features[key],
    image: featureImages[i],
    ...featureBgs[i],
  }));

  return (
    <section id="caracteristicas" className={s.meetSection}>
      <div className={s.meetContainer}>
        <div className={s.meetHeader}>
          <h2 className={s.meetHeading}>{section.heading}</h2>
          <p className={s.meetDescription}>{section.description}</p>
          <Link href="#demo" className={s.cta}>
            {section.cta}
            <ArrowRight className={s.ctaIcon} />
          </Link>
        </div>

        <div className={s.meetGrid}>
          {features.map((feature, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col overflow-hidden rounded-3xl p-6 lg:p-8",
                feature.bg,
              )}
            >
              <div className="flex-1">
                <span
                  className={cn(
                    "mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold",
                    feature.dark
                      ? "bg-white/10 text-white"
                      : "bg-brand-gold/15 text-brand-gold-dark",
                  )}
                >
                  {feature.tag}
                </span>
                <h3
                  className={cn(
                    "mb-3 text-xl font-bold leading-snug",
                    feature.dark ? "text-white" : "text-neutral-950",
                  )}
                >
                  {feature.title}
                </h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed",
                    feature.dark ? "text-neutral-400" : "text-neutral-500",
                  )}
                >
                  {feature.description}
                </p>
              </div>
              <div className={s.imageWrap}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
