import React, { useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectPlaceholder from './ProjectPlaceholder';
import ArtboardPlaceholder from './ArtboardPlaceholder';
import { useLenis } from '../context/LenisContext';

/**
 * Accessible case-study modal/lightbox. Focus-trapped, Esc to close.
 * - Mobile (<md): full-screen bottom sheet (100dvh), internal scroll with data-lenis-prevent
 * - Desktop (md+): centered dialog with max-w-4xl
 * Lenis is stopped on open and restored on close.
 */
export default function ProjectModal({ project, projects, onClose, onNavigate }) {
  const modalRef  = useRef(null);
  const closeRef  = useRef(null);
  const lenisRef  = useLenis();

  const isGraphic  = project.discipline === 'graphic';
  const imageLabel = `REPLACE: project-${String(project.id).padStart(2, '0')}.jpg`;

  /* ─── Stop Lenis + focus management ─── */
  useEffect(() => {
    lenisRef?.current?.stop();
    closeRef.current?.focus();

    return () => {
      lenisRef?.current?.start();
    };
  }, [project]);

  /* ─── Keyboard handling ─── */
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const navigatePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    onNavigate(projects[prevIndex]);
  }, [currentIndex, projects, onNavigate]);
  const navigateNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % projects.length;
    onNavigate(projects[nextIndex]);
  }, [currentIndex, projects, onNavigate]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape')      { onClose(); return; }
      if (e.key === 'ArrowLeft')   navigatePrev();
      if (e.key === 'ArrowRight')  navigateNext();
      // Focus trap
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'a[href],button:not([disabled]),input,[tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, navigatePrev, navigateNext, onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end md:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Project: ${project.title}`}
      ref={modalRef}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bg/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        className={`
          relative z-10 w-full bg-surface border-white/[0.08]
          md:max-w-4xl md:mx-4 md:rounded-md md:border md:shadow-2xl
          rounded-t-xl border-t border-x
          overflow-y-auto
        `}
        style={{
          maxHeight: '100dvh',
          /* On mobile: full sheet; md+: capped at 90vh */
          height: undefined,
        }}
        data-lenis-prevent
      >
        {/* Sticky close button — always visible at top */}
        <div className="sticky top-0 z-20 flex items-center justify-end px-4 py-3 bg-surface/95 backdrop-blur-sm border-b border-white/[0.06]">
          {/* Drag handle — mobile only */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-8 h-1 bg-white/20 rounded-full md:hidden" />
          <button
            ref={closeRef}
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-text-muted hover:text-text transition-colors rounded-full bg-surface-2/80 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Image preview area */}
        <div className="aspect-[16/10] w-full relative overflow-hidden bg-surface-2">
          {isGraphic ? (
            <ArtboardPlaceholder
              format={project.format}
              artboardLabel={project.artboardLabel}
              label={imageLabel}
              className="absolute inset-0"
            />
          ) : (
            <ProjectPlaceholder
              shape={project.shape || 'carton'}
              label={imageLabel}
              className="absolute inset-0"
            />
          )}
        </div>

        {/* Project info */}
        <div className="p-5 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-[11px] font-mono text-text-dim tracking-[0.15em] uppercase">
                  {String(project.id).padStart(2, '0')} / {project.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-text-dim" />
                <span className="text-[11px] font-heading font-medium text-primary uppercase tracking-wider">
                  {project.discipline === 'graphic' ? 'Graphic Design' : 'Packaging Design'}
                </span>
                {project.artboardLabel && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-text-dim" />
                    <span className="text-[11px] font-caption text-text-dim">
                      {project.artboardLabel}
                    </span>
                  </>
                )}
              </div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-text">
                {project.title}
              </h2>
              <p className="font-caption text-sm text-text-dim mt-1">
                {project.caption}
              </p>
            </div>
          </div>

          {/* Brief / Role / Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 border-t border-white/[0.06] pt-6">
            <div>
              <h3 className="text-[11px] font-body text-text-dim tracking-[0.15em] uppercase mb-2">
                Brief &amp; Specs
              </h3>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                {project.brief}
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-body text-text-dim tracking-[0.15em] uppercase mb-2">
                Designer Role
              </h3>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                {project.role}
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-body text-text-dim tracking-[0.15em] uppercase mb-2">
                Deliverables &amp; Output
              </h3>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                {project.deliverables}
              </p>
            </div>
          </div>
        </div>

        {/* Modal navigation — 44px touch targets */}
        <div
          className="flex items-center justify-between px-5 pb-6 md:px-8 md:pb-8 border-t border-white/[0.04] pt-4"
          style={{ paddingBottom: `calc(1.5rem + env(safe-area-inset-bottom))` }}
        >
          <button
            className="flex items-center gap-2 text-sm font-heading text-text-muted hover:text-text transition-colors min-h-[44px] px-2"
            onClick={navigatePrev}
            aria-label="Previous project"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
            Previous
          </button>
          <span className="text-[11px] font-mono text-text-dim tracking-widest">
            {currentIndex + 1} / {projects.length}
          </span>
          <button
            className="flex items-center gap-2 text-sm font-heading text-text-muted hover:text-text transition-colors min-h-[44px] px-2"
            onClick={navigateNext}
            aria-label="Next project"
          >
            Next
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
