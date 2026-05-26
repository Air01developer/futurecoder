# Run this script after installing Git and opening PowerShell in the platform-app folder.

if (-not (Test-Path .git)) {
    git init
}

git add .

$hasCommit = $false
try {
    git rev-parse --verify HEAD >$null 2>&1
    $hasCommit = $true
} catch {
    $hasCommit = $false
}

if (-not $hasCommit) {
    git commit -m "Initial prototype for AI-powered frontend learning platform"
} else {
    git diff --cached --quiet
    if ($LASTEXITCODE -ne 0) {
        git commit -m "Update project files"
    } else {
        Write-Host "No staged changes to commit."
    }
}

$remoteUrl = $null
try {
    $remoteUrl = git remote get-url origin 2>$null
} catch {
    $remoteUrl = $null
}

if (-not $remoteUrl) {
    $remoteUrl = Read-Host "Enter GitHub repository URL (ssh or https)"
    git remote add origin $remoteUrl
}

git push -u origin main

if (Get-Command vercel -ErrorAction SilentlyContinue) {
    Write-Host "Vercel CLI is installed. You can deploy with: vercel --prod"
} else {
    Write-Host "Vercel CLI is not installed. Install it to deploy from the terminal, or use the Vercel web dashboard."
}
Write-Host "If you need to rename the branch on GitHub, use: git push -u origin main"
