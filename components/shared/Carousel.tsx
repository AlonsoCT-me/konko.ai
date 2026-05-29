"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import s from "./styles/Carousel.module.css";

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
      className={cn(s.track, className)}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div
        className={s.marquee}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((item, i) => (
          <div key={i} className={s.item} style={{ paddingRight: `${gap}px` }}>
            {item}
          </div>
        ))}
      </div>

      <div className={s.fadeLeft} />
      <div className={s.fadeRight} />
    </div>
  );
}
