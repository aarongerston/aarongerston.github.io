import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // NECESSARY FOR DEPLOYMENT, but REMOVE FOR LOCAL DEV
  images: {
    unoptimized: true, // <<< CRUCIAL
  },
};

export default nextConfig;
