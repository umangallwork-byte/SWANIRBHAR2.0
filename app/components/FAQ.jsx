'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is the core objective of Swanirbhar 2.0?",
    answer: "Swanirbhar 2.0 aims to modernize the Indian innovation ecosystem by bridging the gap between hardware/academic research and actual industry-ready startups."
  },
  {
    question: "Who can participate in the ecosystem?",
    answer: "We welcome students, startup founders, university representatives, and industry partners who are committed to the mission of building a self-reliant India."
  },
  {
    question: "How is Phase 1 different from traditional incubation?",
    answer: "Our Phase 1 integrates directly with university curricula, ensuring that innovation doesn't happen in isolation but as a core part of the learning journey."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full py-40 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-20 text-center">Frequently Asked.</h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold tracking-tight text-zinc-400 group-hover:text-white transition-colors">
                  {faq.question}
                </span>
                <span className={`text-xl transition-transform duration-500 ${openIndex === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-zinc-500 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
