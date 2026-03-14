'use client';

import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Rocket } from 'lucide-react';

const journeyNodes = [
  {
    id: 1,
    title: "University Hub",
    description: "Start your journey in an advanced academic environment. Master the foundational knowledge and theoretical concepts required to excel.",
    icon: <BookOpen className="w-6 h-6 text-slate-700" />
  },
  {
    id: 2,
    title: "Internship & Apprenticeship",
    description: "Apply your skills in real-world scenarios. Engage with industry partners and gain hands-on experience through structured internships.",
    icon: <Briefcase className="w-6 h-6 text-slate-700" />
  },
  {
    id: 3,
    title: "Premium Employment",
    description: "Transition seamlessly into high-value roles. Leverage the ecosystem's network and readiness to secure top-tier opportunities.",
    icon: <Rocket className="w-6 h-6 text-slate-700" />
  }
];

export default function EcosystemJourney() {
  return (
    <section className="w-full py-24 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative flex flex-col items-center">
        <h2 className="font-serif text-3xl md:text-5xl text-slate-800 text-center mb-20 w-full">
          Your Journey to Industry Readiness
        </h2>

        {/* The Timeline Container */}
        <div className="relative w-full flex flex-col gap-16 md:gap-32 pb-12">
          {/* The Vertical Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-1.5 md:w-0.5 bg-slate-300 h-[calc(100%-80px)] top-0 z-0"></div>

          {journeyNodes.map((node, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row w-full items-start md:items-center`}
              >
                {/* Desktop: Empty space to force alternating */}
                {isLeft ? (
                  <div className="hidden md:flex w-[45%] pr-12 justify-end text-right self-start flex-col items-end">
                    <Card node={node} />
                  </div>
                ) : (
                  <div className="hidden md:flex w-[45%]" />
                )}

                {/* The Mobile & Desktop Icon on Line */}
                <div className="absolute left-8 md:left-1/2 -translate-x-[calc(50%-3px)] md:-translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 w-16 h-16 rounded-full bg-[#F7F7F2] shadow-[6px_6px_12px_#e3e3de,-6px_-6px_12px_#ffffff] border-2 border-white flex justify-center items-center z-10 text-2xl">
                  {node.icon}
                </div>

                {/* Desktop: Card on Right */}
                {!isLeft ? (
                  <div className="hidden md:flex w-[45%] pl-12 text-left self-end flex-col ml-auto">
                    <Card node={node} />
                  </div>
                ) : (
                  <div className="hidden md:flex w-[45%] ml-auto" />
                )}

                {/* Mobile view Card */}
                <div className="flex md:hidden w-[calc(100%-5rem)] ml-[5rem] text-left flex-col pt-1">
                  <Card node={node} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Card({ node }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.1, borderRadius: "40px" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="w-full h-full bg-[#F7F7F2]/60 backdrop-blur-xl border border-white/80 shadow-[8px_8px_16px_#e3e3de,-8px_-8px_16px_#ffffff] rounded-3xl p-8 flex flex-col cursor-pointer"
    >
      <h3 className="font-serif text-2xl font-bold mb-4 text-slate-800">
        <span className="text-slate-400 mr-2 font-sans md:hidden lg:inline">{`0${node.id}`}</span>
        {node.title}
      </h3>
      <p className="font-sans text-slate-600 leading-relaxed">
        {node.description}
      </p>
    </motion.div>
  );
}
