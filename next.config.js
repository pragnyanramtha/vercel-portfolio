/* eslint-env node */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your original webpack config is fine.
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));
    tsRules.forEach(rule => {
      rule.include = undefined;
    });
    return config;
  },

  // Standard Next.js settings
  reactStrictMode: true,
  swcMinify: true,

  // Your images config is correct for Vercel (optimization is enabled)
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
  },
};

module.exports = nextConfig;