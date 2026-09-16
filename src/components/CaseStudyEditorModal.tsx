import React, { useState, useEffect } from 'react';
import { X, Save, Edit3, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '../types';

interface CaseStudyEditorModalProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: CaseStudy) => void;
}

export const CaseStudyEditorModal: React.FC<CaseStudyEditorModalProps> = ({
  caseStudy,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<CaseStudy | null>(null);

  useEffect(() => {
    if (caseStudy) {
      setFormData({ ...caseStudy });
    }
  }, [caseStudy]);

  if (!isOpen || !formData) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      onSave(formData);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F1115]/80 backdrop-blur-sm -z-10"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E4E4E7] overflow-hidden my-8 max-h-[90vh] flex flex-col text-left"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E4E7] bg-[#FAFAFA]">
            <div className="flex items-center gap-2">
              <Edit3 className="w-4 h-4 text-[#FF5E1E]" />
              <h3 className="font-display font-bold text-lg text-[#0F1115]">
                Edit Case Study Data (Placeholder Mode)
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#E4E4E7] text-[#71717A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-4">
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                As requested, this case study data is editable so you can replace placeholder metrics with your own verified campaign numbers.
              </span>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-1 font-bold">
                Case Study Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-[#E4E4E7] text-sm focus:outline-none focus:border-[#FF5E1E]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-1 font-bold">
                  Client / Brand Name
                </label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-[#E4E4E7] text-sm focus:outline-none focus:border-[#FF5E1E]"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-1 font-bold">
                  Category
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-[#E4E4E7] text-sm focus:outline-none focus:border-[#FF5E1E]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-1 font-bold">
                Project Overview
              </label>
              <textarea
                rows={3}
                value={formData.overview}
                onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-[#E4E4E7] text-sm focus:outline-none focus:border-[#FF5E1E]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-1 font-bold">
                Design Challenge
              </label>
              <textarea
                rows={2}
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-[#E4E4E7] text-sm focus:outline-none focus:border-[#FF5E1E]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-1 font-bold">
                Marketing Goal
              </label>
              <textarea
                rows={2}
                value={formData.marketingGoal}
                onChange={(e) => setFormData({ ...formData, marketingGoal: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-[#E4E4E7] text-sm focus:outline-none focus:border-[#FF5E1E]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-1 font-bold">
                Final Solution
              </label>
              <textarea
                rows={2}
                value={formData.finalSolution}
                onChange={(e) => setFormData({ ...formData, finalSolution: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-[#E4E4E7] text-sm focus:outline-none focus:border-[#FF5E1E]"
                required
              />
            </div>

            {/* Results fields */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-2 font-bold">
                Key Performance Metrics (Editable)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {formData.results.map((res, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] space-y-1">
                    <input
                      type="text"
                      value={res.metric}
                      placeholder="e.g. +42%"
                      onChange={(e) => {
                        const newResults = [...formData.results];
                        newResults[i] = { ...newResults[i], metric: e.target.value };
                        setFormData({ ...formData, results: newResults });
                      }}
                      className="w-full px-2 py-1 rounded border border-[#D4D4D8] text-xs font-bold text-[#FF5E1E]"
                    />
                    <input
                      type="text"
                      value={res.label}
                      placeholder="Metric label"
                      onChange={(e) => {
                        const newResults = [...formData.results];
                        newResults[i] = { ...newResults[i], label: e.target.value };
                        setFormData({ ...formData, results: newResults });
                      }}
                      className="w-full px-2 py-1 rounded border border-[#D4D4D8] text-xs text-[#52525B]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#E4E4E7] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-full border border-[#E4E4E7] text-xs font-bold text-[#52525B] hover:bg-[#F4F4F5] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF5E1E] hover:bg-[#E64E12] text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
