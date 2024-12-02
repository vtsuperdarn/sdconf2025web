import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/workshop', //This makes the app availiable at localhost:3000/workshop, which we will be using proxypass to make availiable at superdarn.org/workshop
  assetPrefix: '/workshop', //Ensures that static elements are loaded relative to the basePath 
  trailingSlash: true, //This makes it so that the url /workshop is the same as /workshop/
  output: "export",
  images: {
    loader: 'default',
    path: '/workshop/_next/image',
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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'browsing-topics=(), private-state-token-redemption=(), private-state-token-issuance=()'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
