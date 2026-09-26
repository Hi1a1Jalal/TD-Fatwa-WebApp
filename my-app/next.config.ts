import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // Crucial for DigitalOcean App Platform
};

export default nextConfig;
