/** @type {import('next').NextConfig} */
const nextConfig = {

  output: 'export',

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  assetPrefix: '/portfolio',
  basePath: '/portfolio',

  distDir: 'dist',

}

export default nextConfig

