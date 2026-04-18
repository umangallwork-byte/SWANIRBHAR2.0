'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const metrics = [
  { id: 1, endValue: 40, suffix: "M+", title: "Students Impacted" },
  { id: 2, endValue: 1000, suffix: "+", title: "Scaleup Startups" },
  { id: 3, endValue: 50, suffix: "+", title: "Global Partners" },
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
    <section className="w-full py-40 bg-background relative overflow-hidden">
      
      {/* Decorative Physics Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full nm-flat opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full nm-inset opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {metrics.map((metric) => (
            <motion.div 
              key={metric.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group p-12 rounded-[40px] nm-flat flex flex-col items-center text-center nm-transition hover:nm-flat-hover"
            >
              <div className="w-12 h-1 bg-accent rounded-full mb-8 nm-transition group-hover:w-20" />
              <h3 className="text-6xl md:text-7xl font-display font-extrabold tracking-tighter text-foreground mb-6">
                <Counter endValue={metric.endValue} suffix={metric.suffix} />
              </h3>
              <p className="text-muted text-[10px] font-bold uppercase tracking-[0.4em]">
                {metric.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
