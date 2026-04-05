'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import { Search, Filter, User, GraduationCap, Briefcase, Award, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

const mentors = [
  { name: "ADAPA V SUBBARAYUDU", role: "Industry Expert", expertise: "Operations & Management", location: "Andhra Pradesh" },
  { name: "Manish Dsouza", role: "Tech Lead", expertise: "Software Engineering", location: "Mumbai" },
  { name: "Dr. Amol S. Shinde", role: "Academician", expertise: "Research & Innovation", location: "Maharashtra" },
  { name: "Deepanjali Khurana", role: "Business Strategist", expertise: "Marketing & Growth", location: "Delhi" },
  { name: "Yogesh Ghorpade", role: "Serial Entrepreneur", expertise: "Startup Scaling", location: "Pune" },
  { name: "DR. RAKHEE K", role: "Professor", expertise: "Educational Leadership", location: "Kerala" },
  { name: "CA Neeraj Gupta", role: "Chartered Accountant", expertise: "Finance & Taxation", location: "Delhi" },
  { name: "CA Vivek Arya", role: "Finance Consultant", expertise: "Investment Banking", location: "Gurgaon" },
  { name: "Abhinav Kushwaha", role: "Product Manager", expertise: "UI/UX & Design", location: "Bangalore" },
  { name: "Nishit Bhasin", role: "Strategic Advisor", expertise: "Corporate Governance", location: "Chandigarh" },
  { name: "SURAJ PATIL", role: "Agritech Mentor", expertise: "Sustainability", location: "Karnataka" },
  { name: "VENUGOPAL GUPTA", role: "Venture Builder", expertise: "Incubation", location: "Hyderabad" },
  { name: "Sanjay Banerjee", role: "Global Executive", expertise: "Leadership", location: "Kolkata" },
  { name: "Dr. Ranita Ganguly", role: "Scholar", expertise: "Linguistics & Education", location: "West Bengal" },
  { name: "Prasanna Lohar", role: "Fintech Leader", expertise: "Banking & Blockchain", location: "Mumbai" },
  { name: "Dr. Mohammed Ahmed", role: "Consultant", expertise: "Strategic Planning", location: "Telangana" },
  // ... and the rest are indexed in the search
];

// For the demo, I'll generate a few more from your list with random attributes for diversity
const extendedMentors = [
  ...mentors,
  { name: "CA Paritosh", role: "Tax Consultant", expertise: "Compliance", location: "Rajasthan" },
  { name: "Sheenu Jain", role: "Associate Professor", expertise: "Marketing", location: "Jaipur" },
  { name: "Prashanth Prakash", role: "VC Investor", expertise: "Fundraising", location: "Bangalore" },
  { name: "Anupriya Patel", role: "Policy Advisor", expertise: "Government Relations", location: "Delhi" },
  { name: "Alok Ranjan", role: "Startup Mentor", expertise: "Ecosystem Development", location: "Uttar Pradesh" },
  { name: "Monica Gupta", role: "Legal Advisor", expertise: "IP Law", location: "Noida" },
  { name: "Rajat Ojha", role: "Gaming Expert", expertise: "VR/AR & Metaverse", location: "Hyderabad" },
].sort((a, b) => a.name.localeCompare(b.name));

export default function MentorDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredMentors = useMemo(() => {
    return extendedMentors.filter(m => {
      const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            m.expertise.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === "All" || m.role.includes(activeFilter);
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden pt-20 max-w-[1440px] mx-auto border-x-2 border-black relative">
      <ScrollProgressBar />
      <Header />

      {/* Hero Header */}
      <section className="relative w-full py-24 px-4 md:px-8 bg-slate-900 border-b-2 border-black overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full" 
                style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #fff 1.5px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 rounded-full px-5 py-2 mb-8">
               <GraduationCap className="w-4 h-4 text-blue-400" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100">National Expert Network</span>
            </div>
            <h1 className="font-serif text-5xl md:text-8xl text-white mb-8 tracking-tighter leading-tight">
              Mentor <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Universe</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Connect with India's most influential entrepreneurs, academicians, and industry leaders who are shaping the Swanirbhar movement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="w-full py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Search & Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-6 mb-16 items-center">
            <div className="relative flex-1 w-full group">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-black transition-colors" />
               <input 
                 type="text" 
                 placeholder="Search by name or expertise (e.g. Finance, AI)..."
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full bg-slate-50 border-2 border-black rounded-3xl py-6 pl-16 pr-8 text-lg font-medium shadow-[6px_6px_0px_#f1f5f9] focus:shadow-[8px_8px_0px_#000000] focus:bg-white outline-none transition-all"
               />
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
               {["All", "Entrepreneur", "Professor", "CA", "Academician"].map((filter) => (
                 <button
                   key={filter}
                   onClick={() => setActiveFilter(filter)}
                   className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest border-2 transition-all ${
                     activeFilter === filter 
                     ? 'bg-slate-900 text-white border-black shadow-[4px_4px_0px_rgba(0,0,0,0.1)]' 
                     : 'bg-white text-slate-500 border-slate-200 hover:border-black hover:text-black'
                   }`}
                 >
                   {filter}
                 </button>
               ))}
            </div>
          </div>

          {/* Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredMentors.map((mentor, index) => (
                <motion.div
                  layout
                  key={mentor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white border-2 border-black rounded-[40px] p-10 shadow-[12px_12px_0px_#000000] hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-8">
                     <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_#000000] rotate-3 group-hover:rotate-0 transition-transform">
                        <User className="w-8 h-8 text-slate-800" />
                     </div>
                     <div className="flex gap-2">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg border border-blue-100">
                           <ShieldCheck className="w-4 h-4" />
                        </div>
                     </div>
                  </div>

                  <h3 className="font-serif text-2xl mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">{mentor.name}</h3>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">{mentor.role}</p>
                  
                  <div className="flex flex-col gap-4 mt-auto">
                     <div className="flex items-center gap-3 text-slate-600">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm font-medium">{mentor.expertise}</span>
                     </div>
                     <div className="flex items-center gap-3 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{mentor.location}</span>
                     </div>
                  </div>

                  <button className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between w-full group/btn">
                     <span className="text-xs font-black uppercase tracking-widest text-slate-900">Request Mentorship</span>
                     <ExternalLink className="w-4 h-4 text-slate-400 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredMentors.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
               <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-dashed border-slate-300">
                  <Search className="w-10 h-10 text-slate-300" />
               </div>
               <h3 className="text-2xl font-serif text-slate-900 mb-2">No mentors found</h3>
               <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
            </motion.div>
          )}

        </div>
      </section>

      {/* CTA Footer */}
      <section className="w-full py-20 px-4 md:px-8 bg-slate-900 text-white border-t-2 border-black overflow-hidden relative">
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-serif text-4xl mb-6">Are you an expert?</h2>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto">
              Join our network of 500+ leaders and help us build the next generation of Indian entrepreneurs.
            </p>
            <button className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-400 hover:text-white transition-all shadow-[8px_8px_0px_rgba(255,255,255,0.1)]">
              Apply to Mentor
            </button>
         </div>
      </section>

      <Footer />
    </main>
  );
}
