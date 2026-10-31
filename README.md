# Flavours by Lakshita — Restaurant Website

A responsive one-page restaurant website built with React + Vite.

## 1. Requirements
- Node.js 18+ (recommended)
- npm

## 2. Run locally
Open this project folder in VS Code, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## 3. Update the menu
Open `src/data/menu.js`. The supplied printed menu has been transcribed into categories and prices. Verify unclear print and update any changes in the `groups` object.

Use a publicly accessible image URL or place images in `public/images/` and use paths such as `/images/dish-name.jpg`.

## 4. WhatsApp number
The WhatsApp number is configured in `src/App.jsx`:
`WHATSAPP_NUMBER = "917529071948"`

Keep the country code and digits only. Do not add `+`, spaces, or dashes.

## 5. Before publishing (important SEO checklist)
1. Buy/connect the restaurant's real domain.
2. Replace every `https://www.example.com/` in `index.html`, `src/App.jsx`, `public/robots.txt`, and `public/sitemap.xml` with the real canonical domain.
3. Add the restaurant's real city/address, business hours, and social links when confirmed. Do not publish placeholder location details.
4. Replace sample menu entries and stock food images with the restaurant's actual menu, prices, and original food photos.
5. Update title and description to include the actual city/area once known.
6. Deploy the `dist` build using `npm run build`.
7. Add the domain in Google Search Console and submit `/sitemap.xml`.
8. Test mobile layout and WhatsApp links after deployment.

## 6. Build
```bash
npm run build
npm run preview
```

## SEO notes
- Includes page title, meta description, robots directive, Open Graph metadata, Restaurant JSON-LD schema, sitemap and robots.txt.
- For a React SPA, Google can render JavaScript, but server-side rendering or prerendering can improve reliability and social preview behavior. Consider prerendering if the site grows.
- A sitemap does not guarantee indexing or rankings.
