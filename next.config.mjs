/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["*", "loremflickr.com"],
    minimumCacheTTL: 31536000,
    formats: ["image/webp"],
  },
};

export default nextConfig;
