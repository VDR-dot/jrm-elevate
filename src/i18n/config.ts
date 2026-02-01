import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import sl from './messages/sl.json';
import en from './messages/en.json';
import de from './messages/de.json';
import hr from './messages/hr.json';

export const languages = [
  { code: 'sl', name: 'SL', fullName: 'Slovenščina' },
  { code: 'en', name: 'EN', fullName: 'English' },
  { code: 'de', name: 'DE', fullName: 'Deutsch' },
  { code: 'hr', name: 'HR', fullName: 'Hrvatski' },
] as const;

export type LanguageCode = typeof languages[number]['code'];

i18n
  .use(initReactI18next)
  .init({
    resources: {
      sl: { translation: sl },
      en: { translation: en },
      de: { translation: de },
      hr: { translation: hr },
    },
    lng: 'sl', // default language
    fallbackLng: 'sl',
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
