'use client';

import { motion } from 'framer-motion';

const impacts = [
  { value: "4 Lakh", title: "Students Trained", desc: "Students across universities and partner institutions received practical skill training." },
  { value: "1 Lakh", title: "Internships", desc: "Students worked with startups, MSMEs and industry partners." },
  { value: "1000+", title: "Startups Supported", desc: "Founders received incubation, mentorship and ecosystem access." },
  { value: "4 Lakh", title: "Jobs Enabled", desc: "Training, entrepreneurship and partnerships contributed to large-scale employment opportunities." },
];

export default function ImpactMetrics() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-800 text-center mb-16 tracking-tight">
          Impact At Scale
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {impacts.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="w-full bg-[#F7F7F2]/60 backdrop-blur-xl border border-white/80 shadow-[8px_8px_16px_#e3e3de,-8px_-8px_16px_#ffffff] rounded-3xl p-8 flex flex-col text-left group hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tighter">
                {metric.value}
              </h3>
              <p className="font-sans text-slate-800 text-lg uppercase tracking-wide font-bold mb-3">
                {metric.title}
              </p>
              <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
