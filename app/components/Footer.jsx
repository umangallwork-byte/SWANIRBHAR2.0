'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-background py-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Block */}
        <div className="p-12 md:p-20 rounded-[48px] nm-flat flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-black tracking-tighter text-foreground">SWANIRBHAR</h3>
            <p className="text-muted text-sm font-medium max-w-xs leading-relaxed">
              Engineering the standard for India's self-reliant hardware innovation ecosystem.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            {['About', 'Privacy', 'Legal', 'Ethics'].map((link) => (
              <button 
                key={link} 
                className="w-12 h-12 rounded-2xl nm-flat nm-transition nm-flat-hover flex items-center justify-center text-[10px] font-bold text-muted hover:text-accent active:nm-inset"
              >
                {link[0]}
              </button>
            ))}
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-20 flex flex-col items-center gap-6">
            <div className="px-6 py-2 rounded-full nm-inset text-[10px] font-bold uppercase tracking-[0.5em] text-muted/50">
                System Status: Active
            </div>
            <p className="text-muted text-[10px] font-extrabold uppercase tracking-[0.4em] opacity-40">
                © 2026 SVANIRBHAR ECOSYSTEM. BUILT FOR SCALE.
            </p>
        </div>

      </div>
    </footer>
  );
}
