/** @type {import('next').NextConfig} */

// On GitHub Pages the site is served from https://rahilop.github.io/profile,
// so it needs a basePath. Locally (and in `next dev`) it is served from root.
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGithubPages ? '/profile' : ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  env: {
    // exposed to the client so raw <a href> links can be basePath-aware
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
