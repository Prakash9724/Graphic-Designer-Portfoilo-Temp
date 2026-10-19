// ─── content.js ──────────────────────────────────────────
// Centralized copy and structured data for Pradeep Malla's Portfolio.
// Search for "TODO: REPLACE" to locate every placeholder.
// ──────────────────────────────────────────────────────────

/**
 * Hero Background Video URL:
 * Supports either an HLS streaming URL (.m3u8) or a local/remote video file (.mp4, .webm).
 * TODO: REPLACE with your craft video (e.g., '/video/hero.mp4' or an .m3u8 stream).
 * If left empty (''), an elegant procedural SVG bezier pen-tool & dieline animation plays automatically.
 */
export const HERO_VIDEO_SRC = '';

// TODO: REPLACE – poster image fallback for hero video (place in /public/video/hero-poster.jpg)
export const HERO_POSTER = '/video/hero-poster.jpg';

export const PERSON = {
  name: 'Pradeep Malla',
  title: 'Packaging & Graphic Designer',
  location: 'Chhatral, Gujarat, India',
  phone: '+91 70413 79134',
  email: 'pradeepmalla35@gmail.com',
  instagram: '@visualmint_05',
  instagramUrl: 'https://instagram.com/visualmint_05',
  // TODO: REPLACE – link to actual resume PDF in /public/Pradeep_Malla_Resume.pdf
  resumeUrl: '/Pradeep_Malla_Resume.pdf',
};

export const HERO = {
  badge: {
    tag: 'Available',
    text: 'Open for packaging & design projects',
  },
  headline: {
    before: 'From the dieline to the',
    accent: 'feed.',
  },
  subheadline:
    "I'm Pradeep Malla, a packaging and graphic designer from Gujarat. I design boxes, pouches and labels through to KLD and print-ready artwork, and I make the social creatives, banners and brand graphics around them.",
  ctaPrimary: 'View Selected Work',
  ctaSecondary: 'Get in Touch',
  ctaTertiary: 'Download Resume',
  specStrip: ['BOX', 'POUCH', 'LABEL', 'MONO CARTON', 'SOCIAL', 'BANNER', 'BRANDING', 'WEB'],
};

export const TOOLS = [
  'Adobe Illustrator',
  'Adobe Photoshop',
  'CorelDRAW',
  'Adobe InDesign',
  'Canva',
  'Adobe Express',
  'Wix Studio',
];

export const WORK_INTRO =
  'Packaging that goes through print, and graphics that go out into the world.';

export const DISCIPLINES = {
  label: '02 / DISCIPLINES',
  headline: {
    before: 'Two crafts,',
    accent: 'one standard.',
  },
  subtitle:
    'Both sides of my work run on the same rules: exact specs, consistent brand, clean files.',
  packaging: {
    id: 'packaging',
    title: 'Packaging Design',
    core: true,
    dialect: 'The Dieline',
    summary:
      'Structural packaging and technical production: engineering dielines with millimeter tolerances, color separations, and press-ready files for boxes, pouches, and labels.',
    items: [
      'Box & mono carton design',
      'Master cartons & outer shipping packaging',
      'Pouches & flexible packaging',
      'Labels & product stickers',
      'KLD (Key Line Drawing) preparation',
      'Print-ready artwork & die-cut specifications',
      'Colour, size & print specification checking',
      'Packaging 3D mockups & visual presentations',
      'Physical sample development & press verification',
    ],
    cta: 'See packaging work',
    filterKey: 'Packaging',
  },
  graphics: {
    id: 'graphics',
    title: 'Graphic Design',
    core: false,
    dialect: 'The Artboard',
    summary:
      'Digital and print communication: campaign creatives, brand collateral, marketing banners, and web graphics tailored for high visual engagement and brand coherence.',
    items: [
      'Social media creatives (posts, carousels, stories)',
      'Digital banners & promotional flyers',
      'Branding & marketing collateral',
      'Logo design & brand asset development',
      'Website graphics & visual content (Wix Studio)',
      'Promotional creatives (visa services, tours & holiday campaigns)',
    ],
    cta: 'See graphic design work',
    filterKey: 'Graphic Design',
  },
  sharedStrip:
    'Shared: print-ready files, brand consistency, deadlines, version control.',
};

export const PROCESS_PACKAGING = [
  {
    number: '01',
    title: 'Concept & artwork development',
    description:
      'Creating packaging artwork from initial concepts, exploring visual directions that align with the product and brand.',
  },
  {
    number: '02',
    title: 'KLD / dieline preparation',
    description:
      'Preparing Key Line Drawings with accurate dimensions, dielines, artwork placement and production requirements.',
  },
  {
    number: '03',
    title: 'Print-ready file setup',
    description:
      'Checking colour, size, and print specifications to produce files that meet vendor and press requirements.',
  },
  {
    number: '04',
    title: 'Printing & vendor coordination',
    description:
      'Coordinating with printing vendors and internal teams so artwork, specs and print requirements are correctly understood.',
  },
  {
    number: '05',
    title: 'Physical sample development & verification',
    description:
      'Reviewing printed packaging and physical samples for artwork accuracy, colour, dimensions, alignment and visual quality.',
  },
  {
    number: '06',
    title: 'Final artwork verification & version control',
    description:
      'Managing artwork revisions and versions so the correct approved design goes to print and production.',
  },
];

export const PROCESS_GRAPHIC = [
  {
    number: '01',
    title: 'Brief and requirements',
    description:
      'Reviewing client goals, campaign specifications, target platform formats, and deliverable timelines.',
  },
  {
    number: '02',
    title: 'Concept & layout',
    description:
      'Setting artboard grids, typographic hierarchy, composition structure, and focal points.',
  },
  {
    number: '03',
    title: 'Design with brand consistency',
    description:
      'Developing client-focused visual designs while strictly adhering to brand identity, palettes, and typography.',
  },
  {
    number: '04',
    title: 'Adapt for digital and print formats',
    description:
      'Formatting artwork across feeds, stories, banners, flyers, and web platforms with clean asset exports.',
  },
  {
    number: '05',
    title: 'Revisions, approval and on-time delivery',
    description:
      'Managing version control, client revisions, and meeting strict launch deadlines with approved files.',
  },
];

export const EXPERTISE_GROUPS = {
  packaging: {
    title: 'PACKAGING',
    items: [
      {
        title: 'Packaging Design',
        description:
          'End-to-end packaging design for boxes, pouches, labels, mono cartons, master cartons and other packaging materials.',
        core: true,
      },
      {
        title: 'KLD Preparation',
        description:
          'Key Line Drawings with accurate dimensions, dielines, artwork placement and production requirements.',
        core: true,
      },
      {
        title: 'Box & Mono Carton Design',
        description:
          'Structural box designs with accurate folding panels, tuck-in flaps, and shelf presentation.',
        core: false,
      },
      {
        title: 'Pouch & Flexible Packaging',
        description:
          'Pouch and flexible packaging design, adapting artwork to non-rigid substrates and production constraints.',
        core: false,
      },
      {
        title: 'Labels & Stickers',
        description:
          'Label and sticker design for product packaging, from concept to die-cut print-ready artwork.',
        core: false,
      },
      {
        title: 'Master Carton / Outer Packaging',
        description:
          'Master carton and outer packaging design for shipping, storage and retail display requirements.',
        core: false,
      },
      {
        title: 'Print-Ready Artwork & Version Management',
        description:
          'Rigorous colour, size, and print specification checking with disciplined artwork revision control.',
        core: false,
      },
    ],
  },
  graphic: {
    title: 'GRAPHIC & DIGITAL',
    items: [
      {
        title: 'Social Media Creatives',
        description:
          'High-engagement social media posts, carousel graphics, and stories crafted for product and service campaigns.',
        core: false,
      },
      {
        title: 'Banners, Flyers & Promotional Design',
        description:
          'Digital display banners, promotional flyers, and marketing print collateral formatted for rapid campaign rollout.',
        core: false,
      },
      {
        title: 'Branding & Marketing Collateral',
        description:
          'Visual branding materials, promotional graphics, and marketing assets that maintain tight brand consistency.',
        core: false,
      },
      {
        title: 'Logo Design',
        description:
          'Distinctive identity marks, logos, and vector brand assets constructed with precise geometry.',
        core: false,
      },
      {
        title: 'Website & Web Graphics (Wix Studio)',
        description:
          'Website graphics and digital marketing materials built and styled through platforms including Wix Studio.',
        core: false,
      },
    ],
  },
};

export const EXPERIENCE = [
  {
    role: 'Packaging & Graphic Designer / Digital Marketing Executive',
    company: "Charya's Enterprise LLP",
    period: 'Mar 2026 – Present',
    current: true,
    bullets: [
      {
        text: 'Lead packaging design across boxes, pouches, labels, mono cartons, master cartons and other packaging materials.',
        tag: 'PACKAGING',
      },
      {
        text: 'Create packaging artwork from initial concepts through final print-ready files and KLD preparation.',
        tag: 'PACKAGING',
      },
      {
        text: 'Prepare and manage KLDs with accurate dimensions, dielines, artwork placement and production requirements.',
        tag: 'PACKAGING',
      },
      {
        text: 'Coordinate with printing vendors and internal teams so artwork, specs and print requirements are correctly understood.',
        tag: 'PACKAGING',
      },
      {
        text: 'Review printed packaging and physical samples for artwork accuracy, colour, dimensions, alignment and visual quality.',
        tag: 'PACKAGING',
      },
      {
        text: 'Manage artwork revisions and versions so the correct approved design goes to print and production.',
        tag: 'PACKAGING',
      },
      {
        text: 'Create packaging mockups and visual presentations for product development, internal review and approvals.',
        tag: 'PACKAGING',
      },
      {
        text: 'Support product launches and brand development through packaging design and consistent visual communication.',
        tag: 'PACKAGING',
      },
      {
        text: 'Create social media creatives, marketing materials, banners and promotional graphics.',
        tag: 'GRAPHIC',
      },
      {
        text: 'Design website graphics and support website visual content through Wix Studio.',
        tag: 'WEB',
      },
    ],
  },
  {
    role: 'Graphic Designer',
    company: 'Global Visa & Holidays Company',
    period: '2024 – Feb 2026',
    current: false,
    bullets: [
      {
        text: 'Designed promotional creatives for visa services, tour packages and holiday offers.',
        tag: 'GRAPHIC',
      },
      {
        text: 'Created social media posts, banners, flyers and other digital marketing materials.',
        tag: 'GRAPHIC',
      },
      {
        text: 'Developed client-focused visual designs while maintaining brand consistency and meeting deadlines.',
        tag: 'GRAPHIC',
      },
      {
        text: 'Worked across digital and print design requirements.',
        tag: 'GRAPHIC',
      },
    ],
  },
];

export const EDUCATION = [
  {
    title: 'Bachelor of Computer Applications',
    institution: 'Kadi Sarva Vishwavidyalaya',
    period: '2021–2024',
  },
  {
    title: 'Secondary Education',
    institution: 'Gyandeep Vidyalaya',
    period: '2019–2021',
  },
];

export const CERTIFICATION = {
  title: 'Adobe Photoshop, CorelDRAW & Adobe Illustrator',
  institution: 'Next Academy, Kalol',
};

export const ABOUT_TEXT =
  "I design packaging and graphics with the same focus: clean files, exact specs, and brand consistency. In packaging, I take boxes, pouches, labels, and master cartons from initial concept and KLD to press-ready artwork and physical sample verification. In graphic design, I build social media creatives, banners, flyers, promotional campaigns, and web graphics through platforms like Wix Studio. I work at Charya's Enterprise LLP in Chhatral, Gujarat. Previously, I designed promotional creatives, tour packages, and social media materials at Global Visa & Holidays Company. I hold a Bachelor of Computer Applications from Kadi Sarva Vishwavidyalaya and design certifications in Photoshop, CorelDRAW and Illustrator from Next Academy.";

export const CONTACT = {
  headline: {
    before: 'Have a product to package or a brand to',
    accent: 'design?',
  },
};
