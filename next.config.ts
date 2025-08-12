import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig:NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
