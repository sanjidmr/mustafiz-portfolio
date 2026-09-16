import React from 'react';
import { Sparkles, Target, Eye, BarChart2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Eye,
      title: 'Attention Architecture',
      description: 'Designing visual focal points that stop endless scrolling on Instagram, Meta Ads, and web feeds within the first 1.5 seconds.',
    },
    {
      icon: Target,
      title: 'Marketing Goal Alignment',
      description: 'Every layout, color selection, and typography choice is engineered to support a tangible conversion objective, not just subjective taste.',
    },
    {
      icon: BarChart2,
      title: 'Performance & ROAS',
      description: 'Iterative creative testing informed by click-through rates, cost per acquisition, and audience retention analytics.',
    },
    {
      icon: ShieldCheck,
      title: 'Brand Equity & Consistency',
      description: 'Building cohesive visual ecosystems across every channel that make brands memorable, trusted, and premium.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-y border-[#E4E4E7]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5F0] border border-[#FF5E1E]/20 text-xs font-bold text-[#FF5E1E] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Mustafizur Rahman</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F1115] tracking-tight leading-tight">
            Where visual communication meets measurable digital marketing strategy.
          </h2>
        </div>

        {/* Two-column layout: Story Narrative + Experience Snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#52525B] leading-relaxed">
            <p className="font-medium text-[#0F1115] text-lg sm:text-xl leading-relaxed">
              I am the Chief Architect at{' '}
              <span className="text-[#FF5E1E] font-bold">Next Solution MYM</span>. I work at the
              critical intersection where visual artistry and data-driven marketing strategy
              converge.
            </p>
            <p>
              In today's digital landscape, attractive design alone is not enough. Without a
              strategic marketing foundation, even the most stunning visual assets fail to produce
              business outcomes. Conversely, ambitious marketing campaigns falling short of premium
              visual polish struggle to earn trust or command attention.
            </p>
            <p>
              My work focuses on creating designs that are not only visually captivating, but actively
              support clear marketing goals: driving brand recognition, engaging high-intent
              audiences, improving click-through rates, and turning first-time viewers into loyal
              brand advocates.
            </p>

            {/* Quote banner */}
            <div className="mt-8 p-6 rounded-2xl bg-[#FAFAFA] border-l-4 border-[#FF5E1E] shadow-xs">
              <p className="font-display text-base sm:text-lg italic font-semibold text-[#0F1115] leading-snug">
                "Design is the visual ambassador of your marketing strategy. When the aesthetic matches the customer’s psychology, growth becomes repeatable."
              </p>
              <span className="block mt-3 text-xs font-bold uppercase tracking-wider text-[#71717A]">
                — Mustafizur Rahman • Chief Architect, Next Solution MYM
              </span>
            </div>
          </div>

          {/* Right: Agency Affiliation & Key Metric Pillars */}
          <div className="lg:col-span-5 space-y-6">
            {/* Agency Card */}
            <div className="p-7 rounded-2xl bg-[#0F1115] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF5E1E]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF5E1E] font-bold mb-2">
                Agency Collective
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Next Solution MYM
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                Leading creative direction, visual branding systems, and paid social marketing campaigns for international brands and forward-thinking enterprises.
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#E4E4E7]">
                <span>Role: Chief Architect</span>
                <span className="text-[#FF5E1E] font-semibold flex items-center gap-1">
                  Active Projects <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Quick Experience Attributes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7]">
                <div className="font-display font-extrabold text-2xl text-[#0F1115]">5+ Years</div>
                <div className="text-xs font-medium text-[#71717A] mt-1">Design & Marketing Focus</div>
              </div>
              <div className="p-5 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7]">
                <div className="font-display font-extrabold text-2xl text-[#FF5E1E]">180+</div>
                <div className="text-xs font-medium text-[#71717A] mt-1">Executed Brand Assets</div>
              </div>
              <div className="p-5 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7]">
                <div className="font-display font-extrabold text-2xl text-[#0F1115]">40+</div>
                <div className="text-xs font-medium text-[#71717A] mt-1">Campaigns Managed</div>
              </div>
              <div className="p-5 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7]">
                <div className="font-display font-extrabold text-2xl text-[#0F1115]">99%</div>
                <div className="text-xs font-medium text-[#71717A] mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of the Craft */}
        <div className="mt-20 pt-16 border-t border-[#E4E4E7]">
          <div className="text-xs font-bold uppercase tracking-widest text-[#71717A] mb-8">
            The Strategic Approach
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-[#FAFAFA] hover:bg-white border border-[#E4E4E7] hover:border-[#FF5E1E]/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#FF5E1E] text-[#0F1115] group-hover:text-white border border-[#E4E4E7] group-hover:border-[#FF5E1E] flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#0F1115] mb-2 group-hover:text-[#FF5E1E] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
