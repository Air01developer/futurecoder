# Run these commands after installing Git and opening PowerShell in the platform-app folder.

# Initialize a new local repository
if (-not (Test-Path .git)) {
    git init
}

# Stage all project files
git add .

# Create the initial commit
if (-z (git log --oneline -1 2>$null)) {
    git commit -m "Initial prototype for AI-powered frontend learning platform"
} else {
    Write-Host "A commit already exists. Skipping initial commit."
}

Write-Host "Repository initialized and files staged."
Write-Host "Add a GitHub remote and push using:"
Write-Host "  git remote add origin git@github.com:YOUR_USER/kidscode-platform.git"
Write-Host "  git push -u origin main"
