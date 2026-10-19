import React, { useState, useMemo, useEffect } from 'react';
import SectionLabel from './SectionLabel';
import ProjectTile from './ProjectTile';
import ProjectModal from './ProjectModal';
import BeforeAfterSlider from './BeforeAfterSlider';
import CropMarks from './CropMarks';
import SelectionHandles from './SelectionHandles';
import projects, { DISCIPLINE_TABS, SUB_FILTERS } from '../data/projects';
import { WORK_INTRO } from '../data/content';

/**
 * Selected Work (#work) section.
 * Features top-level discipline switch (All / Packaging / Graphic Design),
 * dynamic secondary filter chips, asymmetric bento grid, dual before/after sliders,
 * and accessible case-study lightbox modal.
 */
export default function Work({ activeDiscipline = 'All', onSelectDiscipline }) {
  const [currentDiscipline, setCurrentDiscipline] = useState(activeDiscipline);
  const [activeSubFilter, setActiveSubFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync when prop changes externally (e.g. from Disciplines block)
  useEffect(() => {
    if (activeDiscipline) {
      setCurrentDiscipline(activeDiscipline);
      setActiveSubFilter('All');
    }
  }, [activeDiscipline]);

  const handleDisciplineChange = (tabKey) => {
    setCurrentDiscipline(tabKey);
    setActiveSubFilter('All');
    if (onSelectDiscipline) {
      onSelectDiscipline(tabKey);
    }
  };

  // Filter projects by discipline & subcategory
  const filteredProjects = useMemo(() => {
    let list = projects;

    if (currentDiscipline === 'Packaging') {
      list = list.filter((p) => p.discipline === 'packaging');
    } else if (currentDiscipline === 'Graphic Design') {
      list = list.filter((p) => p.discipline === 'graphic');
    }

    if (activeSubFilter !== 'All' && !activeSubFilter.startsWith('All ')) {
      list = list.filter((p) => p.category === activeSubFilter);
    }

    return list;
  }, [currentDiscipline, activeSubFilter]);

  // Bento column span mapping
  const getColSpan = (idx, project) => {
    if (project.isBeforeAfter) {
      return 'lg:col-span-8';
    }
    if (project.format === 'banner') {
      return 'lg:col-span-12';
    }
    if (currentDiscipline !== 'All') {
      const perRow = ['lg:col-span-6', 'lg:col-span-6', 'lg:col-span-7', 'lg:col-span-5'];
      return perRow[idx % perRow.length];
    }
    const spans = [
      'lg:col-span-5', // 1: Mono carton
      'lg:col-span-7', // 2: Pouch
      'lg:col-span-4', // 3: Label
      'lg:col-span-8', // 4: Master carton
      'lg:col-span-8', // 5: KLD Slider
      'lg:col-span-4', // 6: Specialty box
      'lg:col-span-5', // 7: Visa 4:5
      'lg:col-span-7', // 8: Holiday 1:1
      'lg:col-span-8', // 9: Graphic Slider
      'lg:col-span-4', // 10: Brand & Logo
      'lg:col-span-12', // 11: Display Banner
      'lg:col-span-6', // 12: Web suite
    ];
    return spans[idx % spans.length] || 'lg:col-span-6';
  };

  const subFilters = SUB_FILTERS[currentDiscipline] || SUB_FILTERS.All;

  return (
    <section id="work" className="section-wrapper">
      <div className="container-main">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel number="01" label="WORK" />
          <h2 className="font-display text-display-2 text-text tracking-[-0.02em]">
            Selected <em className="text-accent italic font-normal">work</em>
          </h2>
          <p className="font-body text-text-muted text-base sm:text-lg max-w-2xl mt-4">
            {WORK_INTRO}
          </p>
        </div>

        {/* ── TOP-LEVEL DISCIPLINE SWITCH (Large Segmented Control) ── */}
        <div className="flex items-center gap-2 mb-6 bg-surface-2/80 p-1.5 rounded-full border border-white/[0.08] w-fit max-w-full overflow-x-auto">
          {DISCIPLINE_TABS.map((tab) => {
            const isActive = currentDiscipline === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleDisciplineChange(tab.key)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-heading font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text-muted hover:text-text hover:bg-white/[0.04]'
                }`}
                role="tab"
                aria-selected={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── SECOND-LEVEL FILTER CHIPS ── */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-white/[0.06] pb-5 mb-12">
          {subFilters.map((sub) => {
            const isAllVariant = sub === 'All' || sub === 'All Work' || sub === 'All Packaging' || sub === 'All Graphics';
            const isActive =
              (isAllVariant && (activeSubFilter === 'All' || activeSubFilter.startsWith('All '))) ||
              activeSubFilter === sub;

            return (
              <button
                key={sub}
                onClick={() => setActiveSubFilter(sub)}
                className={`px-3 py-1 rounded-sm text-xs font-body transition-colors ${
                  isActive
                    ? 'bg-white/10 text-text border border-white/20 font-medium'
                    : 'text-text-dim hover:text-text hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                {sub}
              </button>
            );
          })}
        </div>

        {/* ── ASYMMETRIC BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => {
            const span = getColSpan(idx, project);
            const isGraphic = project.discipline === 'graphic';

            // Special Interactive Before/After Comparison Tile
            if (project.isBeforeAfter) {
              const SliderWrapper = isGraphic ? SelectionHandles : CropMarks;

              return (
                <div key={project.id} className={`w-full ${span}`}>
                  <SliderWrapper>
                    <div className="relative">
                      <BeforeAfterSlider
                        mode={project.sliderMode || 'packaging'}
                        className="aspect-[16/10] w-full"
                      />
                      <div className="absolute top-3 left-3 z-30 pointer-events-none">
                        <span className="text-[10px] font-mono text-text-dim tracking-[0.15em] font-medium bg-surface/90 px-2 py-0.5 rounded-sm border border-white/[0.06]">
                          {String(project.id).padStart(2, '0')} //{' '}
                          {isGraphic ? 'INTERACTIVE LAYOUT' : 'INTERACTIVE KLD'}
                        </span>
                      </div>
                    </div>
                  </SliderWrapper>

                  <div className="mt-3 flex items-start justify-between gap-4">
                    <div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-left group/title focus-visible:outline-none"
                      >
                        <h3 className="font-heading text-sm font-semibold text-text group-hover/title:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="font-caption text-[12px] text-text-dim mt-0.5 tracking-wide">
                          {project.caption} &bull; Click for case details
                        </p>
                      </button>
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-body text-primary hover:text-primary-light transition-colors whitespace-nowrap pt-1"
                    >
                      Case details &rarr;
                    </button>
                  </div>
                </div>
              );
            }

            // Standard Project Tile
            return (
              <div key={project.id} className={`w-full ${span}`}>
                <ProjectTile
                  project={project}
                  onClick={(proj) => setSelectedProject(proj)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          projects={filteredProjects}
          onClose={() => setSelectedProject(null)}
          onNavigate={(nextProj) => setSelectedProject(nextProj)}
        />
      )}
    </section>
  );
}
