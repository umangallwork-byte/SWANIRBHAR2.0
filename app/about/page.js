'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import { Rocket, Shield, Globe, Zap, HeartPulse, GraduationCap, Lightbulb } from 'lucide-react';
import Image from 'next/image';

const pillars = [
  {
    title: "Swanirbhar Incubations",
    description: "Transforming education through interdisciplinary learning, equipping entrepreneurs to lead the industries of tomorrow.",
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Swanirbhar Awareness Bench",
    description: "Awakening social responsibility and inspiring collective action to solve societal issues.",
    icon: <Lightbulb className="w-8 h-8 text-emerald-600" />,
  },
  {
    title: "Swanirbhar Research and Development",
    description: "Pioneering breakthroughs in AI and cybersecurity to shape the future of technology and protect what matters.",
    icon: <Shield className="w-8 h-8 text-slate-700" />,
  },
  {
    title: "Swanirbhar Culture",
    description: "Preserving and celebrating global traditions while fostering cultural innovation and unity.",
    icon: <Globe className="w-8 h-8 text-rose-600" />,
  },
  {
    title: "Swanirbhar Environment Energy",
    description: "Combatting climate change with cutting-edge clean energy solutions for a sustainable planet.",
    icon: <Zap className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "Swanirbhar Health",
    description: "Innovating healthcare to improve lives and revolutionize the way we approach wellness.",
    icon: <HeartPulse className="w-8 h-8 text-red-600" />,
  },
];

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-slate-800 selection:text-white overflow-x-hidden pt-20 max-w-[1440px] mx-auto border-x-2 border-black relative">
      <ScrollProgressBar />
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-24 px-4 md:px-8 bg-white border-b-2 border-black overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl text-slate-900 mb-8 leading-tight tracking-tight">
              Welcome to Swanirbhar:<br/>
              <span className="text-slate-400">Unleashing the Future of Innovation</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-12">
              Imagine a world where every idea has the power to spark change, where people are empowered to transform opportunities into lasting impact. 
              This is the vision behind Swanirbhar, an entrepreneurial revolution recognized by the Government of India. 
              Swanirbhar is not just a framework—it's a movement that equips individuals, teams, and organizations with the mindset to think big, act boldly, and create value for a better tomorrow.
            </p>
            <div className="bg-slate-50 border-2 border-black shadow-[8px_8px_0px_#000000] p-8 rounded-2xl inline-block text-left max-w-4xl">
              <p className="text-slate-700 italic leading-relaxed">
                "Our mission? To ignite your potential. Whether you're a student, a professional, an innovator, or a changemaker, Swanirbhar helps you develop the entrepreneurial skills needed to shape your future and drive progress. This isn’t just about business; it’s about creating cultural, social, and financial impact."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50 border-b-2 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-slate-900 mb-8 tracking-tight">Why Choose Swanirbhar?</h2>
            <p className="font-sans text-lg text-slate-600 leading-relaxed mb-6">
              Because in a world that’s constantly evolving, standing still is not an option. Swanirbhar offers a dynamic, adaptable framework that empowers you to break boundaries, challenge the status quo, and take charge of your own path.
            </p>
            <p className="font-sans text-lg text-slate-600 leading-relaxed mb-8">
              We’re here to help you harness your inner innovator, tackle real-world challenges, and craft the future you envision.
            </p>
            <div className="flex gap-4">
               <div className="h-1 w-20 bg-slate-900 rounded-full" />
               <div className="h-1 w-4 bg-slate-400 rounded-full" />
               <div className="h-1 w-4 bg-slate-300 rounded-full" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
             <div className="relative w-full aspect-square max-w-[500px] border-2 border-black shadow-[16px_16px_0px_#000000] rounded-3xl overflow-hidden bg-white">
                <img 
                  src="/swanirbhar_why_choose_us_png_1775023639278.png" 
                  alt="Innovation and Empowering Entrepreneurial Vision" 
                  className="w-full h-full object-cover p-4"
                />
             </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars of Innovation */}
      <section className="w-full py-24 px-4 md:px-8 bg-white border-b-2 border-black relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-slate-900 mb-16 text-center tracking-tight"
          >
            Dimensions of Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-black shadow-[8px_8px_0px_#000000] rounded-3xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="mb-6 p-4 bg-slate-50 border border-black/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                   {pillar.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-slate-800">{pillar.title}</h3>
                <p className="font-sans text-slate-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blueprint Section */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-900 text-white overflow-hidden relative">
        {/* Subtle decorative circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-slate-800 rounded-full blur-[100px] opacity-20" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-slate-800 rounded-full blur-[100px] opacity-20" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-2xl md:text-3xl leading-relaxed italic mb-12">
              "Swanirbhar is more than a framework—it’s a blueprint for your potential, a toolkit to help you embrace the future with confidence and creativity."
            </p>
            <p className="font-sans text-lg text-slate-400 mb-12">
              Whether you're looking to start something new, enhance your career, or simply explore new ways to make a difference, Swanirbhar is your gateway to a world of endless possibilities.
            </p>
            <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-slate-900 border-2 border-white font-bold py-4 px-10 rounded-full hover:bg-transparent hover:text-white transition-all duration-300 shadow-[8px_8px_0px_rgba(255,255,255,0.2)]"
            >
                Return to Ecosystem
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
