/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  transpilePackages: ["@workspace/ui"],
  // next 16.2 cannot drive the TypeScript 7 compiler API; the CLI path is
  // required for `next build` to run type validation. Remove once next
  // supports TypeScript 7 natively.
  experimental: { useTypeScriptCli: true },
};

export default nextConfig;
