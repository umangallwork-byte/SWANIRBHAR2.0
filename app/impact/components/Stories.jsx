'use client';

import { motion } from 'framer-motion';

const stories = [
  {
    type: "Student Story",
    desc: "A mechanical engineering student from a partner university joined an internship with a manufacturing startup and later launched his own automation venture.",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
  },
  {
    type: "Startup Story",
    desc: "A university innovation project grew into a startup serving MSMEs with digital tools.",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20"
  },
  {
    type: "Industry Story",
    desc: "An MSME partner reduced hiring costs by training apprentices through Swanirbhar programs.",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
  }
];

export default function Stories() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-800 text-center mb-16 tracking-tight">
          Stories From The Ecosystem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#FFFFFF]/60 backdrop-blur-xl border-2 border-black shadow-[8px_8px_0px_#000000] rounded-3xl p-10 flex flex-col items-start transition-transform hover:-translate-y-2 duration-300 h-full"
            >
              <div className={`px-4 py-2 rounded-full font-sans text-sm font-semibold tracking-wide uppercase border mb-6 ${story.color}`}>
                {story.type}
              </div>
              <p className="font-sans text-slate-700 text-lg md:text-xl leading-relaxed font-medium">
                "{story.desc}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
