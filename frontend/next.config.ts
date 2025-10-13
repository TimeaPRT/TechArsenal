import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Remove swcMinify as it's now default in newer Next.js versions
  // Remove optimizeCss as it's causing conflicts
  output: 'standalone', // Recommended for production
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        lightningcss: false,
        'lightningcss-node': false,
        '../lightningcss': false,
        '../pkg': false
      }
    }
    return config
  },
  transpilePackages: ['lightningcss'], // Add this line
}

export default nextConfig