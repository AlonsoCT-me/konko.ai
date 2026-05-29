"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

const LANGUAGES = [
  { code: "es", label: "Español", shortLabel: "ES" },
  { code: "en", label: "English", shortLabel: "EN" },
] as const;

type LangCode = (typeof LANGUAGES)[number]["code"];

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
}

export function LanguageSwitcher({ variant = "desktop" }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = variant === "mobile";

  const locale = (i18n.language ?? "es") as LangCode;
  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  useEffect(() => {
    if (isMobile) return;
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open, isMobile]);

  const checkIcon = (
    <svg className="ml-auto h-3 w-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  if (isMobile) {
    return (
      <div ref={ref}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex cursor-pointer items-center gap-2 border-none bg-transparent p-0 text-2xl font-semibold text-neutral-700 transition-colors hover:text-neutral-950"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span>{current.label}</span>
          <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", open && "rotate-180")} />
        </button>

        {open && (
          <div role="listbox" className="mt-2 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-card">
            {LANGUAGES.map((lang) => {
              const isActive = lang.code === locale;
              return (
                <button
                  key={lang.code}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
                  className={cn(
                    "flex w-full cursor-pointer items-center gap-3 border-none bg-transparent px-4 py-3 text-left text-lg font-normal text-neutral-600 transition-colors hover:bg-neutral-50",
                    isActive && "bg-neutral-50 font-semibold text-neutral-950",
                  )}
                >
                  <span>{lang.label}</span>
                  {isActive && checkIcon}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex cursor-pointer items-center gap-1.5 rounded-lg border-none bg-transparent px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current.shortLabel}</span>
        <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", open && "rotate-180")} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-[calc(100%+6px)] z-[200] min-w-[120px] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-card-lg"
        >
          {LANGUAGES.map((lang) => {
            const isActive = lang.code === locale;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isActive}
                onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
                className={cn(
                  "flex w-full cursor-pointer items-center gap-2 border-none bg-transparent px-3.5 py-2.5 text-left text-sm font-normal text-neutral-600 transition-colors hover:bg-neutral-50",
                  isActive && "bg-neutral-50 font-semibold text-neutral-950",
                )}
              >
                <span>{lang.shortLabel}</span>
                {isActive && checkIcon}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
