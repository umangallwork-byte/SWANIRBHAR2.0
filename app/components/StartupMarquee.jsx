'use client';

const startupLogos = [
  { name: "Education Logo", logo: "/Startups/Black and Bright Yellow Modern Education Logo.PNG" },
  { name: "Tuition Logo", logo: "/Startups/Black and White Modern Tuition Logo.PNG" },
  { name: "Yoga Classes", logo: "/Startups/Cayaha Yoga Classes Logo.PNG" },
  { name: "Design", logo: "/Startups/Design (1).PNG" },
  { name: "Design 2", logo: "/Startups/Design (2).PNG" },
  { name: "English Club", logo: "/Startups/English Club Logo.PNG" },
  { name: "Mandala Logo", logo: "/Startups/Line Art Mandala Aesthetic Logo.PNG" },
];

export default function StartupMarquee() {
  return (
    <section className="w-full py-40 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground tracking-tighter mb-4">
            Ecosystem <span className="text-muted">Ventures.</span>
          </h2>
        </div>

        <div className="w-full relative py-8 overflow-hidden rounded-[40px] nm-inset">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
          
          <div className="flex w-full overflow-hidden py-10">
            <div className="flex animate-scroll-marquee gap-24 opacity-40 grayscale">
              {startupLogos.map((startup, idx) => (
                <div key={`s1-${idx}`} className="flex-shrink-0 flex items-center justify-center w-[160px] h-20 p-4 rounded-xl nm-flat hover:nm-inset nm-transition hover:grayscale-0 hover:opacity-100">
                  <img src={startup.logo} alt={startup.name} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
              {startupLogos.map((startup, idx) => (
                <div key={`s2-${idx}`} className="flex-shrink-0 flex items-center justify-center w-[160px] h-20 p-4 rounded-xl nm-flat hover:nm-inset nm-transition hover:grayscale-0 hover:opacity-100">
                  <img src={startup.logo} alt={startup.name} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
