import React, { useState } from 'react';
import {
  Compass,
  Feather,
  Instagram,
  Activity,
  Zap,
  Layers,
  BookOpen,
  BarChart3,
  Percent,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_LIST } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Feather,
  Instagram,
  Activity,
  Zap,
  Layers,
  BookOpen,
  BarChart3,
  Percent,
};

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_LIST[0].id);

  const activeService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];
  const ActiveIcon = iconMap[activeService.iconName] || Compass;

  const handleSelectServiceAndScroll = (serviceName: string) => {
    onSelectService(serviceName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-white border-b border-[#E4E4E7]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5F0] border border-[#FF5E1E]/20 text-xs font-bold text-[#FF5E1E] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Service Solutions</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F1115] tracking-tight">
            Design & Marketing Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Tailored creative engagements for ambitious brands, funded startups, and growing enterprises looking to command their category.
          </p>
        </div>

        {/* Master Services Layout: Interactive Service Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 9 Service Buttons List */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#71717A] font-semibold mb-3 px-2">
              Select a service offering:
            </div>
            {SERVICES_LIST.map((service, idx) => {
              const isSelected = service.id === selectedServiceId;
              const ServiceIcon = iconMap[service.iconName] || Compass;
              return (
                <button
                  key={service.id}
                  id={`service-select-${service.id}`}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group focus:outline-none cursor-pointer ${
                    isSelected
                      ? 'bg-[#0F1115] text-white border-[#0F1115] shadow-md'
                      : 'bg-[#FAFAFA] hover:bg-white text-[#0F1115] border-[#E4E4E7] hover:border-[#D4D4D8]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                      isSelected ? 'bg-[#FF5E1E] text-white' : 'bg-[#E4E4E7] text-[#52525B]'
                    }`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-2">
                      <ServiceIcon className={`w-4 h-4 ${isSelected ? 'text-[#FF5E1E]' : 'text-[#71717A]'}`} />
                      <span className="font-semibold text-sm tracking-tight">{service.title}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-medium ${isSelected ? 'text-[#FF5E1E]' : 'text-[#71717A] opacity-0 group-hover:opacity-100'} transition-opacity`}>
                    View →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Service Spec Card */}
          <div className="lg:col-span-7 sticky top-28">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-[#E4E4E7] shadow-lg relative overflow-hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E4E4E7]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F1115] text-[#FF5E1E] flex items-center justify-center shadow-md">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF5E1E] font-bold">
                      Service Scope
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0F1115]">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E4E4E7] text-xs font-medium text-[#52525B]">
                  <Clock className="w-3.5 h-3.5 text-[#FF5E1E]" />
                  <span>Timeline: {activeService.typicalTimeline}</span>
                </div>
              </div>

              {/* Description */}
              <div className="my-6">
                <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
                  {activeService.shortDesc}
                </p>
              </div>

              {/* What is included / Deliverables Checklist */}
              <div className="mb-8">
                <div className="text-xs font-mono uppercase tracking-wider text-[#0F1115] font-bold mb-4 flex items-center gap-2">
                  <span>Standard Deliverables & Inclusions</span>
                  <div className="h-px bg-[#E4E4E7] flex-1" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E4E4E7]/80 text-xs sm:text-sm font-medium text-[#0F1115]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF5E1E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action / Inquiry trigger */}
              <div className="pt-6 border-t border-[#E4E4E7] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#71717A] text-center sm:text-left">
                  Partner with Mustafizur (Chief Architect) via <strong className="text-[#0F1115]">Next Solution MYM</strong>
                </div>
                <button
                  id={`request-service-${activeService.id}`}
                  onClick={() => handleSelectServiceAndScroll(activeService.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF5E1E] hover:bg-[#E64E12] text-white text-xs font-bold tracking-wide shadow-md hover:shadow-lg transition-all focus:outline-none cursor-pointer"
                >
                  <span>Book {activeService.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
