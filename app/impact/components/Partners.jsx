'use client';

import { motion } from 'framer-motion';

const partners = [
  "Startup India", "AIM Incubation", "MSME", "UNICEF", "SEBI", 
  "TCS Foundation", "Infosys Foundation", "Yes Bank Foundation", 
  "NATS", "QCI", "PGS India"
];

export default function Partners() {
  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-800 mb-6 tracking-tight">
          Impact Happens Through Collaboration
        </h2>
        
        <p className="font-sans text-lg md:text-xl text-slate-600 max-w-3xl mb-16 leading-relaxed">
          These collaborations enable Swanirbhar to scale programs across education, entrepreneurship, and workforce development.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-5xl">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white/50 backdrop-blur-md border border-slate-200/50 shadow-sm rounded-2xl px-6 py-4 flex items-center justify-center hover:bg-white transition-colors duration-300 cursor-default"
            >
              <span className="font-sans font-bold text-slate-700 tracking-wide text-lg md:text-xl">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
