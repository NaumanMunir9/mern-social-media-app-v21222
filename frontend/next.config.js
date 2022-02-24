/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "cdn-icons.flaticon.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
};

module.exports = nextConfig;
