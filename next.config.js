const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    BRAND: process.env.BRAND,
    URL_ENV: process.env.URL_ENV,
    AXIOS_TIMEOUT: process.env.AXIOS_TIMEOUT,
    LOCAL_STORAGE_SESSION: process.env.LOCAL_STORAGE_SESSION,
  },
  output: 'standalone',
})
