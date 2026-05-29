"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

interface CarouselProps {
  items: React.ReactNode[];
  speed?: number;
  gap?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function Carousel({
  items,
  speed = 30,
  gap = 64,
  pauseOnHover = true,
  className,
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
        className="flex w-max animate-marquee items-center will-change-transform"
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

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-24 [background:linear-gradient(to_right,white,transparent)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-24 [background:linear-gradient(to_left,white,transparent)]" />
    </div>
  );
}
