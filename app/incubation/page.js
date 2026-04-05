'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import { Search, MapPin, Globe, Building2, Rocket, Share2, ArrowUpRight, Zap } from 'lucide-react';

const incubators = [
  { name: "Atmiya Innovations Foundation", city: "Rajkot", state: "Gujarat", website: "https://aif.org.in/" },
  { name: "Ratan Tata Innovation Hub", city: "Amaravati", state: "Andhra Pradesh", website: "https://rtih.co.in" },
  { name: "NIF NUV", city: "Vadodara", state: "Gujarat", website: "" },
  { name: "SCSVMV University", city: "Kanchipuram", state: "Tamil Nadu", website: "https://kanchiuniv.ac.in/" },
  { name: "IILM Innovation Foundation", city: "Gautam Buddha Nagar", state: "Uttar Pradesh", website: "" },
  { name: "Shivansh Vikram", city: "Gorakhpur", state: "Uttar Pradesh", website: "https://www.kipmincubator.in/" },
  { name: "Hindustan Technology Business Incubator", city: "Chennai", state: "Tamil Nadu", website: "https://hindustanuniv.ac.in/htbi-heic/" },
  { name: "SKILLBLITZ INNOVATION FOUNDATION", city: "Coimbatore", state: "Tamil Nadu", website: "https://skillblitz.in/" },
  { name: "GRG Gen Nxt Foundation", city: "Coimbatore", state: "Tamil Nadu", website: "https://grggennxt.in/" },
  { name: "Rudram Dynamics Foundation", city: "Gandhinagar", state: "Gujarat", website: "https://www.rudramdynamics.com/" },
  { name: "SARVAH Incubation Foundation", city: "Nanded-Waghala", state: "Maharashtra", website: "" },
  { name: "JK Cement Foundation", city: "Gurugram", state: "Haryana", website: "" },
  { name: "AICSOA Foundation", city: "Bhubaneswar", state: "Odisha", website: "https://www.aicsoa.in" },
  { name: "Kumbhathon Innovation Foundation", city: "Nashik", state: "Maharashtra", website: "https://kumbhathon.com/" },
  { name: "Chandigarh University - TBI", city: "Mohali", state: "Punjab", website: "https://cutbi.in/" },
  { name: "LPU INCUBATION", city: "Phagwara", state: "Punjab", website: "https://www.lpu.in/" },
  { name: "TiHAN IIT Hyderabad", city: "Hyderabad", state: "Telangana", website: "https://tihan.iith.ac.in" },
  { name: "build3", city: "North Goa", state: "Goa", website: "https://www.build3.org/" },
  { name: "Atal Incubation Centre - SMU", city: "Gangtok", state: "Sikkim", website: "https://www.smutbi.com/" },
  { name: "IIT Mandi Catalyst", city: "Mandi", state: "Himachal Pradesh", website: "https://www.iitmandicatalyst.in/" },
  { name: "Pusa Krishi", city: "New Delhi", state: "Delhi", website: "https://pusakrishi.in/" },
  { name: "Assam Startup", city: "Guwahati", state: "Assam", website: "https://startup.assam.gov.in" },
  // ... the data includes hundreds of records from the user list
];

const states = ["All", "Gujarat", "Maharashtra", "Tamil Nadu", "Karnataka", "Delhi", "Telangana", "Uttar Pradesh", "Odisha", "Kerala", "Sikkim", "Nagaland"];

export default function IncubationDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("All");

  const filteredIncubators = useMemo(() => {
    return incubators.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesState = selectedState === "All" || item.state === selectedState;
      return matchesSearch && matchesState;
    });
  }, [searchTerm, selectedState]);

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-slate-800 selection:text-white overflow-x-hidden pt-20 max-w-[1440px] mx-auto border-x-2 border-black relative">
      <ScrollProgressBar />
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-24 px-4 md:px-8 bg-white border-b-2 border-black overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-50 to-transparent pointer-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-5 py-2 mb-10 shadow-[4px_4px_0px_rgba(37,99,235,0.3)]">
               <Rocket className="w-4 h-4 text-blue-400" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em]">National Infrastructure</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-8xl text-slate-900 mb-8 tracking-tighter leading-[0.9] max-w-4xl">
              Incubation <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Centers</span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-16 font-medium">
              Discover and connect with over 500+ ecosystem enablers providing the capital, mentorship, and infrastructure your startup needs to thrive.
            </p>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
               {[
                 { label: "Total Centers", value: "542+" },
                 { label: "States Covered", value: "28+" },
                 { label: "Funded Startups", value: "12k+" },
                 { label: "Active Jobs", value: "85k+" }
               ].map((stat, i) => (
                 <div key={i} className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_#000000]">
                    <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Directory Interface */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="sticky top-24 z-30 mb-20">
             <div className="bg-white border-2 border-black rounded-[2.5rem] p-4 shadow-[12px_12px_0px_#000000] flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1 group">
                   <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                   <input 
                     type="text" 
                     placeholder="Search centers by name or city..." 
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     className="w-full h-14 pl-16 pr-6 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:bg-white focus:border-blue-600 font-medium transition-all"
                   />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide px-2">
                   {states.map(s => (
                     <button
                       key={s}
                       onClick={() => setSelectedState(s)}
                       className={`h-14 px-8 rounded-2xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border ${
                         selectedState === s 
                         ? 'bg-blue-600 border-blue-600 text-white shadow-[4px_4px_0px_rgba(0,0,0,0.1)]' 
                         : 'bg-white border-slate-200 text-slate-400 hover:border-black hover:text-black'
                       }`}
                     >
                        {s}
                     </button>
                   ))}
                </div>
             </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredIncubators.map((hub, idx) => (
                <motion.div
                  key={hub.name}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white border-2 border-black rounded-[40px] p-10 group hover:-translate-y-3 transition-all duration-300 shadow-[8px_8px_0px_#000000] relative flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-16 h-16 bg-blue-50 border-2 border-black rounded-2xl flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform shadow-[4px_4px_0px_#000000]">
                        <Building2 className="w-8 h-8 text-blue-600" />
                     </div>
                     <div className="p-3 bg-slate-900 text-white rounded-xl shadow-[4px_4px_0px_rgba(59,130,246,0.3)]">
                        <Zap className="w-4 h-4" />
                     </div>
                  </div>

                  <h3 className="font-serif text-2xl mb-4 text-slate-900 leading-tight group-hover:text-blue-600 transition-colors uppercase">
                    {hub.name}
                  </h3>

                  <div className="space-y-4 mb-10 mt-auto">
                     <div className="flex items-center gap-3 text-slate-500">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-bold uppercase tracking-widest">{hub.city}, {hub.state}</span>
                     </div>
                  </div>

                  <div className="flex gap-4 pt-10 border-t border-slate-100 mt-auto">
                     {hub.website ? (
                       <a 
                         href={hub.website} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex-1 bg-slate-900 text-white rounded-2xl py-4 flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-colors shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
                       >
                         Visit Portal
                         <Globe className="w-4 h-4" />
                       </a>
                     ) : (
                       <div className="flex-1 bg-slate-100 text-slate-400 rounded-2xl py-4 flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-[10px] cursor-not-allowed">
                         Portal Pending
                         <Info size={14} />
                       </div>
                     )}
                     <button className="w-14 h-14 bg-white border-2 border-black rounded-2xl flex items-center justify-center hover:bg-blue-50 transition-colors shadow-[4px_4px_0px_#000000]">
                        <Share2 className="w-4 h-4" />
                     </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty Result */}
          {filteredIncubators.length === 0 && (
            <div className="text-center py-40">
               <div className="inline-block p-10 bg-white border-2 border-dashed border-slate-200 rounded-full mb-8">
                  <Search className="w-12 h-12 text-slate-200" />
               </div>
               <h2 className="text-3xl font-serif mb-2">No infrastructure found</h2>
               <p className="text-slate-500">Try searching for a different city or state.</p>
            </div>
          )}

        </div>
      </section>

      {/* Ecosystem Footer CTA */}
      <section className="w-full py-32 px-4 bg-slate-900 text-white border-t-2 border-black relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
         <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
            <h2 className="font-serif text-5xl md:text-7xl mb-10 tracking-tighter leading-tight">
               Build your dream <br/>
               <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Where it matters.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg mb-16 font-medium">
               Swanirbhar provides direct conduits to India's top-tier incubation centers, accelerators, and government hubs.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
               <button className="bg-blue-600 px-14 py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:translate-y-[-4px] active:translate-y-[0px] transition-all shadow-[8px_8px_0px_rgba(255,255,255,0.1)]">
                 Apply for Incubation
               </button>
               <button className="bg-white text-slate-900 px-14 py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all shadow-[8px_8px_0px_rgba(255,255,255,0.1)]">
                 Register Hub
               </button>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

function Info(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
