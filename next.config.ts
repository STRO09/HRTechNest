import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    MONGODB_URI: process.env.MONGODB_URI, // Expose MONGODB_URI to the client
  },
};

export default nextConfig;
