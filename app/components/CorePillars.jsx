'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: -10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function CorePillars() {
  const pillars = [
    {
      icon: "🏛️",
      title: "University Incubation",
      description: "Transform academic institutions into hubs of innovation with structured incubation programs.",
    },
    {
      icon: "🏭",
      title: "Industry Participation",
      description: "Direct involvement from thought leaders and corporations to shape the curriculum and outcomes.",
    },
    {
      icon: "💰",
      title: "Capital & Investment",
      description: "Unlock vital funding pathways for startups, fueling sustainable growth and rapid scaling.",
    },
    {
      icon: "🎓",
      title: "Early Learning",
      description: "Cultivate entrepreneurial mindsets from a young age through comprehensive school programs.",
    }
  ];

  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] border border-slate-100 rounded-full opacity-20 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center relative z-10">
        <motion.h2 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="font-serif text-3xl md:text-5xl text-slate-800 text-center mb-16"
        >
          The Core Architecture
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
        >
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="bg-white/80 backdrop-blur-md border border-[#f1f5f9] shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-[2rem] h-full flex flex-col items-center text-center p-10 cursor-default group"
            >
              <h3 className="font-serif text-xl font-bold text-slate-800 mb-4 group-hover:text-black transition-colors">
                {pillar.title}
              </h3>
              <p className="font-sans text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
