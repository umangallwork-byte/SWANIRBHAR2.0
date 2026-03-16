'use client';

import { useState, useMemo, useRef } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import MinimalIndiaMap from '../components/MinimalIndiaMap';
import { startups } from '../../src/data/startups';

export default function PortfolioPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Increased from 5 to 6 for 3-column grid balance
  const listTopRef = useRef(null);

  // Pagination calculations
  const totalPages = Math.ceil(startups.length / itemsPerPage);
  const currentStartups = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return startups.slice(start, start + itemsPerPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Smooth scroll to the top of the list area
    if (listTopRef.current) {
        const offset = 80;
        const top = listTopRef.current.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F7F2] font-sans selection:bg-slate-800 selection:text-white overflow-x-hidden pb-32">
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 md:pt-40">
        
        {/* ===== Header ===== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-8 mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-2 block">
                Network Directory
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-800 tracking-tight">
                Portfolio Ecosystem
            </h1>
          </div>
          <div className="mt-4 md:mt-0 px-6 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <p className="font-sans text-sm text-slate-500 font-medium">
                Total Presence: <span className="text-slate-900 font-bold">{startups.length}</span> Startups
            </p>
          </div>
        </div>

        {/* ===== Top Section: Full Width Map ===== */}
        <div className="w-full bg-[#F7F7F2]/60 backdrop-blur-xl border border-white shadow-[8px_8px_16px_#e3e3de,-8px_-8px_16px_#ffffff] rounded-[2.5rem] p-6 md:p-10 mb-12">
            <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                        National Footprint
                    </p>
                    <h2 className="font-serif text-2xl text-slate-800">Geographic Impact</h2>
                </div>
                <div className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Ecosystem
                </div>
            </div>
            
            <MinimalIndiaMap />
            
            <p className="mt-8 text-sm text-slate-400 text-center max-w-2xl mx-auto italic leading-relaxed">
                "Our ecosystem bridges the physical distances across India, providing a unified architectural fix for 
                student-led innovation and scalable startup growth."
            </p>
        </div>

        {/* ===== Divider / Anchor for Scroll ===== */}
        <div ref={listTopRef} className="pt-8 mb-8 border-t border-slate-200" />

        {/* ===== Bottom Section: Startup Grid (3 cols) ===== */}
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <p className="font-sans text-xs text-slate-400 uppercase tracking-widest font-bold">
              Directory Listing &middot; Page {currentPage}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentStartups.map((startup) => (
              <div
                key={startup.id}
                className="group bg-white border border-slate-100 shadow-sm rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 hover:border-slate-200 transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-4">
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-slate-800 transition-colors">
                      {startup.name}
                  </h3>
                </div>
                
                <div className="mt-auto">
                    <span className="bg-slate-50 text-slate-500 text-[10px] px-2.5 py-1 rounded-lg border border-slate-100 inline-block font-bold uppercase tracking-wider mb-4">
                        {startup.industry}
                    </span>

                    <div className="flex items-center gap-2 text-sm text-slate-400 pt-4 border-t border-slate-50">
                        <MapPin className="w-4 h-4 text-slate-300 shrink-0" />
                        <span className="truncate">{startup.city}, {startup.state}</span>
                    </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Pagination Controls (Centered at Bottom) ===== */}
          <div className="flex flex-col items-center gap-8 mt-16 pt-12 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-6 py-3 bg-[#1e293b] text-white rounded-xl disabled:opacity-20 disabled:cursor-not-allowed hover:bg-slate-700 transition-all shadow-md active:scale-95 font-medium text-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <div className="flex items-center gap-2 hidden sm:flex">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`min-w-[42px] h-10 rounded-lg text-sm font-bold transition-all duration-200 ${
                      currentPage === page
                        ? 'bg-[#1e293b] text-white shadow-lg'
                        : 'bg-white text-slate-400 hover:text-slate-600 hover:bg-slate-50 border border-slate-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-6 py-3 bg-[#1e293b] text-white rounded-xl disabled:opacity-20 disabled:cursor-not-allowed hover:bg-slate-700 transition-all shadow-md active:scale-95 font-medium text-sm"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
              Portfolio Page {currentPage} &middot; Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, startups.length)} of {startups.length}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
