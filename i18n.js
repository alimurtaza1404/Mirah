import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// ✅ Proper JSON imports for ESM
import enTranslation from './public/locates/en/common.json' assert { type: 'json' };
import arTranslation from './public/locates/ar/common.json' assert { type: 'json' };

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
