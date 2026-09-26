import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone", // Crucial for DigitalOcean App Platform
  env: {
    baseUrl: "http://localhost:5165/api",
  },
};

export default nextConfig;
