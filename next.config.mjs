/** @type {import('next').NextConfig} */
import i18nConfig from './next-i18next.config.js';
const nextConfig = {
  /* config options here */
  
  reactCompiler: true,
  compiler:{
    styledComponets: true,
  },
  transpilePackages: ['styled-components'],
  i18n: i18nConfig.i18n,
};

export default nextConfig;
