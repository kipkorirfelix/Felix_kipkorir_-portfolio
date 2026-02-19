import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY_OWNER?.toLowerCase() ?? "";
const isUserOrOrgPagesRepo = repo.toLowerCase() === `${owner}.github.io`;
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const shouldUseRepoBasePath = isGitHubActions && repo.length > 0 && !isUserOrOrgPagesRepo;

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: shouldUseRepoBasePath ? `/${repo}` : "",
  assetPrefix: shouldUseRepoBasePath ? `/${repo}/` : "",
};

export default nextConfig;
