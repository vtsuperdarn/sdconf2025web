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
};

export default nextConfig;
