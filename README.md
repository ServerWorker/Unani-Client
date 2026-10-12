# Dr. Iqbal Unani Heart Clinic — Website

A responsive, high-performance five-page clinic website built with modern CSS3 gradients, fluid micro-interactions, responsive mobile menu drawer, and ready for deployment on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 🚀 Deployment Instructions

### Option 1: Deploy to Vercel
1. Install Vercel CLI (or connect via GitHub):
   ```bash
   npm i -g vercel
   vercel
   ```
2. Or push your project to GitHub and import it on [vercel.com](https://vercel.com).
3. The project includes [`vercel.json`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/vercel.json) pre-configured with security headers and clean URL routing.

### Option 2: Deploy to Netlify
1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod --dir=.
   ```
2. Or drag-and-drop the directory directly onto [app.netlify.com/drop](https://app.netlify.com/drop).
3. The project includes [`netlify.toml`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/netlify.toml) pre-configured with security headers and static publishing roots.

---

## 🎨 Design Upgrades & Features Added
- **Modern Gradient Palette**: Emerald (`#06221c`, `#134e40`) with warm gold and metallic undertones.
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
  - [`components/ui/liquid-metal-button.tsx`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/components/ui/liquid-metal-button.tsx)
  - [`components/ui/demo.tsx`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/components/ui/demo.tsx)
- **Utilities**: [`lib/utils.ts`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/lib/utils.ts) (providing `cn()` helper via `clsx` and `tailwind-merge`)
- **Configuration**:
  - [`components.json`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/components.json)
  - [`tailwind.config.js`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/tailwind.config.js)
  - [`tsconfig.json`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/tsconfig.json)
  - [`package.json`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/package.json)

### Why `/components/ui` is the Default Path
In the **shadcn UI** ecosystem, primitive and reusable UI elements (like buttons, dialogs, dropdowns, inputs) reside in `components/ui`. This convention separates atomic UI primitives from complex, feature-specific application components (like `Navbar`, `Sidebar`, `HeroSection`), ensuring modularity, easy updates via `npx shadcn@latest add <component>`, and predictable imports (`@/components/ui/<component>`).

### Installing React Dependencies (if running with React / Vite / Next.js)
```bash
npm install clsx lucide-react tailwind-merge @paper-design/shaders
```

---

## 💻 Local Preview

Simply open [`index.html`](file:///c:/Users/NABI/Downloads/dr_iqbal_unani_heart_clinic_website/index.html) in your browser or run:
```bash
npx serve -s .
```
