'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, BarChart3 } from 'lucide-react';

export default function GlobalMenu({ isOpen, onClose }) {
  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const menuLinks = [
    {
      name: 'Portfolio Map',
      href: '/portfolio',
      icon: <MapPin className="w-5 h-5" />,
      description: 'Explore our startup presence across India',
    },
    {
      name: 'Swanirbhar Impact',
      href: '/impact',
      icon: <BarChart3 className="w-5 h-5" />,
      description: 'See the national impact of our ecosystem',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay */}
          <motion.div
            key="global-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-slate-900/50 backdrop-blur-sm cursor-pointer"
            aria-label="Close menu"
          />

          {/* Left Slide-Out Drawer */}
          <motion.nav
            key="global-menu-panel"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 left-0 z-[90] h-full w-full max-w-sm bg-white shadow-[8px_0_30px_rgba(0,0,0,0.08)] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-slate-100">
              <span className="font-serif text-xl font-bold text-slate-800 tracking-tight">
                Swanirbhar <span className="text-slate-400 font-light">2.0</span>
              </span>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 active:scale-95 transition-all duration-200"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col px-4 py-8 gap-2">
              {menuLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 px-4 py-5 rounded-2xl text-slate-700 hover:bg-slate-50 hover:text-[#1e293b] transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center text-slate-500 group-hover:text-[#1e293b] transition-colors duration-200 shrink-0">
                    {link.icon}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xl font-semibold tracking-tight">
                      {link.name}
                    </span>
                    <span className="text-sm text-slate-400 group-hover:text-slate-500 transition-colors">
                      {link.description}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-6 border-t border-slate-100">
              <p className="text-xs text-slate-400 font-sans text-center">
                &copy; {new Date().getFullYear()} Swanirbhar 2.0
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
