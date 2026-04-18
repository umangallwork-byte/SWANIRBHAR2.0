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
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl z-50 px-4"
      >
        <div className="glass-pill px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <div 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img src="/swanirbhar%20logo/logo-removebg-preview.png" alt="Swanirbhar Logo" className="h-6 w-auto brightness-200" />
            <span className="text-white font-bold text-xs uppercase tracking-widest hidden sm:inline-block">Swanirbhar</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <button 
                key={item.name} 
                onClick={() => handleNavLinkClick(item)}
                className="text-[10px] font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-[0.2em]"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button 
            onClick={handleJoinClick}
            className="bg-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all rounded-full"
          >
            Join
          </button>
        </div>
      </motion.header>

      {/* Global Slide-Out Menu */}
      <GlobalMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
