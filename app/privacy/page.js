'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import { Lock, Eye, Server, ShieldAlert, Globe, MessageCircle } from 'lucide-react';

const sections = [
  { id: 'A', title: 'Applicability', icon: <Globe className="w-5 h-5" /> },
  { id: 'B', title: 'Access', icon: <Eye className="w-5 h-5" /> },
  { id: 'C', title: 'Processors & Controllers', icon: <Server className="w-5 h-5" /> },
  { id: 'D', title: 'Minors & Children', icon: <ShieldAlert className="w-5 h-5" /> },
  { id: 'E', title: 'Personal Data Definitions', icon: <Lock className="w-5 h-5" /> },
  { id: 'F', title: 'Information We Collect', icon: <MessageCircle className="w-5 h-5" /> },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-slate-800 selection:text-white overflow-x-hidden pt-20 max-w-[1440px] mx-auto border-x-2 border-black relative">
      <ScrollProgressBar />
      <Header />

      {/* Hero Header */}
      <section className="relative w-full py-24 px-4 md:px-8 bg-white border-b-2 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-4 py-2 border-2 border-black mb-8 shadow-[4px_4px_0px_#000000]">
               <Lock className="w-4 h-4 text-blue-400" />
               <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Data Protection Protocol</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-slate-900 mb-8 tracking-tight">Privacy Policy</h1>
            <p className="font-sans text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Swanirbhar respects your privacy and is committed to protecting it. This policy explains how we collect, use, share, and store your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Context Card */}
      <section className="w-full py-16 px-4 md:px-8 bg-slate-50 border-b-2 border-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-black shadow-[12px_12px_0px_#000000] p-10 md:p-14 rounded-[32px]"
          >
            <p className="text-slate-600 leading-relaxed font-sans text-lg mb-8">
              For ease of reference, use of the terms <strong>“Swanirbhar”, “we”, “us”</strong>, and/or <strong>“our”</strong> refer to <strong>Imtihan Edutech Private Limited</strong> (India) and <strong>Swanirbhar INC</strong> (Delaware, USA).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-50 p-6 rounded-2xl border-2 border-black shadow-[6px_6px_0px_#000000]">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Primary Contact</p>
                <p className="text-xl font-medium text-slate-800">privacy@swanirbhar.in</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border-2 border-black shadow-[6px_6px_0px_#000000]">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Region</p>
                <p className="text-xl font-medium text-slate-800">Global (India & USA)</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm italic">
              By using our platform, you consent to the collection, use, and disclosure of information described in this Policy and our Terms of Service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents Sticky Sidebar Layout */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 flex flex-col gap-2">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 pl-4">In this policy</p>
              {sections.map(section => (
                <a 
                  key={section.id}
                  href={`#section-${section.id}`}
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-all font-sans text-sm font-bold text-slate-500 border border-transparent hover:border-slate-200"
                >
                  <span className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-[10px] group-hover:bg-blue-50">
                    {section.id}
                  </span>
                  {section.title}
                </a>
              ))}
            </div>
          </aside>

          {/* Main Policy Content */}
          <div className="lg:col-span-9 flex flex-col gap-20">
            
            <PolicySection id="section-A" title="A. Applicability">
              This Policy applies to all users of the Platform, including without limitation:
              <ul className="list-disc pl-6 mt-4 flex flex-col gap-2">
                <li>Visitors of the Platform</li>
                <li>Creators (as defined in Terms of Service)</li>
                <li>Authorized Users and Creator's End-Users</li>
              </ul>
            </PolicySection>

            <PolicySection id="section-B" title="B. Access">
               You may access the Platform as a guest without creating an account or providing Personal Data. However, to access all features, you must create an account and provide certain mandatory Personal Data. We may keep records of communications for rendering Services efficiently.
            </PolicySection>

            <PolicySection id="section-C" title="C. Processors and Controllers">
               <p className="mb-4"><strong>Swanirbhar as Controller:</strong> We are the Controller of User Data directly collected from you.</p>
               <p><strong>Swanirbhar as Processor:</strong> For content and data uploaded by Creators (Creator Data), Swanirbhar acts solely as a Processor in accordance with our Data Processing Addendum (DPA).</p>
            </PolicySection>

            <PolicySection id="section-D" title="D. Minors/Children">
               To register, you must meet 'Age Requirements'. We do not knowingly collect Personal Data from anyone under these requirements. If we discover such data, we will take immediate steps to remove it. Parents can reach us at <strong>privacy@swanirbhar.in</strong>.
            </PolicySection>

            <PolicySection id="section-E" title="E. Personal Data Definitions">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                     <h4 className="font-bold text-slate-900 mb-2">Personal Data</h4>
                     <p className="text-sm text-slate-600">Information identifying a user: name, email, age, gender, location, etc. compliant with GDPR, CCPA, and IT Rules 2011.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                     <h4 className="font-bold text-slate-900 mb-2">Sensitive Data</h4>
                     <p className="text-sm text-slate-600">Passwords, financial data, health data, biometrics, and other special categories. We do NOT collect this directly unless strictly required.</p>
                  </div>
               </div>
            </PolicySection>

            <PolicySection id="section-F" title="F. Information We Collect">
               <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">1. Provided by You</h4>
                    <p className="text-slate-600 leading-relaxed">Basic account info (email, password), Public profile info (About Me, photos), and Communications context (support tickets, surveys).</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">2. Automated Collection</h4>
                    <p className="text-slate-600 leading-relaxed">Device/Log info (IP address, browser), Usage info (feature interactions), and approximate Location data.</p>
                  </div>
               </div>
            </PolicySection>

            {/* Added a callout for Cross-Border Data Transfer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 bg-slate-900 text-white p-12 rounded-[32px] border-2 border-black shadow-[12px_12px_0px_rgba(0,0,0,0.1)]"
            >
               <div className="flex items-center gap-4 mb-6">
                  <Globe className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-serif">Cross-Border Data Transfer</h3>
               </div>
               <p className="text-slate-400 mb-8 leading-relaxed">
                  Your information is stored and processed on servers in <strong>Mumbai and Bangalore, India</strong>. By using our Services, you consent to the transfer of data to India and other countries where our affiliates operate.
               </p>
               <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10">GDPR Compliant</span>
                  <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10">CCPA Compliant</span>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Grievance Footer Section */}
      <section className="w-full py-24 px-4 md:px-8 bg-white border-t-2 border-black">
         <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-black shadow-[16px_16px_0px_#000000] p-12 rounded-[40px] text-left"
            >
               <h3 className="font-serif text-3xl text-slate-900 mb-8 tracking-tight">Privacy Grievances</h3>
               <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                  If you have concerns about the privacy of your data, please register your complaint via email to our grievance officer:
               </p>
               
               <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                  <div className="flex flex-col gap-1">
                     <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Grievance Officer</p>
                     <p className="text-2xl font-serif text-slate-900">Siddharth Manchanda</p>
                     <p className="text-slate-500">General Counsel</p>
                  </div>
                  <div className="flex flex-col gap-1">
                     <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Official Email</p>
                     <a href="mailto:privacy@swanirbhar.com" className="text-2xl font-serif text-blue-600 hover:text-black transition-colors">privacy@swanirbhar.com</a>
                  </div>
               </div>

               <div className="mt-12 pt-10 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Registered Office Address</p>
                  <p className="text-slate-700 leading-relaxed font-sans">
                    Imtihan Edutch Private Limited<br/>
                    Satyam Tower, 3rd Floor, A-Block, Rajarhat,<br/>
                    Kolkata - 700135, West Bengal, India.
                  </p>
               </div>
            </motion.div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

function PolicySection({ id, title, children }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="scroll-mt-32"
    >
      <h2 className="font-serif text-3xl text-slate-900 mb-8 tracking-tight">{title}</h2>
      <div className="font-sans text-slate-600 text-lg leading-relaxed space-y-4">
        {children}
      </div>
    </motion.div>
  );
}
