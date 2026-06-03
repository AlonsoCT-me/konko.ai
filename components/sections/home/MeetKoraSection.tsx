"use client";

import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { DEMO_URL } from "@/constants/navigation";
import { CtaButton } from "@/components/shared/buttons";

export function MeetKoraSection() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fading, setFading] = useState(false);

  function handleTimeUpdate() {
    const video = videoRef.current;
    if (!video) return;
    if (video.duration - video.currentTime < 0.5) {
      setFading(true);
    }
  }

  function handleEnded() {
    const video = videoRef.current;
    if (!video) return;
    setFading(false);
    video.currentTime = 0;
    video.play();
  }

  return (
    <section id="kora" data-navbar-theme="light" className="bg-white py-10 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-bold leading-tight text-neutral-950 lg:text-5xl">
              {t("Meet")} <span className="gold-underline">Kora</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-neutral-500 lg:text-[22px]">
              {t(
                "The new AI assistant that will help you transform your clinic with technology from the best in the world.",
              )}
            </p>
            <CtaButton href={DEMO_URL} variant="text" className="mt-8">
              {t("Try Kora")}
            </CtaButton>
          </div>

          <div className="flex justify-end">
            <div
              className="relative w-full overflow-hidden rounded-3xl [aspect-ratio:4/4.2] [background-color:#ede6d6]"
              style={{ maxWidth: 540 }}
            >
              <video
                ref={videoRef}
                src="/videos/kora-avatar.mp4"
                autoPlay
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                style={{
                  opacity: fading ? 0.5 : 1,
                  transition: "opacity 600ms ease-in-out",
                }}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
