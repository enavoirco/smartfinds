# smartfinds — Public Brand & Content Website

**smartfinds** is a clean, minimal, production-ready website built with Next.js (App Router), TypeScript, and Tailwind CSS. It serves as an independent public company and content website designed for Pinterest Developer API registration and general brand presence.

---

## 🚀 Features

- **Modern & Minimalist Design**: Clean UI with high-contrast typography, generous whitespace, and responsive layouts.
- **Truthful & Honest Branding**: Zero fake statistics, awards, false claims, or exaggerated numbers.
- **App Router & Static Generation**: Fast page loads and automatic static optimization (`/`, `/about`, `/privacy`, `/affiliate-disclosure`).
- **SEO & Metadata**: Pre-configured page titles, meta descriptions, Open Graph data, and SVG favicon.
- **Vercel Ready**: Configured for 1-click free deployment to Vercel.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

---

## 📋 Values to Replace Before Deployment

Before deploying to production or submitting for API approval, replace the placeholder in your project files with your actual email address:

- **Placeholder to Replace**: `[ADD YOUR EMAIL HERE]`
- **Files containing placeholder**:
  1. `components/Footer.tsx`
  2. `app/page.tsx`
  3. `app/privacy/page.tsx`
  4. `app/affiliate-disclosure/page.tsx`

---

## 💻 Local Development Instructions

### Prerequisites
- Node.js 18.x or higher
- npm (or yarn / pnpm)

### Steps

1. **Clone or navigate to the project repository**:
   ```bash
   cd cool-bohr
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View in browser**:
   Open [http://localhost:3000](http://localhost:3000) to explore the site locally.

5. **Build & verify production output**:
   ```bash
   npm run build
   ```

---

## ☁️ Deployment Instructions (Vercel)

### Option A: Deploying via Vercel Dashboard (Recommended)

1. Push your code repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `smartfinds` repository.
4. Leave the default framework preset as **Next.js**.
5. Click **Deploy**. Vercel will build and host your site for free on a `*.vercel.app` domain.

### Option B: Deploying via Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment command from the project root:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to deploy your project.

---

## 📄 License & Terms

This project is created for **smartfinds**. All rights reserved.
