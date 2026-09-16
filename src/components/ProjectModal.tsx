import React, { useEffect } from 'react';
import { X, ArrowUpRight, Check, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onDiscussProject?: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onDiscussProject,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F1115]/80 backdrop-blur-sm -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E4E4E7] overflow-hidden my-auto max-h-[92vh] flex flex-col text-left"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-8 py-3.5 bg-white/95 backdrop-blur-md border-b border-[#E4E4E7] gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#FFF5F0] text-[#FF5E1E] text-xs font-bold font-mono uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#71717A] hidden xs:inline">
                Client: <strong className="text-[#0F1115]">{project.client}</strong>
              </span>
            </div>

            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#0F1115] transition-colors focus:outline-none cursor-pointer shrink-0"
              aria-label="Close case study details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
            {/* Title & Tagline */}
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0F1115] tracking-tight">
                {project.title}
              </h2>
              <p className="mt-2 text-base sm:text-lg text-[#52525B]">
                {project.shortDescription}
              </p>
            </div>

            {/* Hero Image Showcase */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#18181B] border border-[#E4E4E7]">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Metrics (if available) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-[#0F1115] text-white">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="text-center sm:text-left">
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#FF5E1E]">
                      {m.value}
                    </div>
                    <div className="text-xs text-[#A1A1AA] font-mono mt-1 uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Core Case Study Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Overview */}
              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF5E1E] mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Project Overview</span>
                </div>
                <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Design Challenge */}
              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F1115] mb-2">
                  <Layers className="w-4 h-4 text-[#FF5E1E]" />
                  <span>Design Challenge</span>
                </div>
                <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Creative Direction */}
              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F1115] mb-2">
                  <Sparkles className="w-4 h-4 text-[#FF5E1E]" />
                  <span>Creative Direction</span>
                </div>
                <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                  {project.creativeDirection}
                </p>
              </div>

              {/* Marketing Goal */}
              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF5E1E] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Marketing Goal</span>
                </div>
                <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                  {project.marketingGoal}
                </p>
              </div>
            </div>

            {/* Final Solution & Execution */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFF5F0] border border-[#FF5E1E]/20">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5E1E] mb-2">
                Final Solution
              </div>
              <h3 className="font-display font-bold text-xl text-[#0F1115] mb-3">
                Execution & Impact
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                {project.finalSolution}
              </p>
            </div>

            {/* Additional Project Gallery Images */}
            {project.additionalImages && project.additionalImages.length > 0 && (
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#71717A] font-bold">
                  Asset & Collateral Gallery
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.additionalImages.map((imgUrl, i) => (
                    <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] border border-[#E4E4E7] bg-stone-100">
                      <img src={imgUrl} alt={`${project.title} gallery asset ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools Used and Tags */}
            <div className="pt-4 border-t border-[#E4E4E7] flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#71717A] font-bold mb-2">
                  Tools Employed
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#0F1115] text-white text-xs font-medium"
                    >
                      <Check className="w-3 h-3 text-[#FF5E1E]" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-[#F4F4F5] text-[#71717A] text-xs">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-[#FAFAFA] border-t border-[#E4E4E7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#71717A]">
              Project realized by <strong className="text-[#0F1115]">Mustafizur Rahman</strong>, Chief Architect at Next Solution MYM
            </div>
            <button
              id="modal-discuss-project-btn"
              onClick={() => {
                onClose();
                if (onDiscussProject) onDiscussProject(project.title);
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF5E1E] hover:bg-[#E64E12] text-white text-xs font-bold tracking-wide shadow-md transition-colors cursor-pointer"
            >
              <span>Discuss a Similar Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
