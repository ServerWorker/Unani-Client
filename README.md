# Dr. Ibrahim Unani Heart Clinic — Website

A responsive, high-performance clinic website built with modern CSS3 gradients, fluid micro-interactions, responsive mobile menu drawer, authentic patient feedback archive, and ready for 1-click deployment on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 🚀 Deployment Instructions for Vercel

### Why Vercel Hosting Failed Previously & How It's Fixed:
When a repository has a `package.json` with a `build` script (`vite build`), Vercel automatically detects it and runs `npm run build`. Previously:
1. `vite build` only packaged `index.html` into `dist`, leaving subpages (`about.html`, `contact.html`, `reviews.html`, `services.html`) unbuilt and returning 404s.
2. The project was missing explicit Vercel output / framework settings.

### The Fix Implemented:
1. Updated [`vercel.json`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/vercel.json) to serve the site reliably with `cleanUrls: true` and routing fallback.
2. Updated `vite.config.ts` so `vite build` includes all HTML entry pages (`index.html`, `about.html`, `contact.html`, `reviews.html`, `services.html`) with assets into `dist/`.
3. Set build configuration to support both zero-configuration static serving or automated Vite bundling.

### Deploying to Vercel:
1. Import repository on [Vercel](https://vercel.com/new).
2. Framework Preset: **Other** (or **Vite**).
3. If using Vite:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. If deploying static:
   - **Build Command**: Leave empty or `echo 'Static build'`
   - **Output Directory**: `.` (Root)

---

## 🎨 Design Upgrades & Features Added
- **Updated Practitioner Branding**: Dr. Ibrahim Unani Heart Clinic, Hyderabad.
- **Modern Gradient Palette**: Emerald (`#06221c`, `#134e40`) with warm gold and metallic undertones.
- **Patient Reviews & Social Proof**:
  - Continuous vertical kinetic marquee review cards feed.
  - Detailed patient testimonial grid with verified tags and star ratings.
  - Transparent Unani cardiology care guidance.
- **Micro-Animations & Heartbeat Motion**: Pulsing clinic emblem with dynamic orbiting dashed rings and floating badges.
- **Sleek Mobile & Tablet Experience**: 
  - Glassmorphic backdrop-blur header.
  - Smooth animated slide-down navigation drawer with auto-close and outside-tap dismiss.
  - Stacked responsive action buttons and clean card grids.
- **Liquid Metal Interactive Buttons**: Conic gradient metallic sheen with 3D tilt interaction and click ripple animations.
- **Shadcn & Tailwind Architecture**: Ready for React/Next.js/Vite component development.

---

## 📦 shadcn / Tailwind / TypeScript Integration

The codebase supports standard shadcn UI conventions:

- **Component Path**: `components/ui/`
  - [`components/ui/testimonials-with-verticalmarquee.tsx`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/components/ui/testimonials-with-verticalmarquee.tsx)
  - [`components/ui/testimonials-with-verticalmarquee-utils/kinetic-testimonials.tsx`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/components/ui/testimonials-with-verticalmarquee-utils/kinetic-testimonials.tsx)
  - [`components/ui/card.tsx`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/components/ui/card.tsx)
  - [`components/ui/avatar.tsx`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/components/ui/avatar.tsx)
  - [`components/ui/liquid-metal-button.tsx`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/components/ui/liquid-metal-button.tsx)
  - [`components/ui/demo.tsx`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/components/ui/demo.tsx)
- **Utilities**: [`lib/utils.ts`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/lib/utils.ts) (providing `cn()` helper via `clsx` and `tailwind-merge`)
- **Configuration**:
  - [`components.json`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/components.json)
  - [`tailwind.config.js`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/tailwind.config.js)
  - [`tsconfig.json`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/tsconfig.json)
  - [`package.json`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/package.json)

### Why `/components/ui` is the Default Path
In the **shadcn UI** ecosystem, primitive and reusable UI elements (like buttons, dialogs, cards, avatars) reside in `components/ui`. This convention separates atomic UI primitives from complex, feature-specific application components (like `Navbar`, `Sidebar`, `HeroSection`), ensuring modularity, easy updates via `npx shadcn@latest add <component>`, and predictable imports (`@/components/ui/<component>`).

---

## 💻 Local Preview

Simply open [`index.html`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/index.html) in your browser or run:
```bash
npm run dev
```
or
```bash
npx serve -s .
```
