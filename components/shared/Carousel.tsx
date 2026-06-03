"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface CarouselProps {
  items: React.ReactNode[];
  speed?: number;
  gap?: number;
  pauseOnHover?: boolean;
  isPaused?: boolean;
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
  reverse = false,
  className,
  fadeColor = "white",
  tapPauseDuration = 3000,
}: CarouselProps) {
  const [paused, setPaused] = useState(false);
  const tapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const doubled = [...items, ...items];

  useEffect(() => () => { if (tapTimerRef.current) clearTimeout(tapTimerRef.current); }, []);

  function handleTouchStart() {
    if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    setPaused(true);
    tapTimerRef.current = setTimeout(() => setPaused(false), tapPauseDuration);
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      onTouchStart={handleTouchStart}
    >
      <div
        className={cn(
          "flex w-max items-center will-change-transform",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: (paused || isPaused) ? "paused" : "running",
        }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex-shrink-0" style={{ paddingRight: `${gap}px` }}>
            {item}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-24" style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }} />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-24" style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }} />
    </div>
  );
}
