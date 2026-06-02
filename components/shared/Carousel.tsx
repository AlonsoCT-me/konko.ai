'use client';

<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
=======
import { useState } from 'react';
>>>>>>> d2fa808 (update mobile cards seciruty section)

import { cn } from '@/lib/utils';

interface CarouselProps {
  items: React.ReactNode[];
  speed?: number;
  gap?: number;
  pauseOnHover?: boolean;
<<<<<<< HEAD
  isPaused?: boolean;
=======
  pauseGroupOnHover?: boolean;
  sharedPaused?: boolean;
  onSharedPauseChange?: (paused: boolean) => void;
>>>>>>> d2fa808 (update mobile cards seciruty section)
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
<<<<<<< HEAD
  isPaused = false,
  reverse = false,
  className,
  fadeColor = "white",
  tapPauseDuration = 3000,
}: CarouselProps) {
  const [paused, setPaused] = useState(false);
  const tapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const doubled = [...items, ...items];

  useEffect(
    () => () => {
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    },
    [],
  );

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
=======
  pauseGroupOnHover = false,
  sharedPaused = false,
  onSharedPauseChange,
  reverse = false,
  className,
  fadeColor = 'white',
}: CarouselProps) {
  const [localPaused, setLocalPaused] = useState(false);
  const doubled = [...items, ...items];

  const paused = pauseGroupOnHover ? sharedPaused : localPaused;

  const handleMouseEnter = () => {
    if (!pauseOnHover) return;

    if (pauseGroupOnHover) {
      onSharedPauseChange?.(true);
      return;
    }

    setLocalPaused(true);
  };

  const handleMouseLeave = () => {
    if (!pauseOnHover) return;

    if (pauseGroupOnHover) {
      onSharedPauseChange?.(false);
      return;
    }

    setLocalPaused(false);
  };

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
>>>>>>> d2fa808 (update mobile cards seciruty section)
    >
      <div
        className={cn(
          'flex w-max items-center will-change-transform',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
        )}
        style={{
          animationDuration: `${speed}s`,
<<<<<<< HEAD
          animationPlayState: (paused || isPaused) ? "paused" : "running",
=======
          animationPlayState: paused ? 'paused' : 'running',
>>>>>>> d2fa808 (update mobile cards seciruty section)
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ paddingRight: `${gap}px` }}
          >
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