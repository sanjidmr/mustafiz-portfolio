import React from 'react';
import {
  Sparkles,
  Layout,
  Share2,
  Target,
  Megaphone,
  FileText,
  TrendingUp,
  Flame,
  Eye,
  Check,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERTISE_LIST } from '../data/portfolioData';

// Map icon names to Lucide icons
const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Layout,
  Share2,
  Target,
  Megaphone,
  FileText,
  TrendingUp,
  Flame,
  Eye,
};

interface ExpertiseProps {
  onSelectService?: (serviceName: string) => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onSelectService }) => {
  return (
    <section id="expertise" className="py-24 sm:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E4E7] text-xs font-bold text-[#FF5E1E] uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Capabilities</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F1115] tracking-tight">
              Creative Expertise
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
              Combining artistic visual craft with strategic marketing architecture across nine specialized disciplines.
            </p>
          </div>
          <div className="text-xs font-mono font-medium text-[#71717A] hidden md:block">
            [ 09 Core Domains • Design + Strategy ]
          </div>
        </div>

        {/* 9 Visually Interesting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXPERTISE_LIST.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl bg-white border border-[#E4E4E7] p-7 sm:p-8 hover:border-[#FF5E1E] hover:shadow-[0_12px_30px_rgba(255,94,30,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Bar inside card */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] group-hover:bg-[#FF5E1E] text-[#0F1115] group-hover:text-white border border-[#E4E4E7] group-hover:border-[#FF5E1E] flex items-center justify-center transition-all duration-300 shadow-2xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-sm font-bold text-[#A1A1AA] group-hover:text-[#FF5E1E] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0F1115] group-hover:text-[#FF5E1E] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#52525B] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Deliverable Tags */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] font-semibold mb-3">
                    Key Deliverables
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.deliverables.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F4F4F5] group-hover:bg-[#FFF5F0] text-[#52525B] group-hover:text-[#FF5E1E] text-xs font-medium transition-colors"
                      >
                        <Check className="w-3 h-3 text-[#A1A1AA] group-hover:text-[#FF5E1E]" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Trigger */}
                  <a
                    href="#contact"
                    onClick={() => onSelectService && onSelectService(item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F1115] group-hover:text-[#FF5E1E] transition-colors pt-2 border-t border-[#F4F4F5] w-full justify-between"
                  >
                    <span>Inquire for {item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
