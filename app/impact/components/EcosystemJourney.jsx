'use client';

import { motion } from 'framer-motion';

const pipelineStages = [
  "Students",
  "Skill Development",
  "Internships & Apprenticeships",
  "Startup Incubation",
  "Industry Partnerships",
  "Jobs & Entrepreneurship"
];

export default function EcosystemJourney() {
  return (
    <section className="w-full py-24 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative flex flex-col items-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-800 text-center mb-16 w-full tracking-tight">
          Ecosystem Model
        </h2>

        {/* The Pipeline Visual */}
        <div className="w-full max-w-4xl flex flex-col items-center relative gap-8 md:gap-12 pb-16">
          {/* Vertical joining line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1.5 md:w-2 bg-slate-300/50 h-[calc(100%-80px)] top-4 z-0 rounded-full"></div>

          {pipelineStages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-center group w-full px-6"
            >
              <div className="w-full sm:w-80 md:w-96 bg-[#FFFFFF]/60 backdrop-blur-xl border-2 border-black shadow-[6px_6px_0px_#000000] rounded-2xl py-5 px-6 text-center transition-all duration-300 group-hover:scale-105 group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-700 cursor-default">
                <span className="font-sans font-bold text-lg md:text-xl text-slate-700 group-hover:text-white transition-colors duration-300 tracking-wide">
                  {stage}
                </span>
              </div>
              
              {/* Down Arrow / Separator block except for last item */}
              {idx < pipelineStages.length - 1 && (
                <div className="mt-8 md:mt-12 h-6 md:h-8 flex items-center justify-center text-slate-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 animate-bounce">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 w-full flex justify-center text-center"
        >
          <div className="bg-slate-200/50 text-slate-800 rounded-full px-8 py-4 border border-slate-300 inline-block">
            <p className="font-serif text-xl md:text-2xl font-medium tracking-wide">
              Swanirbhar creates a continuous pipeline of opportunity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
