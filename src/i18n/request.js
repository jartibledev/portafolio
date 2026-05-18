import { getRequestConfig } from 'next-intl/server';

const locales = ['es', 'en', 'fr', 'de'];

export default getRequestConfig(async ({ locale }) => {
  // Protección por si llega undefined o un idioma no soportado
  const currentLocale = locales.includes(locale) ? locale : 'es';

  return {
    locale: currentLocale, // <-- ¡ESTA LÍNEA ES OBLIGATORIA AHORA!
    messages: (await import(`../../messages/${currentLocale}.json`)).default
  };
});