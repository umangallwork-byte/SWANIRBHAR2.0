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
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-slate-800 mb-8 tracking-tight flex flex-col gap-2">
            <span>Millions of Students Graduate.</span>
            <span className="text-slate-400">Few Are Truly Industry Ready.</span>
          </h2>
          
          <p className="font-sans text-lg md:text-2xl text-slate-600 leading-relaxed font-light mb-8">
            Every year India produces millions of graduates, yet industries struggle to find job-ready talent.
          </p>
          
          <div className="w-full flex-col items-center gap-4 text-left md:text-center text-lg md:text-xl text-slate-700 font-sans tracking-wide">
            <p className="mb-4 text-slate-500 font-medium">At the same time:</p>
            <ul className="flex flex-col gap-3 items-center w-full">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                <span><strong className="font-semibold text-slate-800">Startups</strong> struggle to find skilled teams</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                <span><strong className="font-semibold text-slate-800">Students</strong> struggle to find real opportunities</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                <span><strong className="font-semibold text-slate-800">Institutions</strong> struggle to bridge theory and practice</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-12 pt-10 border-t border-slate-200/80 w-full flex justify-center">
            <p className="font-sans text-xl md:text-2xl font-bold text-slate-800 tracking-wide">
              The result is a massive opportunity gap.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
