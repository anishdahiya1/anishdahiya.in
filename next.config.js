/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // NOTE: Next.js will require outputFileTracing in the next major release.
  // Enable it to avoid the startup warning and be compatible with future Next.js.
  // If you previously disabled this to work around a platform bug, re-enable
  // it and only disable temporarily if you have a reproducible issue.
  outputFileTracing: true,
}
module.exports = nextConfig
