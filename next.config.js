/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    // styledComponents: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
};

module.exports = nextConfig;
