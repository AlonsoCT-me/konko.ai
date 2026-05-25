'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { type Locale, getTranslations } from '@/lib/i18n';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof getTranslations>;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: getTranslations(locale) }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used inside LocaleProvider');
  return ctx;
}
