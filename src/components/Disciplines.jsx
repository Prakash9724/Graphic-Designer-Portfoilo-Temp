import React from 'react';
import { ArrowRight, Box, Layers } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { DISCIPLINES } from '../data/content';

/**
 * Disciplines (#disciplines, #packaging, #graphics) Section.
 * Asymmetric split layout contrasting the two disciplines:
 * - Panel A: Packaging Design (Dieline dialect)
 * - Panel B: Graphic Design (Artboard dialect)
 * - Shared footer strip uniting both disciplines under one standard.
 */
export default function Disciplines({ onSelectDiscipline }) {
  const handleDisciplineClick = (disciplineKey) => {
    if (onSelectDiscipline) {
      onSelectDiscipline(disciplineKey);
    }
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="disciplines" className="section-wrapper">
      <div className="container-main">
        {/* Section Header */}
        <div className="mb-16">
          <SectionLabel number="02" label="DISCIPLINES" />
          <h2 className="font-display text-display-2 text-text tracking-[-0.02em]">
            {DISCIPLINES.headline.before}{' '}
            <em className="text-accent italic font-normal">
              {DISCIPLINES.headline.accent}
            </em>
          </h2>
          <p className="font-body text-text-muted text-base sm:text-lg max-w-2xl mt-4">
            {DISCIPLINES.subtitle}
          </p>
        </div>

        {/* Asymmetric Split Layout: Two distinct panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ── PANEL A: Packaging Design (Dieline Dialect) ── */}
          <div
            id="packaging"
            className="lg:col-span-6 relative bg-surface border border-white/[0.08] hover:border-primary/40 rounded-sm p-8 sm:p-10 transition-all duration-300"
            style={{ scrollMarginTop: 'var(--nav-h)' }}
          >
            {/* Top dial label */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                  <Box size={16} strokeWidth={1.5} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-text">
                      {DISCIPLINES.packaging.title}
                    </h3>
                    {DISCIPLINES.packaging.core && (
                      <span className="bg-primary/20 text-primary border border-primary/30 text-[10px] font-heading font-medium px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                        Core
                      </span>
                    )}
                  </div>
                  <span className="font-caption text-xs text-text-dim block mt-0.5">
                    DIALECT: {DISCIPLINES.packaging.dialect} &bull; PRINT &amp; PRODUCTION
                  </span>
                </div>
              </div>
            </div>

            {/* Dieline Technical Illustration Drawing */}
            <div className="relative h-28 mb-8 bg-[#090910] border border-white/[0.04] rounded-sm flex items-center justify-center overflow-hidden p-4">
              <svg className="w-full h-full max-h-24" viewBox="0 0 280 80" fill="none">
                {/* Millimeter guides */}
                <line x1="30" y1="12" x2="250" y2="12" stroke="#62626f" strokeWidth="0.5" />
                <line x1="30" y1="8" x2="30" y2="16" stroke="#62626f" strokeWidth="0.5" />
                <line x1="250" y1="8" x2="250" y2="16" stroke="#62626f" strokeWidth="0.5" />
                <text x="140" y="10" fill="#9a9aa8" fontSize="6" fontFamily="Inter" textAnchor="middle">220 mm</text>
                {/* Flat dieline cut line (solid orange) */}
                <path d="M40 24 H70 V16 H110 V24 H150 V16 H190 V24 H210 V64 H190 V72 H150 V64 H110 V72 H70 V64 H40 Z" stroke="#f87b52" strokeWidth="1" fill="rgba(123,57,252,0.03)" />
                {/* Crease lines (dashed purple) */}
                <line x1="70" y1="24" x2="70" y2="64" stroke="#7b39fc" strokeWidth="0.75" strokeDasharray="3 2" />
                <line x1="110" y1="24" x2="110" y2="64" stroke="#7b39fc" strokeWidth="0.75" strokeDasharray="3 2" />
                <line x1="150" y1="24" x2="150" y2="64" stroke="#7b39fc" strokeWidth="0.75" strokeDasharray="3 2" />
                <line x1="190" y1="24" x2="190" y2="64" stroke="#7b39fc" strokeWidth="0.75" strokeDasharray="3 2" />
                {/* Crop mark corner */}
                <path d="M255 60 V70 H245" stroke="#f87b52" strokeWidth="0.75" />
              </svg>
            </div>

            <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
              {DISCIPLINES.packaging.summary}
            </p>

            {/* Checklist of Real Resume Items */}
            <ul className="space-y-2.5 mb-8">
              {DISCIPLINES.packaging.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-body text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Link to filtered Work */}
            <button
              onClick={() => handleDisciplineClick('Packaging')}
              className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary hover:text-primary-light transition-colors group"
            >
              <span>{DISCIPLINES.packaging.cta}</span>
              <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* ── PANEL B: Graphic Design (Artboard Dialect) ── */}
          <div
            id="graphics"
            className="lg:col-span-6 relative bg-surface border border-white/[0.08] hover:border-accent/40 rounded-sm p-8 sm:p-10 transition-all duration-300 lg:mt-6"
            style={{ scrollMarginTop: 'var(--nav-h)' }}
          >
            {/* Top dial label */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                  <Layers size={16} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-text">
                    {DISCIPLINES.graphics.title}
                  </h3>
                  <span className="font-caption text-xs text-text-dim block mt-0.5">
                    DIALECT: {DISCIPLINES.graphics.dialect} &bull; DIGITAL &amp; CAMPAIGNS
                  </span>
                </div>
              </div>
            </div>

            {/* Artboard Technical Illustration Drawing */}
            <div className="relative h-28 mb-8 bg-[#090910] border border-white/[0.04] rounded-sm flex items-center justify-center overflow-hidden p-4">
              <svg className="w-full h-full max-h-24" viewBox="0 0 280 80" fill="none">
                {/* Top artboard tag */}
                <rect x="25" y="10" width="80" height="12" rx="1" fill="rgba(255,255,255,0.06)" />
                <text x="32" y="19" fill="#9a9aa8" fontSize="6" fontFamily="Cabin">Artboard 1, 1080 &times; 1350</text>
                {/* Artboard frame with 8 selection handles */}
                <rect x="25" y="24" width="230" height="48" stroke="#f87b52" strokeWidth="0.75" fill="none" opacity="0.6" />
                <rect x="23" y="22" width="4" height="4" fill="#fff" stroke="#f87b52" strokeWidth="0.5" />
                <rect x="138" y="22" width="4" height="4" fill="#fff" stroke="#f87b52" strokeWidth="0.5" />
                <rect x="253" y="22" width="4" height="4" fill="#fff" stroke="#f87b52" strokeWidth="0.5" />
                <rect x="23" y="70" width="4" height="4" fill="#fff" stroke="#f87b52" strokeWidth="0.5" />
                <rect x="138" y="70" width="4" height="4" fill="#fff" stroke="#f87b52" strokeWidth="0.5" />
                <rect x="253" y="70" width="4" height="4" fill="#fff" stroke="#f87b52" strokeWidth="0.5" />
                {/* Bezier pen path & type specimen */}
                <text x="45" y="58" fill="#f2f2f5" fontSize="24" fontFamily="Instrument Serif" fontStyle="italic" opacity="0.8">Aa</text>
                <path d="M100 55 C 130 30, 160 70, 190 40" stroke="#7b39fc" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="100" cy="55" r="2" fill="#f87b52" />
                <circle cx="190" cy="40" r="2" fill="#f87b52" />
                <line x1="130" y1="30" x2="160" y2="70" stroke="#fff" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
                <circle cx="130" cy="30" r="1.5" fill="#7b39fc" />
                <circle cx="160" cy="70" r="1.5" fill="#7b39fc" />
                {/* Swatches */}
                <rect x="215" y="40" width="8" height="8" rx="1" fill="#7b39fc" />
                <rect x="227" y="40" width="8" height="8" rx="1" fill="#f87b52" />
                <rect x="239" y="40" width="8" height="8" rx="1" fill="#0f1530" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
              </svg>
            </div>

            <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
              {DISCIPLINES.graphics.summary}
            </p>

            {/* Checklist of Real Resume Items */}
            <ul className="space-y-2.5 mb-8">
              {DISCIPLINES.graphics.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-body text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Link to filtered Work */}
            <button
              onClick={() => handleDisciplineClick('Graphic Design')}
              className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-accent hover:text-accent-light transition-colors group"
            >
              <span>{DISCIPLINES.graphics.cta}</span>
              <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ── SHARED DISCIPLINE STRIP ── */}
        <div className="mt-12 bg-surface-2/60 border border-white/[0.06] rounded-sm px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-text-dim">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-body text-xs sm:text-sm text-text-muted font-medium">
              {DISCIPLINES.sharedStrip}
            </span>
          </div>
          <span className="font-mono text-[11px] text-text-dim tracking-wider uppercase">
            CHARYA&apos;S &bull; GLOBAL VISA &bull; FREELANCE
          </span>
        </div>
      </div>
    </section>
  );
}
