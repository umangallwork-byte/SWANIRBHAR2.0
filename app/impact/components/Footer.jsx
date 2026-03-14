'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-12 bg-[#F7F7F2] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-sans text-slate-500 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Swanirbhar 2.0. All rights reserved.
        </p>

        <button 
          onClick={scrollToTop}
          className="bg-[#F7F7F2]/60 backdrop-blur-xl border border-white/80 shadow-[4px_4px_8px_#e3e3de,-4px_-4px_8px_#ffffff] rounded-full px-6 py-3 font-sans text-sm font-semibold text-slate-600 hover:text-slate-800 hover:-translate-y-0.5 hover:shadow-[6px_6px_12px_#e3e3de,-6px_-6px_12px_#ffffff] transition-all duration-300 active:scale-95 flex items-center gap-2"
        >
          Back to top
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
