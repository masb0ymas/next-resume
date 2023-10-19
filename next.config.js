/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  env: {
    APP_NAME: process.env.APP_NAME,
    APP_PREFIX: process.env.APP_PREFIX,
  },

  output: "standalone",
};

module.exports = nextConfig;
