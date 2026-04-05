'use client';

import { motion } from 'framer-motion';

export default function ProblemStatement() {
  return (
    <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-50/50 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl bg-white/40 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-10 md:p-16 flex flex-col items-center text-center relative z-10"
        >
          <div className="w-16 h-1 bg-slate-900 mb-8 opacity-10"></div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-900 mb-8 tracking-tight font-black">
            <span>Millions of Students Graduate.</span>
            <span className="text-slate-400">Few Are Truly Ready.</span>
          </h2>
          
          <p className="font-sans text-lg md:text-2xl text-slate-600 leading-relaxed font-light mb-12">
            Every year India produces millions of graduates, yet industries struggle to find job-ready talent.
          </p>
          
          <div className="w-full flex-col items-center gap-4 text-left md:text-center text-lg md:text-xl text-slate-700 font-sans tracking-wide">
            <p className="mb-6 text-slate-400 font-bold uppercase text-xs tracking-widest pl-2 md:pl-0">AT THE SAME TIME</p>
            <ul className="flex flex-col gap-4 items-center w-full">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900" />
                <span className="text-slate-800"><strong className="font-bold">Startups</strong> struggle to find skilled teams</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900" />
                <span className="text-slate-800"><strong className="font-bold">Students</strong> struggle to find real opportunities</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900" />
                <span className="text-slate-800"><strong className="font-bold">Institutions</strong> struggle to bridge theory and practice</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-12 pt-10 border-t border-slate-100 w-full flex justify-center">
            <p className="font-sans text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              The result is a massive opportunity gap.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
