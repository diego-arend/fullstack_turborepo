import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/product",
        destination: "http://localhost:3002/product",
      },
      {
        source: "/product/:path*",
        destination: `http://localhost:3002/product/:path*`,
      },
      {
        source: "/user",
        destination: "http://localhost:3004/user",
      },
      {
        source: "/user/:path*",
        destination: `http://localhost:3004/user/:path*`,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
