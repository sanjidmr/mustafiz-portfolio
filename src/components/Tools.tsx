import React, { useState } from 'react';
import {
  Image,
  PenTool,
  Figma,
  Sparkles,
  Target,
  Search,
  Cpu,
  Bot,
  Wrench,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { TOOLS_LIST } from '../data/portfolioData';

const toolIcons: Record<string, React.ElementType> = {
  Image,
  PenTool,
  Figma,
  Sparkles,
  Target,
  Search,
  Cpu,
  Bot,
};

export const Tools: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Design & Visual', 'Advertising & Marketing', 'AI & Strategy'];

  const filteredTools = selectedCategory === 'All'
    ? TOOLS_LIST
    : TOOLS_LIST.filter((t) => t.category === selectedCategory);

  return (
    <section id="tools" className="py-24 sm:py-32 bg-white border-y border-[#E4E4E7]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5F0] border border-[#FF5E1E]/20 text-xs font-bold text-[#FF5E1E] uppercase tracking-wider mb-4">
              <Wrench className="w-3.5 h-3.5" />
              <span>Technology & Creative Arsenal</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F1115] tracking-tight">
              Tools & Digital Stack
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
              Industry-standard software and AI acceleration used daily to construct brand identities, performance ads, and digital campaigns.
            </p>
          </div>

          {/* Category Switcher */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`tool-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer focus:outline-none ${
                  selectedCategory === cat
                    ? 'bg-[#0F1115] text-white'
                    : 'bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#52525B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool, idx) => {
            const IconComp = toolIcons[tool.iconName] || Sparkles;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group p-6 rounded-2xl bg-[#FAFAFA] hover:bg-white border border-[#E4E4E7] hover:border-[#FF5E1E] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#FF5E1E] text-[#0F1115] group-hover:text-white border border-[#E4E4E7] group-hover:border-[#FF5E1E] flex items-center justify-center transition-colors shadow-2xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#F4F4F5] text-[#71717A]">
                      {tool.category.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#0F1115] group-hover:text-[#FF5E1E] transition-colors mb-2">
                    {tool.name}
                  </h3>

                  <p className="text-xs text-[#52525B] leading-relaxed mb-6">
                    {tool.roleInWorkflow}
                  </p>
                </div>

                <div>
                  {/* Proficiency Meter */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A] mb-1.5">
                    <span>Proficiency</span>
                    <span className="font-bold text-[#0F1115]">{tool.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#E4E4E7] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-[#FF5E1E] rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Workflow note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52525B]">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#FF5E1E]" />
            <span>Workflow standard: All client deliverables provided in cloud Figma files, vector master SVG/AI formats, and editable Canva templates when requested.</span>
          </div>
          <span className="font-mono text-[#71717A] shrink-0">Next Solution MYM Certified</span>
        </div>
      </div>
    </section>
  );
};
