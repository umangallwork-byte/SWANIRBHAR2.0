export default function CorePillars() {
  const pillars = [
    {
      title: "University Incubation",
      description: "Transform academic institutions into hubs of innovation with structured incubation programs.",
    },
    {
      title: "Industry Participation",
      description: "Direct involvement from thought leaders and corporations to shape the curriculum and outcomes.",
    },
    {
      title: "Capital & Investment",
      description: "Unlock vital funding pathways for startups, fueling sustainable growth and rapid scaling.",
    },
    {
      title: "Early Learning",
      description: "Cultivate entrepreneurial mindsets from a young age through comprehensive school programs.",
    }
  ];

  return (
    <section className="w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
        <h2 className="font-serif text-3xl md:text-5xl text-slate-800 text-center mb-16">
          The Core Architecture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="bg-[#F7F7F2]/60 backdrop-blur-xl border border-white/80 shadow-[8px_8px_16px_#e3e3de,-8px_-8px_16px_#ffffff] rounded-3xl h-full flex flex-col p-8 transition-transform duration-300 hover:-translate-y-2 group"
            >
              <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">
                {pillar.title}
              </h3>
              <p className="font-sans text-slate-600 mb-8 leading-relaxed">
                {pillar.description}
              </p>
              <a href="#" className="mt-auto font-sans text-slate-800 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
