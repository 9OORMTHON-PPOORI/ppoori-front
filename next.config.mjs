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
};

export default withPWA(nextConfig);
