/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "avatars.dicebear.com",
      },
      {
        protocol: "https",
        hostname: "api.multiavatar.com",
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/discovery",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
