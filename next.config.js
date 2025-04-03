/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wdh01.azureedge.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'xtrodes.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 