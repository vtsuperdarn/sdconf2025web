import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/workshop',
  assetPrefix: '/workshop',
  trailingSlash: true,
  output: "export",
  images: {
    //unoptimized: true,
    //loader: 'default',
    //path: '/workshop/_next/image',
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
