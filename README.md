# KidsCode Academy — Platform Prototype

This repository contains a lightweight prototype of an AI-powered frontend learning platform inspired by W3Schools and modern EdTech design.

Technologies:
- Next.js (React)
- Tailwind CSS
- Framer Motion (animations)

Prerequisites:
- Node.js and npm installed
- Git installed

Quick start:

```bash
cd "f:\web d\Projects\udemy project part 1\platform-app"
npm install
npm run dev
```

Open http://localhost:3000 to view the prototype.

What this prototype includes:
- Landing page with hero, features, and interactive playground
- Simple client-side playground (iframe-based)
- Component skeletons for building dashboard, AI chat, and projects

Next steps:
- Add authentication (Clerk, Firebase)
- Integrate OpenAI / Gemini via server-side endpoints
- Replace iframe playground with Sandpack or Monaco Editor
- Implement backend (Node/Nest, Postgres) for progress, courses, and certificates
- Add gamification and certificates generation

## Deployment (Vercel)

This project is ready for Vercel deployment (recommended for Next.js). Quick steps:

1. Create a GitHub repository and push the `platform-app/` folder.

```bash
cd "f:\\web d\\Projects\\udemy project part 1\\platform-app"
git init
git add .
git commit -m "Initial prototype"
# create remote on GitHub then:
git remote add origin git@github.com:YOUR_USER/kidscode-platform.git
git push -u origin main
```

2. On Vercel: Import Project → choose the GitHub repo → Framework: Next.js → Build: `npm run build`.

3. Add environment variables in Vercel (Project Settings → Environment Variables):
	- `OPENAI_API_KEY` — your OpenAI API key (used by `/api/ai-proxy`)
	- `DATABASE_URL` — Postgres connection string (if you add a backend)

4. Deploy. Vercel will create preview deployments for branches and a production URL.

### API proxy note

Do NOT call third-party AI APIs directly from client-side code. Use the server-side proxy at `/api/ai-proxy` (already added) and set your API keys in Vercel's environment variables.

If you want, I can prepare a small `pages/api/auth` stub and skeleton DB migrations for Postgres/Supabase next.
