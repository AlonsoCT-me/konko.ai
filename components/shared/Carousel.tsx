'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

interface CarouselProps {
  items: React.ReactNode[];
  speed?: number;
  gap?: number;
  pauseOnHover?: boolean;
  pauseGroupOnHover?: boolean;
  sharedPaused?: boolean;
  onSharedPauseChange?: (paused: boolean) => void;
  reverse?: boolean;
  className?: string;
  fadeColor?: string;
}

export function Carousel({
  items,
  speed = 30,
  gap = 64,
  pauseOnHover = true,
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
    >
      <div
        className={cn(
          'flex w-max items-center will-change-transform',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
        )}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: paused ? 'paused' : 'running',
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