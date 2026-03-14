'use client';

import { motion } from 'framer-motion';

export default function WhyItMatters() {
  return (
    <section className="w-full py-24 md:py-32 bg-slate-800 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pattern-grid"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10 tracking-tight font-light">
            Why This Matters
          </h2>
          
          <div className="flex flex-col gap-8 text-xl md:text-2xl lg:text-3xl font-sans font-light leading-relaxed max-w-4xl opacity-90">
            <p>
              India’s future depends on unlocking the potential of its youth.
            </p>
            <p>
              When students gain real skills, startups grow faster, industries innovate, and communities prosper.
            </p>
            <p className="font-medium text-white opacity-100">
              Swanirbhar’s mission is to ensure every learner has a pathway to opportunity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
