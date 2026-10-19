// ─── projects.js ──────────────────────────────────────────
// Curated project entries for Pradeep Malla's Portfolio.
// Balances Packaging Design and Graphic Design disciplines.
// Search for "TODO: REPLACE" to find asset placeholders.
// ──────────────────────────────────────────────────────────

const projects = [
  // ── Packaging Projects ──────────────────────────────────
  {
    id: 1,
    title: 'Product Mono Carton', // TODO: REPLACE with actual project title
    discipline: 'packaging',
    category: 'Boxes & Cartons',
    format: 'carton',
    caption: 'Mono carton, 4C offset + spot UV', // TODO: REPLACE
    image: '/work/project-01.jpg', // TODO: REPLACE in /public/work/
    aspect: 'tall',
    brief: 'Design a mono carton for a consumer retail product with strong shelf impact and secure locking tuck flaps.', // TODO: REPLACE
    role: 'Packaging Designer — concept through to KLD and print-ready artwork.', // TODO: REPLACE
    deliverables: 'Final artwork, KLD with dielines, print-ready separation files, physical sample verification.', // TODO: REPLACE
    shape: 'carton',
  },
  {
    id: 2,
    title: 'Flexible Stand-Up Pouch', // TODO: REPLACE
    discipline: 'packaging',
    category: 'Pouches',
    format: 'pouch',
    caption: 'Stand-up pouch, rotogravure, 8C barrier film', // TODO: REPLACE
    image: '/work/project-02.jpg', // TODO: REPLACE
    aspect: 'wide',
    brief: 'Create flexible barrier packaging for food items, accounting for substrate stretch and heat seals.', // TODO: REPLACE
    role: 'Packaging Designer — artwork adaptation and printing vendor coordination.', // TODO: REPLACE
    deliverables: 'Pouch artwork, substrate dieline, cylinder engraving file, press proof verification.', // TODO: REPLACE
    shape: 'pouch',
  },
  {
    id: 3,
    title: 'Product Label Suite', // TODO: REPLACE
    discipline: 'packaging',
    category: 'Labels & Stickers',
    format: 'label',
    caption: 'Self-adhesive roll label, 4C + cold foil', // TODO: REPLACE
    image: '/work/project-03.jpg', // TODO: REPLACE
    aspect: 'square',
    brief: 'Design a cohesive label suite across product variations with strict typography alignment.', // TODO: REPLACE
    role: 'Label Designer — concept, die-cut setup, and print coordination.', // TODO: REPLACE
    deliverables: 'Vector label files, die-cut outline specifications, press-ready PDF with bleed.', // TODO: REPLACE
    shape: 'label',
  },
  {
    id: 4,
    title: 'Master Carton & Shipper', // TODO: REPLACE
    discipline: 'packaging',
    category: 'Master Cartons',
    format: 'master',
    caption: 'Corrugated master carton, 2C flexo', // TODO: REPLACE
    image: '/work/project-04.jpg', // TODO: REPLACE
    aspect: 'wide',
    brief: 'Design an outer corrugated shipper with high-contrast transit markings and warehouse handling icons.', // TODO: REPLACE
    role: 'Packaging Designer — outer carton structure and marking artwork.', // TODO: REPLACE
    deliverables: 'Master carton KLD, flexo plate artworks, handling markings, barcode placement.', // TODO: REPLACE
    shape: 'master',
  },
  {
    id: 5,
    title: 'KLD vs. Final Packaging', // Interactive Packaging Comparison
    discipline: 'packaging',
    category: 'Boxes & Cartons',
    format: 'carton',
    caption: 'From flat dieline to finished packaging', // TODO: REPLACE
    image: '/work/project-05.jpg', // TODO: REPLACE - final 3D photo
    imageBefore: '/work/project-05-kld.jpg', // TODO: REPLACE - flat technical KLD
    aspect: 'wide',
    brief: 'Demonstrating the technical transformation from a flat KLD (crease, cut, and bleed) to a fully formed physical carton.', // TODO: REPLACE
    role: 'Packaging Designer — complete development lifecycle.', // TODO: REPLACE
    deliverables: 'Technical KLD drawing, print specifications, vendor press checks, final sample.', // TODO: REPLACE
    shape: 'carton',
    isBeforeAfter: true,
    sliderMode: 'packaging',
  },
  {
    id: 6,
    title: 'Specialty Rigid Box', // TODO: REPLACE
    discipline: 'packaging',
    category: 'Boxes & Cartons',
    format: 'carton',
    caption: 'Rigid box with custom insert, 4C + emboss', // TODO: REPLACE
    image: '/work/project-06.jpg', // TODO: REPLACE
    aspect: 'square',
    brief: 'Structure a premium two-piece rigid box with custom die-cut inner tray insert.', // TODO: REPLACE
    role: 'Packaging Designer — structural design and artwork placement.', // TODO: REPLACE
    deliverables: 'Box wrapper artwork, board dielines, custom insert blueprint, final print files.', // TODO: REPLACE
    shape: 'carton',
  },

  // ── Graphic Design Projects ─────────────────────────────
  {
    id: 7,
    title: 'Visa Services Campaign', // TODO: REPLACE
    discipline: 'graphic',
    category: 'Promotional (Visa / Tours / Holidays)',
    format: 'post-4x5',
    artboardLabel: 'Artboard 1, 1080 × 1350',
    caption: 'Instagram feed creative, 4:5 vertical', // TODO: REPLACE
    image: '/work/project-07.jpg', // TODO: REPLACE in /public/work/
    aspect: 'tall',
    brief: 'Design promotional creatives for visa consultancy services with high conversion visual hierarchy.', // TODO: REPLACE
    role: 'Graphic Designer — concept layout, typography and client brand consistency.', // TODO: REPLACE
    deliverables: 'Digital exports (PNG/JPG), story variations, layered Photoshop/Illustrator files.', // TODO: REPLACE
    shape: 'graphic',
  },
  {
    id: 8,
    title: 'Tour & Holiday Package Series', // TODO: REPLACE
    discipline: 'graphic',
    category: 'Promotional (Visa / Tours / Holidays)',
    format: 'post-1x1',
    artboardLabel: 'Artboard 1, 1080 × 1080',
    caption: 'Promotional carousel, 1:1 square', // TODO: REPLACE
    image: '/work/project-08.jpg', // TODO: REPLACE
    aspect: 'square',
    brief: 'Develop engaging multi-slide promotional creatives for international tour packages.', // TODO: REPLACE
    role: 'Graphic Designer — promotional design and digital marketing collateral.', // TODO: REPLACE
    deliverables: 'Full carousel slide set, social media banners, marketing flyer exports.', // TODO: REPLACE
    shape: 'graphic',
  },
  {
    id: 9,
    title: 'Layout Guides vs. Final Creative', // Interactive Graphic Comparison
    discipline: 'graphic',
    category: 'Social Media',
    format: 'post-4x5',
    artboardLabel: 'Artboard 1, 1080 × 1350',
    caption: 'From artboard wireframe to final creative', // TODO: REPLACE
    image: '/work/project-09.jpg', // TODO: REPLACE - finished creative
    imageBefore: '/work/project-09-wireframe.jpg', // TODO: REPLACE - layout grid & vectors
    aspect: 'wide',
    brief: 'Demonstrating the transition from structural alignment grids, bezier vectors, and baseline guides to a finished high-impact social creative.', // TODO: REPLACE
    role: 'Graphic Designer — art direction, grid layout, asset delivery.', // TODO: REPLACE
    deliverables: 'Master artboard system, typographic hierarchy guidelines, multi-format assets.', // TODO: REPLACE
    shape: 'graphic',
    isBeforeAfter: true,
    sliderMode: 'graphic',
  },
  {
    id: 10,
    title: 'Digital Display & Campaign Banners', // TODO: REPLACE
    discipline: 'graphic',
    category: 'Banners & Flyers',
    format: 'banner',
    artboardLabel: 'Web Banner, 1920 × 640',
    caption: 'Display banner & promotional flyer', // TODO: REPLACE
    image: '/work/project-10.jpg', // TODO: REPLACE
    aspect: 'wide',
    brief: 'Create large-scale promotional web banners and matching promotional flyers for print distribution.', // TODO: REPLACE
    role: 'Graphic Designer — promotional campaign design across digital and print.', // TODO: REPLACE
    deliverables: 'Display banner variations, press-ready CMYK A4 flyer with bleed margins.', // TODO: REPLACE
    shape: 'graphic',
  },
  {
    id: 11,
    title: 'Brand Identity & Logo Construction', // TODO: REPLACE
    discipline: 'graphic',
    category: 'Branding & Logo',
    format: 'logo',
    artboardLabel: 'Logo Grid, 1200 × 1200',
    caption: 'Geometric identity mark & brand collateral', // TODO: REPLACE
    image: '/work/project-11.jpg', // TODO: REPLACE
    aspect: 'square',
    brief: 'Develop a geometric logo mark with precise circular arcs, clear spacing, and brand identity templates.', // TODO: REPLACE
    role: 'Graphic Designer — logo construction and marketing collateral.', // TODO: REPLACE
    deliverables: 'Vector logo package (.AI, .SVG, .PNG), brand guideline sheet, social avatar kit.', // TODO: REPLACE
    shape: 'graphic',
  },
  {
    id: 12,
    title: 'Website Graphics Suite', // TODO: REPLACE
    discipline: 'graphic',
    category: 'Website Graphics',
    format: 'web',
    artboardLabel: 'Wix Studio Artboard, 1440 × 900',
    caption: 'Website graphic suite for Wix Studio', // TODO: REPLACE
    image: '/work/project-12.jpg', // TODO: REPLACE
    aspect: 'wide',
    brief: 'Design web visual content, section graphics, and promotional web assets optimized for Wix Studio integration.', // TODO: REPLACE
    role: 'Graphic Designer — web visual graphics and asset preparation.', // TODO: REPLACE
    deliverables: 'Responsive web graphics, vector UI elements, optimized WebP banners.', // TODO: REPLACE
    shape: 'graphic',
  },
];

export const DISCIPLINE_TABS = [
  { key: 'All', label: 'All Disciplines' },
  { key: 'Packaging', label: 'Packaging' },
  { key: 'Graphic Design', label: 'Graphic Design' },
];

export const SUB_FILTERS = {
  All: [
    'All Work',
    'Boxes & Cartons',
    'Pouches',
    'Labels & Stickers',
    'Social Media',
    'Banners & Flyers',
    'Branding & Logo',
    'Website Graphics',
  ],
  Packaging: [
    'All Packaging',
    'Boxes & Cartons',
    'Pouches',
    'Labels & Stickers',
    'Master Cartons',
  ],
  'Graphic Design': [
    'All Graphics',
    'Social Media',
    'Banners & Flyers',
    'Branding & Logo',
    'Website Graphics',
    'Promotional (Visa / Tours / Holidays)',
  ],
};

export default projects;
