'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5 py-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-12 text-center">
        
        {/* Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500">
            National Network Active
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {['About', 'Privacy', 'Architecture', 'Cookies', 'Terms'].map((link) => (
            <a 
              key={link} 
              href={`/${link.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Brand/Copyright */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-white font-black text-xl tracking-tighter">SWANIRBHAR</div>
          <p className="text-zinc-600 text-[9px] uppercase tracking-[0.4em]">
            © 2026 SVANIRBHAR ECOSYSTEM. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
