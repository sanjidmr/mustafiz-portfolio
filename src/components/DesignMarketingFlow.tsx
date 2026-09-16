import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Search,
  PenTool,
  MessageSquare,
  Megaphone,
  LineChart,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

interface FlowStep {
  id: string;
  name: string;
  role: string;
  designContribution: string;
  marketingImpact: string;
  keyMetric: string;
  icon: React.ElementType;
}

const FLOW_STEPS: FlowStep[] = [
  {
    id: 'step-1',
    name: 'Understand',
    role: 'Stage 01',
    designContribution: 'Auditing existing aesthetic gaps, defining moodboards, and establishing visual tone of voice.',
    marketingImpact: 'Pinpointing audience demographics, customer pain points, and commercial value propositions.',
    keyMetric: 'Clear Creative Persona Profile',
    icon: Search,
  },
  {
    id: 'step-2',
    name: 'Design',
    role: 'Stage 02',
    designContribution: 'Crafting pixel-perfect logos, typography hierarchies, layout grids, and bespoke color schemes.',
    marketingImpact: 'Establishing instant visual authority and distinctive brand recall that separates you from generic competitors.',
    keyMetric: 'Cohesive Visual Asset Suite',
    icon: PenTool,
  },
  {
    id: 'step-3',
    name: 'Communicate',
    role: 'Stage 03',
    designContribution: 'Information hierarchy, editorial copy placement, contrast ratios, and easily digestible diagrams.',
    marketingImpact: 'Conveying core product benefits and value propositions within 3 seconds of viewer attention.',
    keyMetric: '< 3s Comprehension Speed',
    icon: MessageSquare,
  },
  {
    id: 'step-4',
    name: 'Promote',
    role: 'Stage 04',
    designContribution: 'High-energy ad creatives, thumb-stopping motion hooks, and platform-optimized aspect ratios.',
    marketingImpact: 'Paid campaign distribution across Meta, Google, and LinkedIn with audience segmentation.',
    keyMetric: 'Lower Cost Per Click (CPC)',
    icon: Megaphone,
  },
  {
    id: 'step-5',
    name: 'Analyze',
    role: 'Stage 05',
    designContribution: 'Evaluating which typography, color variants, and image layouts generated the highest engagement.',
    marketingImpact: 'Auditing CTR, conversion rates, ROAS, and cost-per-acquisition across each ad creative.',
    keyMetric: 'Data-Backed Creative Winners',
    icon: LineChart,
  },
  {
    id: 'step-6',
    name: 'Improve',
    role: 'Stage 06',
    designContribution: 'Refining imagery, typography weight, and CTA styling based on real customer behavioral telemetry.',
    marketingImpact: 'Doubling down on winning creative angles to scale revenue while keeping acquisition costs lean.',
    keyMetric: 'Compounding Brand Equity',
    icon: RefreshCw,
  },
];

export const DesignMarketingFlow: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(1); // Default to Design

  const currentStep = FLOW_STEPS[activeStepIndex];
  const StepIcon = currentStep.icon;

  return (
    <section className="py-24 sm:py-32 bg-[#0F1115] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF5E1E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FF5E1E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-semibold text-[#FF5E1E] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Core Philosophy</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Design & Marketing are not separate disciplines.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Good design is never just about superficial appearance; it directly supports brand
            recognition, audience attention, seamless communication, and bottom-line marketing performance.
          </p>
        </div>

        {/* Visual Flow Navigation Bar */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-4">
            Strategic Growth Loop:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {FLOW_STEPS.map((step, idx) => {
              const isSelected = idx === activeStepIndex;
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  id={`flow-step-btn-${step.id}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group p-3.5 rounded-xl border text-left transition-all duration-200 focus:outline-none cursor-pointer relative ${
                    isSelected
                      ? 'bg-[#FF5E1E] border-[#FF5E1E] text-white shadow-[0_4px_20px_rgba(255,94,30,0.3)]'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-[#D4D4D8]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-white/80' : 'text-[#71717A]'}`}>
                      {step.role}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#FF5E1E]'}`} />
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base tracking-tight">
                    {step.name}
                  </div>
                  {idx < FLOW_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-white/30 z-20 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Explorer Card for Selected Flow Node */}
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl bg-[#18181B] border border-white/10 p-8 sm:p-12 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-white/10 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FF5E1E] text-white flex items-center justify-center shadow-lg">
                <StepIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF5E1E] font-bold">
                  {currentStep.role} of 06
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {currentStep.name}: The Synergy
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Target Output: {currentStep.keyMetric}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Design Column */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF5E1E] mb-3">
                <PenTool className="w-3.5 h-3.5" />
                <span>The Visual & Design Side</span>
              </div>
              <p className="text-base text-[#D4D4D8] leading-relaxed">
                {currentStep.designContribution}
              </p>
            </div>

            {/* Marketing Column */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3">
                <LineChart className="w-3.5 h-3.5" />
                <span>The Marketing & Growth Impact</span>
              </div>
              <p className="text-base text-[#D4D4D8] leading-relaxed">
                {currentStep.marketingImpact}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
