

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.js' // Ruta a tu request.js real
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  reactCompiler: true,
  compiler:{
    styledComponents: true,
  },
  transpilePackages: ['styled-components'],
};

export default withNextIntl(nextConfig);