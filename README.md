# 🐺 WebbyWolf Landing Page

A modern, animated landing page built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **TypeScript**.

---

## ✨ Features
- 🚀 Hero section with GSAP and Framer Motion animations  
- 🖌️ Services & hover effects with Framer Motion  
- 📨 Contact Form with validation using `react-hook-form + zod`  
- 💌 Newsletter subscription form  
- 📱 Fully responsive and mobile-friendly  
- 🎨 Tailwind CSS for utility-first styling  
- ⚡ Optimized production build with Next.js  

---

## 🛠️ Tech Stack
- Next.js 14.x + React 18  
- TypeScript  
- Tailwind CSS  
- Framer Motion & GSAP  
- React Query  
- Lucide Icons  

---

## 📂 Project Structure
public/ # Static assets
src/
├─ components/ # Hero, Services, ContactForm, NewsletterForm, etc.
├─ hooks/ # Custom hooks (use-toast, use-mobile)
├─ pages/ # page.tsx, Index.tsx, NotFound.tsx
├─ app/ # layout.tsx
├─ lib/ # utilities
└─ components/ui/ # Button, Input, Toaster, Tooltip, etc.
tsconfig.json
package.json
tailwind.config.ts
.next/

markdown
Copy code

---

## ⚡ Known Issues / Build Errors
- ❌ TypeScript errors prevent `next build` if files like:
  - `@/components/ui/toaster`
  - `@/components/ui/sonner`
  - `@/components/ui/button`
  - `@/components/ui/tooltip`
  are missing. **Solution:** Remove or comment out missing imports temporarily.  

- ❌ Large files in `node_modules` (like `next-swc.node` > 100MB) cannot be pushed to GitHub. **Solution:** Add to `.gitignore`.  

- ❌ LF/CRLF warnings in Windows. **Solution:**  
  bash
git config --global core.autocrlf true
❌ Framer Motion className type errors: use motion.div with as="div" or wrap with div.

💻 Setup & Run Locally
bash
Copy code
git clone https://github.com/YashMishra17/WebbyWolf.git
cd WebbyWolf
npm install
npm run dev
Open http://localhost:3000 🌐

🏗️ Build & Start
bash
Copy code
npm run build      # Production build
npm run start      # Run production
npm run lint       # Check TypeScript + ESLint
🌐 Deployment
✅ Vercel (Recommended)
Go to Vercel

Import your GitHub repo

Set framework to Next.js

Deploy

⚠️ Type errors or missing UI components may block deploy. Comment out imports if necessary.

GitHub Pages (Static Export)
bash
Copy code
npm run export
Deploy out/ folder.

📝 Git Notes
.gitignore recommended:

lua
Copy code
node_modules/
.next/
out/
.DS_Store
.env.local
.env
.vscode/
Push main branch:

bash
Copy code
git add .
git commit -m "Initial commit"
git push --set-upstream origin main
Use Git LFS for large files: https://git-lfs.github.com

🎨 Fonts & Styles
css
Copy code
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto+Condensed:wght@700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root{
  --color-brand: #1959AC;
  --color-brand-dark: #0546D2;
  --color-copy: #222222;
}

body {
  font-family: Inter, system-ui, Roboto, Arial;
  color: var(--color-copy);
  background: #ffffff;
}

.h1-design {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.btn-brand {
  background: var(--color-brand);
  color: #fff;
}
.btn-brand:hover {
  background: var(--color-brand-dark);
}

.hero-diagonal {
  clip-path: polygon(0 0, 68% 0, 100% 100%, 0% 100%);
}

.bg-wave {
  position: absolute;
  inset: -10% 0 auto 0;
  pointer-events: none;
  opacity: 0.06;
}
📦 Components Notes
Hero.tsx, Services.tsx, ContactForm.tsx, NewsletterForm.tsx implemented

Use <motion.div> correctly to avoid className TS errors

Missing UI components like Toaster, Button, Tooltip can be mocked with simple <div> temporarily

⚠️ Quick Fixes
To ignore type errors and force deploy:

json
Copy code
// tsconfig.json
{
  "compilerOptions": {
    "strict": false,
    "noEmit": true
  }
}
Comment missing imports to pass next build

📄 License
MIT License

markdown
Copy code

This README covers:

- Project structure  
- Setup & run commands  
- Deployment instructions  
- Fonts & styles  
- Known errors and how to bypass them  
- Git/GitHub instructions  
- UI component notes  

It’s all in **one page with emojis** for readability.  

I can also make a **“Vercel-focused quick deployment version”** that tells you exactly how to deploy even with TS errors if you want. Do you want me to do that?






