"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface CarouselProps {
  items: React.ReactNode[];
  speed?: number;
  gap?: number;
  pauseOnHover?: boolean;
  isPaused?: boolean;
  pauseGroupOnHover?: boolean;
  sharedPaused?: boolean;
  onSharedPauseChange?: (paused: boolean) => void;
  reverse?: boolean;
  className?: string;
  fadeColor?: string;
  tapPauseDuration?: number;
}

export function Carousel({
  items,
  speed = 30,
  gap = 64,
  pauseOnHover = true,
  isPaused = false,
  pauseGroupOnHover = false,
  sharedPaused = false,
  onSharedPauseChange,
  reverse = false,
  className,
  fadeColor = "white",
  tapPauseDuration = 3000,
}: CarouselProps) {
  const [paused, setPaused] = useState(false);
  const tapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const doubled = [...items, ...items];

  const effectivePaused =
    paused || isPaused || (pauseGroupOnHover && sharedPaused);

  useEffect(
    () => () => {
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    },
    [],
  );

  function setCarouselPaused(value: boolean) {
    if (pauseGroupOnHover) {
      onSharedPauseChange?.(value);
      return;
    }

    setPaused(value);
  }

  function handleMouseEnter() {
    if (!pauseOnHover) return;
    setCarouselPaused(true);
  }

  function handleMouseLeave() {
    if (!pauseOnHover) return;
    setCarouselPaused(false);
  }

  function handleTouchStart() {
    if (tapTimerRef.current) clearTimeout(tapTimerRef.current);

    setCarouselPaused(true);

    tapTimerRef.current = setTimeout(() => {
      setCarouselPaused(false);
    }, tapPauseDuration);
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <div
        className={cn(
          "flex w-max items-center will-change-transform",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: effectivePaused ? "paused" : "running",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ paddingRight: `${gap}px` }}
          >
            {item}
          </div>
        ))}
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 top-0 w-24"
        style={{
          background: `linear-gradient(to right, ${fadeColor}, transparent)`,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 top-0 w-24"
        style={{
          background: `linear-gradient(to left, ${fadeColor}, transparent)`,
        }}
      />
    </div>
  );
}
