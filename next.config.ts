import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Add 'cdn.sanity.io' here to allow Sanity images
  },
};

export default nextConfig;
