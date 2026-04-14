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
  // Use a doubled array (mathematically perfect with translateX(-50%))
  const logosRow = [...startupLogos, ...startupLogos];

  return (
    <section className="w-full py-24 bg-white overflow-hidden relative">
      {/* Background blobs for depth */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Startups Section */}
        <div className="mb-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">High-Impact Startups</span>
            </h2>
            <p className="mt-4 text-slate-500 font-sans text-sm md:text-base max-w-2xl mx-auto">
              Nurtured within the Swanirbhar ecosystem, these ventures are redefining the future of Indian industry.
            </p>
          </div>

          <div className="w-full relative py-8 overflow-hidden">
            {/* Fade Edge Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
            
            <div className="flex w-full group overflow-hidden">
              <div 
                className="animate-scroll-marquee flex items-center gap-20 pr-20 will-change-transform"
              >
                {startupLogos.map((startup, idx) => (
                  <div 
                    key={`startup-1-${idx}`} 
                    className="flex-shrink-0 flex items-center justify-center w-[160px] h-24 hover:scale-110 transition-transform duration-300"
                  >
                    <img 
                      src={startup.logo} 
                      alt={startup.name} 
                      className="max-h-full max-w-full object-contain transition-all duration-300 cursor-pointer" 
                    />
                  </div>
                ))}
              </div>
              <div 
                className="animate-scroll-marquee flex items-center gap-20 pr-20 will-change-transform"
                aria-hidden="true"
              >
                {startupLogos.map((startup, idx) => (
                  <div 
                    key={`startup-2-${idx}`} 
                    className="flex-shrink-0 flex items-center justify-center w-[160px] h-24 hover:scale-110 transition-transform duration-300"
                  >
                    <img 
                      src={startup.logo} 
                      alt={startup.name} 
                      className="max-h-full max-w-full object-contain transition-all duration-300 cursor-pointer" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">
            Scaling Innovation across 20+ sectors
          </p>
        </div>
      </div>
    </section>
  );
}
