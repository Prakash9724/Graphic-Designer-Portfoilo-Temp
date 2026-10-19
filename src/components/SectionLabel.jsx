import React from 'react';

/**
 * Print-spec style section label: "01 / WORK"
 */
export default function SectionLabel({ number, label, text }) {
  const content = label || text;
  return (
    <div className="section-label mb-6 flex items-center gap-3">
      <span className="text-text-dim">{number}</span>
      <span className="w-4 h-px bg-text-dim inline-block" />
      <span className="text-text-dim">{content}</span>
    </div>
  );
}
