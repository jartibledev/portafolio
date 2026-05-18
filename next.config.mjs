/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  
  reactCompiler: true,
  compiler:{
    styledComponets: true,
  },
  transpilePackages: ['styled-components'],
 i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr', 'de'],
  },
};

export default nextConfig;
