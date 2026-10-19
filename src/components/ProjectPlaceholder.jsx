import React from 'react';

/**
 * SVG placeholder for project images. Draws a faint dieline shape
 * matching the project category (carton, pouch, label, master).
 */
export default function ProjectPlaceholder({ shape = 'carton', label = 'REPLACE: image', className = '' }) {
  const shapes = {
    carton: (
      <>
        {/* Box cross-shape outline */}
        <rect x="35" y="15" width="30" height="20" stroke="#f87b52" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="35" y="35" width="30" height="30" stroke="#f87b52" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="35" y="65" width="30" height="20" stroke="#f87b52" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="10" y="35" width="25" height="30" stroke="#f87b52" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="65" y="35" width="25" height="30" stroke="#f87b52" strokeWidth="0.5" fill="none" opacity="0.3" />
        <line x1="35" y1="35" x2="65" y2="35" stroke="#7b39fc" strokeWidth="0.4" strokeDasharray="2 2" opacity="0.4" />
        <line x1="35" y1="65" x2="65" y2="65" stroke="#7b39fc" strokeWidth="0.4" strokeDasharray="2 2" opacity="0.4" />
      </>
    ),
    pouch: (
      <>
        {/* Pouch shape */}
        <path d="M30 20 L70 20 L75 80 Q50 85 25 80 Z" stroke="#f87b52" strokeWidth="0.5" fill="none" opacity="0.3" />
        <line x1="30" y1="30" x2="70" y2="30" stroke="#7b39fc" strokeWidth="0.4" strokeDasharray="2 2" opacity="0.4" />
        <rect x="38" y="22" width="24" height="5" stroke="#f87b52" strokeWidth="0.3" fill="none" opacity="0.2" />
      </>
    ),
    label: (
      <>
        {/* Label / sticker shape */}
        <rect x="20" y="25" width="60" height="50" rx="8" stroke="#f87b52" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="28" y="33" width="44" height="34" rx="4" stroke="#7b39fc" strokeWidth="0.3" strokeDasharray="2 2" fill="none" opacity="0.3" />
        <line x1="35" y1="45" x2="65" y2="45" stroke="#62626f" strokeWidth="0.3" opacity="0.3" />
        <line x1="35" y1="52" x2="55" y2="52" stroke="#62626f" strokeWidth="0.3" opacity="0.3" />
      </>
    ),
    master: (
      <>
        {/* Master carton / corrugated box */}
        <rect x="20" y="25" width="60" height="50" stroke="#f87b52" strokeWidth="0.5" fill="none" opacity="0.3" />
        <line x1="20" y1="40" x2="80" y2="40" stroke="#7b39fc" strokeWidth="0.4" strokeDasharray="3 2" opacity="0.3" />
        {/* Handle holes */}
        <rect x="35" y="45" width="10" height="5" rx="1" stroke="#62626f" strokeWidth="0.3" fill="none" opacity="0.3" />
        <rect x="55" y="45" width="10" height="5" rx="1" stroke="#62626f" strokeWidth="0.3" fill="none" opacity="0.3" />
        {/* Arrow up */}
        <path d="M50 55 L46 62 L54 62 Z" stroke="#62626f" strokeWidth="0.3" fill="none" opacity="0.3" />
      </>
    ),
  };

  return (
    <div className={`relative w-full h-full bg-surface border border-white/[0.06] flex items-center justify-center overflow-hidden ${className}`}>
      <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 max-w-[200px]" fill="none">
        {shapes[shape] || shapes.carton}
      </svg>
      <span className="absolute bottom-3 right-3 text-[9px] font-body text-text-dim/60 tracking-wider uppercase">
        {label}
      </span>
    </div>
  );
}
