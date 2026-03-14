'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Solution', id: 'solution' },
    { name: 'Impact', id: 'impact' },
    { name: 'Ecosystem', id: 'journey' },
    { name: 'Partners', id: 'partners' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'py-4 backdrop-blur-2xl bg-[#F7F7F2]/70 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-white/40 shadow-[4px_4px_16px_#e3e3de,-4px_-4px_16px_#ffffff]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => window.location.href = '/'}
          className="font-serif text-2xl font-bold text-slate-800 tracking-tight cursor-pointer flex items-center gap-1 group"
        >
          Swanirbhar <span className="text-slate-400 font-light transition-colors group-hover:text-slate-600">2.0</span> <span className="text-sm font-sans tracking-wide ml-2 bg-slate-200 px-2 py-0.5 rounded-md text-slate-500 hidden sm:block">IMPACT</span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8 bg-[#F7F7F2]/60 backdrop-blur-xl border border-white/60 shadow-[inset_2px_2px_4px_#e3e3de,inset_-2px_-2px_4px_#ffffff] px-8 py-3 rounded-full">
          {navLinks.map((item) => (
            <button 
              key={item.name} 
              onClick={() => scrollToSection(item.id)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-[0.15em]"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button 
          onClick={() => scrollToSection('join')}
          className="hidden md:flex bg-slate-800 text-white rounded-full px-7 py-3 text-sm font-medium tracking-wide hover:bg-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
        >
          Join the Movement
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden bg-[#F7F7F2] p-3 rounded-full shadow-[4px_4px_8px_#e3e3de,-4px_-4px_8px_#ffffff] text-slate-700 active:scale-95 transition-transform"
        >
          {mobileMenuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div 
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-[#F7F7F2]"
      >
        <div className="px-4 py-6 flex flex-col gap-4 border-t border-slate-200/50 mt-4">
          {navLinks.map((item) => (
            <button 
              key={item.name} 
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left py-3 px-4 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors uppercase tracking-[0.1em]"
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('join')}
            className="w-full mt-2 bg-slate-800 text-white rounded-xl px-6 py-4 text-sm font-medium tracking-wide hover:bg-slate-700 transition-colors"
          >
            Join the Movement
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
}
