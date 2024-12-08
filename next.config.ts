import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // List of allowed domains for external images
    domains: ["assets.aceternity.com", "aceternity.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
