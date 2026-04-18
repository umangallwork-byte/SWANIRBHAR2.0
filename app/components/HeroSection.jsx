'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { NeuralNoise } from '../../components/ui/neural-noise';

// Floating particle component
function FloatingParticle({ delay }) {
  const [mounted, setMounted] = useState(false);
  const [props, setProps] = useState(null);

  useEffect(() => {
    setProps({
      duration: 8 + Math.random() * 8,
      x: -50 + Math.random() * 100,
      y: -30 + Math.random() * 60,
      size: 4 + Math.random() * 8,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    });
    setMounted(true);
  }, []);

  if (!mounted || !props) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0.5],
        x: [0, props.x, props.x * 1.5],
        y: [0, props.y, props.y * 2],
      }}
      transition={{
        duration: props.duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute rounded-full"
      style={{
        width: props.size,
        height: props.size,
        background: 'radial-gradient(circle, rgba(15,23,42,0.08) 0%, transparent 70%)',
        left: props.left,
        top: props.top,
      }}
    />
  );
}

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
  const [cursorBlink, setCursorBlink] = useState(true);
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

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

  const titleWords = ["Swanirbhar", "2.0"];
  const subtitleWords = ["The", "National", "Ecosystem"];

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white">
      {/* 1. HERO CONTENT AREA - Restricted Animation */}
      <div className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Neural Noise Animation Background - Strictly contained in this top block */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <NeuralNoise className="absolute inset-0" />
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#dbeafe] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#eff6ff] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#eef2ff] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center w-full">
          <motion.h1
            className="font-serif text-6xl md:text-8xl lg:text-9xl leading-tight text-slate-900 tracking-tight font-black"
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block mr-4 md:mr-8 last:mr-0 ${word === '2.0' ? 'italic text-slate-400' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 flex flex-wrap justify-center gap-x-4 md:gap-x-6 text-xl md:text-2xl text-slate-500 font-sans font-bold uppercase tracking-[0.3em]"
          >
            {subtitleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 mb-12 text-base md:text-lg text-slate-400 max-w-xl font-sans"
          >
            Bridging the gap between academic learning and industry readiness.
          </motion.p>

          <div className="w-full max-w-xl">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.8, y: 30, rotateX: -15 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full bg-white/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#f1f5f9] rounded-[2rem] p-10 md:p-14 flex flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6"
                  >
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <motion.h3 className="text-2xl font-serif text-slate-900 mb-4 tracking-tight">Priority Access Secured.</motion.h3>
                  <p className="text-slate-500 font-sans leading-relaxed">
                    Welcome to the architecture of India's innovation economy. You will be notified when Phase 1 Cohort allocation begins.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="waitlist-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#f1f5f9] rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 items-center relative z-10"
                >
                  <div className="w-full flex flex-col gap-6">
                    <div className="flex flex-col gap-2 text-left">
                      <label className="text-sm font-medium text-slate-400 uppercase tracking-wider pl-4">I am a...</label>
                      <div className="relative">
                        <select
                          value={userType}
                          onChange={(e) => setUserType(e.target.value)}
                          disabled={status === 'loading'}
                          required
                          className="w-full appearance-none bg-slate-50/50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-700 outline-none focus:ring-2 focus:ring-slate-400/20 focus:bg-white transition-all font-sans cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <option value="" disabled hidden>Select Role...</option>
                          <option value="student">Student / Learner</option>
                          <option value="university">University / Institute</option>
                          <option value="industry">Industry Partner</option>
                          <option value="startup">Startup Founder</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 text-left">
                      <label className="text-sm font-medium text-slate-400 uppercase tracking-wider pl-4">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                        required
                        placeholder="hello@example.com"
                        className={`w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 outline-none focus:ring-2 focus:ring-slate-400/20 focus:bg-white transition-all font-sans disabled:opacity-50 disabled:cursor-not-allowed ${status === 'error' ? 'ring-2 ring-red-400/20 bg-red-50/10 border-red-200' : ''}`}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 w-full bg-slate-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black rounded-none transition-all duration-300 outline-none flex items-center justify-center gap-3 disabled:opacity-80 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? 'Securing Spot...' : 'Join Priority List'}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 2. COMMUNITY AREA - Pure white background, absolutely NO animation bleed */}
      <div className="relative z-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Community Members</span>
            </h2>
          </div>

          <div className="w-full relative py-8 overflow-hidden mb-8">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-full group overflow-hidden">
              <div className="animate-scroll-marquee flex items-center gap-20 pr-20">
                {communityLogos.map((member, idx) => (
                  <div key={idx} className="flex-shrink-0 flex items-center justify-center w-[160px] h-24">
                    <img src={member.logo} alt={member.name} className="max-h-full max-w-full object-contain transition-all duration-500 hover:scale-110" />
                  </div>
                ))}
                {/* Duplicate for infinite effect */}
                {communityLogos.map((member, idx) => (
                  <div key={`dup-${idx}`} className="flex-shrink-0 flex items-center justify-center w-[160px] h-24">
                    <img src={member.logo} alt={member.name} className="max-h-full max-w-full object-contain transition-all duration-500 hover:scale-110" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">
            Trusted by leading global institutions & corporations
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Scroll to explore</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
