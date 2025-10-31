/**
 * Keep output file tracing turned on so the build stays aligned with the
 * expectations of upcoming Next.js releases. If a hosted environment still
 * hits the historical micromatch recursion bug, opt out explicitly by
 * setting OUTPUT_FILE_TRACING_DISABLED=1 for that build.
 */
const disableTracing = process.env.OUTPUT_FILE_TRACING_DISABLED === '1'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracing: !disableTracing,
}

module.exports = nextConfig
