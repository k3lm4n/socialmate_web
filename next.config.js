/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
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
