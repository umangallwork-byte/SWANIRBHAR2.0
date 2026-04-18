'use client';

import { motion } from 'framer-motion';

const journeySteps = [
  {
    id: 1,
    subtitle: "PHASE 01",
    title: "University Integration",
    description: "Start your journey in a modern academic environment. We partner with top-tier institutions to integrate our curriculum directly into your degree.",
    metric: "100%",
    label: "Integration"
  },
  {
    id: 2,
    subtitle: "PHASE 02",
    title: "Industry Experience",
    description: "Move beyond purely theoretical learning. Engage with our network of industry partners through structured apprenticeships.",
    metric: "500+",
    label: "Partners"
  },
  {
    id: 3,
    subtitle: "PHASE 03",
    title: "Global Placement",
    description: "Step confidently into high-value roles. Our ecosystem ensures you are pre-vetted for top-tier opportunities.",
    metric: "3x",
    label: "Acceleration"
  }
];

export default function EcosystemJourney() {
  return (
    <section className="w-full bg-black text-white py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-40">
          {journeySteps.map((step, idx) => (
            <div key={step.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center`}>
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#00E5FF] mb-6">{step.subtitle}</p>
                  <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">{step.title}</h2>
                  <p className="text-zinc-500 text-lg leading-relaxed max-w-md">{step.description}</p>
                </motion.div>
              </div>
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="aspect-square glass-pill border-white/5 flex flex-col items-center justify-center p-20"
                >
                  <div className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-none mb-4">{step.metric}</div>
                  <div className="text-zinc-500 text-[10px] uppercase tracking-[0.4em]">{step.label}</div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
