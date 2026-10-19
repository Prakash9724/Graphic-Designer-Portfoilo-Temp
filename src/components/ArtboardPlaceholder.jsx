import React from 'react';

/**
 * ArtboardPlaceholder: SVG-based placeholder for Graphic Design projects.
 * Incorporates the Graphic Design dialect: artboard title tags, column/baseline grids,
 * ruler ticks, bezier pen-paths with anchor points & handles, and Instrument Serif "Aa" specimen.
 */
export default function ArtboardPlaceholder({
  format = 'post-4x5',
  artboardLabel = 'Artboard 1, 1080 × 1350',
  label = 'REPLACE: image.jpg',
  className = '',
}) {
  return (
    <div
      className={`relative w-full h-full bg-[#0a0a10] border border-white/[0.08] flex flex-col overflow-hidden select-none ${className}`}
    >
      {/* Top Artboard Header Bar */}
      <div className="h-6 bg-surface-2/90 border-b border-white/[0.06] px-3 flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-primary">
            <rect x="1" y="1" width="8" height="8" stroke="currentColor" strokeWidth="1" />
            <line x1="1" y1="3" x2="9" y2="3" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <span className="font-caption text-[10px] text-text-dim tracking-wider font-medium">
            {artboardLabel}
          </span>
        </div>

        {/* Mini Layers / Zoom Tag */}
        <span className="font-mono text-[9px] text-text-dim/60">100%</span>
      </div>

      {/* Main Artboard Canvas */}
      <div className="relative flex-1 w-full flex items-center justify-center p-4">
        {/* Subtle Background Pixel & Column Grid */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Ruler Ticks along top and left edge */}
        <svg
          className="absolute top-0 left-0 right-0 h-2 w-full pointer-events-none opacity-25"
          fill="none"
        >
          <line x1="0" y1="1" x2="100%" y2="1" stroke="#fff" strokeWidth="0.5" />
          {[...Array(40)].map((_, i) => (
            <line
              key={i}
              x1={`${i * 2.5}%`}
              y1="1"
              x2={`${i * 2.5}%`}
              y2={i % 5 === 0 ? '7' : '4'}
              stroke="#fff"
              strokeWidth="0.5"
            />
          ))}
        </svg>

        {/* Format Specific Artboard Illustrations */}
        {format === 'logo' ? (
          /* Logo Construction Grid Dialect */
          <svg className="w-3/4 h-3/4 max-w-[180px]" viewBox="0 0 160 160" fill="none">
            {/* Center crosshair */}
            <line x1="80" y1="10" x2="80" y2="150" stroke="#7b39fc" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.6" />
            <line x1="10" y1="80" x2="150" y2="80" stroke="#7b39fc" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.6" />
            {/* Compass circles */}
            <circle cx="80" cy="80" r="60" stroke="#7b39fc" strokeWidth="0.5" opacity="0.3" />
            <circle cx="80" cy="80" r="45" stroke="#7b39fc" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
            <circle cx="80" cy="80" r="30" stroke="#f87b52" strokeWidth="0.75" opacity="0.5" />
            {/* Diagonal guides */}
            <line x1="25" y1="25" x2="135" y2="135" stroke="#fff" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
            <line x1="25" y1="135" x2="135" y2="25" stroke="#fff" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
            {/* Geometric Mark construct */}
            <path d="M50 80 A30 30 0 0 1 110 80 A15 15 0 0 1 80 80" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <circle cx="80" cy="80" r="3" fill="#f87b52" />
          </svg>
        ) : format === 'web' ? (
          /* Wix Studio Website Wireframe Dialect */
          <svg className="w-4/5 h-4/5 max-w-[240px]" viewBox="0 0 200 120" fill="none">
            <rect x="10" y="10" width="180" height="100" rx="3" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="#0d0d16" />
            {/* Browser Dots */}
            <circle cx="20" cy="18" r="2" fill="#f87b52" />
            <circle cx="26" cy="18" r="2" fill="#7b39fc" />
            <circle cx="32" cy="18" r="2" fill="#62626f" />
            <line x1="10" y1="26" x2="190" y2="26" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            {/* Nav wireframe */}
            <rect x="42" y="16" width="30" height="4" rx="1" fill="#9a9aa8" opacity="0.4" />
            <rect x="150" y="15" width="26" height="6" rx="3" fill="#7b39fc" opacity="0.6" />
            {/* Hero text wireframe */}
            <rect x="24" y="42" width="80" height="8" rx="1" fill="#fff" opacity="0.5" />
            <rect x="24" y="55" width="60" height="4" rx="1" fill="#9a9aa8" opacity="0.3" />
            <rect x="24" y="63" width="70" height="4" rx="1" fill="#9a9aa8" opacity="0.2" />
            <rect x="24" y="75" width="36" height="8" rx="4" fill="#f87b52" opacity="0.8" />
            {/* Visual media block with dieline guide */}
            <rect x="115" y="38" width="65" height="55" rx="2" stroke="#7b39fc" strokeWidth="0.75" strokeDasharray="3 2" fill="rgba(123,57,252,0.05)" />
            <line x1="115" y1="38" x2="180" y2="93" stroke="#7b39fc" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />
            <line x1="115" y1="93" x2="180" y2="38" stroke="#7b39fc" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />
          </svg>
        ) : format === 'banner' ? (
          /* Wide Display Banner Dialect */
          <svg className="w-5/6 h-3/4 max-w-[260px]" viewBox="0 0 240 80" fill="none">
            <rect x="10" y="10" width="220" height="60" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            {/* Baseline guides */}
            <line x1="20" y1="30" x2="150" y2="30" stroke="#7b39fc" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
            <line x1="20" y1="46" x2="150" y2="46" stroke="#7b39fc" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
            {/* Text specimen bars */}
            <rect x="20" y="20" width="95" height="7" rx="1" fill="#fff" opacity="0.7" />
            <rect x="20" y="36" width="70" height="5" rx="1" fill="#9a9aa8" opacity="0.4" />
            {/* CTA shape */}
            <rect x="20" y="50" width="42" height="10" rx="5" fill="#f87b52" opacity="0.9" />
            {/* Right graphic accent: Bezier curve with handles */}
            <path d="M160 55 C 175 15, 205 15, 215 55" stroke="#7b39fc" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="160" cy="55" r="2.5" fill="#f87b52" />
            <circle cx="215" cy="55" r="2.5" fill="#f87b52" />
            <line x1="175" y1="15" x2="205" y2="15" stroke="#fff" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
            <rect x="173" y="13" width="4" height="4" fill="#fff" />
            <rect x="203" y="13" width="4" height="4" fill="#fff" />
          </svg>
        ) : (
          /* Feed Post (4:5 / 1:1) with Typography "Aa" & Bezier Pen Dialect */
          <svg className="w-3/4 h-3/4 max-w-[200px]" viewBox="0 0 160 180" fill="none">
            {/* Safe zone boundary */}
            <rect x="15" y="15" width="130" height="150" stroke="#7b39fc" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />

            {/* Type specimen "Aa" in Instrument Serif */}
            <text x="30" y="70" fill="#f2f2f5" fontSize="42" fontFamily="Instrument Serif, serif" fontStyle="italic" opacity="0.9">
              Aa
            </text>

            {/* Color Swatch Chips */}
            <g transform="translate(100, 32)">
              <rect x="0" y="0" width="10" height="10" rx="1" fill="#7b39fc" />
              <rect x="14" y="0" width="10" height="10" rx="1" fill="#f87b52" />
              <rect x="28" y="0" width="10" height="10" rx="1" fill="#14141c" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            </g>

            {/* Bezier Pen Path with Anchor Points & Direction Handles */}
            <path d="M30 135 C 50 95, 100 155, 130 110" stroke="#7b39fc" strokeWidth="1.5" strokeLinecap="round" />
            {/* Start point */}
            <rect x="28" y="133" width="4" height="4" fill="#f87b52" stroke="#fff" strokeWidth="0.5" />
            {/* End point */}
            <rect x="128" y="108" width="4" height="4" fill="#f87b52" stroke="#fff" strokeWidth="0.5" />
            {/* Control handles */}
            <line x1="50" y1="95" x2="30" y2="135" stroke="#fff" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
            <line x1="100" y1="155" x2="130" y2="110" stroke="#fff" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
            <circle cx="50" cy="95" r="2.5" fill="#7b39fc" stroke="#fff" strokeWidth="0.5" />
            <circle cx="100" cy="155" r="2.5" fill="#7b39fc" stroke="#fff" strokeWidth="0.5" />

            {/* Layout baseline guide lines */}
            <line x1="30" y1="82" x2="130" y2="82" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
            <rect x="30" y="86" width="55" height="4" rx="1" fill="#9a9aa8" opacity="0.4" />
            <rect x="30" y="93" width="75" height="4" rx="1" fill="#9a9aa8" opacity="0.3" />
          </svg>
        )}
      </div>

      {/* Bottom Placeholder Tag */}
      <div className="px-3 py-1.5 bg-surface/90 border-t border-white/[0.04] flex items-center justify-between text-[9px] font-mono text-text-dim">
        <span>RGB / 72 DPI</span>
        <span className="text-accent/80">{label}</span>
      </div>
    </div>
  );
}
