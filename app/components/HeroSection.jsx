'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { NeuralNoise } from '../../components/ui/neural-noise';

const communityLogos = [
  { name: "Goldman Sachs", logo: "/community members/Goldman_Sachs_logo.PNG" },
  { name: "IIIT Bhubaneswar", logo: "/community members/IIIT_Bhubaneswar_Logo.PNG" },
  { name: "IISer Pune", logo: "/community members/IISER_Pune_Logo.PNG" },
  { name: "IISc", logo: "/community members/IISc-logo.PNG" },
  { name: "Microsoft", logo: "/community members/Microsoft_njgxlo_3da5200b24.PNG" },
  { name: "SIU Deemed University", logo: "/community members/SIUDeemedUniversity151.PNG" },
  { name: "Amazon", logo: "/community members/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.PNG" },
  { name: "Knowledge Center", logo: "/community members/1695036214_s_knowledge_center_logo_img_28_1695036210100_1.JPG" },
  { name: "Manipal University", logo: "/community members/manipalinternationaluniversity_logo.PNG" },
  { name: "SVIT Vasad", logo: "/community members/sardar_vallabhbhai_patel_institute_of_tech_vasad_041_logo.PNG" },
  { name: "VIT", logo: "/community members/vellore-institute-of-technology-vit-logo-vector-2022.PNG" },
];

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const sectionRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !userType) {
      if (!userType) setErrorMessage('Please select your role.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, user_type: userType }]);

      if (error) {
        if (error.code === '23505') {
          setStatus('error');
          setErrorMessage('This email is already on the priority list.');
        } else {
          setStatus('error');
          setErrorMessage('An error occurred while saving. Please try again.');
        }
      } else {
        setStatus('success');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred.');
    }
  };

  const handleJoinClick = () => {
    setShowForm(true);
  };

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-black text-white">
      {/* 1. HERO CONTENT AREA (Cinematic Dark) */}
      <div className="relative w-full pt-48 pb-32 min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
        {/* Space/Neural Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <NeuralNoise className="absolute inset-0 opacity-40" />
          {/* Subtle glowing orb in center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 px-4 py-1.5 glass-pill text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400"
          >
            The Future of Incubation
          </motion.div>

          {/* S_2.0 Title - Template Inspired */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[15vw] md:text-[12vw] font-black tracking-tighter leading-none mb-8 select-none"
          >
            S_2.0
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 font-medium"
          >
            Bridging the gap between academic learning and industry readiness in the Indian ecosystem.
          </motion.p>

          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div 
                key="actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <button 
                  onClick={handleJoinClick}
                  className="px-12 py-5 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all active:scale-95 glow-shadow"
                >
                  Join the Waitlist
                </button>
                <button 
                  className="px-12 py-5 glass-pill text-[11px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all active:scale-95"
                >
                  Explore Research
                </button>
              </motion.div>
            ) : status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-pill px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-[#00E5FF] border-[#00E5FF]/20"
              >
                Priority Access Secured
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
              >
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-full px-8 text-sm focus:outline-none focus:border-white/20 transition-all"
                />
                <select 
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="w-full sm:w-40 h-14 bg-white/5 border border-white/10 rounded-full px-6 text-xs uppercase font-bold tracking-widest focus:outline-none focus:border-white/20 appearance-none"
                >
                  <option value="" disabled className="bg-black">Role</option>
                  <option value="student" className="bg-black">Student</option>
                  <option value="startup" className="bg-black">Startup</option>
                  <option value="industry" className="bg-black">Industry</option>
                </select>
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="h-14 aspect-square flex items-center justify-center bg-white text-black rounded-full hover:bg-zinc-200 transition-all"
                >
                  {status === 'loading' ? '...' : '→'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll Hint */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-600"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>

      {/* 2. COMMUNITY SECTION (Transformed) */}
      <div className="relative z-10 bg-black pt-20 pb-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-zinc-800 mb-8" />
            <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-[0.6em]">
              Backed by leading academic institutions
            </p>
          </div>

          <div className="w-full relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            
            <div className="flex animate-scroll-marquee gap-32 grayscale brightness-200 contrast-150">
              {communityLogos.map((member, idx) => (
                <div key={idx} className="flex-shrink-0 opacity-20 hover:opacity-100 transition-all duration-700">
                  <img src={member.logo} alt={member.name} className="h-8 w-auto object-contain" />
                </div>
              ))}
              {/* Duplicate */}
              {communityLogos.map((member, idx) => (
                <div key={`dup-${idx}`} className="flex-shrink-0 opacity-20 hover:opacity-100 transition-all duration-700">
                  <img src={member.logo} alt={member.name} className="h-8 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
