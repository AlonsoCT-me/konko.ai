"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className, delay = 0 }: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className,
      )}
      style={delay ? { transitionDelay: inView ? `${delay}ms` : "0ms" } : undefined}
    >
      {children}
    </div>
  );
}
