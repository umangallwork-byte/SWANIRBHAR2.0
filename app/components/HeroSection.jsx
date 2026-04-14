'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabaseClient';

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
  { name: "IISER Pune", logo: "/community members/IISER_Pune_Logo.PNG" },
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

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const yGrid = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax for background
  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
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

  // Staggered text animation
  const titleWords = ["Swanirbhar", "2.0"];
  const subtitleWords = ["The", "National", "Ecosystem"];

  return (
    <section ref={sectionRef} className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 min-h-[100svh] flex flex-col justify-center overflow-hidden bg-white">
      {/* Postopus soft background blobs & Animated Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#dbeafe] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#eff6ff] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#eef2ff] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>

        {/* Animated Background Cloud Images */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ x: "-40vw", opacity: 0 }}
            animate={{ x: "120vw", opacity: [0, 0.6, 0.6, 0] }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] w-[500px] md:w-[800px] pointer-events-none mix-blend-screen"
          >
            <img src="/cloud_1.png" alt="Cloud 1" className="w-full h-auto opacity-40 blur-[2px]" />
          </motion.div>

          <motion.div
            initial={{ x: "-10vw", opacity: 0 }}
            animate={{ x: "110vw", opacity: [0, 0.7, 0.7, 0] }}
            transition={{ duration: 160, repeat: Infinity, ease: "linear", delay: 15 }}
            className="absolute top-[35%] w-[400px] md:w-[600px] pointer-events-none mix-blend-screen"
          >
            <img src="/cloud_2.png" alt="Cloud 2" className="w-full h-auto opacity-30 blur-[4px]" />
          </motion.div>

          <motion.div
            initial={{ x: "-30vw", opacity: 0 }}
            animate={{ x: "105vw", opacity: [0, 0.4, 0.4, 0] }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear", delay: 45 }}
            className="absolute top-[65%] w-[350px] md:w-[500px] pointer-events-none mix-blend-screen"
          >
            <img src="/cloud_1.png" alt="Cloud 3" className="w-full h-auto opacity-20 blur-[1px] transform scale-x-[-1]" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
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

        {/* The Premium Form / Success State */}
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
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-serif text-slate-900 mb-4 tracking-tight"
                >Priority Access Secured.</motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-slate-500 font-sans leading-relaxed"
                >
                  Welcome to the architecture of India's innovation economy. You will be notified when Phase 1 Cohort allocation begins.
                </motion.p>
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
                    {status === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, x: -10 }}
                        animate={{ opacity: 1, height: 'auto', x: 0 }}
                        className="text-xs text-red-500 pl-4 mt-1 font-medium"
                      >
                        {errorMessage}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full bg-slate-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black rounded-none transition-all duration-300 outline-none flex items-center justify-center gap-3 disabled:opacity-80 disabled:cursor-not-allowed"
                  >

                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Securing Spot...
                      </>
                    ) : (
                      <>
                        Join Priority List
                        <motion.svg
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </motion.svg>
                      </>
                    )}
                  </motion.button>
                  <motion.p
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-xs md:text-sm text-slate-400 text-center font-medium mt-2"
                  >
                    Phase 1 allocation in progress. 14,203 spots reserved.
                  </motion.p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* --- COMMUNITY MEMBERS INFINITE MARQUEE --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full mt-32 relative"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Community Members</span>
            </h2>
          </div>

          <div className="w-full relative py-8 overflow-hidden">
             {/* Fade Edge Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
            
            <div className="flex w-full group overflow-hidden">
              <div 
                className="animate-scroll-marquee flex items-center gap-20 pr-20 will-change-transform"
                style={{ animationDuration: '40s' }}
              >
                {communityLogos.map((member, idx) => (
                  <div key={`community-1-${idx}`} className="flex-shrink-0 flex items-center justify-center w-[160px] h-24 hover:scale-110 transition-transform duration-300">
                    <img src={member.logo} alt={member.name} className="max-h-full max-w-full object-contain cursor-pointer" />
                  </div>
                ))}
              </div>
              <div 
                className="animate-scroll-marquee flex items-center gap-20 pr-20 will-change-transform"
                style={{ animationDuration: '40s' }}
                aria-hidden="true"
              >
                {communityLogos.map((member, idx) => (
                  <div key={`community-2-${idx}`} className="flex-shrink-0 flex items-center justify-center w-[160px] h-24 hover:scale-110 transition-transform duration-300">
                    <img src={member.logo} alt={member.name} className="max-h-full max-w-full object-contain cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
              Trusted by leading global institutions & corporations
            </p>
          </div>
        </motion.div>

        {/* Animated scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
