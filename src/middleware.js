import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 1. Una lista de todos los idiomas que soportas en tus JSON
  locales: ['es', 'en', 'fr', 'de'],

  // 2. Idioma por defecto si alguien entra a "/" directamente
  defaultLocale: 'es',

  // 3. Controla si el idioma por defecto lleva prefijo en la URL (ej: /es/home_page)
  // Al poner 'always', blindas las rutas para que Next.js no se confunda en los refrescos
  localePrefix: 'always'
});

export const config = {
  // Matcher obligatorio para que el middleware actúe en las rutas de tu app
  matcher: ['/', '/(de|en|es|fr)/:path*']
};