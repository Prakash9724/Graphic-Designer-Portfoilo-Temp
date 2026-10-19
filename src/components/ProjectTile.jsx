import React from 'react';
import CropMarks from './CropMarks';
import SelectionHandles from './SelectionHandles';
import ProjectPlaceholder from './ProjectPlaceholder';
import ArtboardPlaceholder from './ArtboardPlaceholder';

/**
 * Single project tile with dual-dialect treatment:
 * - Packaging: Crop marks, dieline placeholder, cut-line hover frame
 * - Graphic: 8-point selection handles, artboard placeholder with guides & rulers
 */
export default function ProjectTile({ project, onClick }) {
  const isGraphic = project.discipline === 'graphic';

  const getAspectClass = () => {
    if (project.format === 'banner') return 'aspect-[16/7] sm:aspect-[2.5/1]';
    if (project.format === 'post-4x5') return 'aspect-[4/5]';
    if (project.aspect === 'tall') return 'aspect-[3/4]';
    if (project.aspect === 'wide') return 'aspect-[16/10]';
    return 'aspect-square';
  };

  const imageLabel = `REPLACE: project-${String(project.id).padStart(2, '0')}.jpg`;

  const tileInner = (
    <div className={`relative overflow-hidden border border-white/[0.08] rounded-sm ${getAspectClass()}`}>
      {/* Visual Content: Placeholder based on discipline */}
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

      {/* Hover effects */}
      {!isGraphic ? (
        <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/60 transition-all duration-500 rounded-sm pointer-events-none" />
      ) : null}

      {/* Project number */}
      <span className="absolute top-3 left-3 text-[10px] font-body text-text-dim/70 tracking-[0.15em] font-medium z-20 bg-surface/80 px-1.5 py-0.5 rounded-sm">
        {String(project.id).padStart(2, '0')}
      </span>

      {/* Category tag */}
      <span className="absolute top-3 right-3 text-[10px] font-body text-text-dim/80 bg-surface-2/90 px-2 py-0.5 rounded-sm tracking-wide z-20 border border-white/[0.06]">
        {project.category}
      </span>
    </div>
  );

  return (
    <button
      className="group relative w-full text-left cursor-view focus-visible:outline-none"
      onClick={() => onClick(project)}
      data-cursor="view"
      aria-label={`View project: ${project.title}`}
    >
      {/* Wrapper based on discipline dialect */}
      {isGraphic ? (
        <SelectionHandles>{tileInner}</SelectionHandles>
      ) : (
        <CropMarks>{tileInner}</CropMarks>
      )}

      {/* Caption in Cabin font */}
      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-sm font-semibold text-text group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-caption text-[12px] text-text-dim mt-0.5 tracking-wide">
            {project.caption}
          </p>
        </div>
      </div>
    </button>
  );
}
