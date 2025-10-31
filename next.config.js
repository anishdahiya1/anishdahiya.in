/**
 * Keep output tracing enabled for local/dev builds so we stay aligned with
 * the Next.js roadmap, but fall back automatically on Vercel where the
 * micromatch recursion bug still appears. You can force-enable tracing in
 * any environment by setting FORCE_OUTPUT_TRACING=1, or opt-out manually by
 * setting OUTPUT_FILE_TRACING_DISABLED=1.
 */
const isVercel = !!process.env.VERCEL
const forceTracing = process.env.FORCE_OUTPUT_TRACING === '1'
const manualDisable = process.env.OUTPUT_FILE_TRACING_DISABLED === '1'
const disableTracing = manualDisable || (isVercel && !forceTracing)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracing: !disableTracing,
}

module.exports = nextConfig
