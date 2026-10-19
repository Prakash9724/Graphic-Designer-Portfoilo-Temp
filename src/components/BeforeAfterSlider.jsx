import React, { useState, useRef, useCallback } from 'react';

/**
 * BeforeAfterSlider: Interactive comparison slider with two modes:
 * - 'packaging': Flat technical KLD dieline vs. Finished 3D packaging
 * - 'graphic': Layout guides & bezier vectors vs. Final social media creative
 */
export default function BeforeAfterSlider({ mode = 'packaging', className = '' }) {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  const isGraphic = mode === 'graphic';

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-sm border border-white/[0.08] bg-surface group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      tabIndex={0}
      role="slider"
      aria-label={
        isGraphic
          ? 'Compare layout guides wireframe with final creative'
          : 'Compare flat KLD dieline with final packaging'
      }
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      onKeyDown={handleKeyDown}
    >
      {/* ── BASE LAYER (RIGHT SIDE): Finished Artwork ────────── */}
      <div className="absolute inset-0 w-full h-full bg-[#0a0a12] flex items-center justify-center p-6">
        {isGraphic ? (
          /* Finished Social Campaign Creative */
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <svg className="w-56 h-48 md:w-64 md:h-52 drop-shadow-2xl" viewBox="0 0 240 160" fill="none">
              {/* Creative background card */}
              <rect x="20" y="10" width="200" height="140" rx="4" fill="#0e0e18" stroke="#7b39fc" strokeWidth="1" strokeOpacity="0.5" />
              {/* Top Accent Gradient Bar */}
              <rect x="20" y="10" width="200" height="6" rx="2" fill="url(#graphicGrad)" />
              {/* Badge */}
              <rect x="36" y="26" width="56" height="14" rx="7" fill="rgba(123,57,252,0.3)" stroke="#7b39fc" strokeWidth="0.75" />
              <text x="64" y="36" fill="#f2f2f5" fontSize="7" fontFamily="Manrope" fontWeight="600" textAnchor="middle">
                NEW CAMPAIGN
              </text>
              {/* Hero Headline */}
              <text x="36" y="62" fill="#fff" fontSize="18" fontFamily="Instrument Serif" fontStyle="italic">
                Global Travel &amp; Tours
              </text>
              <text x="36" y="78" fill="#9a9aa8" fontSize="8" fontFamily="Inter">
                Visa Services &bull; Curated Packages &bull; 2026 Season
              </text>
              {/* CTA Button */}
              <rect x="36" y="96" width="65" height="18" rx="9" fill="#f87b52" />
              <text x="68" y="108" fill="#fff" fontSize="8" fontFamily="Manrope" fontWeight="600" textAnchor="middle">
                Explore Offers &rarr;
              </text>
              {/* Graphic Composition Element */}
              <circle cx="175" cy="80" r="38" fill="rgba(123,57,252,0.15)" stroke="#7b39fc" strokeWidth="1" />
              <polygon points="175,55 195,90 155,90" fill="#f87b52" fillOpacity="0.7" />
              <defs>
                <linearGradient id="graphicGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7b39fc" />
                  <stop offset="100%" stopColor="#f87b52" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute bottom-4 right-4 bg-surface-2/90 border border-white/10 text-[10px] font-body text-text-muted px-2.5 py-1 rounded tracking-wider uppercase">
              Final Creative
            </span>
          </div>
        ) : (
          /* Finished 3D Packaging */
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <svg className="w-48 h-48 md:w-56 md:h-56 drop-shadow-2xl" viewBox="0 0 200 200" fill="none">
              <ellipse cx="100" cy="170" rx="65" ry="14" fill="#000" fillOpacity="0.4" />
              <polygon points="100,30 160,55 100,80 40,55" fill="#201f30" stroke="#7b39fc" strokeWidth="1" strokeOpacity="0.4" />
              <polygon points="40,55 100,80 100,150 40,125" fill="#141322" stroke="#7b39fc" strokeWidth="1" strokeOpacity="0.4" />
              <polygon points="100,80 160,55 160,125 100,150" fill="#181729" stroke="#7b39fc" strokeWidth="1" strokeOpacity="0.4" />
              <rect x="52" y="80" width="36" height="4" rx="2" fill="#f87b52" fillOpacity="0.8" transform="skewY(22)" />
              <rect x="52" y="90" width="24" height="2" rx="1" fill="#fff" fillOpacity="0.6" transform="skewY(22)" />
              <rect x="52" y="96" width="30" height="2" rx="1" fill="#fff" fillOpacity="0.3" transform="skewY(22)" />
              <path d="M102,82 L158,58 L158,85 L102,110 Z" fill="url(#glossGrad)" fillOpacity="0.25" />
              <defs>
                <linearGradient id="glossGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute bottom-4 right-4 bg-surface-2/90 border border-white/10 text-[10px] font-body text-text-muted px-2.5 py-1 rounded tracking-wider uppercase">
              Final Packaging
            </span>
          </div>
        )}
      </div>

      {/* ── CLIPPED LAYER (LEFT SIDE): Technical Guides / Dieline ── */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden bg-[#0c0c16]"
        style={{ width: `${sliderPos}%` }}
      >
        <div
          className="absolute inset-0 w-full h-full p-6 flex flex-col items-center justify-center"
          style={{ width: containerRef.current ? containerRef.current.clientWidth : '100%' }}
        >
          {isGraphic ? (
            /* Layout Guides & Vector Pen Wireframe */
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <svg className="w-56 h-48 md:w-64 md:h-52" viewBox="0 0 240 160" fill="none">
                {/* Artboard Frame & Dimensions */}
                <rect x="20" y="10" width="200" height="140" stroke="#fff" strokeWidth="0.75" strokeOpacity="0.3" />
                <text x="24" y="20" fill="#7b39fc" fontSize="7" fontFamily="Inter" fontWeight="bold">
                  ARTBOARD 1 // 1080 &times; 1350
                </text>
                {/* Column grid lines */}
                <line x1="60" y1="10" x2="60" y2="150" stroke="#7b39fc" strokeWidth="0.4" strokeDasharray="3 3" opacity="0.4" />
                <line x1="120" y1="10" x2="120" y2="150" stroke="#7b39fc" strokeWidth="0.4" strokeDasharray="3 3" opacity="0.4" />
                <line x1="180" y1="10" x2="180" y2="150" stroke="#7b39fc" strokeWidth="0.4" strokeDasharray="3 3" opacity="0.4" />
                {/* Baseline grid */}
                <line x1="20" y1="40" x2="220" y2="40" stroke="#62626f" strokeWidth="0.4" opacity="0.3" />
                <line x1="20" y1="65" x2="220" y2="65" stroke="#62626f" strokeWidth="0.4" opacity="0.3" />
                <line x1="20" y1="90" x2="220" y2="90" stroke="#62626f" strokeWidth="0.4" opacity="0.3" />
                {/* Wireframe text placeholder boxes */}
                <rect x="36" y="26" width="56" height="14" rx="2" stroke="#7b39fc" strokeWidth="0.75" strokeDasharray="2 2" fill="none" />
                <rect x="36" y="50" width="100" height="15" rx="1" stroke="#f87b52" strokeWidth="0.75" strokeDasharray="3 2" fill="rgba(248,123,82,0.05)" />
                <rect x="36" y="72" width="80" height="8" rx="1" stroke="#62626f" strokeWidth="0.5" fill="none" />
                <rect x="36" y="96" width="65" height="18" rx="2" stroke="#f87b52" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                {/* Bezier curve with anchor points & direction handles */}
                <path d="M145 95 C 160 50, 190 50, 205 95" stroke="#7b39fc" strokeWidth="1.2" strokeLinecap="round" />
                <rect x="143" y="93" width="4" height="4" fill="#f87b52" stroke="#fff" strokeWidth="0.5" />
                <rect x="203" y="93" width="4" height="4" fill="#f87b52" stroke="#fff" strokeWidth="0.5" />
                <line x1="160" y1="50" x2="145" y2="95" stroke="#fff" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
                <line x1="190" y1="50" x2="205" y2="95" stroke="#fff" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
                <circle cx="160" cy="50" r="2" fill="#7b39fc" stroke="#fff" strokeWidth="0.5" />
                <circle cx="190" cy="50" r="2" fill="#7b39fc" stroke="#fff" strokeWidth="0.5" />
              </svg>
              <span className="absolute bottom-4 left-4 bg-primary/20 border border-primary/40 text-[10px] font-body text-primary px-2.5 py-1 rounded tracking-wider uppercase font-medium">
                Layout Guides &bull; Wireframe
              </span>
            </div>
          ) : (
            /* Technical KLD Drawing */
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <svg className="w-56 h-56 md:w-64 md:h-64" viewBox="0 0 240 240" fill="none">
                <line x1="30" y1="20" x2="210" y2="20" stroke="#62626f" strokeWidth="0.75" />
                <line x1="30" y1="16" x2="30" y2="24" stroke="#62626f" strokeWidth="0.75" />
                <line x1="210" y1="16" x2="210" y2="24" stroke="#62626f" strokeWidth="0.75" />
                <text x="120" y="16" fill="#9a9aa8" fontSize="8" fontFamily="Inter" textAnchor="middle">240.0 mm</text>
                <line x1="225" y1="40" x2="225" y2="200" stroke="#62626f" strokeWidth="0.75" />
                <line x1="221" y1="40" x2="229" y2="40" stroke="#62626f" strokeWidth="0.75" />
                <line x1="221" y1="200" x2="229" y2="200" stroke="#62626f" strokeWidth="0.75" />
                <text x="233" y="123" fill="#9a9aa8" fontSize="8" fontFamily="Inter" textAnchor="middle" transform="rotate(90 233 123)">160.0 mm</text>
                <rect x="35" y="35" width="170" height="170" fill="none" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 3" />
                <path
                  d="M40,90 L70,90 L70,50 L110,50 L110,90 L150,90 L150,50 L190,50 L190,90 L200,90 L200,150 L190,150 L190,190 L150,190 L150,150 L110,150 L110,190 L70,190 L70,150 L40,150 Z"
                  fill="rgba(123,57,252,0.03)"
                  stroke="#f87b52"
                  strokeWidth="1.2"
                />
                <line x1="70" y1="90" x2="70" y2="150" stroke="#7b39fc" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="110" y1="90" x2="110" y2="150" stroke="#7b39fc" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="150" y1="90" x2="150" y2="150" stroke="#7b39fc" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="70" y1="90" x2="190" y2="90" stroke="#7b39fc" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="70" y1="150" x2="190" y2="150" stroke="#7b39fc" strokeWidth="1" strokeDasharray="3 2" />
                <path d="M40,95 L40,145 L46,140 L46,100 Z" fill="none" stroke="#7b39fc" strokeWidth="0.75" strokeDasharray="2 2" />
                <text x="90" y="122" fill="#7b39fc" fontSize="9" fontFamily="Cabin" textAnchor="middle" opacity="0.8">PANEL A</text>
                <text x="130" y="122" fill="#7b39fc" fontSize="9" fontFamily="Cabin" textAnchor="middle" opacity="0.8">PANEL B</text>
                <text x="170" y="122" fill="#7b39fc" fontSize="9" fontFamily="Cabin" textAnchor="middle" opacity="0.8">PANEL C</text>
              </svg>
              <span className="absolute bottom-4 left-4 bg-primary/20 border border-primary/40 text-[10px] font-body text-primary px-2.5 py-1 rounded tracking-wider uppercase font-medium">
                Flat KLD Dieline
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── DRAGGABLE DIVIDER ──────────────────────────────── */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-accent cursor-ew-resize flex items-center justify-center -ml-[1px]"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shadow-lg transform -translate-x-1/2 scale-90 group-hover:scale-100 transition-transform">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M4 7H10M4 7L6 5M4 7L6 9M10 7L8 5M10 7L8 9"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Helper label */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-body text-text-muted tracking-wider pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        Drag to compare
      </div>
    </div>
  );
}
