/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.dribbble.com", "files.cinerama.uz"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400", // 86400 sekund = 1 kun
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
