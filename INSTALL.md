# Setup and Deployment Guide

This project requires Node.js, npm, and Vercel CLI before you can deploy.

## 1. Install Node.js and npm

1. Open your browser and go to https://nodejs.org/
2. Download the LTS installer for Windows.
3. Run the installer and accept the defaults.
4. After installation, open PowerShell and verify:
   ```powershell
   node --version
   npm --version
   ```

## 2. Install Vercel CLI

In PowerShell:

```powershell
npm install -g vercel
```

Verify installation:

```powershell
vercel --version
```

## 3. Install project dependencies

From the project folder:

```powershell
cd "f:\web d\Projects\udemy project part 1\platform-app"
npm install
```

## 4. Deploy to Vercel

If you already have a GitHub repo and Vercel account:

```powershell
vercel login
.\deploy-vercel.ps1
```

If you need to initialize git and push first, use:

```powershell
.\upload-to-github.ps1
```

Then deploy:

```powershell
.\deploy-vercel.ps1
```

## 5. Notes

- The app uses `pages/api/ai-proxy.ts`; set `OPENAI_API_KEY` in Vercel environment variables.
- If you want a custom domain, add it in the Vercel dashboard after deployment.
