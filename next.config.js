/** @type {import('next').NextConfig} */

/* eslint-disable */
const withAntdLess = require('next-plugin-antd-less')

const lessConfig = withAntdLess({
  lessVarsFilePath: './src/styles/variables.less',
  javascriptEnabled: true,
  webpack(config) {
    return config
  },
})

module.exports = {
  ...lessConfig,
  // reactStrictMode: true,
  env: {
    BRAND: process.env.BRAND,
    URL_ENV: process.env.URL_ENV,
    LOCAL_STORAGE_SESSION: process.env.LOCAL_STORAGE_SESSION,
  },
}
