"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useLocale } from "@/lib/locale-context";
import s from "./styles/Navbar.module.css";

export function Navbar() {
  const { t } = useLocale();
  const nav = t.navbar;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: nav.links.cases, href: "#cases" },
    { label: nav.links.about, href: "/about-us" },
    { label: nav.links.blog, href: "/blog" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
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
        s.navHeader,
        scrolled ? s.headerScrolled : s.headerTransparent,
      )}
    >
      <div className={s.navContainer}>
        <nav className={s.nav}>
          <Link href="/" aria-label={nav.ariaLabel}>
            <Logo />
          </Link>

          <ul className={s.desktopLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={s.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={s.desktopActions}>
            <LanguageSwitcher variant="desktop" />
            <Button size="md" variant="outline" asChild>
              <Link href="#kora">{nav.login}</Link>
            </Button>
            <Button size="md" variant="default" asChild>
              <Link href="#demo">{nav.cta}</Link>
            </Button>
          </div>

          {/* ✅ Hamburger animado — sin lucide */}
          <button
            className={s.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? nav.closeMenu : nav.openMenu}
          >
            <span
              className={cn(s.hamburgerIcon, mobileOpen && s.hamburgerOpen)}
            >
              <span className={s.hamburgerLine} />
              <span className={s.hamburgerLine} />
              <span className={s.hamburgerLine} />
            </span>
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className={s.mobileMenu}>
          <div className={s.mobileMenuHeader}>
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Logo />
            </Link>
          </div>

          <div className={s.mobileMenuBody}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={s.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className={s.mobileLangRow}>
              <LanguageSwitcher variant="mobile" />
            </div>
          </div>

          <div className={s.mobileMenuFooter}>
            <Button size="lg" variant="default" className="w-full" asChild>
              <Link href="#demo" onClick={() => setMobileOpen(false)}>
                {nav.cta}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full" asChild>
              <Link href="#kora" onClick={() => setMobileOpen(false)}>
                {nav.login}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
