'use client';

import { motion } from 'framer-motion';

const goals = [
  { value: "1 Million", label: "Students Trained" },
  { value: "10,000", label: "Startups Supported" },
  { value: "1 Million", label: "Jobs Enabled" }
];

export default function NextChapter() {
  return (
    <section className="w-full py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-500 uppercase tracking-[0.2em] mb-4 font-semibold">
          The Next Chapter
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-slate-800 mb-20 tracking-tighter">
          Swanirbhar 2.0
        </h1>
        
        <p className="font-sans text-xl md:text-2xl text-slate-600 max-w-2xl mb-12">
          Goals for the next phase:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl mb-20">
          {goals.map((goal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-8 border-b-2 sm:border-b-0 sm:border-r-2 border-slate-200 last:border-0"
            >
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-800 font-bold mb-4">
                {goal.value}
              </h3>
              <p className="font-sans text-slate-500 font-bold uppercase tracking-widest">
                {goal.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-800 text-white rounded-[2rem] px-8 md:px-16 py-10 w-full max-w-6xl shadow-2xl">
          <p className="font-sans font-light text-2xl md:text-4xl lg:text-5xl leading-tight">
            The mission now is to scale the ecosystem <span className="font-semibold text-emerald-400">nationally</span> and <span className="font-semibold text-blue-400">globally</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
