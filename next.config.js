/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ['www.wine.com.br', 'img.wine.com.br']
  }
}

module.exports = nextConfig
