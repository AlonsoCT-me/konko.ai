"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/locale-context";
import { type Locale } from "@/lib/i18n";
import s from "./styles/LanguageSwitcher.module.css";

const LANGUAGES: {
  code: Locale;
  label: string;
  shortLabel: string;
}[] = [
  { code: "es", label: "Español", shortLabel: "ES"},
  { code: "en", label: "English", shortLabel: "EN"},
];

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
}

export function LanguageSwitcher({
  variant = "desktop",
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = variant === "mobile";

  const current = LANGUAGES.find((l) => l.code === locale)!;

  useEffect(() => {
    if (isMobile) return; // En mobile no necesita click outside, está en un menú controlado
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open, isMobile]);

  if (isMobile) {
    return (
      <div ref={ref}>
        <button
          onClick={() => setOpen((v) => !v)}
          className={s.triggerMobile}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span>{current.label}</span>
          <ChevronDown className={cn(s.chevronMobile, open && s.chevronOpen)} />
        </button>

        {open && (
          <div role="listbox" className={s.dropdownMobile}>
            {LANGUAGES.map((lang) => {
              const isActive = lang.code === locale;
              return (
                <button
                  key={lang.code}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setLocale(lang.code);
                    setOpen(false);
                  }}
                  className={cn(s.optionMobile, isActive && s.optionActive)}
                >
                  <span>{lang.label}</span>
                  {isActive && (
                    <svg
                      className={s.checkIcon}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className={s.wrapper}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={s.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current.shortLabel}</span>
        <ChevronDown className={cn(s.chevron, open && s.chevronOpen)} />
      </button>

      {open && (
        <div role="listbox" className={s.dropdown}>
          {LANGUAGES.map((lang) => {
            const isActive = lang.code === locale;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setLocale(lang.code);
                  setOpen(false);
                }}
                className={cn(s.option, isActive && s.optionActive)}
              >
                <span>{lang.shortLabel}</span>
                {isActive && (
                  <svg
                    className={s.checkIcon}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
