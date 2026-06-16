# Free Hosting & Custom Domain Deployment Guide

This guide explains how to host your website **100% free of charge** (no monthly server costs, no hosting bills) and connect it to your custom domain **`abdulghaffarbugti.org`**. 

We recommend **Vercel** or **Netlify** for hosting React + Vite applications, as they offer free tiers with generous bandwidth, automatic global CDN networks, and free SSL (HTTPS) certificates.

---

## Option 1: Deploying Free on Vercel (Recommended)

Vercel is the easiest platform to host Vite+React applications. It integrates directly with GitHub.

### Step 1: Push Code to GitHub
1. Create a free account on [GitHub](https://github.com/) if you don't have one.
2. Create a new repository (can be Private or Public) named `abdulghaffar-bugti`.
3. Push the files in this directory to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/abdulghaffar-bugti.git
   git push -u origin main
   ```

### Step 2: Import Project to Vercel
1. Go to [Vercel](https://vercel.com/) and sign up for a free **Hobby** account using your GitHub account.
2. Click **Add New** -> **Project**.
3. Import your `abdulghaffar-bugti` repository from the list.
4. Vercel will automatically detect that the project is built with **Vite** and **React**.
5. Leave the build settings at their defaults and click **Deploy**.
6. Within a minute, your site will be live on a subdomain like `abdulghaffar-bugti.vercel.app`.

### Step 3: Link Custom Domain `abdulghaffarbugti.org`
1. In the Vercel Dashboard, go to your project, then click **Settings** -> **Domains**.
2. Type **`abdulghaffarbugti.org`** in the box and click **Add**.
3. Choose the option to redirect `www.abdulghaffarbugti.org` to `abdulghaffarbugti.org` (recommended).
4. Vercel will show that the configuration is **Invalid** because you need to update your domain DNS settings.

### Step 4: Configure DNS Records at Domain Registrar
Log in to the account where you purchased your domain `abdulghaffarbugti.org` (e.g. Namecheap, GoDaddy, Cloudflare, Domain.com) and find the **DNS Management** / **Advanced DNS** page. 

Add the following two records:

| Record Type | Host / Name | Value / Destination | TTL | Note |
| :--- | :--- | :--- | :--- | :--- |
| **A Record** | `@` | `76.76.21.21` | Automatic / 30 min | Points the root domain to Vercel |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Automatic / 30 min | Points the www version to Vercel |

*Note: Delete any existing "A Records" or "CNAME Records" that point to old parking pages.*

5. Once you save the DNS records, return to Vercel and click **Refresh**. It can take from 5 minutes to 2 hours for DNS updates to propagate globally.
6. Once validated, Vercel will automatically generate a free SSL certificate, and your site will be live at `https://abdulghaffarbugti.org`.

---

## Option 2: Deploying Free on Netlify

Netlify is another excellent free option.

### Step 1: Import to Netlify
1. Go to [Netlify](https://www.netlify.com/) and sign up for a free account via GitHub.
2. Click **Add new site** -> **Import an existing project** -> **GitHub**.
3. Choose your `abdulghaffar-bugti` repository.
4. Under **Build settings**, verify the build command is `npm run build` and publish directory is `dist`.
5. Click **Deploy abdulghaffar-bugti**.

### Step 2: Link Custom Domain `abdulghaffarbugti.org`
1. Go to **Site settings** -> **Domain management** -> **Domains** -> **Add custom domain**.
2. Enter **`abdulghaffarbugti.org`** and click **Save**.
3. Update your DNS settings at your domain registrar with Netlify’s details:

| Record Type | Host / Name | Value / Destination |
| :--- | :--- | :--- |
| **A Record** | `@` | `104.198.14.52` |
| **CNAME** | `www` | `abdulghaffar-bugti.netlify.app.` (replace with your Netlify app URL) |

4. Netlify will verify and issue a free Let's Encrypt SSL certificate.

---

## Troubleshooting Routing (SPA 404 errors)
Single Page Applications (React SPAs) load all pages through `index.html`. If a user goes directly to `abdulghaffarbugti.org/columns` and refreshes, a standard server will return a 404.
- **Vercel**: We have pre-configured `vercel.json` in this directory to handle routing automatically.
- **Netlify**: We have pre-configured `public/_redirects` to handle this.
No additional actions are needed; the configurations are ready!
