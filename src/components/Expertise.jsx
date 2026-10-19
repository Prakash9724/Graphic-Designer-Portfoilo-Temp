import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { EXPERTISE_GROUPS } from '../data/content';

/**
 * Expertise (#expertise) section.
 * Sticky-left overview + rows grouped under "PACKAGING" and "GRAPHIC & DIGITAL" headers.
 * Interactive hover indentation, orange arrow reveals, and Core specialization tags.
 */
export default function Expertise() {
  const [hoveredKey, setHoveredKey] = useState(null);

  const groups = [EXPERTISE_GROUPS.packaging, EXPERTISE_GROUPS.graphic];

  return (
    <section id="expertise" className="section-wrapper">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Title & Overview */}
          <div className="lg:col-span-5 lg:sticky lg:top-[var(--nav-h)]">
            <SectionLabel number="04" label="EXPERTISE" />
            <h2 className="font-display text-display-2 text-text tracking-[-0.02em]">
              What I <em className="text-accent italic font-normal">design</em>
            </h2>
            <p className="font-body text-text-muted text-base sm:text-lg leading-relaxed mt-6 max-w-md">
              From physical box structures and press-tested KLD dielines to digital campaigns, social feeds, and brand collateral. Every deliverable is prepared with exact technical specifications.
            </p>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="font-body text-xs text-text-muted tracking-wider uppercase">
                  Packaging Core
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="font-body text-xs text-text-muted tracking-wider uppercase">
                  Graphic &amp; Digital
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Grouped Rows */}
          <div className="lg:col-span-7 space-y-12">
            {groups.map((group, gIdx) => (
              <div key={group.title} className="border-t border-white/[0.08]">
                {/* Group Small Header */}
                <div className="py-3 px-1 border-b border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-text-dim tracking-[0.2em] uppercase">
                    // {group.title}
                  </span>
                  <span className="font-caption text-[11px] text-text-dim/60">
                    {group.items.length} SPECIALIZATIONS
                  </span>
                </div>

                {/* Group Items */}
                {group.items.map((item, idx) => {
                  const key = `${gIdx}-${idx}`;
                  const isHovered = hoveredKey === key;

                  return (
                    <div
                      key={item.title}
                      onMouseEnter={() => setHoveredKey(key)}
                      onMouseLeave={() => setHoveredKey(null)}
                      className="group relative border-b border-white/[0.08] py-5 sm:py-6 transition-colors duration-200 cursor-default"
                    >
                      <div className="flex items-start justify-between gap-4 transition-transform duration-300 group-hover:translate-x-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-mono text-xs text-text-dim tabular-nums">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <h3 className="font-heading text-lg sm:text-xl font-semibold text-text group-hover:text-white transition-colors">
                              {item.title}
                            </h3>
                            {item.core && (
                              <span className="bg-primary/20 text-primary border border-primary/30 text-[10px] font-heading font-medium px-2 py-0.5 rounded-full tracking-wider uppercase">
                                Core
                              </span>
                            )}
                          </div>

                          <p
                            className={`font-body text-xs sm:text-sm text-text-muted leading-relaxed mt-1.5 pl-7 transition-all duration-300 ${
                              isHovered ? 'text-text opacity-100' : 'text-text-muted opacity-80'
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>

                        {/* Orange Arrow Reveal */}
                        <div className="pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
                          <ArrowRight size={18} strokeWidth={1.5} className="text-accent" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
