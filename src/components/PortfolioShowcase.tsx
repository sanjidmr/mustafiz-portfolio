import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter, Layers, Eye, TrendingUp, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

interface PortfolioShowcaseProps {
  onDiscussProject: (title: string) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Branding',
  'Social Media',
  'Advertising',
  'Marketing',
  'Graphic Design',
];

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onDiscussProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeLens, setActiveLens] = useState<'design' | 'growth'>('design');

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  const getCategoryCount = (cat: ProjectCategory) => {
    if (cat === 'All') return PORTFOLIO_PROJECTS.length;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === cat).length;
  };

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title & Dual Lens Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E4E7] text-xs font-bold text-[#FF5E1E] uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Visual Centerpiece</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F1115] tracking-tight">
              Selected Works & Campaigns
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
              A curated selection of brand identities, high-performing advertising suites, and social media designs engineered for Next Solution MYM clients.
            </p>
          </div>

          {/* Strategic Lens Toggle (Design Craft vs Marketing Growth) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-white p-2 rounded-2xl border border-[#E4E4E7] shadow-xs">
            <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider px-2 font-bold hidden sm:inline">
              Analysis Lens:
            </span>
            <div className="grid grid-cols-2 gap-1 w-full sm:w-auto">
              <button
                onClick={() => setActiveLens('design')}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeLens === 'design'
                    ? 'bg-[#0F1115] text-white shadow-xs'
                    : 'text-[#71717A] hover:text-[#0F1115] hover:bg-[#F4F4F5]'
                }`}
              >
                <Palette className="w-3.5 h-3.5 text-[#FF5E1E]" />
                <span>Visual Craft</span>
              </button>

              <button
                onClick={() => setActiveLens('growth')}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeLens === 'growth'
                    ? 'bg-[#0F1115] text-white shadow-xs'
                    : 'text-[#71717A] hover:text-[#0F1115] hover:bg-[#F4F4F5]'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Growth / ROAS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs Bar (Mobile Optimized Horizontal Swipe with no-scrollbar) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar touch-pan-x">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                id={`portfolio-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap focus:outline-none cursor-pointer flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'text-white bg-[#0F1115] shadow-md'
                    : 'text-[#52525B] bg-white hover:bg-[#F4F4F5] border border-[#E4E4E7]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#F4F4F5] text-[#71717A]'
                  }`}
                >
                  {count}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="portfolioActiveTab"
                    className="absolute inset-0 bg-[#0F1115] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[#E4E4E7] shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col justify-between"
              >
                {/* Large Project Thumbnail Container with Hover Reveal Layer */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#18181B]">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Category Pill on top left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-mono font-bold text-[#0F1115] shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Client name or lens metric on top right */}
                  <div className="absolute top-4 right-4 z-10">
                    {activeLens === 'growth' && project.metrics && project.metrics[0] ? (
                      <span className="px-3 py-1 rounded-full bg-[#0F1115] text-[#FF5E1E] text-[11px] font-mono font-bold border border-[#FF5E1E]/30 shadow-md">
                        {project.metrics[0].value} {project.metrics[0].label}
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-[#0F1115]/80 backdrop-blur-md text-[11px] font-mono text-white/90">
                        {project.client}
                      </span>
                    )}
                  </div>

                  {/* Desktop Hover Overlay: Show title, category, description, and "View Project" */}
                  <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-6 sm:p-8 text-white z-20">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#FF5E1E] font-bold mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#D4D4D8] line-clamp-2 mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      {project.shortDescription}
                    </p>

                    <button
                      id={`view-project-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-between px-5 py-2.5 rounded-full bg-[#FF5E1E] hover:bg-[#E64E12] text-white text-xs font-bold tracking-wide transition-all duration-200 shadow-md cursor-pointer transform translate-y-2 group-hover:translate-y-0 delay-150 focus:outline-none"
                    >
                      <span>Inspect Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Sub-Info Bar (visible on both mobile & desktop) */}
                <div className="p-5 sm:p-6 bg-white border-t border-[#F4F4F5] flex flex-col justify-between gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-[#0F1115] group-hover:text-[#FF5E1E] transition-colors leading-snug">
                        {project.title}
                      </h4>
                      <div className="text-xs text-[#71717A] mt-1 flex items-center gap-2">
                        <span>{project.client}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-10 h-10 rounded-full bg-[#FAFAFA] group-hover:bg-[#FF5E1E] text-[#0F1115] group-hover:text-white border border-[#E4E4E7] flex items-center justify-center transition-colors focus:outline-none cursor-pointer shrink-0"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Mobile Tap Button (Assures 100% Mobile Usability without hover requirement) */}
                  <div className="sm:hidden pt-2 border-t border-[#F4F4F5]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#F4F4F5] active:bg-[#0F1115] active:text-white text-[#0F1115] text-xs font-bold transition-colors cursor-pointer"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5E1E]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All & Consultation Callout */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-[#E4E4E7] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0F1115] text-[#FF5E1E] flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-[#0F1115]">
                Need a tailored creative suite for your brand?
              </h4>
              <p className="text-xs sm:text-sm text-[#71717A]">
                Every visual identity and ad system is crafted bespoke to match your acquisition benchmarks.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F1115] hover:bg-[#27272A] text-white text-xs font-bold tracking-wide transition-colors"
          >
            <span>Request Portfolio Deck</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF5E1E]" />
          </a>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscussProject={onDiscussProject}
      />
    </section>
  );
};

