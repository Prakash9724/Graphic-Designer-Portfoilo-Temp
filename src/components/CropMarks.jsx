import React from 'react';

/**
 * Crop mark corner decoration.
 * Renders four corners around content. Visible on hover or when `show` is true.
 */
export default function CropMarks({ children, show = false, className = '' }) {
  const vis = show ? 'opacity-100' : 'opacity-0 group-hover:opacity-100';
  return (
    <div className={`relative group ${className}`}>
      {children}
      {/* Top-left */}
      <span
        className={`absolute -top-px -left-px w-3 h-3 border-t border-l border-accent transition-opacity duration-300 ${vis}`}
        aria-hidden="true"
      />
      {/* Top-right */}
      <span
        className={`absolute -top-px -right-px w-3 h-3 border-t border-r border-accent transition-opacity duration-300 ${vis}`}
        aria-hidden="true"
      />
      {/* Bottom-left */}
      <span
        className={`absolute -bottom-px -left-px w-3 h-3 border-b border-l border-accent transition-opacity duration-300 ${vis}`}
        aria-hidden="true"
      />
      {/* Bottom-right */}
      <span
        className={`absolute -bottom-px -right-px w-3 h-3 border-b border-r border-accent transition-opacity duration-300 ${vis}`}
        aria-hidden="true"
      />
    </div>
  );
}
