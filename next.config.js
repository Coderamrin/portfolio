/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "media.dev.to",
      "dev-to-uploads.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
