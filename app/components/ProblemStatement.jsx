'use client';

import { motion } from 'framer-motion';

export default function ProblemStatement() {
  return (
    <section className="w-full py-40 bg-black text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        />
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-10"
        >
          Bridging the Industry <br/> 
          <span className="text-zinc-600">— Skills Velocity Gap.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed"
        >
          Traditional education systems are struggling to keep pace with the exponential growth of technology. Swanirbhar 2.0 creates a dynamic architecture where learning evolves as fast as the industry.
        </motion.p>
      </div>
    </section>
  );
}
