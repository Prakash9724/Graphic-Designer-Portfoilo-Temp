import React from 'react';
import { ArrowUp } from 'lucide-react';
import RegistrationMark from './RegistrationMark';
import { PERSON } from '../data/content';

/**
 * Footer (#footer) minimal component.
 * Features copyright, packaging craft note, back-to-top button, and print CMYK color bar.
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-bg py-12">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <RegistrationMark size={16} className="text-primary" />
            <span className="font-heading text-sm font-semibold text-text">
              {PERSON.name}
            </span>
            <span className="text-text-dim text-xs font-body">
              © {new Date().getFullYear()} — Packaging &amp; Graphic Design
            </span>
          </div>

          {/* CMYK Swatch Strip & Back to top */}
          <div className="flex items-center gap-8">
            {/* CMYK Print Color Bar */}
            <div className="flex items-center gap-1.5" title="CMYK Print Calibration Standard">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#00ffff]" title="Cyan (C)" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#ff00ff]" title="Magenta (M)" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#ffff00]" title="Yellow (Y)" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#000000] border border-white/20" title="Key / Black (K)" />
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-heading font-medium text-text-muted hover:text-text transition-colors p-2 rounded hover:bg-surface-2"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
