'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    title: "National Network",
    description: "A borderless ecosystem connecting innovation hubs across 22+ states.",
    icon: "N"
  },
  {
    title: "Industry Integration",
    description: "Curriculum designed and delivered in partnership with global tech leaders.",
    icon: "I"
  },
  {
    title: "Skills Velocity",
    description: "Adaptive learning pathways that sync with live industry requirements.",
    icon: "S"
  }
];

export default function CorePillars() {
  return (
    <section className="w-full py-40 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="p-10 glass-pill border-white/5 flex flex-col items-start gap-8 hover:border-white/20 hover:bg-white/[0.07] transition-all group"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-black text-xs text-[#00E5FF] group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-xl font-black mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
