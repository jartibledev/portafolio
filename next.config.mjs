/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  /* config options here */
  
  reactCompiler: true,
  compiler:{
    styledComponents: true,
  },
  transpilePackages: ['styled-components'],
};

export default withNextIntl(nextConfig);