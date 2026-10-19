import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Copy, Check, Download, ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { PERSON, CONTACT } from '../data/content';

/**
 * Contact (#contact) section.
 * Rebalanced headline ("Have a product to package or a brand to design?")
 * and dual-dialect background line-art combining a dieline and an artboard grid.
 */
export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSON.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="section-wrapper overflow-hidden py-20 md:py-28 lg:py-40">
      {/* Background dual-dialect line-art: Dieline + Artboard Grid (6% opacity) */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.06] select-none"
        aria-hidden="true"
      >
        <svg width="900" height="900" viewBox="0 0 900 900" fill="none">
          {/* Packaging Dieline Cross */}
          <rect x="250" y="250" width="400" height="400" stroke="#7b39fc" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M150 350 H750 M150 550 H750 M350 150 V750 M550 150 V750" stroke="#f87b52" strokeWidth="2" />
          <circle cx="450" cy="450" r="180" stroke="#7b39fc" strokeWidth="1.5" />

          {/* Graphic Design Artboard Grid Dialect */}
          <rect x="80" y="80" width="740" height="740" stroke="#fff" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="80" y1="200" x2="820" y2="200" stroke="#fff" strokeWidth="0.5" />
          <line x1="80" y1="700" x2="820" y2="700" stroke="#fff" strokeWidth="0.5" />
          <line x1="200" y1="80" x2="200" y2="820" stroke="#fff" strokeWidth="0.5" />
          <line x1="700" y1="80" x2="700" y2="820" stroke="#fff" strokeWidth="0.5" />

          {/* Bezier Pen Path with Anchors */}
          <path d="M200 700 C 350 400, 550 800, 700 500" stroke="#7b39fc" strokeWidth="2.5" />
          <rect x="195" y="695" width="10" height="10" fill="#f87b52" />
          <rect x="695" y="495" width="10" height="10" fill="#f87b52" />
          <circle cx="350" cy="400" r="6" fill="#7b39fc" />
          <circle cx="550" cy="800" r="6" fill="#7b39fc" />

          {/* Type Specimen */}
          <text x="720" y="250" fill="#fff" fontSize="80" fontFamily="Instrument Serif" fontStyle="italic">
            Aa
          </text>
        </svg>
      </div>

      <div className="relative z-10 container-main">
        <div className="max-w-3xl">
          <SectionLabel number="07" label="CONTACT" />

          {/* Big Headline */}
          <h2 className="font-display text-display-2 lg:text-[clamp(3rem,6vw,4.5rem)] text-text mt-4 mb-8 leading-[1.05] tracking-[-0.02em]">
            {CONTACT.headline.before}{' '}
            <em className="text-accent italic font-normal">
              {CONTACT.headline.accent}
            </em>
          </h2>

          <p className="font-body text-text-muted text-base sm:text-xl leading-relaxed mb-12 max-w-xl">
            Whether you have a product launch requiring production dielines, or need campaign creatives, banners, and brand collateral that convert.
          </p>

          {/* Direct Email with Copy Button */}
          <div className="mb-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${PERSON.email}`}
              className="font-heading text-xl sm:text-3xl text-text hover:text-primary transition-colors underline decoration-white/20 underline-offset-8"
            >
              {PERSON.email}
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-2 border border-white/10 hover:border-white/20 text-xs font-body text-text-muted hover:text-text transition-colors"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-accent" />
                  <span className="text-accent font-medium">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy size={14} strokeWidth={1.5} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href={`mailto:${PERSON.email}`}
              className="btn btn-primary"
            >
              <Mail size={16} strokeWidth={1.5} />
              Send an Email
            </a>
            <a
              href={PERSON.resumeUrl}
              download
              className="btn btn-secondary"
            >
              <Download size={16} strokeWidth={1.5} />
              Download Resume
            </a>
          </div>

          {/* Direct Contact Metadata Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/[0.08]">
            {/* Phone */}
            <div>
              <span className="font-mono text-[11px] font-semibold text-text-dim uppercase tracking-wider block mb-1">
                Direct Phone
              </span>
              <a
                href={`tel:${PERSON.phone.replace(/\s+/g, '')}`}
                className="font-body text-sm sm:text-base text-text hover:text-primary transition-colors flex items-center gap-2"
              >
                <Phone size={14} strokeWidth={1.5} className="text-primary" />
                {PERSON.phone}
              </a>
            </div>

            {/* Location */}
            <div>
              <span className="font-mono text-[11px] font-semibold text-text-dim uppercase tracking-wider block mb-1">
                Location
              </span>
              <div className="font-body text-sm sm:text-base text-text-muted flex items-center gap-2">
                <MapPin size={14} strokeWidth={1.5} className="text-accent" />
                {PERSON.location}
              </div>
            </div>

            {/* Instagram */}
            <div>
              <span className="font-mono text-[11px] font-semibold text-text-dim uppercase tracking-wider block mb-1">
                Social Portfolio
              </span>
              <a
                href={PERSON.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm sm:text-base text-text hover:text-accent transition-colors flex items-center gap-1.5"
              >
                <Instagram size={14} strokeWidth={1.5} className="text-accent" />
                {PERSON.instagram}
                <ArrowUpRight size={13} strokeWidth={1.5} className="text-text-dim" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
