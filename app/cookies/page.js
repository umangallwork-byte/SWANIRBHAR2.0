'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import { Cookie, Info, Settings, Shield, Layout, PieChart, ShieldCheck } from 'lucide-react';

const cookieTypes = [
  {
    title: "Essential Cookies",
    description: "These are necessary for the platform to function. They allow for core behaviors like authentication, session management, and security.",
    icon: <ShieldCheck className="w-6 h-6" />,
    status: "Always Active"
  },
  {
    title: "Performance & Analytics",
    description: "These help us understand how visitors interact with the site, helping us find errors and improve the user experience through data.",
    icon: <PieChart className="w-6 h-6" />,
    status: "Optional"
  },
  {
    title: "Preference Cookies",
    description: "These allow the site to remember choices you make (such as language or region) to provide enhanced, personal features.",
    icon: <Settings className="w-6 h-6" />,
    status: "Optional"
  }
];

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-slate-800 selection:text-white overflow-x-hidden pt-20 max-w-[1440px] mx-auto border-x-2 border-black relative">
      <ScrollProgressBar />
      <Header />

      {/* Hero Header */}
      <section className="relative w-full py-24 px-4 md:px-8 bg-slate-900 border-b-2 border-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full" 
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2 mb-8">
               <Cookie className="w-4 h-4 text-emerald-400" />
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Browser Preferences</span>
            </div>
            <h1 className="font-serif text-4xl md:text-7xl text-white mb-8 tracking-tight">Cookie Policy</h1>
            <p className="font-sans text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              How Swanirbhar uses "cookies" and similar tracking technologies to enhance your entrepreneurial experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
             <h2 className="font-serif text-3xl mb-8 tracking-tight text-slate-900 flex items-center gap-4">
                <Info className="w-8 h-8 text-blue-600" />
                What are Cookies?
             </h2>
             <div className="font-sans text-slate-600 text-lg leading-relaxed flex flex-col gap-6">
                <p>
                  Cookies are small text files that are stored on your device when you visit our Platform. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
                </p>
                <p>
                  At Swanirbhar, we use cookies to ensure the platform functions correctly, to analyze our traffic, and to provide you with a personalized experience that reflects your journey with us.
                </p>
             </div>
          </motion.div>

          {/* Cookie Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
             {cookieTypes.map((type, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-white border-2 border-black rounded-[32px] p-8 shadow-[8px_8px_0px_#000000] group hover:-translate-y-2 transition-transform duration-300"
               >
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 border-2 border-black shadow-[4px_4px_0px_#000000] rotate-3 group-hover:rotate-0 transition-transform">
                     {type.icon}
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-slate-900">{type.title}</h4>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <div className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${type.status === 'Always Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'}`}>
                    {type.status}
                  </div>
               </motion.div>
             ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 border-2 border-black rounded-[40px] p-10 md:p-16 shadow-[12px_12px_0px_#000000]"
          >
             <h2 className="font-serif text-3xl mb-8 tracking-tight text-slate-900">Managing Preferences</h2>
             <div className="font-sans text-slate-600 text-lg leading-relaxed flex flex-col gap-6">
                <p>
                  Most web browsers allow you to control cookies through their settings. If you choose to disable cookies, some features of the Platform may not function as intended. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                   <div className="flex gap-4 p-6 bg-white border border-slate-200 rounded-3xl">
                      <Layout className="w-6 h-6 text-slate-400 mt-1" />
                      <div>
                         <h5 className="font-bold text-slate-900 mb-1">Browser Settings</h5>
                         <p className="text-sm text-slate-500 font-sans">Clear or block cookies directly through your browser’s preference panel.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 p-6 bg-white border border-slate-200 rounded-3xl">
                      <Shield className="w-6 h-6 text-slate-400 mt-1" />
                      <div>
                         <h5 className="font-bold text-slate-900 mb-1">Platform Opt-out</h5>
                         <p className="text-sm text-slate-500 font-sans">Individual control via third-party analytics (like Google Analytics opt-out).</p>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Legal Footer Section */}
          <div className="mt-24 pt-12 border-t border-slate-100 text-center">
             <p className="text-slate-400 text-sm max-w-2xl mx-auto font-sans">
               For more details on how we process your personal data, please refer to our <a href="/privacy" className="text-blue-600 font-bold hover:underline">Privacy Policy</a>. If you have any cookie-related questions, contact us at <a href="mailto:privacy@swanirbhar.in" className="text-blue-600 font-bold hover:underline">privacy@swanirbhar.in</a>.
             </p>
             <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
               Last Updated: April 1, 2026
             </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
