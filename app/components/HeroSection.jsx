'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function HeroSection() {
  const [cursorBlink, setCursorBlink] = useState(true);
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('student');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

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
        if (error.code === '23505') { // Postgres unique violation
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
    <section className="w-full py-20 md:py-32 min-h-[85vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center w-full">
        {/* Antigravity Inspired Header */}
        <div className="mb-12 flex flex-col items-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-slate-800 tracking-tight flex items-center justify-center flex-wrap gap-2">
            Swanirbhar 2.0{" "}
            <span className="text-slate-400 font-light mx-2 hidden md:inline-block">/</span>{" "}
            <span className="flex items-center text-center">
              The National Ecosystem
              <span
                className={`inline-block w-[4px] md:w-[6px] h-[0.9em] bg-slate-800 ml-1 md:ml-2 transition-opacity duration-100 ${
                  cursorBlink ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl font-sans">
            Bridging the gap between academic learning and industry readiness.
          </p>
        </div>

        {/* The Glass-Neumorphic Form / Success State */}
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
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
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full bg-[#F7F7F2]/60 backdrop-blur-xl border border-white/80 shadow-[8px_8px_16px_#e3e3de,-8px_-8px_16px_#ffffff] rounded-3xl p-8 md:p-10 flex flex-col gap-8 items-center relative z-10"
              >
                <div className="w-full flex flex-col gap-6">
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
                        Join Waitlist
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-xs md:text-sm text-slate-500 text-center font-medium opacity-80 mt-2">
                    Currently allocating Phase 1 Cohort. 14,203 applications pending review.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
