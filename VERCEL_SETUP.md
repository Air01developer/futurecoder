Vercel Quick Walkthrough

1. Sign in to https://vercel.com with your GitHub account.
2. Click "New Project" → Import Git Repository → Choose the `kidscode-platform` repository.
3. During import, Vercel should auto-detect Next.js. Verify settings:
   - Framework Preset: Next.js
   - Root Directory: (leave blank if `platform-app` is the repo root)
   - Build Command: `npm run build`
   - Install Command: `npm install`
4. Under "Environment Variables" add keys for Preview and Production:
   - `OPENAI_API_KEY` = <your openai key>
   - `DATABASE_URL` = <your postgres/supabase url>
5. Click "Deploy". Vercel will build and publish a live URL.

Serverless functions

- Next.js API routes (files under `pages/api/`) are deployed as serverless functions on Vercel.
- Use these to securely call AI APIs and keep secrets server-side.

Custom domain

- Add a custom domain in the Vercel dashboard and follow the DNS steps.
