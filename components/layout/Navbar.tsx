"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/shared/buttons";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { Logo } from "@/components/shared/Logo";
import { DEMO_URL, NAV_LINKS, WHATSAPP_URL } from "@/constants/navigation";

function NavbarButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center rounded-full px-4 text-sm font-medium leading-5 transition-transform hover:scale-[1.02]",
        variant === "primary"
          ? "border border-brand-gold bg-brand-black text-brand-white"
          : "border border-neutral-100 bg-neutral-100 text-brand-black",
      )}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = NAV_LINKS.map((link) => ({
    ...link,
    label: t(link.label),
  }));

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-brand-border transition-all duration-300 lg:border-b-0 lg:border-transparent",
        mobileOpen
          ? "bg-white/80 backdrop-blur-xl"
          : scrolled
            ? "bg-white/50 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none"
            : "bg-transparent backdrop-blur-0",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
        <nav className="flex h-[72px] items-center justify-between transition-all duration-300 lg:my-4 lg:h-[68px] lg:rounded-[20px] lg:bg-neutral-100/50 lg:px-5 lg:backdrop-blur-md">
          <div className="flex items-center gap-14 lg:gap-16">
            <Link
              href="/"
              aria-label={t("Konko.ai - Home")}
              onClick={() => setMobileOpen(false)}
              className="shrink-0"
            >
              <Logo className="h-9 w-auto" />
            </Link>

            <ul className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium leading-4 text-[#464D59] transition-colors hover:text-brand-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center gap-2.5 lg:flex">
            <div className="flex h-11 items-center rounded-full bg-white px-4 text-base font-medium text-brand-black">
              <LanguageSwitcher variant="desktop" />
            </div>

            <NavbarButton href={WHATSAPP_URL} variant="secondary">
              {t("Try Kora")}
            </NavbarButton>

            <NavbarButton href={DEMO_URL}>{t("Schedule Demo")}</NavbarButton>
          </div>

          <button
            type="button"
            className="relative z-[80] flex size-10 items-center justify-center text-brand-black lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? t("Close menu") : t("Open menu")}
            aria-expanded={mobileOpen}
          >
            <span className="relative block size-6">
              <span
                className="absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300"
                style={{
                  top: mobileOpen ? 11 : 5,
                  transform: mobileOpen ? "rotate(45deg)" : "none",
                }}
              />

              <span
                className="absolute left-0 top-[11px] block h-0.5 w-6 rounded-full bg-current transition-all duration-300"
                style={{
                  opacity: mobileOpen ? 0 : 1,
                  transform: mobileOpen ? "scaleX(0)" : "none",
                }}
              />

              <span
                className="absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300"
                style={{
                  top: mobileOpen ? 11 : 17,
                  transform: mobileOpen ? "rotate(-45deg)" : "none",
                }}
              />
            </span>
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="absolute inset-x-0 top-[72px] z-[60] flex h-[calc(100dvh-72px)] flex-col overflow-hidden bg-white/80 text-[#464D59] backdrop-blur-xl lg:hidden">
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-8 pb-8 pt-14">
            <nav className="flex flex-col gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-medium leading-[125%] transition-colors hover:text-brand-black"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="text-2xl font-medium leading-[125%]">
                <LanguageSwitcher variant="mobile" />
              </div>
            </nav>

            <div className="mt-auto flex flex-col gap-4 px-1 pt-16">
              <CtaButton href={DEMO_URL} onClick={() => setMobileOpen(false)}>
                {t("Schedule Demo")}
              </CtaButton>

              <CtaButton
                href={WHATSAPP_URL}
                variant="secondary"
                onClick={() => setMobileOpen(false)}
              >
                {t("Try for free")}
              </CtaButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
