import React, { useState } from 'react';
import SectionLabel from './SectionLabel';
import { PROCESS_PACKAGING, PROCESS_GRAPHIC } from '../data/content';

/**
 * Custom dieline-style SVG illustrations for Packaging (6 steps)
 * and artboard-style SVG illustrations for Graphic Design (5 steps).
 */
function ProcessStepIllustration({ stepNumber, discipline = 'packaging' }) {
  if (discipline === 'graphic') {
    switch (stepNumber) {
      case '01':
        // Brief and requirements: Spec ticket & format tags
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="8" y="8" width="32" height="34" rx="2" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="14" y1="16" x2="26" y2="16" stroke="#f87b52" strokeWidth="1.5" />
            <line x1="14" y1="22" x2="34" y2="22" stroke="#fff" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="14" y1="28" x2="30" y2="28" stroke="#fff" strokeWidth="1" strokeOpacity="0.4" />
            <rect x="14" y="33" width="16" height="5" rx="1" fill="rgba(123,57,252,0.3)" stroke="#7b39fc" strokeWidth="0.5" />
            <text x="16" y="37" fill="#7b39fc" fontSize="4" fontFamily="Inter" fontWeight="bold">FORMAT 4:5</text>
          </svg>
        );
      case '02':
        // Concept & layout: Artboard grid with baseline & columns
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="6" y="8" width="36" height="32" stroke="#7b39fc" strokeWidth="1" fill="none" />
            {/* Columns */}
            <line x1="18" y1="8" x2="18" y2="40" stroke="#7b39fc" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
            <line x1="30" y1="8" x2="30" y2="40" stroke="#7b39fc" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
            {/* Baseline guides */}
            <line x1="6" y1="20" x2="42" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="6" y1="28" x2="42" y2="28" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            {/* Focus target */}
            <circle cx="24" cy="24" r="5" stroke="#f87b52" strokeWidth="1" />
            <circle cx="24" cy="24" r="1.5" fill="#f87b52" />
          </svg>
        );
      case '03':
        // Design with brand consistency: Swatches, specimen & alignment
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="6" y="8" width="36" height="32" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <text x="12" y="26" fill="#f2f2f5" fontSize="16" fontFamily="Instrument Serif" fontStyle="italic">Aa</text>
            {/* Swatch set */}
            <rect x="26" y="14" width="6" height="6" rx="1" fill="#7b39fc" />
            <rect x="34" y="14" width="6" height="6" rx="1" fill="#f87b52" />
            {/* Vector path with anchors */}
            <path d="M12 34 C 18 28, 28 38, 36 30" stroke="#7b39fc" strokeWidth="1.2" strokeLinecap="round" />
            <rect x="11" y="33" width="2" height="2" fill="#f87b52" />
            <rect x="35" y="29" width="2" height="2" fill="#f87b52" />
          </svg>
        );
      case '04':
        // Adapt for digital and print formats: Multi-ratio artboard stack
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            {/* 1:1 post */}
            <rect x="8" y="14" width="16" height="16" stroke="#7b39fc" strokeWidth="1" />
            {/* 9:16 story */}
            <rect x="18" y="10" width="12" height="22" stroke="#f87b52" strokeWidth="1" fill="#14141c" />
            {/* 3:1 banner */}
            <rect x="14" y="26" width="26" height="10" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" fill="#0e0e14" />
            <text x="16" y="33" fill="#9a9aa8" fontSize="4" fontFamily="Inter">MULTI-EXPORT</text>
          </svg>
        );
      case '05':
      default:
        // Revisions & delivery: Approval seal & deadline check
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="6" y="8" width="36" height="32" rx="2" stroke="#7b39fc" strokeWidth="1" />
            <circle cx="24" cy="22" r="10" stroke="#f87b52" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M20 22 L23 25 L28 19" stroke="#f87b52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="12" y="33" width="24" height="6" rx="1" fill="rgba(123,57,252,0.2)" />
            <text x="24" y="37.5" fill="#f2f2f5" fontSize="4.5" fontFamily="Inter" textAnchor="middle" fontWeight="bold">DELIVERED &bull; 100%</text>
          </svg>
        );
    }
  }

  // Packaging pipeline illustrations (existing)
  switch (stepNumber) {
    case '01':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect x="6" y="8" width="36" height="32" rx="2" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M14 30 C 18 16, 30 18, 34 24" stroke="#7b39fc" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="14" cy="30" r="2.5" fill="#f87b52" />
          <circle cx="34" cy="24" r="2.5" fill="#f87b52" />
          <line x1="22" y1="18" x2="26" y2="18" stroke="#f87b52" strokeWidth="1" />
          <path d="M30 34 L36 34 L33 30 Z" fill="#7b39fc" />
          <text x="8" y="44" fill="#62626f" fontSize="6" fontFamily="Inter">ARTBOARD 01</text>
        </svg>
      );
    case '02':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <line x1="6" y1="6" x2="42" y2="6" stroke="#62626f" strokeWidth="0.75" />
          <line x1="6" y1="4" x2="6" y2="8" stroke="#62626f" strokeWidth="0.75" />
          <line x1="42" y1="4" x2="42" y2="8" stroke="#62626f" strokeWidth="0.75" />
          <path d="M12 18 H20 V10 H28 V18 H36 V30 H28 V38 H20 V30 H12 Z" stroke="#f87b52" strokeWidth="1.2" fill="none" />
          <line x1="20" y1="18" x2="28" y2="18" stroke="#7b39fc" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="20" y1="30" x2="28" y2="30" stroke="#7b39fc" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="20" y1="18" x2="20" y2="30" stroke="#7b39fc" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="28" y1="18" x2="28" y2="30" stroke="#7b39fc" strokeWidth="1" strokeDasharray="2 1" />
          <text x="24" y="5" fill="#f87b52" fontSize="5" fontFamily="Inter" textAnchor="middle">120 mm</text>
        </svg>
      );
    case '03':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="16" cy="18" r="8" stroke="#7b39fc" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="16" y1="6" x2="16" y2="30" stroke="#7b39fc" strokeWidth="0.75" />
          <line x1="4" y1="18" x2="28" y2="18" stroke="#7b39fc" strokeWidth="0.75" />
          <circle cx="16" cy="18" r="3" stroke="#f87b52" strokeWidth="1" />
          <rect x="32" y="8" width="8" height="6" fill="#00ffff" rx="1" />
          <rect x="32" y="16" width="8" height="6" fill="#ff00ff" rx="1" />
          <rect x="32" y="24" width="8" height="6" fill="#ffff00" rx="1" />
          <rect x="32" y="32" width="8" height="6" fill="#111116" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" rx="1" />
          <text x="32" y="44" fill="#62626f" fontSize="6" fontFamily="Inter">CMYK 4C</text>
        </svg>
      );
    case '04':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="18" cy="18" r="10" stroke="#7b39fc" strokeWidth="1.2" />
          <circle cx="18" cy="18" r="4" stroke="#62626f" strokeWidth="0.75" />
          <circle cx="34" cy="28" r="10" stroke="#f87b52" strokeWidth="1.2" />
          <circle cx="34" cy="28" r="4" stroke="#62626f" strokeWidth="0.75" />
          <path d="M6 22 L26 22 L44 24" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="8" y="42" fill="#62626f" fontSize="6" fontFamily="Inter">PRESS PASS</text>
        </svg>
      );
    case '05':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <polygon points="20,10 34,16 20,22 6,16" stroke="#7b39fc" strokeWidth="1" fill="none" />
          <polygon points="6,16 20,22 20,36 6,30" stroke="#7b39fc" strokeWidth="1" fill="none" />
          <polygon points="20,22 34,16 34,30 20,36" stroke="#f87b52" strokeWidth="1" fill="none" />
          <circle cx="34" cy="34" r="8" fill="#14141c" stroke="#f87b52" strokeWidth="1.2" />
          <path d="M30 34 L33 37 L38 31" stroke="#f87b52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case '06':
    default:
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect x="6" y="8" width="36" height="32" rx="2" stroke="#7b39fc" strokeWidth="1.2" />
          <line x1="6" y1="18" x2="42" y2="18" stroke="#7b39fc" strokeWidth="0.75" />
          <rect x="10" y="22" width="28" height="12" rx="1" fill="rgba(123,57,252,0.12)" stroke="#f87b52" strokeWidth="0.75" />
          <text x="24" y="30" fill="#f87b52" fontSize="6" fontFamily="Inter" textAnchor="middle" fontWeight="bold">v2.4 APPROVED</text>
          <text x="10" y="15" fill="#9a9aa8" fontSize="6" fontFamily="Inter">RELEASED</text>
        </svg>
      );
  }
}

/**
 * Process (#process) section with dual workflows:
 * - Packaging Pipeline (6 steps, Dieline dialect)
 * - Graphic Design Workflow (5 steps, Artboard dialect)
 */
export default function Process() {
  const [activeTab, setActiveTab] = useState('packaging'); // 'packaging' | 'graphic'

  const steps = activeTab === 'packaging' ? PROCESS_PACKAGING : PROCESS_GRAPHIC;

  return (
    <section id="process" className="section-wrapper">
      <div className="container-main">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <SectionLabel number="03" label="PROCESS" />
            <h2 className="font-display text-display-2 text-text tracking-[-0.02em]">
              How a job <em className="text-accent italic font-normal">moves</em>
            </h2>
            <p className="font-body text-text-muted text-base sm:text-lg max-w-xl mt-4">
              Disciplined production workflows engineered to guarantee zero misprints and 100% brand fidelity.
            </p>
          </div>

          {/* Workflow Toggle / Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-surface-2 border border-white/[0.08] rounded-full self-start md:self-end">
            <button
              onClick={() => setActiveTab('packaging')}
              className={`px-5 py-2 rounded-full text-xs font-heading font-medium transition-all ${
                activeTab === 'packaging'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-muted hover:text-text'
              }`}
              role="tab"
              aria-selected={activeTab === 'packaging'}
            >
              Packaging (6 Steps)
            </button>
            <button
              onClick={() => setActiveTab('graphic')}
              className={`px-5 py-2 rounded-full text-xs font-heading font-medium transition-all ${
                activeTab === 'graphic'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-text-muted hover:text-text'
              }`}
              role="tab"
              aria-selected={activeTab === 'graphic'}
            >
              Graphic Design (5 Steps)
            </button>
          </div>
        </div>

        {/* Pipeline Container with connecting crease line */}
        <div className="relative">
          {/* Connecting dashed crease line (desktop) */}
          <div className="hidden lg:block absolute top-[68px] left-12 right-12 h-0 border-t-2 border-dashed border-primary/25 z-0 pointer-events-none" />

          {/* Steps Grid: Job ticket cards */}
          <div className={`grid grid-cols-1 md:grid-cols-2 ${activeTab === 'packaging' ? 'lg:grid-cols-3' : 'lg:grid-cols-5'} gap-6 relative z-10`}>
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative bg-surface border border-white/[0.06] hover:border-primary/40 rounded-sm p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Job ticket header bar */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-[11px] font-semibold tracking-widest uppercase ${activeTab === 'graphic' ? 'text-accent' : 'text-primary'}`}>
                        {step.number}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-text-dim" />
                      <span className="font-caption text-[11px] text-text-dim tracking-wider uppercase">
                        {activeTab === 'graphic' ? 'ARTBOARD' : 'TICKET'}
                      </span>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full border transition-colors ${
                        activeTab === 'graphic'
                          ? 'border-accent/50 group-hover:bg-accent'
                          : 'border-primary/50 group-hover:bg-primary'
                      }`}
                    />
                  </div>

                  {/* Custom illustration */}
                  <div className="mb-5 flex items-center justify-between">
                    <ProcessStepIllustration stepNumber={step.number} discipline={activeTab} />
                    <span className="text-[10px] font-mono text-text-dim/60 tracking-wider">
                      PHASE {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-text group-hover:text-white transition-colors mb-2.5">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Ticket footer note */}
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-text-dim">
                  <span>SPEC // PASS</span>
                  <span className={activeTab === 'graphic' ? 'text-accent/90' : 'text-primary/90'}>
                    &bull; VERIFIED
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
