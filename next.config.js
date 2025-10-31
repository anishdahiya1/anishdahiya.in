/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable outputFileTracing by default for local builds to keep parity with
  // future Next.js expectations, but disable it on Vercel deployments where
  // we've observed micromatch recursion (RangeError) during trace collection.
  // Vercel exposes the `VERCEL` env var in its build environment, so we
  // detect that and turn tracing off there as a pragmatic workaround.
  // Long-term: remove this conditional and enable tracing once the root
  // cause is fixed or when Next provides targeted excludes in your version.
  outputFileTracing: !process.env.VERCEL,
}
module.exports = nextConfig
