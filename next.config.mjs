/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler:{
    styledComponets: true,
  },
  transpilePackages: ['styled-components'],
};

export default nextConfig;
