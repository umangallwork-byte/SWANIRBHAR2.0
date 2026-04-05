'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ProblemStatement() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [8, 0]);

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
        <motion.div 
          style={{ scale, opacity, rotateX }}
          className="w-full max-w-4xl bg-white/80 backdrop-blur-md border border-[#f1f5f9] shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2rem] p-10 md:p-16 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-1 bg-slate-800 rounded-full mb-8 opacity-20"
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-3xl md:text-5xl text-slate-800 mb-8 tracking-tight"
          >
            The Friction in the System.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-lg md:text-2xl text-slate-600 leading-relaxed font-light"
          >
            Every year, <motion.span
              initial={{ color: '#475569' }}
              whileInView={{ color: '#0f172a' }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
              className="font-medium"
            >40 million</motion.span> students enter higher education. Yet, a massive gap remains between academic theory and operational readiness. Startups struggle to scale. MSMEs cannot find trained talent.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 pt-8 border-t border-slate-200/60 w-full flex justify-center origin-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="font-sans text-xl md:text-2xl font-semibold text-slate-800 tracking-wide uppercase"
            >
              Swanirbhar 2.0 is the architectural fix.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
