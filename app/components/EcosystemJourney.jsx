'use client';

import { motion } from 'framer-motion';

const journeySteps = [
  {
    id: 1,
    subtitle: "Level 01",
    title: "University Integration",
    description: "Start your journey in a modern academic environment. We partner with top-tier institutions to integrate our curriculum directly into your degree.",
    metric: "100%",
    label: "Core Integration"
  },
  {
    id: 2,
    subtitle: "Level 02",
    title: "Industry Experience",
    description: "Move beyond purely theoretical learning. Engage with our network of industry partners through structured apprenticeships that build your portfolio.",
    metric: "500+",
    label: "Studio Partners"
  },
  {
    id: 3,
    subtitle: "Level 03",
    title: "Global Placement",
    description: "Step confidently into high-value roles. Our deep ecosystem integrations ensure you are perfectly positioned and pre-vetted for top-tier opportunities.",
    metric: "3x",
    label: "Hiring Acceleration"
  }
];

export default function EcosystemJourney() {
  return (
    <section className="w-full bg-background py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-48">
          {journeySteps.map((step, idx) => (
            <div key={step.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center`}>
              
              {/* Text Side */}
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block px-4 py-2 rounded-full nm-inset mb-8 text-[10px] font-extrabold uppercase tracking-[0.4em] text-accent">
                    {step.subtitle}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-foreground mb-8">
                    {step.title}
                  </h2>
                  <p className="text-muted text-lg md:text-xl font-medium leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </motion.div>
              </div>

              {/* Graphic Side: Neumorphic Nested Depth */}
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-square rounded-[48px] nm-flat p-12 flex flex-col items-center justify-center relative group"
                >
                  {/* Nested Depth Ring */}
                  <div className="absolute inset-20 rounded-full nm-inset-deep flex flex-col items-center justify-center nm-transition group-hover:scale-105">
                     <div className="text-[12vw] md:text-[8vw] font-display font-black tracking-tighter text-foreground leading-none">
                       {step.metric}
                     </div>
                     <p className="text-muted text-[10px] font-bold uppercase tracking-[0.5em] mt-4">
                       {step.label}
                     </p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
