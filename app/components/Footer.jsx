'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="w-full bg-white text-slate-900 pt-24 overflow-hidden relative z-50 border-t border-slate-100">
      
      {/* Main Grid - Two Column Layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative z-10">
        
        {/* Left CTA Column - CLEAN */}
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Build the future of India's startup ecosystem
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
             <a href="/contact" className="px-6 py-3 border border-slate-200 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors text-center text-slate-900">
               CONTACT US
             </a>
             <a href="#hero" className="px-6 py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors text-center">
               JOIN WAITLIST
             </a>
          </div>
        </div>
        
        {/* Right: Intro & Partners */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-slate-900 font-bold text-sm md:text-base leading-snug">
                Swanirbhar is India's premier ecosystem for high-impact innovation.
              </p>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                We bridge the critical gap between academic foundations and professional excellence. By integrating world-class mentorship, advanced laboratory access, and institutional support, we empower the next generation of founders to build ventures that define the future of the Indian economy.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="flex items-center gap-2 text-slate-900 font-bold text-[10px] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-slate-900" /> BACKED BY POWERFUL PARTNERS
              </h4>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-80 mix-blend-multiply pl-0 md:border-l md:border-slate-200 md:pl-6">
                <img src="/supporting partners/aim.PNG" alt="AIM" className="h-6 w-auto object-contain" />
                <img src="/supporting partners/DPIIT.PNG" alt="DPIIT" className="h-4 w-auto object-contain" />
                <img src="/supporting partners/BankOfBarodaLogo.PNG" alt="BOB" className="h-5 w-auto object-contain" />
                <img src="/supporting partners/Skill_India.PNG" alt="Skill India" className="h-8 w-auto object-contain" />
                <img src="/supporting partners/Open_Network_for_Digital_Commerce.PNG" alt="ONDC" className="h-6 w-auto object-contain" />
                <img src="/supporting partners/Certified_B_Corporation_B_Corp_Logo_2022_Black_RGB.PNG" alt="B Corp" className="h-8 w-auto object-contain" />
              </div>
            </div>

            {/* Social Icons - Fixed LinkedIn Branding */}
            <div className="flex items-center">
               <a 
                 href="https://linkedin.com" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="group transition-transform hover:scale-110 duration-200"
               >
                 <svg 
                   width="28" 
                   height="28" 
                   viewBox="0 0 24 24" 
                   className="text-slate-900 group-hover:text-[#0077b5] transition-colors"
                   fill="currentColor"
                 >
                   <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.59c0-1.33-.03-3.05-1.85-3.05-1.85 0-2.14 1.45-2.14 2.95v5.69h-3.56V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
                 </svg>
               </a>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Bold Black "Swanirbhar" Text */}
      <div className="w-full relative mt-16 md:mt-8 z-0 select-none overflow-hidden flex items-end justify-center py-4 md:py-8">
        <div className="relative w-full flex items-center justify-center">
          {/* Glass Background Layer */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-[2rem] mx-4 md:mx-12" />
          {/* The Text */}
          <h2 
            className="relative z-10 text-center text-[15vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-black tracking-tighter leading-none py-4 md:py-8 text-slate-900"
          >
            Swanirbhar <span className="text-slate-400 font-light">2.0</span>
          </h2>
        </div>
      </div>

      {/* Bottom Bar — Company Links + Legal Links */}
      <div className="bg-white relative z-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 border-t border-slate-100">

          {/* Company Navigation Row */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 py-5 border-b border-slate-100">
            <a href="/about" className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-[12px] uppercase tracking-widest">About Us</a>
            <a href="/mentors" className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-[12px] uppercase tracking-widest">Mentors Around</a>
            <a href="/incubation" className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-[12px] uppercase tracking-widest">Incubation Map</a>
            <a href="/contact" className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-[12px] uppercase tracking-widest">Contact Us</a>
          </div>

          {/* Legal Links + Copyright Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6">
            <p className="text-slate-400 font-medium text-[11px] order-2 md:order-1 tracking-wide">
              &copy; 2026 SWANIRBHAR. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-slate-500 font-medium text-[11px] order-1 md:order-2">
              <a href="/guidelines" className="hover:text-slate-900 transition-colors">User Guidelines</a>
              <a href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Notice</a>
              <a href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</a>
              <a href="/affiliate" className="hover:text-slate-900 transition-colors">Data Processing Addendum</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
