'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import GlobalMenu from './GlobalMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Mentors', href: '/mentors' },
    { name: 'Incubation', href: '/incubation' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Impact', href: '/impact' },
  ];

  const handleNavLinkClick = (item) => {
    if (item.href) {
      window.location.href = item.href;
    } else {
      const isHomePage = window.location.pathname === '/';
      if (isHomePage) {
        scrollToSection(item.id);
      } else {
        window.location.href = `/#${item.id}`;
      }
    }
  };

  const handleJoinClick = () => {
    setMobileMenuOpen(false);
    const isHomePage = window.location.pathname === '/';
    if (isHomePage) {
      scrollToSection('hero');
    } else {
      window.location.href = '/#hero';
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? 'py-4 backdrop-blur-2xl bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-b border-[#f1f5f9]' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Left: Brand */}
          <div className="flex items-center gap-6">
            <div 
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-1 cursor-pointer group"
            >
              <img src="/swanirbhar%20logo/logo-removebg-preview.png" alt="Swanirbhar Logo" className="h-8 w-auto" />
            </div>
          </div>

          {/* Center: Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 bg-white/80 backdrop-blur-md border border-[#f1f5f9] shadow-[0_8px_30px_rgba(0,0,0,0.04)] px-8 py-3 rounded-full">
            {navLinks.map((item) => (
              <button 
                key={item.name} 
                onClick={() => handleNavLinkClick(item)}
                className="text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-[0.15em]"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handleJoinClick}
              className="hidden md:flex bg-slate-900 text-white px-7 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black rounded-none transition-all duration-300 active:scale-95"
            >
              Join Waitlist
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
                onClick={() => handleNavLinkClick(item)}
                className="w-full text-left py-3 px-4 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors uppercase tracking-[0.1em]"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={handleJoinClick}
              className="w-full mt-2 bg-slate-900 text-white px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black rounded-none transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Global Slide-Out Menu */}
      <GlobalMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
