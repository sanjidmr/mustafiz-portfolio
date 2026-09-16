import React, { useState } from 'react';
import { Sparkles, Edit3, ArrowUpRight, Check, Target, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { EDITABLE_CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { CaseStudyEditorModal } from './CaseStudyEditorModal';

interface CaseStudiesProps {
  onDiscussCaseStudy?: (title: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onDiscussCaseStudy }) => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(EDITABLE_CASE_STUDIES);
  const [activeId, setActiveId] = useState<string>(EDITABLE_CASE_STUDIES[0].id);
  const [editingCaseStudy, setEditingCaseStudy] = useState<CaseStudy | null>(null);

  const activeStudy = caseStudies.find((cs) => cs.id === activeId) || caseStudies[0];

  const handleSaveUpdatedStudy = (updated: CaseStudy) => {
    setCaseStudies((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );
  };

  return (
    <section id="casestudies" className="py-24 sm:py-32 bg-[#FAFAFA] border-b border-[#E4E4E7]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E4E7] text-xs font-bold text-[#FF5E1E] uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>In-Depth Strategy</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F1115] tracking-tight">
              Featured Strategic Case Studies
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
              Real-world workflows demonstrating how visual brand design and digital marketing tactics sync to produce commercial outcomes.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-200 text-amber-800 text-xs font-medium shadow-2xs">
            <Edit3 className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive: Editable Placeholder Data</span>
          </div>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {caseStudies.map((cs) => {
            const isSelected = cs.id === activeId;
            return (
              <button
                key={cs.id}
                id={`casestudy-tab-${cs.id}`}
                onClick={() => setActiveId(cs.id)}
                className={`px-5 py-3 rounded-2xl border text-left transition-all duration-200 shrink-0 focus:outline-none cursor-pointer ${
                  isSelected
                    ? 'bg-[#0F1115] text-white border-[#0F1115] shadow-md'
                    : 'bg-white hover:bg-[#F4F4F5] text-[#0F1115] border-[#E4E4E7]'
                }`}
              >
                <div className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? 'text-[#FF5E1E]' : 'text-[#71717A]'}`}>
                  {cs.category}
                </div>
                <div className="font-display font-bold text-sm tracking-tight mt-0.5 whitespace-nowrap">
                  {cs.client}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Master Showcase Card */}
        <motion.div
          key={activeStudy.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl bg-white border border-[#E4E4E7] shadow-xl overflow-hidden p-6 sm:p-10 md:p-12"
        >
          {/* Top Bar: Title, Meta & Edit Button */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-8 border-b border-[#E4E4E7] gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#FFF5F0] text-[#FF5E1E] text-xs font-mono font-bold uppercase">
                  {activeStudy.category}
                </span>
                <span className="text-xs font-mono text-[#71717A]">
                  Client: <strong className="text-[#0F1115]">{activeStudy.client}</strong> • Duration: {activeStudy.duration}
                </span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0F1115] tracking-tight">
                {activeStudy.title}
              </h3>
              <p className="text-base text-[#71717A] mt-1 font-medium">
                {activeStudy.subtitle}
              </p>
            </div>

            <button
              id={`edit-casestudy-${activeStudy.id}`}
              onClick={() => setEditingCaseStudy(activeStudy)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAFAFA] hover:bg-[#F4F4F5] border border-[#D4D4D8] text-[#0F1115] text-xs font-bold transition-colors cursor-pointer shrink-0 shadow-2xs focus:outline-none"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#FF5E1E]" />
              <span>Edit Case Study Data</span>
            </button>
          </div>

          {/* Hero Image & Results Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-center">
            {/* Visual Hero */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] bg-[#18181B] border border-[#E4E4E7]">
              <img
                src={activeStudy.heroImage}
                alt={activeStudy.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Results Grid */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
              <div className="p-4 rounded-xl bg-[#0F1115] text-white">
                <div className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wider mb-3">
                  Verified Campaign Benchmarks (Placeholder)
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {activeStudy.results.map((res, i) => (
                    <div key={i} className="border-t border-white/10 pt-3">
                      <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#FF5E1E]">
                        {res.metric}
                      </div>
                      <div className="text-xs text-[#D4D4D8] mt-0.5 leading-snug">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools tags */}
              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#71717A] font-bold mb-2">
                  Integrated Tools:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeStudy.toolsUsed.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-[#E4E4E7] text-xs font-medium text-[#0F1115]">
                      <Check className="w-3 h-3 text-[#FF5E1E]" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Deep Breakdown Grid: 4 Core Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E4E4E7]">
            {/* Overview */}
            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF5E1E] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Executive Overview</span>
              </div>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                {activeStudy.overview}
              </p>
            </div>

            {/* Design Challenge */}
            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F1115] mb-2">
                <Layers className="w-4 h-4 text-[#FF5E1E]" />
                <span>Design Challenge</span>
              </div>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                {activeStudy.challenge}
              </p>
            </div>

            {/* Creative Direction */}
            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F1115] mb-2">
                <Sparkles className="w-4 h-4 text-[#FF5E1E]" />
                <span>Creative Direction</span>
              </div>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                {activeStudy.creativeDirection}
              </p>
            </div>

            {/* Marketing Goal */}
            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF5E1E] mb-2">
                <Target className="w-4 h-4" />
                <span>Marketing Objective</span>
              </div>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                {activeStudy.marketingGoal}
              </p>
            </div>
          </div>

          {/* Final Solution Banner */}
          <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#FFF5F0] border border-[#FF5E1E]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5E1E] mb-1">
                Final Solution & Rollout
              </div>
              <p className="text-sm sm:text-base text-[#0F1115] font-medium leading-relaxed max-w-3xl">
                {activeStudy.finalSolution}
              </p>
            </div>

            <a
              href="#contact"
              onClick={() => onDiscussCaseStudy && onDiscussCaseStudy(activeStudy.title)}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF5E1E] hover:bg-[#E64E12] text-white text-xs font-bold tracking-wide shadow-md transition-colors"
            >
              <span>Discuss This Strategy</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Interactive Case Study Editor Modal */}
      <CaseStudyEditorModal
        caseStudy={editingCaseStudy}
        isOpen={!!editingCaseStudy}
        onClose={() => setEditingCaseStudy(null)}
        onSave={handleSaveUpdatedStudy}
      />
    </section>
  );
};
