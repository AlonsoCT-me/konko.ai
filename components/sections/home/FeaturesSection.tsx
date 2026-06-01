"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

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

export function MeetKoraSection() {
  const { t } = useTranslation();

  const features = [
    {
      tag: t("Scheduling"),
      title: t("Convert more messages into scheduled appointments"),
      description: t(
        "Don't lose patients by not responding in time. Kora replies instantly on WhatsApp and automatically schedules appointments.",
      ),
      ...featureBgs[0],
      image: featureImages[0],
    },
    {
      tag: t("Loyalty"),
      title: t("Build patient loyalty with the best care"),
      description: t(
        "Kora remembers every detail, sends personalized reminders, and follows up post-consultation automatically.",
      ),
      ...featureBgs[1],
      image: featureImages[1],
    },
    {
      tag: t("Efficiency"),
      title: t("Free your team from operational chaos"),
      description: t(
        "Your staff stops answering repetitive WhatsApps and focuses on what matters most: the patient in front of them.",
      ),
      ...featureBgs[2],
      image: featureImages[2],
    },
    {
      tag: t("Analytics"),
      title: t("Gain full visibility and control"),
      description: t(
        "Real-time dashboard of all your consultations and conversations. Make better decisions every day.",
      ),
      ...featureBgs[3],
      image: featureImages[3],
    },
    {
      tag: t("Implementation"),
      title: t("Ready in days and improving every day"),
      description: t(
        "Onboarding in less than 48 hours. Kora learns about your clinic and continuously improves with each conversation.",
      ),
      ...featureBgs[4],
      image: featureImages[4],
    },
  ];

  return (
    <section id="caracteristicas" className="bg-white py-10 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold leading-tight text-neutral-950 lg:text-5xl">
            {t("Meet Kora")}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-500">
            {t(
              "The new AI assistant that will help you transform your clinic with technology from the best in the world.",
            )}
          </p>
          <Link
            href="#demo"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition-colors hover:text-brand-gold"
          >
            {t("Try Kora")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="relative mt-6 h-48 overflow-hidden rounded-2xl">
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
