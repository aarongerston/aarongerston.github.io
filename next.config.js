const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // NECESSARY FOR DEPLOYMENT, but REMOVE FOR LOCAL DEV
  images: {
    unoptimized: true, // <<< CRUCIAL
  },
  basePath: isProd ? '' : '', // only set this if you're not using aarongerston.github.io directly
  assetPrefix: isProd ? '' : '', // same here
}

module.exports = nextConfig
