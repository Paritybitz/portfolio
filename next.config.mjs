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

  basePath: '/portfolio',

  distDir: 'dist',

}

export default nextConfig

