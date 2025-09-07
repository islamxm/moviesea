import type { NextConfig } from "next";
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   domains: ['image.tmdb.org'],
  // },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
};

export default nextConfig;
