'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { useLocale } from '@/lib/locale-context';
import s from './styles/Navbar.module.css';

export function Navbar() {
  const { t } = useLocale();
  const nav = t.navbar;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: nav.links.features, href: '#caracteristicas' },
    { label: nav.links.security, href: '#seguridad' },
    { label: nav.links.about, href: '/about-us' },
    { label: nav.links.blog, href: '/blog' },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={cn(s.navHeader, scrolled ? s.headerScrolled : s.headerTransparent)}>
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
            <LanguageSwitcher />
            <Link href="#demo" className={s.loginLink}>
              {nav.login}
            </Link>
            <Button size="md" variant="default" asChild>
              <Link href="#demo">{nav.cta}</Link>
            </Button>
          </div>

          <button
            className={s.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? nav.closeMenu : nav.openMenu}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className={s.mobileMenu}>
          <div className={s.mobileMenuInner}>
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
              <LanguageSwitcher />
            </div>
            <div className={s.mobileCtas}>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link href="#demo">{nav.login}</Link>
              </Button>
              <Button size="lg" className="w-full" asChild>
                <Link href="#demo">{nav.cta}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
