'use client';

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabaseClient';

function AnimatedNumber({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString('en-IN'));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
}

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('student');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const impacts = [
    { value: 400000, label: "Students Trained" },
    { value: 100000, label: "Internships Enabled" },
    { value: 1000, label: "Startups Supported" },
    { value: 300000, label: "Jobs Created" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

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

  return (
    <section className="w-full pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex flex-col justify-center relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center w-full relative z-10">
        
        {/* New Headline & Subheadline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col items-center"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] text-slate-800 tracking-tight flex flex-col items-center justify-center max-w-5xl mx-auto">
            <span>India’s Talent Is Limitless.</span>
            <span className="text-slate-400 mt-2">Opportunity Should Be Too.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl font-sans leading-relaxed">
            Swanirbhar is building a nationwide ecosystem that connects students, startups, industry,
            and institutions to create skills, innovation, and employment at scale.
          </p>
        </motion.div>

        {/* Animated Impact Numbers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full max-w-6xl mb-16"
        >
          {impacts.map((impact, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-6 bg-[#F7F7F2]/60 backdrop-blur-xl rounded-3xl shadow-[8px_8px_16px_#e3e3de,-8px_-8px_16px_#ffffff] border border-white/60 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 font-bold mb-2 flex items-center tracking-tight">
                <AnimatedNumber value={impact.value} />
                <span className="text-slate-400 ml-1">+</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider">{impact.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Dynamic Action Area (Buttons <-> Form <-> Success) */}
        <div className="w-full max-w-xl min-h-[350px] flex flex-col items-center justify-start">
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div
                key="action-buttons"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 w-full"
              >
                <button 
                  onClick={() => setShowForm(true)}
                  className="w-full sm:w-auto bg-slate-800 text-white rounded-2xl px-10 py-5 font-medium tracking-wide text-lg hover:bg-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-[0.98] outline-none flex items-center justify-center gap-2"
                >
                  Join the Movement
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('problem');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-transparent border-2 border-slate-300 text-slate-700 shadow-[inset_4px_4px_8px_#ffffff,inset_-4px_-4px_8px_#e3e3de] rounded-2xl px-10 py-5 font-medium tracking-wide text-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 active:scale-[0.98] outline-none flex items-center justify-center"
                >
                  Explore the Impact
                </button>
              </motion.div>
            ) : status === 'success' ? (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full bg-[#F7F7F2]/60 backdrop-blur-xl border border-white/80 shadow-[8px_8px_16px_#e3e3de,-8px_-8px_16px_#ffffff] rounded-3xl p-10 md:p-14 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 shadow-[inset_4px_4px_8px_rgba(34,197,94,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-slate-800 mb-4 tracking-tight">Priority Access Secured.</h3>
                <p className="text-slate-600 font-sans leading-relaxed">
                  Welcome to the architecture of India's innovation economy. You will be notified when Phase 1 Cohort allocation begins.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="waitlist-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.8 }}
                className="w-full bg-[#F7F7F2]/60 backdrop-blur-xl border border-white/80 shadow-[8px_8px_16px_#e3e3de,-8px_-8px_16px_#ffffff] rounded-3xl p-8 md:p-10 flex flex-col gap-8 items-center relative z-10"
              >
                <button 
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="w-full flex flex-col gap-6 mt-4">
                  <div className="flex flex-col gap-2 text-left">
                    <label className="text-sm font-medium text-slate-500 uppercase tracking-wider pl-4">I am a...</label>
                    <div className="relative">
                      <select
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        disabled={status === 'loading'}
                        className="w-full appearance-none bg-transparent shadow-[inset_4px_4px_8px_#e3e3de,inset_-4px_-4px_8px_#ffffff] rounded-2xl px-6 py-4 text-slate-700 outline-none focus:ring-2 focus:ring-slate-400/50 transition-all font-sans cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
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
                    <label className="text-sm font-medium text-slate-500 uppercase tracking-wider pl-4">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'loading'}
                      required
                      placeholder="hello@example.com"
                      className={`w-full bg-transparent shadow-[inset_4px_4px_8px_#e3e3de,inset_-4px_-4px_8px_#ffffff] rounded-2xl px-6 py-4 text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-slate-400/50 transition-all font-sans disabled:opacity-50 disabled:cursor-not-allowed ${status === 'error' ? 'ring-2 ring-red-400/50 bg-red-50/10' : ''}`}
                    />
                    {status === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-red-500 pl-4 mt-1 font-medium"
                      >
                        {errorMessage}
                      </motion.p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-4 w-full bg-slate-800 text-white rounded-2xl px-8 py-4 font-medium tracking-wide hover:bg-slate-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] outline-none flex items-center justify-center gap-3 disabled:opacity-80 disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:active:scale-100 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Encrypting & Securing...
                      </>
                    ) : (
                      <>
                        Priority Access
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
