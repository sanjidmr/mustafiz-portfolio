import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Mail, Send } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = ['home', 'about', 'expertise', 'services', 'work', 'casestudies', 'process', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', num: '01' },
    { name: 'About', href: '#about', num: '02' },
    { name: 'Expertise', href: '#expertise', num: '03' },
    { name: 'Services', href: '#services', num: '04' },
    { name: 'Work', href: '#work', num: '05' },
    { name: 'Process', href: '#process', num: '06' },
    { name: 'Contact', href: '#contact', num: '07' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at very top of screen */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FF5E1E] via-[#FF8A50] to-[#FF5E1E] origin-left z-[60]"
        style={{ scaleX }}
      />

      <motion.header
        id="main-navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAFAFA]/95 backdrop-blur-xl border-b border-[#E4E4E7]/90 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.04)]'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand identity & agency mark */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0F1115] text-white font-display font-bold text-xs sm:text-sm tracking-wider shadow-sm transition-transform group-hover:scale-105">
              MR
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5E1E] border-2 border-white ring-2 ring-[#FF5E1E]/20" />
            </div>
            <div>
              <div className="font-display font-extrabold text-sm sm:text-base text-[#0F1115] tracking-tight flex items-center gap-1.5 leading-none">
                Mustafizur Rahman
              </div>
              <div className="text-[10px] sm:text-[11px] font-medium text-[#71717A] flex items-center gap-1.5 tracking-wide mt-1">
                <span className="text-[#FF5E1E] font-bold">Chief Architect</span>
                <span className="inline-block w-1 h-1 rounded-full bg-[#D4D4D8]" />
                <span className="hidden xs:inline text-[#0F1115] font-semibold">Next Solution MYM</span>
              </div>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F4F4F5]/90 p-1.5 rounded-full border border-[#E4E4E7] shadow-2xs backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-[#0F1115]'
                      : 'text-[#52525B] hover:text-[#0F1115] hover:bg-white/70'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#0F1115] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200/60 text-[11px] font-medium text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Work</span>
            </div>
            
            <a
              id="nav-cta-btn"
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#FF5E1E] hover:bg-[#E64E12] text-white text-xs font-bold tracking-wide transition-all duration-200 shadow-sm hover:shadow-[0_6px_20px_rgba(255,94,30,0.25)] focus:outline-none"
            >
              <span>Let's Create</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile menu toggle (Enhanced 48px Touch Target) */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-2xl text-[#0F1115] bg-[#F4F4F5] hover:bg-[#E4E4E7] transition-all focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* World-Class Full-Screen Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#0F1115]/60 backdrop-blur-md flex flex-col justify-end"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-full bg-[#FAFAFA] rounded-t-3xl border-t border-[#E4E4E7] shadow-2xl overflow-hidden max-h-[88vh] flex flex-col"
            >
              {/* Drawer Top Notch & Agency Status */}
              <div className="pt-3 pb-2 flex flex-col items-center">
                <div className="w-12 h-1.5 rounded-full bg-[#D4D4D8] mb-3" />
                <div className="w-full px-6 flex items-center justify-between text-xs font-mono pb-2 border-b border-[#E4E4E7]">
                  <span className="text-[#71717A] uppercase tracking-wider font-semibold">Navigation</span>
                  <span className="text-[#FF5E1E] font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Chief Architect • Next Solution MYM
                  </span>
                </div>
              </div>

              {/* Mobile Links List with Big Friendly Touch Targets */}
              <div className="overflow-y-auto px-6 py-4 space-y-1 divide-y divide-[#F4F4F5]">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.name}
                      id={`mobile-nav-${link.name.toLowerCase()}`}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`flex items-center justify-between py-3.5 px-3 rounded-xl text-base font-bold transition-colors ${
                        isActive
                          ? 'bg-[#0F1115] text-white'
                          : 'text-[#0F1115] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono ${isActive ? 'text-[#FF5E1E]' : 'text-[#A1A1AA]'}`}>
                          {link.num}
                        </span>
                        <span>{link.name}</span>
                      </div>
                      <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#FF5E1E]' : 'text-[#A1A1AA]'}`} />
                    </a>
                  );
                })}
              </div>

              {/* Bottom Quick Contact & Actions */}
              <div className="p-6 bg-white border-t border-[#E4E4E7] space-y-3">
                <a
                  id="mobile-drawer-cta"
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#FF5E1E] text-white text-sm font-bold tracking-wide shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Start a Project with Mustafizur</span>
                </a>

                <div className="flex items-center justify-between text-xs text-[#71717A] pt-1">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Mail className="w-3.5 h-3.5 text-[#FF5E1E]" /> mustafizur@nextsolutionmym.com
                  </span>
                  <span className="font-bold text-emerald-600">Active</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

