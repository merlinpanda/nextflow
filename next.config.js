/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/ai',
        destination: 'https://www.llama2.ai/api' // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig
