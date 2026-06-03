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
  navTheme = "dark",
  scrolled = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  navTheme?: "dark" | "light";
  scrolled?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center rounded-full px-4 text-sm font-medium leading-5 transition-all duration-300 hover:scale-[1.02]",
        variant === "primary"
          ? "border border-brand-gold bg-brand-black text-brand-white"
          : cn(
              navTheme === "dark" ? "text-white" : "text-brand-black",
              !scrolled && "hover:bg-white/10",
            ),
        className,
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
  const [navTheme, setNavTheme] = useState<"dark" | "light">("dark");
  const [showGlass, setShowGlass] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isHero, setIsHero] = useState(true);

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
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-navbar-theme], [data-navbar-glass], [data-navbar-hero]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const glass = entry.target.getAttribute("data-navbar-glass");
          if (glass !== null) {
            setShowGlass(entry.isIntersecting ? glass !== "none" : true);
          }
          const hero = entry.target.getAttribute("data-navbar-hero");
          if (hero !== null) {
            setIsHero(entry.isIntersecting);
          }
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-navbar-theme");
            if (theme) setNavTheme(theme as "dark" | "light");
          }
        });
      },
      { rootMargin: "-72px 0px -90% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isDark = navTheme === "dark";

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        mobileOpen
          ? "bg-white/80 backdrop-blur-xl"
          : scrolled
            ? "bg-white/50 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none"
            : "bg-transparent backdrop-blur-0",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
        <nav
          className={cn(
            "flex h-[72px] items-center justify-between transition-all duration-500 lg:my-4 lg:h-[68px] lg:px-5",
            scrolled && showGlass
              ? isDark
                ? "lg:rounded-[20px] lg:bg-white/10 lg:backdrop-blur-xl lg:border lg:border-white/10"
                : "lg:rounded-[20px] lg:bg-white/70 lg:backdrop-blur-xl lg:border lg:border-white/20"
              : "lg:rounded-[20px] lg:bg-transparent lg:border lg:border-transparent",
          )}
        >
          <div className="flex items-center gap-6">
            <Link
              href="/"
              aria-label={t("Konko.ai - Home")}
              onClick={() => setMobileOpen(false)}
              className="shrink-0 pr-2.5"
            >
              <Logo
                variant={isDark && !mobileOpen && !(isMobile && scrolled && isHero) ? "light" : "dark"}
                className="h-9 w-auto transition-all duration-300"
              />
            </Link>

            <ul className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex h-11 items-center px-2.5 text-sm font-medium leading-4 transition-all duration-300",
                      isDark
                        ? "text-white/90 hover:text-white"
                        : "text-[#464D59] hover:text-brand-black",
                      !scrolled && "rounded-full hover:bg-white/10",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <div
              className={cn(
                "flex h-11 items-center rounded-full px-4 text-base font-medium transition-all duration-300",
                isDark ? "text-white" : "text-brand-black",
              )}
            >
              <LanguageSwitcher variant="desktop" />
            </div>

            <NavbarButton
              href={WHATSAPP_URL}
              variant="secondary"
              navTheme={navTheme}
              scrolled={scrolled}
            >
              {t("Try Kora")}
            </NavbarButton>

            <NavbarButton href={DEMO_URL} className="ml-3">{t("Schedule Demo")}</NavbarButton>
          </div>

          <button
            type="button"
            className={cn(
              "relative z-[80] flex size-10 items-center justify-center transition-colors duration-300 lg:hidden",
              isDark && !mobileOpen && !(scrolled && isHero) ? "text-white" : "text-brand-black",
            )}
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
