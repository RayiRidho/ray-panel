import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["utfs.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "9rfjq17jv7.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
