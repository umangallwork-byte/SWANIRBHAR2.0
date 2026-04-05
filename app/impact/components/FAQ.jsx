'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does the waitlist work?",
    answer: "By joining the waitlist, you secure priority access to our platform ahead of the public launch. We will notify you via email with exclusive onboarding instructions and early-bird benefits when we open the doors."
  },
  {
    question: "How is the curriculum customized?",
    answer: "Our curriculum adapts dynamically to the skills and requirements of the modern industry. We collaborate directly with corporate partners to ensure every module addresses real-world challenges, guaranteeing maximum relevance for your career."
  },
  {
    question: "What support do startups receive?",
    answer: "Startups within the Swanirbhar 2.0 ecosystem gain unprecedented access to university incubation hubs, a network of angel investors, strategic mentorship from industry leaders, and a talent pool of highly trained students."
  },
  {
    question: "Is this open to all university and college?",
    answer: "Yes. While our initial cohorts focus on engineering and management institutions, we are actively expanding to include design, commerce, and vocational training institutes. Tier-2 and Tier-3 institutions remain a core priority for unlocking national potential."
  },
  {
    question: "How can investors participate in the ecosystem?",
    answer: "Investors gain access to a rigorously vetted pipeline of student-led and early-stage startups that have been nurtured through our incubation process. You can participate through our curated demo days, join as a Venture Partner, or sponsor specific innovation challenges."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 md:py-32 bg-[#FFFFFF]">
      <div className="max-w-3xl mx-auto px-4 w-full flex flex-col items-center">
        <h2 className="font-serif text-3xl md:text-5xl text-slate-800 text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="w-full flex flex-col gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="w-full bg-[#FFFFFF]/60 backdrop-blur-xl border-2 border-black shadow-[6px_6px_0px_#000000] rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus:ring-2 focus:ring-slate-300 rounded-2xl"
                >
                  <span className="font-serif text-xl sm:text-2xl text-slate-800 tracking-tight font-medium">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 bg-white/50 rounded-full p-2 shadow-[inset_2px_2px_4px_#e3e3de,inset_-2px_-2px_4px_#ffffff]"
                  >
                    <ChevronDown className="w-6 h-6 text-slate-600" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                        <div className="w-full shadow-[inset_4px_4px_8px_#e3e3de,inset_-4px_-4px_8px_#ffffff] rounded-2xl p-6 bg-transparent">
                          <p className="font-sans text-slate-600 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
