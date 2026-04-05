'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import { Scale, FileText, Globe, Gavel, HelpCircle, ShieldCheck, Mail, MapPin } from 'lucide-react';

const sections = [
  { id: 'general', title: 'General Terms', icon: <FileText className="w-5 h-5" /> },
  { id: 'services', title: 'Platform Services', icon: <Globe className="w-5 h-5" /> },
  { id: 'access', title: 'Right to Access', icon: <ShieldCheck className="w-5 h-5" /> },
  { id: 'content', title: 'Content Ownership', icon: <Scale className="w-5 h-5" /> },
  { id: 'payments', title: 'Pricing & Refunds', icon: <Gavel className="w-5 h-5" /> },
  { id: 'legal', title: 'Legal Provisions', icon: <MapPin className="w-5 h-5" /> },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-slate-800 selection:text-white overflow-x-hidden pt-20 max-w-[1440px] mx-auto border-x-2 border-black relative">
      <ScrollProgressBar />
      <Header />

      {/* Hero Header */}
      <section className="relative w-full py-24 px-4 md:px-8 bg-slate-900 text-white border-b-2 border-black overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2 mb-8">
               <Scale className="w-4 h-4 text-blue-400" />
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Platform Governance</span>
            </div>
            <h1 className="font-serif text-4xl md:text-7xl mb-8 tracking-tight">Terms of Service</h1>
            <p className="font-sans text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Legal framework governing your interaction with the Swanirbhar Platform, including rights, responsibilities, and operational protocols.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation & Content Area */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Index Sidebar */}
          <aside className="lg:col-span-3">
             <div className="sticky top-32 bg-slate-50 border-2 border-black rounded-3xl p-6 shadow-[8px_8px_0px_#000000]">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 pl-2 underline decoration-blue-500 underline-offset-4">Legal Index</p>
                <div className="flex flex-col gap-1">
                   {sections.map(s => (
                     <a 
                       key={s.id}
                       href={`#${s.id}`}
                       className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-[4px_4px_0px_#000000] border border-transparent hover:border-black transition-all text-sm font-bold text-slate-600 group"
                     >
                        <div className="p-2 bg-white rounded-lg border border-slate-200 group-hover:border-black group-hover:bg-blue-50 transition-colors">
                           {s.icon}
                        </div>
                        {s.title}
                     </a>
                   ))}
                </div>
             </div>
          </aside>

          {/* Detailed Content */}
          <div className="lg:col-span-9 flex flex-col gap-24">
            
            <TSSection id="general" title="A. General Terms & Conditions">
               <p>These Terms of Service set out the terms for use of <strong>swanirbhar.in</strong>, the mobile applications, and all associated services collectively referred to as the <strong>"Platform"</strong>.</p>
               <p className="mt-4">When we refer to <strong>"Swanirbhar"</strong>, we collectively mean <strong>Imtihan Edutech Private Limited</strong>, incorporated in India. Your access is subject to acceptance of these Platform Terms, forming a legally binding Agreement.</p>
               <div className="mt-8 p-6 bg-slate-900 text-white rounded-3xl border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.1)]">
                  <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">Key Entities</h4>
                  <p className="text-sm text-slate-300">Imtihan Edutech Private Limited: Satyam Tower, 3rd Floor, A-Block, Rajarhat, Kolkata- 700135, West Bengal, India.</p>
               </div>
            </TSSection>

            <TSSection id="services" title="C. Platform Services">
               <p>Swanirbhar is an <strong>online service provider and intermediary</strong> in accordance with the Information Technology Act, 2000. We facilitate the creation, design, and sale of content by Creators to their End Users.</p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="p-6 border-2 border-black rounded-2xl bg-white shadow-[4px_4px_0px_#000000]">
                    <h4 className="font-bold mb-2">Technological Reliance</h4>
                    <p className="text-sm text-slate-500">Our only responsibility is to provision the technology. Content pricing, management, and interactions are solely the Creator's responsibility.</p>
                  </div>
                  <div className="p-6 border-2 border-black rounded-2xl bg-white shadow-[4px_4px_0px_#000000]">
                    <h4 className="font-bold mb-2">Intermediary Status</h4>
                    <p className="text-sm text-slate-500">We are not an educational institution, content provider, or marketplace. We do not endorse any specific Creator or Content.</p>
                  </div>
               </div>
            </TSSection>

            <TSSection id="access" title="D. Right to Access & Registration">
               <p>To use the Services, you must register and create an account. Individual registrants must meet the <strong>Age Requirements</strong>:</p>
               <ul className="list-none flex flex-col gap-4 mt-6">
                  <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-blue-600">India:</span> 18+ years of age.
                  </li>
                  <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-blue-600">EU:</span> 16+ years of age.
                  </li>
                  <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-blue-600">USA/UK:</span> 13+ years of age.
                  </li>
               </ul>
            </TSSection>

            <TSSection id="content" title="G. Your Content & Ownership">
               <p>You remain the <strong>sole owner</strong> of any content uploaded, published, or submitted by you on the Platform ("User Content"). Swanirbhar does not claim ownership over User Content.</p>
               <p className="mt-4"><strong>Licence to Swanirbhar:</strong> By display or publishing, you grant us a limited, worldwide, royalty-free licence to reproduce, distribute, and store your Content solely to facilitate the Services and comply with legal obligations.</p>
               <div className="p-8 bg-red-50 border-2 border-red-200 rounded-[32px] mt-8">
                  <h4 className="text-red-900 font-bold mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-red-500" />
                    Prohibited Content
                  </h4>
                  <p className="text-sm text-red-800 leading-relaxed">
                    You may not host content that is defamatory, obscene, harmful to children, infringes on IP rights, violates laws, or contains malicious software. Violation leads to immediate account termination.
                  </p>
               </div>
            </TSSection>

            <TSSection id="payments" title="P. Pricing, Payments, & Refunds">
               <p>Swanirbhar offers multi-tiered Subscription Plans. Fees are charged to your chosen payment method via our authorized <strong>Subscription Managers and Third-Party Payment Providers</strong>.</p>
               <p className="mt-4"><strong>Creator's Fee:</strong> Solely determined by the Creator. Swanirbhar facilitates the transaction via Third-Party Payment Aggregators but is not a party to the contract between Creator and End-User.</p>
               <p className="mt-4 font-bold text-slate-800">No refunds are provided for Subscription fees unless specified in the Refund Policy.</p>
            </TSSection>

            {/* Grievance Summary Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-black rounded-[40px] p-12 shadow-[16px_16px_0px_#000000]"
            >
               <h2 className="font-serif text-3xl mb-8 tracking-tight">X. Contact & Grievances</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-6">
                     <div className="group">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">General Support</p>
                        <a href="mailto:care@swanirbhar.in" className="text-xl font-medium hover:text-blue-600 transition-colors">care@swanirbhar.in</a>
                     </div>
                     <div className="group">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Legal Department</p>
                        <a href="mailto:legal@swanirbhar.in" className="text-xl font-medium hover:text-blue-600 transition-colors">legal@swanirbhar.in</a>
                     </div>
                  </div>
                  <div className="flex flex-col gap-6">
                     <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Consumer Grievance Officer</p>
                        <p className="text-lg font-bold">Sumit Singh</p>
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Head Officer (Legal)</p>
                        <p className="text-lg font-bold">Arijit Bhattacharya</p>
                     </div>
                  </div>
               </div>
               
               <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col gap-2">
                  <div className="flex items-start gap-4">
                     <MapPin className="w-5 h-5 text-slate-400 mt-1" />
                     <p className="text-sm text-slate-500 leading-relaxed font-sans">
                        Imtihan Edutech Private Limited<br/>
                        Satyam Tower, 3rd Floor, A-Block, Rajarhat,<br/>
                        Kolkata- 700135, West Bengal, India.
                     </p>
                  </div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function TSSection({ id, title, children }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="scroll-mt-32"
    >
      <h2 className="font-serif text-3xl text-slate-900 mb-8 tracking-tight">{title}</h2>
      <div className="font-sans text-slate-600 text-lg leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
