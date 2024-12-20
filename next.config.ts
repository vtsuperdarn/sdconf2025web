import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vt.edu',
      },
      {
        protocol: 'https',
        hostname: 'nsf.gov',
      },
    ],
  },
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
};

export default nextConfig;
