'use client';

import { motion } from 'framer-motion';
import { Landmark, Factory, Coins, GraduationCap } from 'lucide-react';

const pillars = [
  {
    icon: <Landmark className="text-accent" size={24} />,
    title: "University Integration",
    description: "Transforming institutions into hubs of hardware innovation through structured curriculum.",
  },
  {
    icon: <Factory className="text-accent" size={24} />,
    title: "Industry Participation",
    description: "Direct involvement from tech leaders to sync academic output with market demands.",
  },
  {
    icon: <Coins className="text-accent" size={24} />,
    title: "Venture Capital",
    description: "Unlocking vital funding pathways for sustainable hardware growth and scaling.",
  },
  {
    icon: <GraduationCap className="text-accent" size={24} />,
    title: "Early Ecosystem",
    description: "Cultivating entrepreneurial mindsets from primary education through specialized centers.",
  }
];

export default function CorePillars() {
  return (
    <section className="w-full py-40 relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-24"
        >
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-foreground mb-4">Core Architecture.</h2>
            <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 rounded-[32px] nm-flat nm-transition nm-flat-hover flex flex-col items-center text-center nm-transition"
            >
              {/* Inset Well for Icon */}
              <div className="w-16 h-16 rounded-2xl nm-inset-deep mb-8 flex items-center justify-center nm-transition group-hover:nm-flat">
                {pillar.icon}
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                {pillar.title}
              </h3>
              <p className="font-sans text-muted text-sm leading-relaxed font-medium">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
