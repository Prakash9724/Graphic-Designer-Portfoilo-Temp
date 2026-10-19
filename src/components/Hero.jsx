import React, { useRef } from 'react';
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useHls } from '../hooks/useHls';
import { useReducedMotion } from '../hooks/useReducedMotion';
import DielineBox from './DielineBox';
import { HERO, HERO_VIDEO_SRC, HERO_POSTER, PERSON } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const videoRef = useRef(null);
  const prefersReduced = useReducedMotion();

  // Play video if a real craft video source is provided
  const hasVideo = Boolean(HERO_VIDEO_SRC && HERO_VIDEO_SRC.trim() !== '');
  useHls(videoRef, HERO_VIDEO_SRC);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg" id="hero" style={{ scrollMarginTop: 'var(--nav-h)' }}>
      {/* ── BACKGROUND LAYER: Real video OR Intentional Craft Vector Animation ── */}
      {hasVideo && !prefersReduced ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER || undefined}
          aria-hidden="true"
        />
      ) : (
        /* Intentional Craft SVG Background: Slowly animating pen path & dieline drawing */
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-35" aria-hidden="true">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 900"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Fine Artboard Guide Grid */}
            <defs>
              <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                <circle cx="60" cy="0" r="1" fill="rgba(255,255,255,0.08)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />

            {/* Faint Dieline Outlines being drawn */}
            <g opacity="0.6">
              {/* Box dieline silhouette */}
              <rect
                x="680"
                y="180"
                width="280"
                height="360"
                stroke="#f87b52"
                strokeWidth="1"
                strokeDasharray="800"
                className="animate-draw-line"
                style={{ animationDuration: '4s' }}
              />
              <line x1="680" y1="280" x2="960" y2="280" stroke="#7b39fc" strokeWidth="1" strokeDasharray="6 4" />
              <line x1="680" y1="440" x2="960" y2="440" stroke="#7b39fc" strokeWidth="1" strokeDasharray="6 4" />
              {/* Dieline dimensions */}
              <text x="820" y="165" fill="#62626f" fontSize="10" fontFamily="Inter" textAnchor="middle">280.0 mm</text>
            </g>

            {/* Bezier Pen-Path with Anchor Points & Direction Handles */}
            <path
              d="M 120 750 C 350 550, 480 850, 800 600 S 1250 400, 1380 680"
              stroke="#7b39fc"
              strokeWidth="1.5"
              strokeDasharray="1600"
              className="animate-draw-line"
              style={{ animationDuration: '5s' }}
            />

            {/* Pen Tool Anchor Points */}
            <g opacity="0.7">
              <rect x="116" y="746" width="8" height="8" fill="#f87b52" stroke="#fff" strokeWidth="1" />
              <rect x="796" y="596" width="8" height="8" fill="#f87b52" stroke="#fff" strokeWidth="1" />
              <rect x="1376" y="676" width="8" height="8" fill="#f87b52" stroke="#fff" strokeWidth="1" />
              {/* Tangent handles */}
              <line x1="350" y1="550" x2="480" y2="850" stroke="#fff" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.4" />
              <circle cx="350" cy="550" r="4" fill="#7b39fc" stroke="#fff" strokeWidth="0.75" />
              <circle cx="480" cy="850" r="4" fill="#7b39fc" stroke="#fff" strokeWidth="0.75" />
            </g>

            {/* Tiny Type Specimen Aa */}
            <text x="180" y="320" fill="rgba(255,255,255,0.04)" fontSize="180" fontFamily="Instrument Serif" fontStyle="italic">
              Aa
            </text>
          </svg>
        </div>
      )}

      {/* Overlays: Vignette & Bottom fade to page bg */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(8,8,12,0.6) 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, transparent, #08080c)',
        }}
      />

      {/* Hairline margin guides (Illustrator artboard boundaries) — hidden below lg */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden lg:block">
        <div className="h-full max-w-[1280px] mx-auto relative">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-white/[0.04]" />
          <div className="absolute top-0 bottom-0 right-0 w-px bg-white/[0.04]" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/[0.02]" />
        </div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 pb-20"
        style={{ paddingTop: 'max(calc(var(--nav-h) + 48px), 7rem)' }}
      >
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="max-w-2xl">
            {/* Badge pill — clear visual separation from sticky navbar */}
            <motion.div {...fadeUp(0.1)} className="mb-8 mt-2">
              <div
                className="inline-flex items-center gap-3 rounded-full px-1.5 py-1.5 pr-5"
                style={{
                  background: 'rgba(15,15,25,0.80)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(123,57,252,0.35)',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.06) inset, 0 8px 32px rgba(0,0,0,0.5)',
                }}
              >
                <span className="bg-primary text-white text-[11px] font-heading font-semibold rounded-full px-2.5 py-1 leading-none shadow-[0_0_8px_rgba(123,57,252,0.6)]">
                  {HERO.badge.tag}
                </span>
                <span className="text-sm font-body text-text-muted flex items-center gap-1.5">
                  {HERO.badge.text}
                  <ArrowUpRight size={14} strokeWidth={1.5} className="text-text-dim" />
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.25)}
              className="font-display text-hero text-text leading-[1.0] tracking-[-0.02em] mb-7"
            >
              {HERO.headline.before}{' '}
              <em className="text-accent italic relative inline-block font-normal">
                {HERO.headline.accent}
                {/* Animated underline */}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2.5"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 6 Q25 0 50 4 T100 3"
                    fill="none"
                    stroke="#f87b52"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    className="animate-draw-line"
                    style={{
                      strokeDasharray: 100,
                      strokeDashoffset: prefersReduced ? 0 : undefined,
                    }}
                  />
                </svg>
              </em>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.4)}
              className="font-body text-[16px] sm:text-[17px] text-text-muted leading-relaxed max-w-[56ch] mb-10"
            >
              {HERO.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.55)} className="flex flex-wrap items-center gap-4 mb-8">
              <a href="#work" className="btn btn-primary">
                {HERO.ctaPrimary}
                <ArrowRight size={16} strokeWidth={1.5} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                {HERO.ctaSecondary}
              </a>
              <a
                href={PERSON.resumeUrl}
                download
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-body text-text-muted hover:text-text transition-colors ml-2"
              >
                <Download size={14} strokeWidth={1.5} />
                {HERO.ctaTertiary}
              </a>
            </motion.div>

            {/* Spec strip */}
            <motion.div
              {...fadeUp(0.65)}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] font-mono text-text-dim tracking-[0.15em] uppercase"
            >
              {HERO.specStrip.map((item, i) => (
                <React.Fragment key={item}>
                  {i > 0 && (
                    <span className="w-2.5 h-px bg-accent/40 inline-block" aria-hidden="true" />
                  )}
                  <span>{item}</span>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Right: Dieline Box Centerpiece (desktop) */}
          <motion.div {...fadeUp(0.5)} className="hidden lg:block">
            <DielineBox />
          </motion.div>
        </div>

        {/* Mobile: Dieline Box Centerpiece */}
        <motion.div {...fadeUp(0.6)} className="lg:hidden mt-14 max-w-xs mx-auto">
          <DielineBox />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <line x1="6" y1="0" x2="6" y2="5" stroke="#62626f" strokeWidth="0.5" />
          <line x1="6" y1="7" x2="6" y2="12" stroke="#62626f" strokeWidth="0.5" />
          <line x1="0" y1="6" x2="5" y2="6" stroke="#62626f" strokeWidth="0.5" />
          <line x1="7" y1="6" x2="12" y2="6" stroke="#62626f" strokeWidth="0.5" />
        </svg>
        <div className="w-px h-8 bg-text-dim/30 animate-scroll-indicator" />
      </div>
    </section>
  );
}
