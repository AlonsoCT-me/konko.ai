'use client';

import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { useLocale } from '@/lib/locale-context';
import s from './styles/Footer.module.css';

const socialIcons = {
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z',
};

export function Footer() {
  const { t } = useLocale();
  const section = t.footer;

  const footerLinks = {
    product: [
      { label: section.columns.product.links.features, href: '#caracteristicas' },
      { label: section.columns.product.links.security, href: '#seguridad' },
      { label: section.columns.product.links.specialties, href: '#especialidades' },
      { label: section.columns.product.links.pricing, href: '#precios' },
    ],
    company: [
      { label: section.columns.company.links.about, href: '/about-us' },
      { label: section.columns.company.links.blog, href: '/blog' },
      { label: section.columns.company.links.careers, href: '/careers' },
      { label: section.columns.company.links.press, href: '/press' },
    ],
    legal: [
      { label: section.columns.legal.links.privacy, href: '/privacy' },
      { label: section.columns.legal.links.terms, href: '/terms' },
      { label: section.columns.legal.links.cookies, href: '/cookies' },
    ],
  };

  const socialLinks = [
    { label: section.social.instagram, href: 'https://instagram.com', icon: socialIcons.instagram },
    { label: section.social.linkedin, href: 'https://linkedin.com', icon: socialIcons.linkedin },
    { label: section.social.twitter, href: 'https://twitter.com', icon: socialIcons.twitter },
  ];

  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <div className={s.footerGrid}>
          <div className={s.brandCol}>
            <Logo variant="light" />
            <p className={s.tagline}>{section.tagline}</p>
            <div className={s.socialRow}>
              {socialLinks.map((sl) => (
                <a key={sl.label} href={sl.href} target="_blank" rel="noopener noreferrer" aria-label={sl.label} className={s.socialBtn}>
                  <svg className={s.socialIcon} viewBox="0 0 24 24">
                    <path d={sl.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={s.colHeading}>{section.columns.product.heading}</h3>
            <ul className={s.linkList}>
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={s.footerLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={s.colHeading}>{section.columns.company.heading}</h3>
            <ul className={s.linkList}>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={s.footerLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={s.colHeading}>{section.columns.legal.heading}</h3>
            <ul className={s.linkList}>
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={s.footerLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={s.footerBottom}>
          <p className={s.copyright}>
            {section.copyright.replace('{year}', String(new Date().getFullYear()))}
          </p>
          <p className={s.taglineBottom}>{section.bottomTagline}</p>
        </div>
      </div>
    </footer>
  );
}
