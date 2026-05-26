# Run this after installing Node.js, npm, and the Vercel CLI.
# From the platform-app folder, run:
#   npm install -g vercel
#   vercel login
#   .\deploy-vercel.ps1

Set-Location $PSScriptRoot

if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "Vercel CLI not found. Install it with: npm install -g vercel"
    exit 1
}

Write-Host "Deploying platform-app to Vercel..."
vercel deploy --prod --confirm
