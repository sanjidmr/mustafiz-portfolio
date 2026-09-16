import React, { useState } from 'react';
import {
  Mail,
  Send,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  MessageCircle,
  Copy,
  Check,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_LIST } from '../data/portfolioData';

interface ContactProps {
  prefilledService?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: prefilledService || SERVICES_LIST[0].title,
    budget: '$1,000 – $3,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedType, setCopiedType] = useState<'whatsapp' | 'email' | null>(null);

  // Sync prefilled service when updated
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleCopy = (text: string, type: 'whatsapp' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending form securely
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const budgetOptions = [
    { label: '< $1,000', desc: 'Sprint / Single Asset' },
    { label: '$1,000 – $3,000', desc: 'Brand or Ad Suite' },
    { label: '$3,000 – $7,000', desc: 'Full Visual System' },
    { label: '$7,000+', desc: 'Agency Retainer' },
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/8801568219599',
      handle: '+880 1568-219599',
      badge: 'Instant Chat',
      isHighlight: true,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/md.arafat.456',
      handle: 'facebook.com/md.arafat.456',
      badge: 'Profile',
      isHighlight: false,
    },
    {
      name: 'Behance',
      url: 'https://behance.net',
      handle: '@mustafizur-design',
      badge: 'Portfolio',
      isHighlight: false,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      handle: 'Mustafizur Rahman',
      badge: 'Network',
      isHighlight: false,
    },
  ];

  const whatsappDirectUrl = `https://wa.me/8801568219599?text=${encodeURIComponent(
    "Hi Mustafizur, I reviewed your portfolio and would like to discuss a project with Next Solution MYM."
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF5E1E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#0F1115]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF5F0] border border-[#FF5E1E]/20 text-xs font-bold text-[#FF5E1E] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Build Something Memorable</span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0F1115] tracking-tight leading-[1.08]">
              Have an Idea? <span className="text-[#FF5E1E]">Let's Make It Visual.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
              Whether you need a full brand overhaul, high-converting Meta ad campaigns, or strategic creative guidance, reach out directly or send project details below.
            </p>
          </div>

          {/* Instant WhatsApp Pill CTA */}
          <div className="shrink-0">
            <a
              id="instant-whatsapp-header-cta"
              href={whatsappDirectUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-emerald-500/20 transition-all group"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <MessageCircle className="w-4 h-4" />
              <span>Quick Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Two-Column Grid: Form on Left, Direct Contact on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Interactive Contact Form Container */}
          <div className="lg:col-span-7 bg-[#FAFAFA] border border-[#E4E4E7] rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-14 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0F1115]">
                    Message Received!
                  </h3>
                  <p className="text-sm sm:text-base text-[#52525B] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0F1115]">{formData.name}</strong>. Mustafizur Rahman (<strong className="text-[#FF5E1E]">Chief Architect</strong>) and the team at{' '}
                    <strong className="text-[#0F1115]">Next Solution MYM</strong> have received your inquiry. We typically reply within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ping on WhatsApp for Instant Response</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: SERVICES_LIST[0].title,
                          budget: '$1,000 – $3,000',
                          message: '',
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#D4D4D8] text-xs font-bold text-[#0F1115] hover:bg-white transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7 text-left">
                  {/* Step 1: Select Service */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#0F1115] font-bold mb-3">
                      1. Select Service Needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES_LIST.map((srv) => {
                        const isSelected = formData.service === srv.title;
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: srv.title })}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#FF5E1E] text-white shadow-sm ring-2 ring-[#FF5E1E]/20'
                                : 'bg-white text-[#52525B] border border-[#E4E4E7] hover:border-[#FF5E1E]/40 hover:text-[#0F1115]'
                            }`}
                          >
                            {srv.title}
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, service: 'Other / Custom Strategy' })}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          formData.service === 'Other / Custom Strategy'
                            ? 'bg-[#FF5E1E] text-white shadow-sm ring-2 ring-[#FF5E1E]/20'
                            : 'bg-white text-[#52525B] border border-[#E4E4E7] hover:border-[#FF5E1E]/40 hover:text-[#0F1115]'
                        }`}
                      >
                        Other / Custom Project
                      </button>
</div>
                </div>

                {/* Step 3: Contact Info Fields */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#0F1115] font-bold mb-3">
                      3. Your Contact Information
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <span className="block text-[11px] font-medium text-[#71717A] mb-1.5">
                          Full Name *
                        </span>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="e.g. Alex Henderson"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4E4E7] text-sm text-[#0F1115] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#FF5E1E] focus:ring-2 focus:ring-[#FF5E1E]/10 transition-all shadow-2xs"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <span className="block text-[11px] font-medium text-[#71717A] mb-1.5">
                          Email Address *
                        </span>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="e.g. alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4E4E7] text-sm text-[#0F1115] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#FF5E1E] focus:ring-2 focus:ring-[#FF5E1E]/10 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Optional WhatsApp/Phone field for fast outreach */}
                    <div className="mt-4">
                      <span className="block text-[11px] font-medium text-[#71717A] mb-1.5">
                        WhatsApp or Phone Number <span className="text-[#A1A1AA] font-normal">(Optional for faster WhatsApp response)</span>
                      </span>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#A1A1AA] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="e.g. +1 555 123 4567 or +880 17..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#E4E4E7] text-sm text-[#0F1115] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#FF5E1E] focus:ring-2 focus:ring-[#FF5E1E]/10 transition-all shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Project Goals / Details */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#0F1115] font-bold mb-2">
                      4. Tell Me About Your Goals & Timeline *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Describe your current brand, project objectives, target launch date, and any links or inspirations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E4E4E7] text-sm text-[#0F1115] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#FF5E1E] focus:ring-2 focus:ring-[#FF5E1E]/10 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Submit CTA Button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-2xl bg-[#FF5E1E] hover:bg-[#E64E12] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-[0_8px_25px_rgba(255,94,30,0.3)] transition-all cursor-pointer focus:outline-none disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Submitting Your Request...</span>
                      ) : (
                        <>
                          <span>Submit Project Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-[#71717A]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#FF5E1E]" /> 24h Guaranteed Reply
                      </span>
                      <span>•</span>
                      <span>No Spam Guarantee</span>
                      <span>•</span>
                      <span className="text-[#0F1115] font-medium">Chief Architect Review</span>
                    </div>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Direct Communication Channels & Agency Card (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Obsidian Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0F1115] text-white shadow-2xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#FF5E1E]/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF5E1E] font-bold">
                  Direct Communication
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online Now
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                Let's talk directly.
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                Prefer immediate messaging or preliminary creative review? Contact Mustafizur directly via WhatsApp or email.
              </p>

              <div className="space-y-3.5">
                {/* WhatsApp Direct Action Banner */}
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-white flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-emerald-400">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold">WhatsApp Direct</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('+8801568219599', 'whatsapp')}
                      className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                    >
                      {copiedType === 'whatsapp' ? (
                        <>
                          <Check className="w-3 h-3" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" /> Copy
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-mono text-sm font-bold tracking-wide text-white">
                      +880 1568-219599
                    </span>
                    <a
                      id="direct-whatsapp-chat-link"
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-sm group"
                    >
                      <span>Chat</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* Direct Agency Email */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#FF5E1E]" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#A1A1AA] font-mono">Agency Email</div>
                      <a
                        href="mailto:mustafizur@nextsolutionmym.com"
                        className="text-xs sm:text-sm font-semibold hover:text-[#FF5E1E] transition-colors"
                      >
                        mustafizur@nextsolutionmym.com
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('mustafizur@nextsolutionmym.com', 'email')}
                    className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Facebook Profile Direct Link */}
                <a
                  id="direct-facebook-profile-link"
                  href="https://www.facebook.com/md.arafat.456"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 font-display font-black text-sm">
                      f
                    </div>
                    <div>
                      <div className="text-[10px] text-[#A1A1AA] font-mono">Facebook Profile</div>
                      <div className="text-xs sm:text-sm font-semibold group-hover:text-blue-400 transition-colors">
                        md.arafat.456
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Studio Location & Agency Info */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#FF5E1E]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#A1A1AA] font-mono">Location & Agency</div>
                    <div className="text-xs sm:text-sm font-semibold">
                      Chief Architect • Next Solution MYM (Remote & Mymensingh)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Professional Networks (Dribbble removed, Instagram replaced by WhatsApp) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAFAFA] border border-[#E4E4E7]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] font-bold">
                  Verified Social Channels
                </span>
                <span className="text-[10px] font-mono text-[#A1A1AA]">4 Active Channels</span>
              </div>

              <div className="space-y-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    id={`social-channel-${social.name.toLowerCase()}`}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-between p-3.5 rounded-2xl transition-all group ${
                      social.isHighlight
                        ? 'bg-emerald-50 hover:bg-emerald-100 border border-emerald-200'
                        : 'bg-white hover:bg-[#FFF5F0] border border-[#E4E4E7] hover:border-[#FF5E1E]/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono ${
                          social.isHighlight
                            ? 'bg-emerald-500 text-white'
                            : 'bg-[#F4F4F5] text-[#0F1115] group-hover:bg-[#FF5E1E] group-hover:text-white transition-colors'
                        }`}
                      >
                        {social.name === 'WhatsApp' ? (
                          <MessageCircle className="w-3.5 h-3.5" />
                        ) : social.name === 'Facebook' ? (
                          'f'
                        ) : social.name === 'Behance' ? (
                          'Bē'
                        ) : (
                          'in'
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0F1115] flex items-center gap-2">
                          <span>{social.name}</span>
                          <span
                            className={`text-[9px] px-1.5 py-0.5 rounded-md font-mono ${
                              social.isHighlight
                                ? 'bg-emerald-200/60 text-emerald-800'
                                : 'bg-[#F4F4F5] text-[#71717A]'
                            }`}
                          >
                            {social.badge}
                          </span>
                        </div>
                        <div className="text-[11px] text-[#71717A] font-mono">
                          {social.handle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        social.isHighlight
                          ? 'text-emerald-600'
                          : 'text-[#71717A] group-hover:text-[#FF5E1E]'
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
