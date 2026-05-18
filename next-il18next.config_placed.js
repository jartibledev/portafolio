// next-i18next.config.js
const i18nConfig = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr', 'de'],
  },
  localePath: typeof window === 'undefined' 
    ? './public/locales' 
    : '/locales',
};

export default i18nConfig;