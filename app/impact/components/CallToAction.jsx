'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const taglines = [
  "Building India’s Opportunity Ecosystem",
  "Where Talent Meets Opportunity",
  "Turning Education Into Employment",
  "Empowering Youth. Enabling Innovation.",
  "A Movement For India’s Next Generation"
];

export default function CallToAction() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-32 md:py-48 bg-white relative flex flex-col items-center overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center relative z-10">
        
        {/* Dynamic Tagline */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-8 w-full uppercase tracking-[0.2em] font-sans text-xs md:text-sm font-bold text-slate-400">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTagline}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {taglines[currentTagline]}
            </motion.p>
          </AnimatePresence>
        </div>

        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-slate-900 tracking-tighter leading-[1.1] mb-16 max-w-4xl font-black">
          The Future Is Collaborative.
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 w-full sm:w-auto">
          <button 
            onClick={() => window.location.href = '/#hero'}
            className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-xl"
          >
            Become a Partner
          </button>
          <button 
            onClick={() => window.location.href = '/#hero'}
            className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 text-sm font-bold uppercase tracking-widest hover:bg-slate-50 transition-all duration-300 shadow-sm"
          >
            Support the Mission
          </button>
          <button 
            onClick={() => window.location.href = '/#hero'}
            className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 text-sm font-bold uppercase tracking-widest hover:bg-slate-50 transition-all duration-300 shadow-sm"
          >
            Join Ecosystem
          </button>
        </div>
      </div>
    </section>
  );
}
