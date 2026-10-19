import React from 'react';
import { Instagram, MapPin, ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { ABOUT_TEXT, PERSON } from '../data/content';

/**
 * About (#about) section.
 * Human narrative covering both Packaging and Graphic Design.
 * Features a dual-dialect portrait placeholder:
 * - Top-left & Bottom-right: Print Crop Marks (Dieline dialect)
 * - Top-right & Bottom-left: 8-point Selection Handles (Artboard dialect)
 */
export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Dual-Dialect Portrait Frame */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:mx-0 w-full">
            <div className="relative group">
              {/* Dual-Dialect Corner Decorations */}
              {/* Top-Left: Print Crop Mark */}
              <span
                className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t border-l border-accent z-20 pointer-events-none"
                aria-hidden="true"
              />
              {/* Bottom-Right: Print Crop Mark */}
              <span
                className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b border-r border-accent z-20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Top-Right: Selection Handle */}
              <span
                className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-accent rounded-[1px] z-20 pointer-events-none shadow-sm"
                aria-hidden="true"
              />
              {/* Bottom-Left: Selection Handle */}
              <span
                className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-accent rounded-[1px] z-20 pointer-events-none shadow-sm"
                aria-hidden="true"
              />

              <div className="relative aspect-[3/4] bg-surface-2 border border-white/[0.08] rounded-sm overflow-hidden flex flex-col items-center justify-center p-8 text-center">
                {/* Hairline grid background */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Technical dieline framing */}
                <div className="absolute inset-4 border border-dashed border-primary/30 rounded-sm pointer-events-none" />

                {/* Silhouette avatar placeholder mark */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-surface border border-white/10 flex items-center justify-center mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9a9aa8" strokeWidth="1.2">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <span className="font-heading text-lg font-semibold text-text block">
                    {PERSON.name}
                  </span>
                  <span className="font-caption text-xs text-text-dim block mt-0.5 tracking-wider">
                    {PERSON.title}
                  </span>
                </div>

                {/* Dual dialect annotations */}
                <span className="absolute top-3 left-4 text-[9px] font-mono text-primary/70 tracking-wider">
                  KLD // 85 &times; 110 mm
                </span>
                <span className="absolute top-3 right-4 text-[9px] font-mono text-accent/70 tracking-wider">
                  ARTBOARD #01
                </span>

                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-mono text-text-dim/60 tracking-wider">
                  TODO: REPLACE portrait.jpg
                </span>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Info */}
          <div className="lg:col-span-7">
            <SectionLabel number="06" label="ABOUT" />
            <h2 className="font-display text-display-2 text-text tracking-[-0.02em] mt-3 mb-8">
              The designer behind the <em className="text-accent italic font-normal">work</em>
            </h2>

            <div className="prose prose-invert max-w-none">
              <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed sm:leading-loose">
                {ABOUT_TEXT}
              </p>
            </div>

            {/* Quick meta details */}
            <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2 text-text-muted">
                <MapPin size={16} strokeWidth={1.5} className="text-primary" />
                <span className="font-body text-sm">{PERSON.location}</span>
              </div>

              <a
                href={PERSON.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-muted hover:text-text transition-colors group"
              >
                <Instagram size={16} strokeWidth={1.5} className="text-accent group-hover:scale-110 transition-transform" />
                <span className="font-body text-sm font-medium">{PERSON.instagram}</span>
                <ArrowUpRight size={14} strokeWidth={1.5} className="text-text-dim" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
