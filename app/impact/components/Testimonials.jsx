'use client';

import { motion } from 'framer-motion';

const testimonials = [
  { quote: "Swanirbhar helped me gain real industry exposure before graduating.", author: "Student" },
  { quote: "The ecosystem connected us to mentors and partners we couldn’t have found alone.", author: "Startup Founder" },
  { quote: "The apprenticeship pipeline created a steady source of skilled talent.", author: "Industry Partner" },
  { quote: "Our students now work on real-world problems.", author: "University Partner" }
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-800 text-center mb-16 tracking-tight">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#FFFFFF]/60 backdrop-blur-xl border-2 border-black shadow-[8px_8px_0px_#000000] rounded-3xl p-8 flex flex-col justify-between"
            >
              <div className="mb-8">
                <svg className="w-8 h-8 text-slate-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-sans text-slate-700 leading-relaxed font-medium text-lg">
                  "{test.quote}"
                </p>
              </div>
              <p className="font-sans font-bold uppercase tracking-wider text-sm text-slate-400">
                — {test.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
