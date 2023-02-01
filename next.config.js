/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')({
  dest: 'public'
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}
const isProd = process.env.NODE_ENV === 'production'

module.exports = isProd
  ? withPWA(nextConfig, (this.dest = 'public'))
  : nextConfig
