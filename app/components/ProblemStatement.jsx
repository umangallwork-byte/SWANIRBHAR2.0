'use client';

import { motion } from 'framer-motion';

export default function ProblemStatement() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl bg-[#F7F7F2]/60 backdrop-blur-xl border border-white/80 shadow-[8px_8px_16px_#e3e3de,-8px_-8px_16px_#ffffff] rounded-3xl p-10 md:p-16 flex flex-col items-center text-center"
        >
          <div className="w-16 h-1 bg-slate-800 rounded-full mb-8 opacity-20"></div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-slate-800 mb-8 tracking-tight">
            The Friction in the System.
          </h2>
          
          <p className="font-sans text-lg md:text-2xl text-slate-600 leading-relaxed font-light">
            Every year, <span className="font-medium text-slate-800">40 million</span> students enter higher education. Yet, a massive gap remains between academic theory and operational readiness. Startups struggle to scale. MSMEs cannot find trained talent.
          </p>
          
          <div className="mt-8 pt-8 border-t border-slate-200/60 w-full flex justify-center">
            <p className="font-sans text-xl md:text-2xl font-semibold text-slate-800 tracking-wide uppercase">
              Swanirbhar 2.0 is the architectural fix.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
