'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import { RotateCcw, AlertCircle, Calendar, Mail, FileText, CheckCircle2 } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-slate-800 selection:text-white overflow-x-hidden pt-20 max-w-[1440px] mx-auto border-x-2 border-black relative">
      <ScrollProgressBar />
      <Header />

      {/* Hero Header */}
      <section className="relative w-full py-24 px-4 md:px-8 bg-slate-50 border-b-2 border-black overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-5 py-2 mb-8 shadow-[4px_4px_0px_#000000]">
               <RotateCcw className="w-4 h-4 text-emerald-400" />
               <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Billing Policy</span>
            </div>
            <h1 className="font-serif text-4xl md:text-7xl text-slate-900 mb-8 tracking-tight">Refund Policy</h1>
            <p className="font-sans text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Transparent guidelines regarding subscription cancellations and financial reimbursements for the Swanirbhar ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Policy Content */}
      <section className="w-full py-24 px-4 md:px-8 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-12">
          
          {/* Main Statement Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-black shadow-[16px_16px_0px_#000000] p-10 md:p-16 rounded-[40px] relative"
          >
             <div className="absolute -top-6 -left-6 bg-slate-900 text-white p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000000]">
                <FileText className="w-6 h-6" />
             </div>
             
             <h2 className="font-serif text-3xl md:text-4xl mb-8 tracking-tight">Subscription Cancellation</h2>
             <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10">
               You may cancel your Subscription by either writing to us at <strong>support@swanirbhar.in</strong> or through your account on the Platform. 
             </p>
             
             <div className="bg-red-50 border-2 border-red-200 p-8 rounded-3xl mb-12">
                <div className="flex items-start gap-4">
                   <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                   <div>
                      <h4 className="font-bold text-red-900 uppercase tracking-widest text-xs mb-2">Non-Refundable Fees</h4>
                      <p className="text-red-800 leading-relaxed">
                         There shall be no refund of the Fee (including the onboarding fee as stated in the pricing page) already paid by you to Swanirbhar, except as specified under the Refund Period.
                      </p>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-slate-900">7-Day Refund Period</h4>
                   </div>
                   <p className="text-slate-500 text-sm leading-relaxed">
                     Recurring flat fees are eligible for a full refund (subject to applicable taxes) if requested within <strong>7 days</strong> of purchase.
                   </p>
                </div>
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-900" />
                      <h4 className="font-bold text-slate-900">Post-Period Status</h4>
                   </div>
                   <p className="text-slate-500 text-sm leading-relaxed">
                     Cancellation requests received after the 7-day window will not entitle you to any refund of the recurring flat fee.
                   </p>
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 border-2 border-dashed border-slate-300 p-8 rounded-3xl"
          >
             <div className="p-4 bg-white border border-slate-200 rounded-2xl">
                <Info className="w-8 h-8 text-blue-500" />
             </div>
             <p className="text-slate-500 italic text-center md:text-left leading-relaxed">
               "When you cancel your Subscription Plan, Swanirbhar may disable access to features available only to Creators who have purchased/renewed Subscription, while your account may continue to exist on the Platform."
             </p>
          </motion.div>

        </div>
      </section>

      {/* Support CTA */}
      <section className="w-full py-20 px-4 md:px-8 bg-white border-t-2 border-black text-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto"
         >
            <h3 className="font-serif text-3xl mb-6">Need assistance with your billing?</h3>
            <p className="text-slate-500 mb-10 max-w-lg mx-auto">
              Our support team is available to help resolve any queries regarding your subscription status or payment history.
            </p>
            <a 
              href="mailto:support@swanirbhar.in"
              className="inline-flex items-center gap-4 bg-slate-900 text-white rounded-2xl px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-black hover:shadow-[12px_12px_0px_rgba(0,0,0,0.1)] transition-all"
            >
              <Mail className="w-5 h-5 text-blue-400" />
              support@swanirbhar.in
            </a>
            <div className="mt-8">
               <a href="/terms" className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-transparent hover:border-slate-400 transition-all pb-1">
                 View Terms of Service
               </a>
            </div>
         </motion.div>
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
