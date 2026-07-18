/** @type {import('next').NextConfig} */

// Static export is opt-in via EXPORT=true (used by the GitHub Pages workflow),
// so local dev, `next start`, and Playwright keep their normal server behavior.
const isExport = process.env.EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    // Content validation is a separate step; do not block builds on lint.
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  ...(isExport
    ? {
        output: "export",
        trailingSlash: true,
        basePath: basePath || undefined,
      }
    : {}),
};

export default nextConfig;
