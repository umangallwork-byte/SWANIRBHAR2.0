'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const metrics = [
  { id: 1, endValue: 40, suffix: "M+", title: "Higher Education Students" },
  { id: 2, endValue: 1000, suffix: "+", title: "Scalable Startups" },
  { id: 3, endValue: 50, suffix: "+", title: "Corporate Partners" },
];

function Counter({ endValue, suffix }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / endValue));
      let timer = setInterval(() => {
        start += Math.ceil(endValue / 50) || 1;
        if (start >= endValue) {
          setValue(endValue);
          clearInterval(timer);
        } else {
          setValue(start);
        }
      }, stepTime > 10 ? stepTime : 20);
      
      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);

  return (
    <span ref={ref}>
      {value}{suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const metricVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  }
};

export default function ImpactMetrics() {
  return (
    <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Animated background pulse */}
      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900 rounded-full blur-[200px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#f1f5f9] rounded-[2rem] p-12 md:p-16"
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-300"
          >
            {metrics.map((metric) => (
              <motion.div 
                key={metric.id} 
                variants={metricVariants}
                className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0"
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="font-serif text-5xl md:text-7xl font-light text-slate-800 mb-4 tracking-tight cursor-default"
                >
                  <Counter endValue={metric.endValue} suffix={metric.suffix} />
                </motion.h3>
                <p className="font-sans text-slate-500 text-lg uppercase tracking-widest font-medium">
                  {metric.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
