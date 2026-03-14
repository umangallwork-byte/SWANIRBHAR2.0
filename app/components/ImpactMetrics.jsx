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

export default function ImpactMetrics() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#F7F7F2]/60 backdrop-blur-xl border border-white/80 shadow-[8px_8px_16px_#e3e3de,-8px_-8px_16px_#ffffff] rounded-3xl p-12 md:p-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-300">
            {metrics.map((metric) => (
              <div key={metric.id} className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0">
                <h3 className="font-serif text-5xl md:text-7xl font-light text-slate-800 mb-4 tracking-tight">
                  <Counter endValue={metric.endValue} suffix={metric.suffix} />
                </h3>
                <p className="font-sans text-slate-500 text-lg uppercase tracking-widest font-medium">
                  {metric.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
