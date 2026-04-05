'use client';

import { motion } from 'framer-motion';

const journeySteps = [
  {
    id: 1,
    subtitle: "University Hub",
    title: "Advanced academic integration",
    description: "Start your journey in a modern academic environment. We partner with top-tier institutions to integrate our curriculum directly into your degree, ensuring you master foundational concepts while remaining deeply connected to industry realities.",
    metric: "100%",
    metricLabel: "Curriculum Integration",
    color: "bg-[#b3d7d7]", // Soft teal/blue matching reference
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
      </svg>
    )
  },
  {
    id: 2,
    subtitle: "Experience",
    title: "Real-world internships from day one",
    description: "Move beyond purely theoretical learning. Engage with our network of industry partners and gain hands-on experience through structured apprenticeships that build your portfolio long before graduation.",
    metric: "500+",
    metricLabel: "Industry Partners",
    color: "bg-[#fae276]", // Soft yellow matching reference
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    )
  },
  {
    id: 3,
    subtitle: "Career",
    title: "Seamless transition to premium employment",
    description: "Step confidently into high-value roles. By the time you complete your journey, our deep ecosystem integrations ensure you are perfectly positioned and pre-vetted for top-tier, exclusive opportunities.",
    metric: "3x",
    metricLabel: "Faster Hiring Cycles",
    color: "bg-[#f08573]", // Coral matching reference
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    )
  }
];

export default function EcosystemJourney() {
  return (
    <section className="w-full bg-white pb-32 overflow-hidden">
      <div className="w-full border-b border-slate-900/10 mb-16 md:mb-32" />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-32 md:gap-48 mt-16 md:mt-24">
          {journeySteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={step.id} className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 md:gap-24 items-center`}>
                  
                {/* Text Content */}
                <div className="w-full md:w-5/12 flex flex-col justify-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-8"
                  >
                    <div className="w-3 h-3 bg-slate-900 rounded-[2px]" />
                    <span className="text-xl md:text-2xl italic font-serif text-slate-800">{step.subtitle}</span>
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-[3.5rem] font-medium tracking-tight leading-[1.05] text-slate-900 mb-8"
                  >
                    {step.title}
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-500 leading-relaxed"
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Graphic Card */}
                <div className="w-full md:w-7/12">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full aspect-square md:aspect-[4/3] ${step.color} rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 flex flex-col justify-end relative shadow-sm overflow-hidden group`}
                  >
                    {/* Top Right Icon */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.4 }}
                      className="absolute top-10 right-10 md:top-14 md:right-14 opacity-80"
                    >
                        {step.icon}
                    </motion.div>
                    
                    {/* Big Typography Graphic */}
                    <div className="mt-auto relative z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2">
                        <h3 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-medium tracking-tighter text-slate-900 leading-none mb-2 md:-ml-2">
                          {step.metric}
                        </h3>
                        <p className="text-3xl md:text-4xl text-slate-900 font-medium tracking-tight opacity-90">
                          {step.metricLabel}
                        </p>
                    </div>

                    {/* Structural background lines (like Gradient Labs isometric lines) */}
                    <div className="absolute top-[50%] right-[-20%] w-[150%] h-[1px] bg-slate-900/10 rotate-[-20deg] group-hover:rotate-[-25deg] transition-all duration-700 ease-out" />
                    <div className="absolute top-[65%] right-[-20%] w-[150%] h-[1px] bg-slate-900/10 rotate-[-20deg] group-hover:rotate-[-25deg] transition-all duration-700 ease-out delay-75" />
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
