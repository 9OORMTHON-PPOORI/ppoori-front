/** @type {import('next').NextConfig} */
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

const nextConfig = {
  images: {
    domains: ["*", "loremflickr.com"],
    minimumCacheTTL: 31536000,
    formats: ["image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/api/policy/:path*",
        destination: `${process.env.NEXT_PUBLIC_POLICY}/:path*`,
      },
      {
        source: "/api/recommend/:path*",
        destination: `${process.env.NEXT_PUBLIC_RECOMMEND}/:path*`,
      },
    ];
  },
};

export default withPWA(nextConfig);
