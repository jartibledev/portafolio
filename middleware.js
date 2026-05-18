import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['es', 'en', 'fr', 'de'],
  defaultLocale: 'es'
});
 
export const config = {
  // Este matcher asegura que intercepte tanto la raíz como cualquier página interna
  matcher: ['/', '/(de|en|es|fr)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};