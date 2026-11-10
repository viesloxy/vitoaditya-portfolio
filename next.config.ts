import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static portfolio — cacheComponents (dynamicIO) is not needed here and
  // would force Suspense boundaries around trivial dynamic reads (new Date() in footer).
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
