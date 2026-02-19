Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if (-not (Test-Path "package.json")) {
  throw "Run this command from the repository root."
}

$remoteName = "origin"
$branchName = "gh-pages"
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

Write-Host "Building static site..."
npm run build

if (-not (Test-Path "out")) {
  throw "Build did not produce an 'out' directory."
}

# GitHub Pages expects this file for folders/underscored assets.
New-Item -Path "out/.nojekyll" -ItemType File -Force | Out-Null

# Preserve custom domain if configured in repository root.
if (Test-Path "CNAME") {
  Copy-Item -Path "CNAME" -Destination "out/CNAME" -Force
}

$remoteUrl = git remote get-url $remoteName
if ([string]::IsNullOrWhiteSpace($remoteUrl)) {
  throw "Could not resolve git remote '$remoteName'."
}

Push-Location "out"
try {
  if (Test-Path ".git") {
    Remove-Item ".git" -Recurse -Force
  }

  git init
  git checkout -B $branchName
  git add -A
  git `
    -c user.name="github-pages-deploy" `
    -c user.email="github-pages-deploy@users.noreply.github.com" `
    commit -m "deploy: $timestamp"
  git remote add $remoteName $remoteUrl
  git push --force $remoteName "${branchName}:$branchName"
}
finally {
  Pop-Location

  if (Test-Path "out/.git") {
    Remove-Item "out/.git" -Recurse -Force
  }
}

Write-Host "Deployment completed: pushed static files to '$branchName'."
