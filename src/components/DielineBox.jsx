import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

/* ─── Artwork Variants ─── */
const VARIANTS = [
  {
    id: 'packaging',
    label: 'Packaging',
    spec: '160 × 200 × 80 mm  •  KLD Carton',
    artboard: '— Dieline, Print-ready',
    accent: '#f87b52',
    swatches: ['#7b39fc', '#f87b52', '#ffffff', '#0f1530'],
    frontBg: '#0c0c18',
    frontGeomColor: '#f87b52',
    frontText: 'Aa',
    sideLabel: 'SIDE A  //  80mm',
    // Inside content for top flap
    topAccent: '#7b39fc',
  },
  {
    id: 'graphic',
    label: 'Graphic',
    spec: '1080 × 1350 px  •  Social Creative',
    artboard: '— Artboard 1, 72 dpi',
    accent: '#7b39fc',
    swatches: ['#7b39fc', '#f2f2f5', '#f87b52', '#0f1530'],
    frontBg: '#0d0c1e',
    frontGeomColor: '#7b39fc',
    frontText: 'Gd',
    sideLabel: 'ARTBOARD  //  1080px',
    topAccent: '#f87b52',
  },
  {
    id: 'colorway',
    label: 'Colorway B',
    spec: '160 × 200 × 80 mm  •  Alt Colorway',
    artboard: '— Proof Print, Colorway B',
    accent: '#f2f2f5',
    swatches: ['#f2f2f5', '#7b39fc', '#08080c', '#f87b52'],
    frontBg: '#1a1a2e',
    frontGeomColor: '#f2f2f5',
    frontText: 'Cb',
    sideLabel: 'SIDE A  //  COLORWAY B',
    topAccent: '#f2f2f5',
  },
];

/* ─── Clamp helper ─── */
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export default function DielineBox() {
  const prefersReduced = useReducedMotion();
  const [variantIdx, setVariantIdx] = useState(0);
  const [foldPct, setFoldPct] = useState(0);   // 0 = flat dieline, 100 = fully folded
  const [isDragging, setIsDragging] = useState(false);
  const [dragRot, setDragRot] = useState({ x: -12, y: -26 });
  const [autoRotate, setAutoRotate] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [calloutVisible, setCalloutVisible] = useState(false);

  const containerRef = useRef(null);
  const dragStart = useRef(null);
  const rotAtDragStart = useRef(null);
  const autoRotateRef = useRef(null);
  const autoRotateAngle = useRef(-26);

  const variant = VARIANTS[variantIdx];
  const folded = foldPct >= 95;
  const halfway = foldPct >= 50;

  /* ─── Auto-fold on mount ─── */
  useEffect(() => {
    if (prefersReduced) {
      setFoldPct(100);
      setCalloutVisible(true);
      return;
    }
    let start = null;
    const totalMs = 2600;
    const raf = (ts) => {
      if (!start) start = ts;
      const t = Math.min((ts - start) / totalMs, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setFoldPct(Math.round(eased * 100));
      if (t < 1) requestAnimationFrame(raf);
      else {
        setCalloutVisible(true);
        setTimeout(() => setAutoRotate(true), 400);
      }
    };
    const delay = setTimeout(() => requestAnimationFrame(raf), 900);
    return () => clearTimeout(delay);
  }, [prefersReduced]);

  /* ─── Auto-rotation idle loop ─── */
  useEffect(() => {
    if (!autoRotate || isDragging) return;
    autoRotateRef.current = setInterval(() => {
      autoRotateAngle.current = (autoRotateAngle.current + 0.25) % 360;
      setDragRot((r) => ({ ...r, y: autoRotateAngle.current }));
    }, 16);
    return () => clearInterval(autoRotateRef.current);
  }, [autoRotate, isDragging]);

  /* ─── Pointer parallax tilt (desktop only) ─── */
  const handleMouseMove = useCallback((e) => {
    if (isDragging) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const tx = clamp(((e.clientX - cx) / (rect.width / 2)) * 6, -6, 6);
    const ty = clamp(((e.clientY - cy) / (rect.height / 2)) * 4, -4, 4);
    setTilt({ x: -ty, y: tx });
  }, [isDragging]);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  /* ─── Drag-to-rotate ─── */
  const startDrag = useCallback((clientX, clientY) => {
    setIsDragging(true);
    setAutoRotate(false);
    clearInterval(autoRotateRef.current);
    dragStart.current = { x: clientX, y: clientY };
    rotAtDragStart.current = { ...dragRot };
  }, [dragRot]);

  const onPointerDown = useCallback((e) => {
    if (!folded) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    startDrag(e.clientX, e.clientY);
  }, [folded, startDrag]);

  const onPointerMove = useCallback((e) => {
    if (!isDragging || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setDragRot({
      x: clamp(rotAtDragStart.current.x - dy * 0.5, -40, 20),
      y: rotAtDragStart.current.y + dx * 0.7,
    });
    autoRotateAngle.current = rotAtDragStart.current.y + dx * 0.7;
  }, [isDragging]);

  const onPointerUp = useCallback((e) => {
    if (!isDragging) return;
    setIsDragging(false);
    dragStart.current = null;
    // Resume auto-rotate after a pause
    setTimeout(() => setAutoRotate(true), 1800);
  }, [isDragging]);

  /* ─── Face click → cycle variant ─── */
  const cycleVariant = useCallback(() => {
    if (!folded) return;
    setVariantIdx((i) => (i + 1) % VARIANTS.length);
    // Flash callouts
    setCalloutVisible(false);
    setTimeout(() => setCalloutVisible(true), 200);
  }, [folded]);

  /* ─── Fold scrubber ─── */
  const onScrub = (val) => {
    const pct = Number(val);
    setFoldPct(pct);
    if (pct >= 95) {
      setCalloutVisible(true);
      if (!autoRotate && !isDragging) setTimeout(() => setAutoRotate(true), 600);
    } else {
      setCalloutVisible(false);
      setAutoRotate(false);
    }
  };

  /* ─── 3D transform for the whole scene ─── */
  const sceneRotX = foldPct < 95
    ? (foldPct / 100) * -14
    : dragRot.x + tilt.x;
  const sceneRotY = foldPct < 95
    ? (foldPct / 100) * -24
    : dragRot.y + tilt.y;

  const duration = folded ? '0s' : '0.05s';
  const easing = 'linear';

  /* ─── Opacity for the flat dieline ─── */
  const dieFlatOpacity = foldPct < 60 ? 1 - foldPct / 60 : 0;
  const die3dOpacity   = foldPct > 40 ? (foldPct - 40) / 60 : 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[420px] mx-auto select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Spec Readout ── */}
      <div
        className="mb-4 flex items-start justify-between gap-3 font-mono text-[9px] text-text-dim tracking-[0.12em] uppercase transition-all duration-300"
        aria-live="polite"
      >
        <span className="opacity-80">{variant.spec}</span>
        <span
          className="text-right"
          style={{ color: variant.accent, opacity: 0.85 }}
        >
          {variant.artboard}
        </span>
      </div>

      {/* ── 3D scene container ── */}
      <div
        style={{
          perspective: '1200px',
          perspectiveOrigin: '50% 45%',
        }}
      >
        <div
          className="relative w-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${sceneRotX}deg) rotateY(${sceneRotY}deg)`,
            transition: `transform ${duration} ${easing}`,
            cursor: folded ? (isDragging ? 'grabbing' : 'grab') : 'default',
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {/* ── FLAT DIELINE SVG ── */}
          <svg
            viewBox="0 0 340 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            style={{
              opacity: dieFlatOpacity,
              transition: 'opacity 0.2s ease',
              position: foldPct > 50 ? 'absolute' : 'relative',
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          >
            {/* Cut lines */}
            <rect x="90" y="120" width="160" height="200" fill="#0d0d14" stroke={variant.accent} strokeWidth="1.5" />
            <rect x="90" y="20" width="160" height="100" fill="#0d0d14" stroke={variant.accent} strokeWidth="1.5" />
            <rect x="90" y="320" width="160" height="100" fill="#0d0d14" stroke={variant.accent} strokeWidth="1.5" />
            <rect x="10" y="120" width="80" height="200" fill="#0d0d14" stroke={variant.accent} strokeWidth="1.5" />
            <rect x="250" y="120" width="80" height="200" fill="#0d0d14" stroke={variant.accent} strokeWidth="1.5" />

            {/* Crease lines */}
            <line x1="90" y1="120" x2="250" y2="120" stroke="#7b39fc" strokeWidth="1.2" strokeDasharray="6 4" />
            <line x1="90" y1="320" x2="250" y2="320" stroke="#7b39fc" strokeWidth="1.2" strokeDasharray="6 4" />
            <line x1="90" y1="120" x2="90" y2="320" stroke="#7b39fc" strokeWidth="1.2" strokeDasharray="6 4" />
            <line x1="250" y1="120" x2="250" y2="320" stroke="#7b39fc" strokeWidth="1.2" strokeDasharray="6 4" />

            {/* Glue flap */}
            <polygon points="90,20 75,30 75,110 90,120" fill="none" stroke={variant.accent} strokeWidth="1" opacity="0.5" />

            {/* Artwork on center panel */}
            <g transform="translate(90, 120)">
              <circle cx="120" cy="70" r="50" fill={`${variant.accent}1e`} />
              <path d="M0 0 L90 0 L40 80 L0 80 Z" fill={`${variant.frontGeomColor}cc`} />
              <text x="75" y="130" fill="#f2f2f5" fontSize="48" fontFamily="Instrument Serif, serif" fontStyle="italic">
                {variant.frontText}
              </text>
              {variant.swatches.map((s, i) => (
                <rect key={i} x={20 + i * 12} y="155" width="8" height="8" rx="1" fill={s} opacity="0.9" />
              ))}
              <text x="20" y="180" fill="#9a9aa8" fontSize="7" fontFamily="Manrope, sans-serif" fontWeight="bold">
                PRADEEP MALLA // STUDIO
              </text>
            </g>

            {/* Dimension indicators */}
            <line x1="90" y1="435" x2="250" y2="435" stroke="#62626f" strokeWidth="0.5" />
            <line x1="90" y1="430" x2="90" y2="440" stroke="#62626f" strokeWidth="0.5" />
            <line x1="250" y1="430" x2="250" y2="440" stroke="#62626f" strokeWidth="0.5" />
            <text x="170" y="432" textAnchor="middle" fill="#62626f" fontSize="8" fontFamily="Inter, sans-serif">160 mm</text>
            <line x1="335" y1="120" x2="335" y2="320" stroke="#62626f" strokeWidth="0.5" />
            <line x1="330" y1="120" x2="340" y2="120" stroke="#62626f" strokeWidth="0.5" />
            <line x1="330" y1="320" x2="340" y2="320" stroke="#62626f" strokeWidth="0.5" />
            <text x="334" y="224" textAnchor="middle" fill="#62626f" fontSize="8" fontFamily="Inter, sans-serif" transform="rotate(-90, 334, 224)">200 mm</text>

            {/* Registration marks */}
            <circle cx="15" cy="15" r="4" stroke="#62626f" strokeWidth="0.6" fill="none" />
            <line x1="15" y1="8" x2="15" y2="22" stroke="#62626f" strokeWidth="0.4" />
            <line x1="8" y1="15" x2="22" y2="15" stroke="#62626f" strokeWidth="0.4" />
            <circle cx="325" cy="15" r="4" stroke="#62626f" strokeWidth="0.6" fill="none" />
            <line x1="325" y1="8" x2="325" y2="22" stroke="#62626f" strokeWidth="0.4" />
            <line x1="318" y1="15" x2="332" y2="15" stroke="#62626f" strokeWidth="0.4" />
          </svg>

          {/* ── 3D FOLDED CARTON ── */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              opacity: die3dOpacity,
              transition: 'opacity 0.2s ease',
              transformStyle: 'preserve-3d',
              pointerEvents: folded ? 'auto' : 'none',
            }}
          >
            <div
              className="relative"
              style={{
                width: '160px',
                height: '200px',
                transformStyle: 'preserve-3d',
                transform: 'rotateX(0) rotateY(0)',
              }}
              onClick={cycleVariant}
              title="Click to cycle artwork variant"
            >
              {/* FRONT FACE */}
              <div
                className="absolute overflow-hidden transition-colors duration-500"
                style={{
                  width: '160px',
                  height: '200px',
                  background: variant.frontBg,
                  border: `1.5px solid ${variant.accent}`,
                  transform: 'translateZ(40px)',
                  backfaceVisibility: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)',
                }}
              >
                {/* Grid overlay */}
                <div className="absolute inset-2 border border-dashed border-white/[0.10] rounded-sm pointer-events-none" />

                {/* Bold diagonal graphic */}
                <div
                  className="absolute top-0 left-0 w-24 h-20 transition-colors duration-500"
                  style={{
                    background: variant.frontGeomColor,
                    clipPath: 'polygon(0 0, 100% 0, 45% 100%, 0 100%)',
                  }}
                />

                {/* Typography specimen */}
                <div className="absolute top-8 right-4">
                  <span className="font-display italic text-4xl text-text font-normal leading-none">
                    {variant.frontText}
                  </span>
                </div>

                {/* Swatch row */}
                <div className="absolute bottom-10 left-4 flex items-center gap-1.5">
                  {variant.swatches.map((s, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-[1px] transition-colors duration-500"
                      style={{ background: s, border: i === 3 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}
                    />
                  ))}
                </div>

                {/* Studio label */}
                <div className="absolute bottom-4 left-4">
                  <span className="font-heading font-bold text-[8px] text-text tracking-wider uppercase block">
                    PACKAGING &bull; GRAPHIC
                  </span>
                </div>

                {/* Spot UV sheen */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)',
                  }}
                />

                {/* "Click to cycle" hint */}
                {folded && (
                  <div className="absolute top-2 right-2 opacity-40 hover:opacity-80 transition-opacity">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M5 1.5 L8 5 L5 8.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
              </div>

              {/* BACK FACE */}
              <div
                className="absolute"
                style={{
                  width: '160px',
                  height: '200px',
                  background: '#0c0c14',
                  border: `1px solid ${variant.accent}4d`,
                  transform: 'translateZ(-40px) rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                }}
              />

              {/* LEFT SIDE FACE */}
              <div
                className="absolute p-3 flex flex-col justify-between overflow-hidden"
                style={{
                  width: '80px',
                  height: '200px',
                  background: '#10101a',
                  border: `1px solid ${variant.accent}66`,
                  transform: 'translateX(-40px) rotateY(-90deg)',
                  transformOrigin: 'right center',
                  backfaceVisibility: 'hidden',
                }}
              >
                <span className="text-[7px] font-mono text-text-dim tracking-widest uppercase">
                  {variant.sideLabel}
                </span>
                {/* Simulated Barcode */}
                <div className="flex items-center gap-0.5 h-6 opacity-60">
                  <span className="w-0.5 h-full bg-white" />
                  <span className="w-1 h-full bg-white" />
                  <span className="w-0.5 h-full bg-white" />
                  <span className="w-1.5 h-full bg-white" />
                  <span className="w-0.5 h-full bg-white" />
                  <span className="w-1 h-full bg-white" />
                </div>
              </div>

              {/* RIGHT SIDE FACE */}
              <div
                className="absolute"
                style={{
                  width: '80px',
                  height: '200px',
                  background: '#12121e',
                  border: `1px solid ${variant.accent}66`,
                  transform: 'translateX(160px) translateX(-40px) rotateY(90deg)',
                  transformOrigin: 'left center',
                  backfaceVisibility: 'hidden',
                }}
              />

              {/* TOP FLAP */}
              <div
                className="absolute flex items-center justify-center"
                style={{
                  width: '160px',
                  height: '80px',
                  background: '#141422',
                  border: `1px solid ${variant.accent}66`,
                  transform: 'translateY(-40px) rotateX(90deg)',
                  transformOrigin: 'center bottom',
                  backfaceVisibility: 'hidden',
                }}
              >
                <div
                  className="w-6 h-6 rounded-full border flex items-center justify-center transition-colors duration-500"
                  style={{ borderColor: `${variant.topAccent}66` }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full transition-colors duration-500"
                    style={{ background: variant.topAccent }}
                  />
                </div>
              </div>
            </div>

            {/* ── CALLOUT ANNOTATIONS ── */}
            {/* Callout 1: Packaging / dimension */}
            <div
              className="absolute -bottom-2 -left-6 z-30 transition-all duration-700"
              style={{
                opacity: calloutVisible ? 1 : 0,
                transform: calloutVisible ? 'translateY(0)' : 'translateY(6px)',
              }}
            >
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm shadow-lg"
                style={{
                  background: 'rgba(13,13,22,0.92)',
                  border: '1px solid rgba(123,57,252,0.45)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-mono text-[9px] text-text tracking-wide">
                  160 &times; 200 mm KLD
                </span>
              </div>
            </div>

            {/* Callout 2: Graphic / artboard */}
            <div
              className="absolute -top-3 -right-6 z-30 transition-all duration-700"
              style={{
                opacity: calloutVisible ? 1 : 0,
                transform: calloutVisible ? 'translateY(0)' : 'translateY(-6px)',
              }}
            >
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm shadow-lg"
                style={{
                  background: 'rgba(13,13,22,0.92)',
                  border: `1px solid ${variant.accent}66`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full transition-colors duration-500"
                  style={{ background: variant.accent }}
                />
                <span className="font-caption text-[9px] text-text tracking-wide">
                  {variant.id === 'packaging' ? 'Artboard 1, 1080 × 1350' : variant.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Fold Scrubber ── */}
      <div className="mt-6 px-1">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] text-text-dim tracking-widest uppercase shrink-0">Fold</span>
          <input
            type="range"
            min="0"
            max="100"
            value={foldPct}
            onChange={(e) => onScrub(e.target.value)}
            aria-label="Fold scrubber — drag to fold/unfold carton"
            className="w-full h-px appearance-none bg-white/10 rounded-full cursor-pointer accent-primary"
            style={{
              WebkitAppearance: 'none',
              background: `linear-gradient(to right, #7b39fc ${foldPct}%, rgba(255,255,255,0.1) ${foldPct}%)`,
            }}
          />
          <span className="font-mono text-[9px] text-text-dim tracking-widest uppercase shrink-0">{foldPct}%</span>
        </div>

        {/* Step buttons */}
        <div className="flex items-center gap-2 mt-3">
          <button
            onClick={() => onScrub(0)}
            className="font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-sm border border-white/10 text-text-dim hover:border-primary/50 hover:text-text transition-all duration-200"
            aria-label="Flat dieline view"
          >
            Flat
          </button>
          <button
            onClick={() => onScrub(50)}
            className="font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-sm border border-white/10 text-text-dim hover:border-primary/50 hover:text-text transition-all duration-200"
            aria-label="Half folded"
          >
            50%
          </button>
          <button
            onClick={() => onScrub(100)}
            className="font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-sm border border-white/10 text-text-dim hover:border-primary/50 hover:text-text transition-all duration-200"
            aria-label="Fully folded 3D carton"
          >
            3D
          </button>

          {/* Variant colorway chips */}
          <div className="ml-auto flex items-center gap-1.5" role="group" aria-label="Artwork variant">
            {VARIANTS.map((v, i) => (
              <button
                key={v.id}
                onClick={() => { setVariantIdx(i); setCalloutVisible(false); setTimeout(() => setCalloutVisible(true), 200); }}
                aria-label={`Switch to ${v.label} artwork`}
                aria-pressed={variantIdx === i}
                className="w-4 h-4 rounded-full border-2 transition-all duration-200 hover:scale-110"
                style={{
                  background: v.accent,
                  borderColor: variantIdx === i ? '#fff' : 'transparent',
                  boxShadow: variantIdx === i ? `0 0 8px ${v.accent}` : 'none',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Helper label ── */}
      <p className="text-center text-[11px] font-caption text-text-dim mt-4 tracking-wider uppercase">
        {folded
          ? `${variant.label} &bull; Drag to rotate  &bull; Click face to cycle`
          : foldPct === 0
            ? 'Mono Carton &bull; Dieline view'
            : `Folding… ${foldPct}%`}
      </p>
    </div>
  );
}
