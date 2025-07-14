/* eslint-env node */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is your original webpack config. It stays the same.
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));
    tsRules.forEach(rule => {
      rule.include = undefined;
    });
    return config;
  },

  // Your original config below.
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  
  images: {
    // The `unoptimized: true` line has been REMOVED to re-enable Vercel's image optimization.
    // Vercel fully supports this, so we should use it for better performance.
    
    // Your remotePatterns config is correct and stays.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;