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

const faqItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-3xl mx-auto px-4 w-full flex flex-col items-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl text-slate-800 text-center mb-16"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="w-full flex flex-col gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                custom={index}
                variants={faqItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ x: isOpen ? 0 : 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full bg-white/80 backdrop-blur-sm border border-[#f1f5f9] shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-[2rem] overflow-hidden"
                style={{
                  boxShadow: isOpen ? '0 20px 40px rgba(0,0,0,0.06)' : '0 10px 30px rgba(0,0,0,0.03)',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus:ring-2 focus:ring-slate-300 rounded-2xl"
                >
                  <span className="font-serif text-xl sm:text-2xl text-slate-800 tracking-tight font-medium pr-4">
                    <span className="text-slate-300 mr-3 font-sans text-sm">0{index + 1}</span>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0 bg-slate-50 border-2 border-black/10 rounded-full p-2"
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
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15, duration: 0.4 }}
                          className="w-full border border-[#f1f5f9] bg-[#eef2ff]/50 rounded-[1.5rem] p-6"
                        >
                          <p className="font-sans text-slate-600 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
