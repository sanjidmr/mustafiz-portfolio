import React from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';
import mustafizImg from '../assets/images/mustafiz_portrait_1789538222133.jpg';

export const Hero: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tickerItems = [
    'Next Solution MYM',
    'Brand Identity Design',
    'High-Converting Meta Ads',
    'Creative Direction',
    '4.8x Average Client ROAS',
    'Packaging & Collateral',
    'Visual Communication Strategy',
    'Social Media Design Systems',
    'Graphic Design & Vector Craft',
    'Full Funnel Creative Testing',
  ];

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col justify-between"
    >
      {/* Subtle architectural background grid & warm radial glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#0F1115 1px, transparent 1px), linear-gradient(to right, #0F1115 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-1/4 -right-20 w-[420px] h-[420px] bg-[#FF5E1E]/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-[380px] h-[380px] bg-[#FF5E1E]/6 rounded-full blur-[90px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Top Eyebrow / Agency pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E4E4E7] shadow-2xs text-xs font-semibold text-[#0F1115]">
            <span className="w-2 h-2 rounded-full bg-[#FF5E1E] animate-pulse" />
            <span className="text-[#71717A]">Agency:</span>
            <span className="font-bold text-[#0F1115]">Next Solution MYM</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF5F0] border border-[#FF5E1E]/15 text-xs font-semibold text-[#FF5E1E]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Design + Digital Marketing</span>
          </div>
        </motion.div>

        {/* Two-column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines, Display Name & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Display Name and Role */}
            <div className="mb-3 sm:mb-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-mono font-bold text-[#71717A] block mb-1">
                Portfolio of
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0F1115] tracking-tight">
                Mustafizur Rahman
              </h2>
              <div className="inline-flex items-center gap-2 mt-1.5 text-xs sm:text-sm font-bold text-[#FF5E1E] tracking-wide">
                <span>Chief Architect</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF5E1E]/40" />
                <span className="text-[#71717A] font-medium">Next Solution MYM</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-[56px] text-[#0F1115] tracking-tight leading-[1.08] mt-2 mb-5 max-w-2xl">
              Design That <span className="underline decoration-[#FF5E1E] decoration-4 underline-offset-8">Gets Attention.</span>{' '}
              Marketing That <span className="text-[#FF5E1E]">Drives Growth.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#52525B] font-normal leading-relaxed max-w-xl mb-7 sm:mb-8">
              Digital Marketer & Graphic Designer creating compelling visual identities and marketing experiences that help brands stand out and grow.
            </p>

            {/* CTA Buttons (Touch friendly min 48px height) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                id="hero-cta-work"
                onClick={() => scrollTo('#work')}
                className="group flex items-center justify-center gap-2.5 min-h-[48px] px-8 py-3.5 rounded-full bg-[#0F1115] hover:bg-[#27272A] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-md hover:shadow-xl focus:outline-none cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-[#FF5E1E]" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => scrollTo('#contact')}
                className="group flex items-center justify-center gap-2 min-h-[48px] px-8 py-3.5 rounded-full bg-white hover:bg-[#F4F4F5] border-2 border-[#E4E4E7] hover:border-[#D4D4D8] text-[#0F1115] text-sm font-bold tracking-wide transition-all duration-200 focus:outline-none cursor-pointer shadow-2xs"
              >
                <span>Let's Create Together</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF5E1E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Credibility Stats: Responsive 3-column layout */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#E4E4E7] w-full grid grid-cols-3 gap-3 sm:gap-6">
              <div className="p-2 sm:p-0">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#0F1115]">180+</div>
                <div className="text-[11px] sm:text-xs font-medium text-[#71717A] mt-0.5">Visual Assets Crafted</div>
              </div>
              <div className="p-2 sm:p-0 border-x border-[#E4E4E7] sm:border-none px-2 sm:px-0">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#0F1115] flex items-center">
                  <span>4.8x</span>
                  <span className="text-[#FF5E1E] text-sm sm:text-base ml-1 font-sans">ROAS</span>
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-[#71717A] mt-0.5">Campaign Performance</div>
              </div>
              <div className="p-2 sm:p-0">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#0F1115] text-[#FF5E1E]">100%</div>
                <div className="text-[11px] sm:text-xs font-medium text-[#71717A] mt-0.5">Agency Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mustafizur Rahman Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex items-center justify-center"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none w-full">
              {/* Soft ambient background glow */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-[#FF5E1E]/20 via-transparent to-[#0F1115]/10 blur-2xl -z-10 pointer-events-none" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-white border border-[#E4E4E7] p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden">
                {/* Image Box */}
                <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-2xl overflow-hidden bg-[#18181B] group">
                  <img
                    src={mustafizImg}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith('/mustafiz.jpg')) {
                        target.src = '/mustafiz.jpg';
                      }
                    }}
                    alt="Mustafizur Rahman — Chief Architect at Next Solution MYM"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Status Badges Overlay */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E4E4E7] shadow-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-mono font-bold text-[#0F1115]">
                        Available for Work
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-3.5 right-3.5 z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0F1115]/90 backdrop-blur-md text-white border border-white/10 shadow-xs">
                      <span className="text-[11px] font-mono font-bold text-[#FF5E1E]">
                        Next Solution MYM
                      </span>
                    </div>
                  </div>

                  {/* Bottom Gradient and Name Card Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F1115]/95 via-[#0F1115]/60 to-transparent p-5 sm:p-6 text-white flex flex-col justify-end">
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#FF5E1E] uppercase tracking-wider font-bold">
                      Chief Architect • Next Solution MYM
                    </span>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                      Mustafizur Rahman
                    </h3>
                    <p className="text-xs text-[#D4D4D8] mt-0.5">
                      Digital Marketer & Graphic Designer
                    </p>
                  </div>
                </div>

                {/* Sub-Card Details Bar */}
                <div className="mt-3 p-3 sm:p-3.5 rounded-xl bg-[#FAFAFA] border border-[#F4F4F5] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0F1115] text-[#FF5E1E] flex items-center justify-center font-display font-extrabold text-sm shrink-0">
                      MR
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0F1115] flex items-center gap-1.5">
                        <span>Mymensingh, Bangladesh</span>
                        <span className="text-[#FF5E1E]">•</span>
                        <span className="text-[11px] font-normal text-[#71717A]">Worldwide</span>
                      </div>
                      <div className="text-[11px] text-[#71717A]">
                        Chief Architect • Next Solution MYM
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#0F1115] font-bold bg-white px-3 py-1.5 rounded-lg border border-[#E4E4E7] shadow-2xs shrink-0">
                    <Award className="w-3.5 h-3.5 text-[#FF5E1E]" />
                    <span>4+ Yrs</span>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -left-2 sm:-left-4 bg-[#0F1115] text-white px-4 py-2.5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-2.5 z-20"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5E1E] animate-ping" />
                <div className="text-xs">
                  <div className="font-bold text-white leading-tight">Chief Architect</div>
                  <div className="text-[10px] text-[#A1A1AA]">Next Solution MYM</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* World-Class Infinite Ticker Ribbon */}
      <div className="w-full mt-12 sm:mt-16 py-3 bg-[#0F1115] text-white overflow-hidden border-y border-white/10">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 text-xs font-mono font-medium tracking-wider uppercase text-[#D4D4D8]">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E1E]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

