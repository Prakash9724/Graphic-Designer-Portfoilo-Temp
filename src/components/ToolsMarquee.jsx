import React from 'react';
import RegistrationMark from './RegistrationMark';
import { TOOLS } from '../data/content';

/**
 * Infinite marquee strip of tool names, separated by registration marks.
 * Pauses on hover. Edge-fade masks left/right.
 */
export default function ToolsMarquee() {
  const items = [...TOOLS, ...TOOLS]; // Duplicate for seamless loop

  return (
    <div className="relative border-y border-white/[0.06] bg-surface/50 py-4 overflow-hidden marquee-mask">
      <div
        className="flex items-center gap-8 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap"
        style={{ width: 'max-content' }}
      >
        {items.map((tool, i) => (
          <React.Fragment key={`${tool}-${i}`}>
            <span className="font-body text-sm text-text-muted tracking-wide">{tool}</span>
            <RegistrationMark size={12} className="text-text-dim shrink-0" />
          </React.Fragment>
        ))}
        {items.map((tool, i) => (
          <React.Fragment key={`dup-${tool}-${i}`}>
            <span className="font-body text-sm text-text-muted tracking-wide">{tool}</span>
            <RegistrationMark size={12} className="text-text-dim shrink-0" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
