/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // disable output file tracing to avoid issues in some build environments
  // (Vercel may hit a micromatch recursion during trace collection)
  outputFileTracing: false,
}
module.exports = nextConfig
