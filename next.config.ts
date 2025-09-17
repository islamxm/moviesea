import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   domains: ['image.tmdb.org'],
  // },
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en'
  // }
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
    ],
  }
};

export default nextConfig;
