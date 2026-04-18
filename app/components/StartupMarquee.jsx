'use client';

const startupLogos = [
  { name: "Education Logo", logo: "/Startups/Black and Bright Yellow Modern Education Logo.PNG" },
  { name: "Tuition Logo", logo: "/Startups/Black and White Modern Tuition Logo.PNG" },
  { name: "Yoga Classes", logo: "/Startups/Cayaha Yoga Classes Logo.PNG" },
  { name: "Design", logo: "/Startups/Design (1).PNG" },
  { name: "Design 2", logo: "/Startups/Design (2).PNG" },
  { name: "English Club", logo: "/Startups/English Club Logo.PNG" },
  { name: "Mandala Logo", logo: "/Startups/Line Art Mandala Aesthetic Logo.PNG" },
  { name: "Orange Illustration", logo: "/Startups/Orange Illustration Company Logo.8369bfb2 (1).png" },
  { name: "Publish Media", logo: "/Startups/Purple Illustrative Publish Media Company Logo.22281ca1.png" },
  { name: "Dance Academy", logo: "/Startups/White Green and Orange Traditional Dance Academy Logo.630ea3b7.png" },
  { name: "Carousel", logo: "/Startups/carousel13.PNG" },
  { name: "Deepstate", logo: "/Startups/deepstate.PNG" },
  { name: "Medicines", logo: "/Startups/medicines.PNG" },
  { name: "WealthAdvise", logo: "/Startups/weathAdvise.PNG" },
];

export default function StartupMarquee() {
  return (
    <section className="w-full py-40 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Catalyzing <span className="text-zinc-600">High-Impact Ventures.</span>
          </h2>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.5em]">
            Scaling innovation across 20+ sectors
          </p>
        </div>

        <div className="w-full relative py-8 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
          
          <div className="flex w-full overflow-hidden">
            <div className="flex animate-scroll-marquee gap-24 brightness-200 contrast-125 grayscale">
              {startupLogos.map((startup, idx) => (
                <div key={`s1-${idx}`} className="flex-shrink-0 flex items-center justify-center w-[140px] h-20 opacity-30 hover:opacity-100 transition-all duration-500">
                  <img src={startup.logo} alt={startup.name} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
              {/* Double */}
              {startupLogos.map((startup, idx) => (
                <div key={`s2-${idx}`} className="flex-shrink-0 flex items-center justify-center w-[140px] h-20 opacity-30 hover:opacity-100 transition-all duration-500">
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
