'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const metrics = [
  { id: 1, endValue: 40, suffix: "M+", title: "Students" },
  { id: 2, endValue: 1000, suffix: "+", title: "Startups" },
  { id: 3, endValue: 50, suffix: "+", title: "Partners" },
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
      {value.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImpactMetrics() {
  return (
    <section className="w-full py-40 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full">
          {metrics.map((metric) => (
            <motion.div 
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                <Counter endValue={metric.endValue} suffix={metric.suffix} />
              </h3>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">
                {metric.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
