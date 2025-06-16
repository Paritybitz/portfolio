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

  distDir: 'dist',

}

//export default nextConfig
module.exports = nextConfig

