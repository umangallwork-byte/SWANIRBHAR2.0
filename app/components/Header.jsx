'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Mentors', href: '/mentors' },
    { name: 'Incubation', href: '/incubation' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Impact', href: '/impact' },
  ];

  const handleNavLinkClick = (item) => {
    if (item.href) window.location.href = item.href;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 nm-transition ${
          scrolled ? 'py-4' : 'py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand - Inset Well for Logo */}
          <div 
            onClick={() => window.location.href = '/'}
            className="w-16 h-16 rounded-2xl nm-inset-deep flex items-center justify-center cursor-pointer group hover:scale-105 nm-transition"
          >
            <img 
              src="/swanirbhar%20logo/logo-removebg-preview.png" 
              alt="Swanirbhar" 
              className="h-10 w-auto nm-transition group-hover:rotate-12" 
            />
          </div>

          {/* Navigation - Floating Flat Pill */}
          <nav className="hidden md:flex items-center gap-2 p-2 rounded-full nm-flat">
            {navLinks.map((item) => (
              <button 
                key={item.name} 
                onClick={() => handleNavLinkClick(item)}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-muted hover:text-foreground hover:nm-inset nm-transition"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA - Extruded Accent Button */}
          <div className="flex items-center gap-4">
            <button 
              className="hidden lg:flex px-8 py-4 rounded-2xl bg-accent text-white text-xs font-bold uppercase tracking-widest shadow-[6px_6px_12px_rgba(108,99,255,0.3),-6px_-6px_12px_rgba(255,255,255,0.2)] hover:shadow-none active:nm-inset transition-all"
            >
              Portal Access
            </button>

            {/* Mobile Toggle - Extruded Round Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-12 h-12 rounded-2xl nm-flat flex items-center justify-center active:nm-inset text-foreground nm-transition"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-6 right-6 mt-4 p-6 rounded-[32px] nm-flat md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <button 
                    key={item.name} 
                    onClick={() => handleNavLinkClick(item)}
                    className="w-full text-left p-4 rounded-2xl text-sm font-bold text-muted hover:nm-inset nm-transition"
                  >
                    {item.name}
                  </button>
                ))}
                <button className="w-full mt-2 p-5 rounded-2xl bg-accent text-white text-xs font-bold uppercase tracking-widest">
                  Join Waitlist
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <GlobalMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
