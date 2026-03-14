'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

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
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif text-2xl font-bold text-slate-800 tracking-tight cursor-pointer flex items-center gap-1 group"
        >
          Swanirbhar <span className="text-slate-400 font-light transition-colors group-hover:text-slate-600">2.0</span>
        </div>

        {/* Navigation & CTA */}
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={() => window.location.href = '/impact'}
            className="text-slate-500 hover:text-slate-900 font-sans font-bold text-xs md:text-sm tracking-widest uppercase transition-colors"
          >
            /swanirbhar-impact
          </button>

          <button 
            onClick={() => scrollToSection('hero')}
            className="bg-slate-800 text-white rounded-full px-5 py-2 md:px-7 md:py-3 text-xs md:text-sm font-medium tracking-wide hover:bg-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </motion.header>
  );
}
