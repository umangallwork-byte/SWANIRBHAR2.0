'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "What is the core objective of Swanirbhar 2.0?",
    answer: "Swanirbhar 2.0 aims to modernize the Indian innovation ecosystem by bridging the gap between hardware research and actual industry-ready startups."
  },
  {
    question: "Who can participate in the ecosystem?",
    answer: "We welcome students, startup founders, university representatives, and industry partners who are committed to the mission of building a self-reliant India."
  },
  {
    question: "How is Phase 1 different?",
    answer: "Our Phase 1 integrates directly with university curricula, ensuring that innovation doesn't happen in isolation but as a core part of the learning journey."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full py-40 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter mb-20 text-center">Frequently Asked.</h2>
        
        <div className="flex flex-col gap-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-[32px] nm-flat overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-10 py-10 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold tracking-tight text-foreground/80 group-hover:text-foreground nm-transition">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-xl nm-inset-deep flex items-center justify-center transition-transform duration-500 ${openIndex === idx ? 'rotate-45 text-accent' : 'text-muted'}`}>
                  <Plus size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-10">
                        <div className="p-8 rounded-2xl nm-inset-deep text-muted text-base leading-relaxed font-medium">
                            {faq.answer}
                        </div>
                    </div>
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
