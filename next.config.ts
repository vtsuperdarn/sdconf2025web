import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
