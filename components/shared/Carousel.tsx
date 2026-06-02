"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

interface CarouselProps {
  items: React.ReactNode[];
  speed?: number;
  gap?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  fadeColor?: string;
}

export function Carousel({
  items,
  speed = 30,
  gap = 64,
  pauseOnHover = true,
  reverse = false,
  className,
  fadeColor = "white",
}: CarouselProps) {
  const [paused, setPaused] = useState(false);
  const doubled = [...items, ...items];

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div
        className={cn(
          "flex w-max items-center will-change-transform",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: paused ? "paused" : "running",
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
