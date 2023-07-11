/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web-production-5804.up.railway.app/',
        port: '',
        pathname: '/media/**',
      },
    ],
  }
}

module.exports = nextConfig
