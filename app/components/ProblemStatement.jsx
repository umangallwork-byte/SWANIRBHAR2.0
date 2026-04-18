'use client';

import { motion } from 'framer-motion';

export default function ProblemStatement() {
  return (
    <section className="w-full py-60 bg-background relative overflow-hidden">
      
      {/* Abstract Background Art: Concentric Neumorphic Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[1000px] h-[1000px] rounded-full nm-flat" />
        <div className="absolute w-[800px] h-[800px] rounded-full nm-inset-deep" />
        <div className="absolute w-[600px] h-[600px] rounded-full nm-flat" />
        <div className="absolute w-[400px] h-[400px] rounded-full nm-inset" />
        <div className="absolute w-[200px] h-[200px] rounded-full nm-flat animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter text-foreground mb-12 leading-[1.1]"
        >
          Bridging the <br/>
          <span className="text-muted">Skills Velocity Gap.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-muted font-sans font-medium leading-relaxed max-w-3xl"
        >
          Traditional infrastructure is too rigid for exponential growth. We've engineered a soft, adaptive architecture that evolves as fast as the industry.
        </motion.p>
      </div>
    </section>
  );
}
