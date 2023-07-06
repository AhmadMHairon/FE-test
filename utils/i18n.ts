import en from '../public/locales/en/common.json';
import ar from '../public/locales/ar/common.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next)
    .init({
        resources: {
            en: en,
            ar: ar,
        },
        fallbackLng: 'ar',
        lng: 'ar',
    });

export { i18n };
