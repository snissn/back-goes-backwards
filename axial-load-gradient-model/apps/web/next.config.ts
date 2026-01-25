import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import path from "node:path";

const withMDX = createMDX({
  extension: /\.mdx?$/
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    externalDir: true
  },
  transpilePackages: ["@algm/data", "@algm/core", "@algm/content"],
  turbopack: {
    root: path.resolve(__dirname, "..", "..")
  }
};

export default withMDX(nextConfig);
