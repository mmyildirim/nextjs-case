/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    API_URL: process.env.NEXT_PUBLIC_API_URL || "https://fakestoreapi.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img-jeanslab.mncdn.com",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
