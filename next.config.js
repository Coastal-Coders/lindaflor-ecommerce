/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // remotePatterns: [{ protocol: '', hostname: '', port: '', pathname: '**' }],
  },
  compiler: {
    // styledComponents: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
};

module.exports = nextConfig;
