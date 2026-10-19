# Pradeep Malla — Packaging & Graphic Designer Portfolio

A bespoke, high-fidelity portfolio landing page designed around two unified design languages: **"The Dieline"** (for Packaging Design) and **"The Artboard"** (for Graphic Design). Built with React 18, Vite, Tailwind CSS (v3), Framer Motion, Lucide React, and HLS.js.

---

## 🎨 Design System & The Two Dialects

The portfolio gives equal visual weight to both disciplines, joined by a shared standard of exact specifications, brand consistency, and clean production files:

1. **Packaging Dialect (The Dieline)**:
   - Solid cut lines in accent orange (`#f87b52`)
   - Dashed crease lines in primary purple (`#7b39fc`)
   - CMYK color bars, registration marks, millimeter dimension arrows, fold arrows, and corner crop marks.
2. **Graphic Design Dialect (The Artboard)**:
   - Artboard frames with pixel/aspect tags (`Artboard 1, 1080 × 1350`)
   - Column grid overlays, baseline guides, ruler tick marks
   - Bezier pen-paths with anchor points & direction handles
   - 8-point bounding box resize handles (`SelectionHandles`)
   - Instrument Serif "Aa" specimen fragments and color swatch chips.

---

## 🚀 Quick Start

### Installation & Development
```bash
# Install dependencies
npm install

# Start local Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Preview
```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📹 Hero Background Video Guide

The hero section by default renders a procedural **SVG craft background** featuring slowly animating bezier pen paths with anchor points and a faint dieline being drawn (`stroke-dashoffset`).

To replace it with your own video footage showing real design craft (Illustrator pen tool, dieline drawing, packaging folding, or ink/print macro):

### Step 1: Prepare the Video Files
Place your video in `/public/video/`:
- `/public/video/hero.mp4` (standard HTML5 video)
- `/public/video/hero-poster.jpg` (fallback poster image)

### Recommended FFmpeg Commands

**Compress to Web-optimized MP4 (H.264):**
```bash
ffmpeg -i input.mov -vcodec libx264 -crf 26 -preset slow -an -movflags +faststart public/video/hero.mp4
```

**Convert to HLS Stream (.m3u8):**
```bash
ffmpeg -i input.mov -codec:v libx264 -codec:a none \
  -hls_time 6 -hls_playlist_type vod \
  -hls_segment_filename "public/video/segment_%03d.ts" \
  public/video/hero.m3u8
```

### Step 2: Update `src/data/content.js`
Set `HERO_VIDEO_SRC`:
```javascript
// For local MP4:
export const HERO_VIDEO_SRC = '/video/hero.mp4';

// Or for remote HLS stream:
export const HERO_VIDEO_SRC = 'https://your-cdn.com/hero.m3u8';

// To keep the intentional procedural SVG craft animation:
export const HERO_VIDEO_SRC = '';
```

---

## 📝 Placeholders Guide (What to Replace)

All editable content is centralized in `src/data/content.js` and `src/data/projects.js`. Search for `// TODO: REPLACE`.

### 1. Project Images (`/public/work/`)
Place real project photos in `/public/work/` matching the project filenames:
- Packaging Projects:
  - `project-01.jpg` — Product Mono Carton (Boxes & Cartons)
  - `project-02.jpg` — Flexible Stand-Up Pouch (Pouches)
  - `project-03.jpg` — Product Label Suite (Labels & Stickers)
  - `project-04.jpg` — Master Carton & Shipper (Master Cartons)
  - `project-05.jpg` & `project-05-kld.jpg` — Final packaging & Flat KLD (for Before/After Slider)
  - `project-06.jpg` — Specialty Rigid Box (Boxes & Cartons)
- Graphic Design Projects:
  - `project-07.jpg` — Visa Services Campaign (Instagram 4:5)
  - `project-08.jpg` — Tour & Holiday Package Series (Carousel 1:1)
  - `project-09.jpg` & `project-09-wireframe.jpg` — Final creative & Layout wireframe (for Before/After Slider)
  - `project-10.jpg` — Digital Display & Campaign Banners (Web Banner 1920×640)
  - `project-11.jpg` — Brand Identity & Logo Construction (Logo Grid 1:1)
  - `project-12.jpg` — Website Graphics Suite (Wix Studio 1440×900)

*Until real images are added, designed procedural placeholders render with category-matched dieline shapes or artboard grids.*

### 2. Resume PDF (`/public/`)
- Place your PDF resume in `/public/Pradeep_Malla_Resume.pdf`.

### 3. Portrait & OpenGraph Image (`/public/`)
- `/public/portrait.jpg` — Designer portrait photo for the About section.
- `/public/og-image.jpg` — 1200×630px social media preview card.

---

## 🛠 Adding a New Project

In `src/data/projects.js`, append an object with the required discipline properties:

### Packaging Project Example:
```javascript
{
  id: 13,
  title: 'Premium Tea Box',
  discipline: 'packaging',
  category: 'Boxes & Cartons',
  format: 'carton',
  shape: 'carton', // 'carton' | 'pouch' | 'label' | 'master'
  aspect: 'tall',   // 'tall' | 'wide' | 'square'
  caption: 'Rigid carton, 4C + foil',
  image: '/work/project-13.jpg',
  brief: '...',
  role: 'Packaging Designer — dieline to sample.',
  deliverables: 'KLD dieline, print-ready files, sample verification.',
}
```

### Graphic Design Project Example:
```javascript
{
  id: 14,
  title: 'Summer Travel Story Series',
  discipline: 'graphic',
  category: 'Social Media',
  format: 'story', // 'post-4x5' | 'post-1x1' | 'story' | 'banner' | 'logo' | 'web'
  artboardLabel: 'Story Artboard, 1080 × 1920',
  aspect: 'tall',
  caption: 'Instagram Story campaign, 9:16',
  image: '/work/project-14.jpg',
  brief: '...',
  role: 'Graphic Designer — campaign concept and exports.',
  deliverables: '9:16 Story assets, layered PSD/AI, video exports.',
}
```

---

## 🚢 Deployment

### Deploy to Vercel
1. Push this repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Deploy to Netlify
1. Connect the repository in [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

---

## 📄 License & Credits
Designed and developed for **Pradeep Malla**, Packaging & Graphic Designer.
