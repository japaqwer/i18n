/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

const nextConfig = nextTranslate({
  webpack: (config) => {

    return config
  }
})

module.exports = nextConfig
