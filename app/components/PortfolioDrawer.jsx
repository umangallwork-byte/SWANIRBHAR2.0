'use client';

import { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import { startups, indianStates } from '../../src/data/startups';
import MinimalIndiaMap from './MinimalIndiaMap';

export default function PortfolioDrawer({ isOpen, onClose }) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Code → full name lookup
  const stateNameMap = useMemo(() => {
    const m = {};
    indianStates.forEach((s) => { m[s.code] = s.name; });
    return m;
  }, []);

  // Unique active state codes derived from the startups data
  const activeStates = useMemo(
    () => [...new Set(startups.map((s) => s.stateCode))],
    []
  );

  // Group startups by stateCode
  const grouped = useMemo(() => {
    const g = {};
    startups.forEach((s) => {
      if (!g[s.stateCode]) g[s.stateCode] = [];
      g[s.stateCode].push(s);
    });
    // Sort groups alphabetically by state name
    return Object.entries(g).sort(
      (a, b) => (stateNameMap[a[0]] || a[0]).localeCompare(stateNameMap[b[0]] || b[0])
    );
  }, [stateNameMap]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ---- Overlay ---- */}
          <motion.div
            key="drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm cursor-pointer"
            aria-label="Close drawer"
          />

          {/* ---- Drawer Panel ---- */}
          <motion.aside
            key="drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-[#FFFFFF] shadow-[-8px_0_30px_rgba(0,0,0,0.08)] border-l border-slate-200/60 flex flex-col overflow-hidden"
          >
            {/* ===== Header ===== */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200/60 bg-[#FFFFFF]/80 backdrop-blur-md shrink-0">
              <h2 className="font-serif text-2xl text-slate-800 tracking-tight">
                Impact Map
              </h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-[#FFFFFF] shadow-[4px_4px_8px_#e3e3de,-4px_-4px_8px_#ffffff] flex items-center justify-center text-slate-500 hover:text-slate-800 hover:shadow-[6px_6px_0px_#000000] active:scale-95 transition-all duration-200"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ===== Scrollable Content ===== */}
            <div className="flex-1 overflow-y-auto">

              {/* -- Top Section: Map -- */}
              <div className="px-6 pt-6 pb-4">
                <p className="font-sans text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-3 text-center">
                  Startup Presence Across India
                </p>
                <div className="bg-[#FFFFFF]/60 backdrop-blur-xl border-2 border-black shadow-[6px_6px_0px_#000000] rounded-2xl p-3">
                  <MinimalIndiaMap activeStates={activeStates} />
                </div>
              </div>

              {/* -- Divider -- */}
              <div className="px-6">
                <div className="w-full h-px bg-slate-200/60" />
              </div>

              {/* -- Bottom Section: Startup List (grouped by state) -- */}
              <div className="px-6 pt-5 pb-8">
                <p className="font-sans text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-5">
                  Portfolio &middot; {startups.length} Startups &middot; {activeStates.length} States
                </p>

                <div className="flex flex-col gap-6">
                  {grouped.map(([code, stateStartups]) => (
                    <div key={code}>
                      {/* State Heading */}
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span className="font-sans text-xs font-bold text-slate-600 uppercase tracking-wider">
                          {stateNameMap[code] || code}
                        </span>
                        <span className="font-sans text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                          {code}
                        </span>
                      </div>

                      {/* Startups in this state */}
                      <div className="flex flex-col gap-2 pl-5 border-l-2 border-slate-200/60">
                        {stateStartups.map((startup) => (
                          <div
                            key={startup.id}
                            className="flex items-center gap-3 bg-[#FFFFFF]/60 backdrop-blur-xl border-2 border-black shadow-[3px_3px_6px_#e3e3de,-3px_-3px_6px_#ffffff] rounded-xl px-4 py-3 hover:-translate-y-0.5 hover:shadow-[5px_5px_10px_#e3e3de,-5px_-5px_10px_#ffffff] transition-all duration-300"
                          >
                            <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center font-sans text-[10px] font-bold shrink-0">
                              {String(startup.id).padStart(2, '0')}
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="font-serif text-sm font-bold text-slate-800 truncate">
                                {startup.name}
                              </span>
                              <span className="font-sans text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                                {startup.industry}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== Footer ===== */}
            <div className="px-6 py-4 border-t border-slate-200/60 bg-[#FFFFFF]/80 backdrop-blur-md shrink-0">
              <button
                onClick={onClose}
                className="w-full bg-slate-800 text-white rounded-2xl px-6 py-3.5 font-medium text-sm tracking-wide hover:bg-slate-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]"
              >
                Close Panel
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
