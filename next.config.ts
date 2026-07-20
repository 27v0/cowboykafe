import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/qr",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
