import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0F1115] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Tier: Logo & Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-12 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#FF5E1E] text-white flex items-center justify-center font-display font-bold text-sm">
                MR
              </div>
              <div className="font-display font-bold text-xl text-white">
                Mustafizur Rahman
              </div>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA] max-w-sm">
              Chief Architect at{' '}
              <span className="text-[#FF5E1E] font-semibold">Next Solution MYM</span>. Crafting visual identities and marketing experiences that drive growth.
            </p>
          </div>

          {/* Quick links & Direct Socials */}
          <div className="flex flex-col gap-4">
            <nav className="flex flex-wrap items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold text-[#A1A1AA] hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#71717A]">
              <span className="text-white/40">Direct:</span>
              <a
                href="https://wa.me/8801568219599"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp (+880 1568-219599)</span>
              </a>
              <span>•</span>
              <a
                href="https://www.facebook.com/md.arafat.456"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-blue-400 transition-colors"
              >
                Facebook
              </a>
              <span>•</span>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                Behance
              </a>
              <span>•</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Back to top */}
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="self-start lg:self-center inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF5E1E]" />
          </button>
        </div>

        {/* Bottom Tier: Copyright & Live Time */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Mustafizur Rahman. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Crafted with <Sparkles className="w-3 h-3 text-[#FF5E1E]" /> for Next Solution MYM
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Local Studio Time: {time || '09:00:00 AM'} (GMT+6)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
