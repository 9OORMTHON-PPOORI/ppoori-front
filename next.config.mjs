/** @type {import('next').NextConfig} */
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

/**
 * HTTPS로 서빙되는 페이지에서 HTTP 백엔드를 직접 호출하면 Mixed Content로 차단된다.
 * 브라우저는 같은 출처의 /api/* 로만 요청하고, 서버가 실제 백엔드로 프록시한다.
 *
 * 오리진은 서버에서 실행되는 rewrites에서만 쓰이므로 NEXT_PUBLIC_ 접두사를 붙이지 않는다.
 * 접두사를 붙이면 백엔드 주소가 클라이언트 번들에 그대로 박혀 프록시를 둔 의미가 사라진다.
 */
const API_PROXY_TARGETS = [
  { source: "/api/policy/:path*", origin: process.env.POLICY_API_ORIGIN },
  { source: "/api/recommend/:path*", origin: process.env.RECOMMEND_API_ORIGIN },
];

const isHttpOrigin = (value) =>
  typeof value === "string" && /^https?:\/\//.test(value);

const nextConfig = {
  images: {
    domains: ["*", "loremflickr.com"],
    minimumCacheTTL: 31536000,
    formats: ["image/webp"],
  },
  async rewrites() {
    const missing = API_PROXY_TARGETS.filter(
      ({ origin }) => !isHttpOrigin(origin)
    );

    // 오리진이 비어 있으면 destination이 "undefined/:path*"가 되어 빌드가 실패한다.
    // 환경변수 없이 클론한 사람도 빌드할 수 있도록 해당 rewrite만 건너뛰고 알린다.
    if (missing.length > 0) {
      console.warn(
        `[next.config] API 프록시 비활성화: ${missing
          .map(({ source }) => source)
          .join(", ")} — .env.example을 복사해 오리진을 채우면 활성화됩니다.`
      );
    }

    return API_PROXY_TARGETS.filter(({ origin }) => isHttpOrigin(origin)).map(
      ({ source, origin }) => ({
        source,
        destination: `${origin.replace(/\/+$/, "")}/:path*`,
      })
    );
  },
};

export default withPWA(nextConfig);
