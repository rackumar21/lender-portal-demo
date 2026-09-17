/** @type {import('next').NextConfig} */

// GitHub Pages serves this repo from a subpath, so the asset prefix has to match.
// Build for Pages with: GITHUB_PAGES=true pnpm exec next build
const isGithubPages = process.env.GITHUB_PAGES === "true"
const repo = "lender-portal-demo"

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
