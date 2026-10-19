import React from 'react';
import SectionLabel from './SectionLabel';
import { EXPERIENCE, EDUCATION, CERTIFICATION } from '../data/content';

/**
 * Experience (#experience) section.
 * Clean vertical timeline with tabular dates, pulsing current indicator,
 * discipline tags per bullet (PACKAGING / GRAPHIC / WEB), and education & certification row.
 */
export default function Experience() {
  const getTagStyle = (tag) => {
    switch (tag) {
      case 'PACKAGING':
        return 'bg-primary/15 text-primary border-primary/30';
      case 'GRAPHIC':
        return 'bg-accent/15 text-accent border-accent/30';
      case 'WEB':
        return 'bg-sky-500/15 text-sky-400 border-sky-500/30';
      default:
        return 'bg-white/10 text-text-dim border-white/10';
    }
  };

  return (
    <section id="experience" className="section-wrapper">
      <div className="container-main">
        {/* Section Header */}
        <div className="mb-16">
          <SectionLabel number="05" label="EXPERIENCE" />
          <h2 className="font-display text-display-2 text-text tracking-[-0.02em]">
            Work <em className="text-accent italic font-normal">history</em>
          </h2>
          <p className="font-body text-text-muted text-base sm:text-lg max-w-2xl mt-4">
            Hands-on agency and enterprise studio experience delivering production packaging lines, digital campaigns, and brand communications.
          </p>
        </div>

        {/* Timeline Entries */}
        <div className="relative border-l border-white/[0.08] ml-3 sm:ml-4 pl-6 sm:pl-10 space-y-16">
          {EXPERIENCE.map((job) => (
            <div key={job.company} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                {job.current ? (
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary" />
                  </span>
                ) : (
                  <span className="h-3 w-3 rounded-full bg-surface-2 border border-white/20" />
                )}
              </div>

              {/* Header: Dates & Status */}
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="font-mono text-xs sm:text-sm font-medium text-text-dim tabular-nums tracking-wide">
                  {job.period}
                </span>
                {job.current && (
                  <span className="bg-primary/20 text-primary border border-primary/30 text-[10px] font-heading font-medium px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                    Current
                  </span>
                )}
              </div>

              {/* Role & Company */}
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-text">
                {job.role}
              </h3>
              <p className="font-body text-base text-text-muted font-medium mt-1 mb-6">
                {job.company}
              </p>

              {/* Bullet points with discipline tags */}
              <ul className="space-y-3 max-w-3xl">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-sm sm:text-[15px] text-text-muted leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                    <div className="flex-1 flex flex-wrap items-baseline gap-2">
                      <span>{bullet.text}</span>
                      {bullet.tag && (
                        <span
                          className={`text-[9px] font-mono font-medium px-1.5 py-0.5 rounded border tracking-wider uppercase inline-block ${getTagStyle(
                            bullet.tag
                          )}`}
                        >
                          {bullet.tag}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education & Certification Compact Grid */}
        <div className="mt-20 pt-12 border-t border-white/[0.08]">
          <h3 className="text-xs font-mono font-semibold text-text-dim tracking-[0.2em] uppercase mb-8">
            // EDUCATION &amp; CERTIFICATION
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.title}
                className="bg-surface border border-white/[0.06] p-6 rounded-sm"
              >
                <span className="font-mono text-xs text-text-dim tabular-nums tracking-wider">
                  {edu.period}
                </span>
                <h4 className="font-heading text-base font-semibold text-text mt-2 mb-1">
                  {edu.title}
                </h4>
                <p className="font-body text-sm text-text-muted">
                  {edu.institution}
                </p>
              </div>
            ))}

            {/* Certification Card */}
            <div className="bg-surface border border-white/[0.06] p-6 rounded-sm">
              <span className="font-mono text-xs text-primary font-medium tracking-wider uppercase">
                CERTIFIED
              </span>
              <h4 className="font-heading text-base font-semibold text-text mt-2 mb-1">
                {CERTIFICATION.title}
              </h4>
              <p className="font-body text-sm text-text-muted">
                {CERTIFICATION.institution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
