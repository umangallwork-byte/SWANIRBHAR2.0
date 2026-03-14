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
    <section className="w-full py-32 md:py-48 bg-[#F7F7F2] relative flex flex-col items-center">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Dynamic Tagline */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-8 w-full uppercase tracking-[0.2em] font-sans text-sm md:text-base font-bold text-slate-500">
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

        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-slate-800 tracking-tighter leading-[1.1] mb-16 max-w-4xl">
          The Future of Opportunity Is Collaborative.
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto bg-slate-800 text-white rounded-2xl px-10 py-5 font-medium tracking-wide text-lg hover:bg-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-[0.98] outline-none"
          >
            Become a Partner
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto bg-transparent border-2 border-slate-300 text-slate-700 shadow-[inset_4px_4px_8px_#ffffff,inset_-4px_-4px_8px_#e3e3de] rounded-2xl px-10 py-5 font-medium tracking-wide text-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 active:scale-[0.98] outline-none"
          >
            Support the Mission
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto bg-transparent border-2 border-slate-300 text-slate-700 shadow-[inset_4px_4px_8px_#ffffff,inset_-4px_-4px_8px_#e3e3de] rounded-2xl px-10 py-5 font-medium tracking-wide text-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 active:scale-[0.98] outline-none"
          >
            Join the Ecosystem
          </button>
        </div>
      </div>
    </section>
  );
}
