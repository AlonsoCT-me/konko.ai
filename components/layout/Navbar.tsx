"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { Logo } from "@/components/shared/Logo";

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("Cases"), href: "#cases" },
    { label: t("About Us"), href: "/about-us" },
    { label: t("Blog"), href: "/blog" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-neutral-100 shadow-card-sm backdrop-blur-md [background-color:rgba(255,255,255,0.95)]"
          : "bg-white",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <nav className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" aria-label={t("Konko.ai - Home")}>
            <Logo />
          </Link>

          <ul className="ml-12 hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <LanguageSwitcher variant="desktop" />
            <Button size="md" variant="outline" asChild>
              <Link href="#kora">{t("Log in")}</Link>
            </Button>
            <Button size="md" variant="default" asChild>
              <Link href="#demo">{t("Schedule Demo")}</Link>
            </Button>
          </div>

          <button
            className="relative z-[60] flex h-9 w-9 items-center justify-center rounded-lg p-2 text-neutral-700 transition-colors hover:bg-neutral-100 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t("Close menu") : t("Open menu")}
          >
            <span
              data-open={mobileOpen}
              className="group relative flex items-center justify-center"
              style={{ width: 20, height: 20 }}
            >
              <span
                className="absolute block w-5 rounded-full bg-current transition-all duration-300"
                style={{
                  height: 2,
                  top: mobileOpen ? 9 : 4,
                  transform: mobileOpen ? "rotate(45deg)" : "none",
                }}
              />
              <span
                className="absolute block w-5 rounded-full bg-current transition-all duration-300"
                style={{
                  height: 2,
                  top: 9,
                  opacity: mobileOpen ? 0 : 1,
                  transform: mobileOpen ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="absolute block w-5 rounded-full bg-current transition-all duration-300"
                style={{
                  height: 2,
                  top: mobileOpen ? 9 : 14,
                  transform: mobileOpen ? "rotate(-45deg)" : "none",
                }}
              />
            </span>
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-50 flex flex-col bg-white text-neutral-700 lg:hidden">
          <div className="flex h-16 items-center justify-between border-b border-neutral-100 px-6">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Logo />
            </Link>
          </div>

          <div className="flex-1 space-y-1 overflow-y-auto px-6 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block border-b border-neutral-100 py-4 text-2xl font-semibold text-neutral-700 transition-colors hover:text-neutral-950"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-b border-neutral-100 py-4">
              <LanguageSwitcher variant="mobile" />
            </div>
          </div>

          <div className="flex flex-col gap-3 px-6 pb-8 pt-4">
            <Button size="lg" variant="default" className="w-full" asChild>
              <Link href="#demo" onClick={() => setMobileOpen(false)}>
                {t("Schedule Demo")}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full" asChild>
              <Link href="#kora" onClick={() => setMobileOpen(false)}>
                {t("Log in")}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
