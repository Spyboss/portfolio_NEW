/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_OUTPUT === 'export';

const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
    },
    {
      protocol: 'https',
      hostname: 'img.shields.io',
    },
  ],
  ...(isStaticExport ? { unoptimized: true } : {}),
};

const nextConfig = {
  reactStrictMode: true,
  images,
  trailingSlash: true,
  ...(isStaticExport ? { output: 'export' } : {}),
};

module.exports = nextConfig;
