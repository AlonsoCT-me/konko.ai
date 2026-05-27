import esHome from '@/locales/es/home.json';
import enHome from '@/locales/en/home.json';
import esAbout from '@/locales/es/about-us.json';
import enAbout from '@/locales/en/about-us.json';

export type Locale = 'es' | 'en';

const translations = {
  es: { home: esHome, about: esAbout },
  en: { home: enHome, about: enAbout },
} as const;

export function getTranslations(locale: Locale = 'es') {
  return translations[locale].home;
}

export function getAboutTranslations(locale: Locale = 'es') {
  return translations[locale].about;
}

export type HomeTranslations = ReturnType<typeof getTranslations>;
export type AboutTranslations = ReturnType<typeof getAboutTranslations>;
