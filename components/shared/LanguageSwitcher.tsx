'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { type Locale } from '@/lib/i18n';

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === locale)!;

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '6px 10px',
          borderRadius: '8px',
          border: '1px solid #e5e5e5',
          background: 'transparent',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: 500,
          color: '#525252',
          transition: 'background 0.15s, color 0.15s, border-color 0.15s',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = '#f5f5f5';
          (e.currentTarget as HTMLButtonElement).style.color = '#0a0a0a';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
          (e.currentTarget as HTMLButtonElement).style.color = '#525252';
        }}
      >
        <span style={{ fontSize: '14px' }}>{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown
          style={{
            width: '12px',
            height: '12px',
            transition: 'transform 0.2s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {open && (
        <div
          role="listbox"
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: 0,
            minWidth: '110px',
            background: '#ffffff',
            border: '1px solid #e5e5e5',
            borderRadius: '10px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
            overflow: 'hidden',
            zIndex: 100,
          }}
        >
          {LANGUAGES.map((lang) => {
            const isActive = lang.code === locale;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isActive}
                onClick={() => { setLocale(lang.code); setOpen(false); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: '100%',
                  padding: '9px 14px',
                  border: 'none',
                  background: isActive ? '#f5f5f5' : 'transparent',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#0a0a0a' : '#525252',
                  textAlign: 'left',
                  transition: 'background 0.12s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = '#fafafa';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                }}
              >
                <span style={{ fontSize: '14px' }}>{lang.flag}</span>
                <span>{lang.label}</span>
                {isActive && (
                  <svg style={{ marginLeft: 'auto', width: '12px', height: '12px', color: '#C9A84C' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
