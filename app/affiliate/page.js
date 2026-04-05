'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import { Users, Link, Zap, Award, BarChart3, ShieldCheck, ArrowRight, DollarSign } from 'lucide-react';

const stats = [
  { label: 'Tracking Cookie', value: '60 Days', icon: <Zap className="w-5 h-5" /> },
  { label: 'Attribution', value: 'Last Click', icon: <Link className="w-5 h-5" /> },
  { label: 'Min. Payout', value: '$100', icon: <DollarSign className="w-5 h-5" /> },
  { label: 'Commission', value: 'Referral Rewards', icon: <Award className="w-5 h-5" /> },
];

export default function AffiliateProgram() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-slate-800 selection:text-white overflow-x-hidden pt-20 max-w-[1440px] mx-auto border-x-2 border-black relative">
      <ScrollProgressBar />
      <Header />

      {/* Hero Header */}
      <section className="relative w-full py-24 px-4 md:px-8 bg-slate-50 border-b-2 border-black overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
             style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-5 py-2 border-2 border-black mb-10 shadow-[4px_4px_0px_#000000]">
               <Users className="w-4 h-4" />
               <span className="text-xs font-bold uppercase tracking-widest">Partner Program</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-slate-900 mb-8 tracking-tight leading-tight">
              Grow with Swanirbhar:<br/>
              <span className="text-slate-400">Join our Affiliate Ecosystem</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Swanirbhar Affiliate Partner Program is designed for innovators and influencers who want to shape the future of entrepreneurship while earning rewards for their impact.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <motion.a 
                 href="https://swanirbhar.org.in/"
                 whileHover={{ scale: 1.05, x: 5 }}
                 className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center gap-3 border-2 border-black shadow-[8px_8px_0px_#000000]"
               >
                 Register Now <ArrowRight className="w-4 h-4" />
               </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="w-full py-12 px-4 md:px-8 bg-white border-b-2 border-black">
         <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 border-2 border-black rounded-3xl text-center group hover:bg-white transition-colors cursor-default shadow-[4px_4px_0px_#000000] hover:shadow-[8px_8px_0px_#000000]"
              >
                 <div className="w-12 h-12 bg-white rounded-xl border border-black/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                 </div>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                 <p className="text-xl font-serif text-slate-900">{stat.value}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Program Details Layout */}
      <section className="w-full py-24 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          
          {/* Section A: Eligibility */}
          <div className="mb-24 pb-24 border-b border-slate-100">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-10 flex items-center gap-4">
              <span className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm font-bold">A</span>
              Eligibility and Participation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-6">
                 <p className="text-slate-600 text-lg leading-relaxed">
                   Participation in the Affiliate Program is voluntary and subject to approval. To get started, you must be at least <strong>18 years of age</strong> and have a valid audience or platform for promotion.
                 </p>
                 <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-blue-900 text-sm leading-relaxed">
                      We reserve the right to reject applications if promotional methods violate our Platform Terms or include unlawful content.
                    </p>
                 </div>
               </div>
               <div className="bg-slate-50 p-8 rounded-3xl border-2 border-black shadow-[4px_4px_0px_#000000]">
                  <h4 className="font-bold text-slate-900 mb-4">Steps to Start</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-4 text-slate-600 text-sm">
                      <div className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px] flex-shrink-0">1</div>
                      Register on Swanirbhar Affiliate Page
                    </li>
                    <li className="flex gap-4 text-slate-600 text-sm">
                      <div className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px] flex-shrink-0">2</div>
                      Retrieve your unique Referral Link
                    </li>
                    <li className="flex gap-4 text-slate-600 text-sm">
                      <div className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px] flex-shrink-0">3</div>
                      Share with your community via Email or Social
                    </li>
                  </ul>
               </div>
            </div>
          </div>

          {/* Section B: Referrals */}
          <div className="mb-24 pb-24 border-b border-slate-100">
             <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-10 flex items-center gap-4">
              <span className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm font-bold">B</span>
              Referrals & Attribution
            </h2>
            <div className="bg-slate-900 text-white p-12 rounded-[40px] shadow-[16px_16px_0px_rgba(0,0,0,0.1)] mb-12">
               <h3 className="text-2xl font-serif mb-6 text-white">The "Qualified Referral" System</h3>
               <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                 A Qualified Referral occurs when a Referred User registers as a Creator and successfully purchases a subscription plan within <strong>90 days</strong> of registration.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                     <p className="font-bold text-sm text-blue-400 uppercase tracking-widest mb-2">Cookie Duration</p>
                     <p className="text-slate-300">Our cookies are valid for <strong>60 days</strong> from the initial click.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                     <p className="font-bold text-sm text-blue-400 uppercase tracking-widest mb-2">Last Click Basis</p>
                     <p className="text-slate-300">Qualified Referrals are attributed to the most recent link clicked before signup.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Marketing Restrictions Column Layout */}
          <div className="mb-24 pb-24 border-b border-slate-100">
             <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-12 flex items-center gap-4 text-center justify-center">
              Marketing Restrictions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <RestrictionCard 
                  title="No Deceptive Ads" 
                  desc="Do not advertise Swanirbhar as a free product. Use only approved promotional codes." 
               />
               <RestrictionCard 
                  title="Brand Integrity" 
                  desc="No domain forwarding or creating look-alike websites that copy our UI/UX." 
               />
               <RestrictionCard 
                  title="Zero Spam Policy" 
                  desc="No uninvited mass messaging or broad matches on Swanirbhar trademarks." 
               />
            </div>
          </div>

          {/* Section D: Rewards */}
          <div className="mb-24">
             <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-10 flex items-center gap-4">
              <span className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm font-bold">D</span>
              Rewards & Payouts
            </h2>
            <div className="flex flex-col lg:flex-row gap-12">
               <div className="lg:w-2/3 space-y-6">
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Referral Rewards are processed approximately <strong>45 to 70 days</strong> after the end of the month in which they accrue. This window ensures all subscriptions reach their 30-day non-refundable threshold.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Payouts require a minimum accrual of <strong>$100 USD</strong> (or equivalent in INR) and are subject to mandatory KYC document submission.
                  </p>
               </div>
               <div className="lg:w-1/3 bg-emerald-50 border-2 border-black rounded-3xl p-8 shadow-[8px_8px_0px_#10b98120]">
                  <BarChart3 className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Accurate Tracking</h4>
                  <p className="text-slate-600 text-sm">Monitor your performance, referrals, and accrued commissions in real-time via your dedicated Affiliate Dashboard.</p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Global Footer CTA */}
      <section className="w-full py-20 px-4 md:px-8 bg-slate-900 text-white text-center rounded-t-[60px]">
         <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl mb-8">Ready to start?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              If you have any specific concerns regarding the agreement, reach out to our legal team.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
               <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Legal Support</p>
                  <a href="mailto:legal@swanirbhar.in" className="text-2xl font-serif text-blue-400 hover:text-white transition-colors">legal@swanirbhar.in</a>
               </div>
               <div className="text-left border-l-2 border-white/10 pl-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Mailing Address</p>
                  <p className="text-sm text-slate-300">Imtihan Edutch Private Limited, Rajarhat, Kolkata - 700135</p>
               </div>
            </div>
            <motion.a 
              href="/"
              whileHover={{ x: 5 }}
              className="text-white font-bold uppercase tracking-widest text-xs border-b border-white pb-1"
            >
              Return Home
            </motion.a>
         </div>
      </section>

      <Footer />
    </main>
  );
}

function RestrictionCard({ title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-8 bg-white border-2 border-black rounded-3xl shadow-[4px_4px_0px_#000000] hover:-translate-y-2 transition-all duration-300"
    >
      <div className="w-3 h-3 bg-red-500 rounded-full mb-4 shadow-[2px_2px_0px_#00000020]" />
      <h4 className="font-bold text-slate-900 mb-3">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
