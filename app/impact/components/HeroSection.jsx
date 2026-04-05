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

  // Staggered text animation
  const titleWords = ["Swanirbhar", "2.0"];

  return (
    <section className="w-full pt-32 pb-20 md:pt-48 md:pb-32 min-h-[100svh] flex flex-col justify-center relative overflow-hidden bg-white">
      {/* Background Blobs for consistency */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#dbeafe] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#eff6ff] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#eef2ff] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center w-full relative z-10">
        
        {/* Dynamic Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col items-center"
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-tight text-slate-900 tracking-tight font-black mb-8">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block mr-4 md:mr-8 last:mr-0 ${word === '2.0' ? 'italic text-slate-400 font-light' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 tracking-tight">
            India's Talent Is Limitless.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-500 max-w-3xl font-sans leading-relaxed">
            We are building a nationwide ecosystem that connects students, startups, industry,
            and institutions to create high-impact innovation at scale.
          </p>
        </motion.div>

        {/* Impact Numbers - Glassmorphic Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full max-w-6xl mb-16"
        >
          {impacts.map((impact, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-8 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 font-black mb-2 flex items-center tracking-tight">
                <AnimatedNumber value={impact.value} />
                <span className="text-slate-400 ml-1">+</span>
              </h3>
              <p className="text-[10px] md:text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em]">{impact.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Action Buttons - Bold Square Black Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 w-full sm:w-auto"
        >
          <button 
            onClick={() => window.location.href = '/#hero'}
            className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-lg"
          >
            Join the Movement
          </button>
          <button 
            onClick={() => {
              const el = document.getElementById('problem');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 text-sm font-bold uppercase tracking-widest hover:bg-slate-50 transition-all duration-300 shadow-sm"
          >
            Explore the Impact
          </button>
        </motion.div>

      </div>
    </section>
  );
}
