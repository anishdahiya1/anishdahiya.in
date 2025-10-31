/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Re-enable outputFileTracing (recommended). If Next complains about
  // collecting traces on your deployment platform, we may need to selectively
  // exclude folders — however this Next version does not accept
  // `outputFileTracingExcludes` at the top-level and will warn. If you hit
  // micromatch recursion issues again, we can either temporarily disable
  // tracing or reproduce/debug the root cause in a Linux-like environment.
  outputFileTracing: true,
}
module.exports = nextConfig
