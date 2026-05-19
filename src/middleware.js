// src/middleware.js
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 1. Una lista de todos los idiomas que soportas
  locales: ['es', 'en', 'fr'],
  
  // 2. El idioma que se usará si el usuario entra a la web a secas (localhost:3000)
  defaultLocale: 'es'
});

export const config = {
  // 3. ¡IMPORTANTE! Este matcher le dice al middleware que intercepte 
  // todas las páginas, incluyendo las nuevas como /en/home_page
  matcher: [
    // Intercepta la raíz y todas las rutas que empiecen por tus idiomas
    '/', 
    '/(es|en|fr)/:path*',
    
    // Si usas páginas dinámicas profundas, esto evita que se rompa
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};