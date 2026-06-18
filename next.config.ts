import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    const wwwHost = [{ type: "host" as const, value: "www.kreasi-studio.my.id" }];
    // Canonical apex: www -> kreasi-studio.my.id (301).
    // Root and sub-paths split out because "/:path*" leaves ":path*" literal on the empty (root) match.
    return [
      {
        source: "/",
        has: wwwHost,
        destination: "https://kreasi-studio.my.id/",
        statusCode: 301,
      },
      {
        source: "/:path+",
        has: wwwHost,
        destination: "https://kreasi-studio.my.id/:path+",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;

// Enables Cloudflare bindings (R2, KV, etc.) during `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
