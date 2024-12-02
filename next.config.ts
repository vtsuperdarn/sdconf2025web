import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/workshop', //This makes the app availiable at localhost:3000/workshop, which we will be using proxypass to make availiable at superdarn.org/workshop
  assetPrefix: '/workshop', //Ensures that static elements are loaded relative to the basePath 
  trailingSlash: true, //This makes it so that the url /workshop is the same as /workshop/
  output: "export",
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
