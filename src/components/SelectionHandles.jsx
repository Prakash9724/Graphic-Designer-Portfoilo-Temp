import React from 'react';

/**
 * SelectionHandles: Graphic Design Dialect wrapper.
 * Renders 8 selection handles (4 corners + 4 edge midpoints)
 * and a bounding frame on hover or when `show` is true.
 */
export default function SelectionHandles({ children, show = false, className = '' }) {
  const vis = show ? 'opacity-100' : 'opacity-0 group-hover:opacity-100';

  return (
    <div className={`relative group ${className}`}>
      {children}

      {/* Selection Bounding Frame */}
      <div
        className={`absolute inset-0 border border-accent/70 pointer-events-none transition-opacity duration-300 ${vis}`}
        aria-hidden="true"
      />

      {/* 8 Bounding Box Resize Handles */}
      {/* Top-Left */}
      <span
        className={`absolute -top-1 -left-1 w-2 h-2 bg-white border border-accent rounded-[1px] pointer-events-none transition-opacity duration-300 ${vis}`}
        aria-hidden="true"
      />
      {/* Top-Center */}
      <span
        className={`absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-accent rounded-[1px] pointer-events-none transition-opacity duration-300 ${vis}`}
        aria-hidden="true"
      />
      {/* Top-Right */}
      <span
        className={`absolute -top-1 -right-1 w-2 h-2 bg-white border border-accent rounded-[1px] pointer-events-none transition-opacity duration-300 ${vis}`}
        aria-hidden="true"
      />
      {/* Middle-Left */}
      <span
        className={`absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-white border border-accent rounded-[1px] pointer-events-none transition-opacity duration-300 ${vis}`}
        aria-hidden="true"
      />
      {/* Middle-Right */}
      <span
        className={`absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-white border border-accent rounded-[1px] pointer-events-none transition-opacity duration-300 ${vis}`}
        aria-hidden="true"
      />
      {/* Bottom-Left */}
      <span
        className={`absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-accent rounded-[1px] pointer-events-none transition-opacity duration-300 ${vis}`}
        aria-hidden="true"
      />
      {/* Bottom-Center */}
      <span
        className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-accent rounded-[1px] pointer-events-none transition-opacity duration-300 ${vis}`}
        aria-hidden="true"
      />
      {/* Bottom-Right */}
      <span
        className={`absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-accent rounded-[1px] pointer-events-none transition-opacity duration-300 ${vis}`}
        aria-hidden="true"
      />
    </div>
  );
}
