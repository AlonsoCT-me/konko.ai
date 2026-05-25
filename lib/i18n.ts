import es from '@/locales/es/common.json';
import en from '@/locales/en/common.json';

export type Locale = 'es' | 'en';

const translations = { es, en } as const;

export function getTranslations(locale: Locale = 'es') {
  return translations[locale];
}

export type Translations = ReturnType<typeof getTranslations>;
