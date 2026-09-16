import React, { useState } from 'react';
import { Sparkles, Quote, Edit3, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS_LIST } from '../data/portfolioData';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS_LIST);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedQuote, setEditedQuote] = useState('');

  const handleStartEdit = (t: Testimonial) => {
    setEditingId(t.id);
    setEditedQuote(t.quote);
  };

  const handleSaveEdit = (id: string) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, quote: editedQuote } : t))
    );
    setEditingId(null);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAFAFA] border-b border-[#E4E4E7]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E4E7] text-xs font-bold text-[#FF5E1E] uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Endorsements</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F1115] tracking-tight">
              Feedback from Founders & Teams
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
              Perspectives on working with Mustafizur across brand redesigns, ad creative scale, and agency projects at Next Solution MYM.
            </p>
          </div>

          <div className="text-xs font-mono text-[#71717A] flex items-center gap-1.5">
            <Edit3 className="w-3.5 h-3.5 text-amber-600" />
            <span>Editable Testimonial Cards</span>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-[#E4E4E7] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-[#FF5E1E]/40" />
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFF5F0] text-[#FF5E1E] font-bold">
                    {t.highlightTag}
                  </span>
                </div>

                {editingId === t.id ? (
                  <div className="mb-4 space-y-3">
                    <textarea
                      rows={4}
                      value={editedQuote}
                      onChange={(e) => setEditedQuote(e.target.value)}
                      className="w-full p-3 rounded-xl border border-[#FF5E1E] text-sm focus:outline-none"
                    />
                    <button
                      onClick={() => handleSaveEdit(t.id)}
                      className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#FF5E1E] text-white text-xs font-bold"
                    >
                      <Check className="w-3.5 h-3.5" /> Save
                    </button>
                  </div>
                ) : (
                  <p className="text-base text-[#52525B] leading-relaxed mb-8 italic">
                    "{t.quote}"
                  </p>
                )}
              </div>

              {/* Author Row */}
              <div className="pt-6 border-t border-[#F4F4F5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-11 h-11 rounded-full object-cover border border-[#E4E4E7]"
                  />
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#0F1115]">
                      {t.author}
                    </h4>
                    <p className="text-xs text-[#71717A]">
                      {t.role} • <span className="font-semibold text-[#0F1115]">{t.company}</span>
                    </p>
                  </div>
                </div>

                {editingId !== t.id && (
                  <button
                    onClick={() => handleStartEdit(t)}
                    className="p-1.5 rounded text-[#A1A1AA] hover:text-[#0F1115] transition-colors"
                    title="Edit testimonial text"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
