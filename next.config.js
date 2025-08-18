/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allow all https images
      },
      {
        protocol: 'http',
        hostname: '**', // allow all http images (if needed)
      },
    ],
  },
};

module.exports = nextConfig;
