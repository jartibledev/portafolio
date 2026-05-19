import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const locales = ['es', 'en', 'fr', 'de'];
  
  // 🛡️ ESCUDO: Si 'locale' llega vacío o no está en la lista, forzamos "es"
  const currentLocale = locales.includes(locale) ? locale : 'es';

  return {
    locale: currentLocale,
    // Cargamos el archivo JSON de forma segura con el require relativo que ya acepta tu entorno
    messages: require(`../../messages/${currentLocale}.json`)
  };
});