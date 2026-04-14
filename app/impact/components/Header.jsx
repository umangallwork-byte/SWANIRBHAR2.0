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
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'py-4 backdrop-blur-2xl bg-[#FFFFFF]/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-b border-[#f1f5f9]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => window.location.href = '/'}
          className="font-serif text-2xl font-bold text-slate-800 tracking-tight cursor-pointer flex items-center gap-1 group"
        >
          <img src="/swanirbhar%20logo/logo-removebg-preview.png" alt="Swanirbhar Logo" className="h-8 w-auto" />
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-md border border-[#f1f5f9] shadow-[0_8px_30px_rgba(0,0,0,0.04)] px-8 py-3 rounded-full">
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
          onClick={() => window.location.href = '/'}
          className="hidden md:flex bg-[#6e66ff] text-white rounded-full px-7 py-3 text-sm font-medium tracking-wide hover:bg-[#5d54f0] shadow-[0_8px_20px_rgba(110,102,255,0.25)] hover:shadow-[0_12px_25px_rgba(110,102,255,0.35)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
        >
          Join the Movement
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden bg-white p-3 rounded-full border border-[#f1f5f9] shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-slate-700 active:scale-95 transition-transform"
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
        className="md:hidden overflow-hidden bg-[#FFFFFF]"
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
            onClick={() => window.location.href = '/'}
            className="w-full mt-2 bg-[#6e66ff] text-white rounded-xl px-6 py-4 text-sm font-medium tracking-wide hover:bg-[#5d54f0] shadow-[0_8px_20px_rgba(110,102,255,0.25)] transition-colors"
          >
            Join the Movement
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
}
