'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

function AnimatedNumber({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString('en-IN'));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
}

export default function HeroSection() {
  const impacts = [
    { value: 400000, label: "Students Trained" },
    { value: 100000, label: "Internships Enabled" },
    { value: 1000, label: "Startups Supported" },
    { value: 300000, label: "Jobs Created" }
  ];

  return (
    <section className="w-full pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex flex-col justify-center relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center w-full relative z-10">
        
        {/* New Headline & Subheadline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col items-center"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] text-slate-800 tracking-tight flex flex-col items-center justify-center max-w-5xl mx-auto">
            <span>India's Talent Is Limitless.</span>
            <span className="text-slate-400 mt-2">Opportunity Should Be Too.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl font-sans leading-relaxed">
            Swanirbhar is building a nationwide ecosystem that connects students, startups, industry,
            and institutions to create skills, innovation, and employment at scale.
          </p>
        </motion.div>

        {/* Animated Impact Numbers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full max-w-6xl mb-16"
        >
          {impacts.map((impact, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-6 bg-[#F7F7F2]/60 backdrop-blur-xl rounded-3xl shadow-[8px_8px_16px_#e3e3de,-8px_-8px_16px_#ffffff] border border-white/60 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 font-bold mb-2 flex items-center tracking-tight">
                <AnimatedNumber value={impact.value} />
                <span className="text-slate-400 ml-1">+</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider">{impact.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 w-full"
        >
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto bg-slate-800 text-white rounded-2xl px-10 py-5 font-medium tracking-wide text-lg hover:bg-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-[0.98] outline-none flex items-center justify-center gap-2"
          >
            Join the Movement
          </button>
          <button 
            onClick={() => {
              const el = document.getElementById('problem');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-transparent border-2 border-slate-300 text-slate-700 shadow-[inset_4px_4px_8px_#ffffff,inset_-4px_-4px_8px_#e3e3de] rounded-2xl px-10 py-5 font-medium tracking-wide text-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 active:scale-[0.98] outline-none flex items-center justify-center"
          >
            Explore the Impact
          </button>
        </motion.div>

      </div>
    </section>
  );
}
