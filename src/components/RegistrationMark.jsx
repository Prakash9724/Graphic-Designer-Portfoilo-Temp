import React from 'react';

/**
 * SVG registration mark glyph (⊕ style) used as a brand detail.
 */
export default function RegistrationMark({ size = 14, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="8" y1="1" x2="8" y2="15" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
      <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
    </svg>
  );
}
