const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // distDir: 'build',
  output: 'standalone',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@'] = path.resolve(__dirname);
    }
    return config;
  },
};

module.exports = nextConfig;
