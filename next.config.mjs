/** @type {import('next').NextConfig} */
import nextI18NextConfig from './next-i18next.config.js';
const { i18n } = nextI18NextConfig;

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n,
};

export default nextConfig;
