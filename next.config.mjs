/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — every route builds to /out as pre-rendered HTML.
  // Works on Cloudflare Pages, Netlify, GitHub Pages, S3, any static host.
  output: "export",

  // Cloudflare Pages does not run Next's Image Optimization API.
  images: {
    unoptimized: true,
  },

  // Trailing slash keeps URLs consistent across static hosts.
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
