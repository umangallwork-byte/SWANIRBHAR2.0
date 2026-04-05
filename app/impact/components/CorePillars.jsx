export default function CorePillars() {
  const gains = [
    { title: "Students", description: "gain real-world skills" },
    { title: "Startups", description: "gain talent and mentorship" },
    { title: "Industry", description: "gains innovation" },
    { title: "Institutions", description: "gain impact" }
  ];

  const partners = ["Universities", "Industry", "Startups", "Investors", "CSR Partners"];

  return (
    <section className="w-full py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-800 text-center mb-6 tracking-tight">
          Connecting Education to the Real Economy
        </h2>
        <p className="text-lg md:text-xl text-slate-500 font-sans mb-16 text-center max-w-2xl">
          Swanirbhar builds a collaborative ecosystem where every stakeholder thrives.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full mb-20">
          {gains.map((gain, idx) => (
            <div 
              key={idx} 
              className="bg-[#FFFFFF]/60 backdrop-blur-xl border-2 border-black shadow-[8px_8px_0px_#000000] rounded-3xl p-8 flex flex-col justify-center items-center text-center transition-transform duration-300 hover:-translate-y-2 group"
            >
              <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2">
                {gain.title}
              </h3>
              <p className="font-sans text-slate-600 font-medium">
                {gain.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full bg-slate-800 text-white rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-700/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <h3 className="font-serif text-3xl md:text-4xl mb-12 relative z-10 font-light">
            Our platform connects:
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 relative z-10">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border-2 border-black px-6 py-3 rounded-full text-lg md:text-xl font-medium tracking-wide">
                {partner}
              </div>
            ))}
          </div>
          <p className="mt-12 font-sans text-xl md:text-2xl text-slate-300 font-bold tracking-wider uppercase relative z-10">
            into one integrated pipeline.
          </p>
        </div>
      </div>
    </section>
  );
}
