import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '@/locales/en/translation.json';
import esTranslation from '@/locales/es/translation.json';

if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    lng: 'es',
    fallbackLng: 'en',
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18next;
