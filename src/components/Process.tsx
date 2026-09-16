import React from 'react';
import { Sparkles, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-32 bg-white border-b border-[#E4E4E7]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5F0] border border-[#FF5E1E]/20 text-xs font-bold text-[#FF5E1E] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F1115] tracking-tight">
            The 6-Step Creative & Growth Framework
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            A repeatable, structured pipeline from initial business discovery to data-guided performance optimization.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative rounded-3xl bg-[#FAFAFA] hover:bg-white border border-[#E4E4E7] hover:border-[#FF5E1E] p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Number Top */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E4E4E7]">
                  <span className="font-mono font-extrabold text-2xl sm:text-3xl text-[#0F1115] group-hover:text-[#FF5E1E] transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] px-2.5 py-1 rounded-full bg-white border border-[#E4E4E7]">
                    Phase {step.step}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-[#0F1115] group-hover:text-[#FF5E1E] transition-colors mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-[#52525B] leading-relaxed mb-6 font-medium">
                  {step.summary}
                </p>
              </div>

              {/* Action Items */}
              <div className="space-y-2.5 pt-4 border-t border-[#E4E4E7]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] font-bold">
                  Core Activities:
                </div>
                {step.actionItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#52525B]">
                    <Check className="w-3.5 h-3.5 text-[#FF5E1E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
