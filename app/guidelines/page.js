'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import { ShieldCheck, Info, Mail, AlertTriangle, ExternalLink } from 'lucide-react';

const guidelines = [
  {
    id: 1,
    title: "Legitimate usage of the Platform",
    content: "You agree to use the Platform only for lawful purposes and you are not allowed to use our Platform to engage in any kind of activity that violates any applicable central, state, local, federal or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the USA or other countries). Also, you agree that you will not use the Platform in any manner that would disrupt, damage or impair the Platform or access to it, in any manner, including promoting or encouraging illegal activity such as hacking, cracking or distribution of counterfeit software, compromised accounts, or cheats or hacks for the Platform and conduct of any form of fraudulent activity.",
    tags: ["Legal", "Compliance"]
  },
  {
    id: 2,
    title: "No harmful or dangerous content",
    content: "We believe that our Platform is a safe space for all Users and would like your help in ensuring that it remains so. Keeping this in mind, any content which incites or promotes violence, that may cause physical or emotional harm or that may endanger the safety of any individual or is otherwise objectionable is expressly prohibited on the Platform.",
    tags: ["Safety"]
  },
  {
    id: 3,
    title: "No hateful or defamatory content",
    content: "We realise that there may be instances of exchange of ideas and opinions which is essential in the learning process, while we agree that individuals have the right to voice their opinion, we do not encourage or tolerate any form of hate speech or statements that are libelous, slanderous, threatening, violent, predatory, defamatory, or any statement that incites hatred against specific individuals or groups with respect to but not limited to race or ethnic origin, country caste, religion, disability, gender, age, sexual orientation/gender identity etc.",
    tags: ["Conduct"]
  },
  {
    id: 4,
    title: "Violent and graphic content",
    content: "Any content whose sole objective is to sensationalise, shock or disturb individuals is not allowed. We do not allow any content that promotes terrorist acts or incites violence, to be uploaded on the Platform in any manner.",
    tags: ["Warning"]
  },
  {
    id: 5,
    title: "Harassment and bullying",
    content: "Swanirbhar Platform will be used by many Users on a daily basis and it is important to be respectful and kind to your fellow Users. We do not tolerate any form of harassment or bullying on the Platform and strive to keep the Platform a safe space to foster learning. Harassment in this case would include, without limitation, to abusive videos, comments, messages, revealing someone's personal information, including sensitive personally identifiable information of individuals, content or comments uploaded in order to humiliate someone, sexual harassment or sexual bullying in any form.",
    tags: ["Respect"]
  },
  {
    id: 6,
    title: "Spam",
    content: "Posting untargeted, unwanted, and repetitive content, comments or messages with an intention to spam the Platform and to drive traffic from the Platform to other third-party sites is in direct violation of your Agreement with us. Posting links to external websites with malware and other prohibited sites is not allowed.",
    tags: ["Integrity"]
  },
  {
    id: 7,
    title: "Scams",
    content: "Any content uploaded or posted in order to trick others for their own financial gain is not allowed and we do not tolerate any practices of extortion or blackmail, either.",
    tags: ["Security"]
  },
  {
    id: 8,
    title: "Privacy violation",
    content: "Kindly refer to our Privacy Policy to know how to protect your privacy and respect the privacy of other Users.",
    tags: ["Privacy"]
  },
  {
    id: 9,
    title: "Impersonation",
    content: "Impersonating another person, including but not limited to, Swanirbhar, a Swanirbhar employee, or another User, is not permitted while using our Platform. In this case impersonation would mean the intention to cause confusion regarding who the real person is by pretending to be them (such as using names, image, documents, certificates etc., not belonging to you or not used to identify you, or pretending to be a company, institute, group etc., by using their logo, brand name or any distinguishing mark).",
    tags: ["Identity"]
  },
  {
    id: 10,
    title: "Unauthorized Access or Disabling of Platform",
    content: "You agree not to (i) use the Platform in any manner that could disable, overburden, damage, or impair the Platform or interfere with any other User's use of the Platform; (ii) not to use any manual process to monitor or copy any of the material on the Platform or for any other unauthorized purpose without Swanirbhar's prior express written consent; (iii) use any device, software, or routine that interferes with the proper working of the Platform; (iv) attack the Platform via a denial-of-service attack; (v) attempt to gain unauthorized access to, interfere with, or disrupt any parts of the Platform, the server on which the Platform is stored, or any server, computer, or database connected to or associated with the Platform; and (vi) introduce any viruses, trojan horses, worms, keystroke loggers, malware, or other material which is malicious or technologically harmful to the Platform.",
    tags: ["Security", "Tech"]
  },
  {
    id: 11,
    title: "Interaction outside the Platform",
    content: "In association with your use of the Platform, you may interact with various stakeholders, including Swanirbhar's representatives, either through or outside the Platform. During such interaction with any person, you shall conduct yourself professionally, and you shall not conduct yourself in a manner that would amount to any form of discrimination, harassment or bullying of such person you interact with, including without limitation, any discrimination or harassment based on one's religion, caste, creed, ethnicity, sex, sexual orientation or preference, gender, gender identity, race, colour, national origin, citizenship status, ancestry, age, marital status, pregnancy, childbirth, any medical conditions, or community. Any claims made or actions taken against you as a result of your resulting your conduct shall solely be your responsibility and Swanirbhar disclaims any and all such liabilities.",
    tags: ["Professionalism"]
  }
];

export default function UserGuidelines() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-slate-800 selection:text-white overflow-x-hidden pt-20 max-w-[1440px] mx-auto border-x-2 border-black relative">
      <ScrollProgressBar />
      <Header />

      {/* Hero Header */}
      <section className="relative w-full py-24 px-4 md:px-8 bg-slate-900 text-white overflow-hidden">
         {/* Decorative background animate */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-white/20 rounded-full animate-ping" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-8">
               <ShieldCheck className="w-4 h-4 text-blue-400" />
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">Official Policy</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl mb-8 tracking-tight">User Guidelines</h1>
            <p className="font-sans text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              At Swanirbhar, we believe in creating a conducive environment for learning and communication. These guidelines ensure a safe and positive experience for all members of our ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Info Card */}
      <section className="w-full py-16 px-4 md:px-8 bg-white border-b-2 border-black">
         <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 border-2 border-black shadow-[8px_8px_0px_#000000] p-10 rounded-3xl"
            >
               <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="p-4 bg-white border-2 border-black rounded-2xl flex-shrink-0">
                     <Info className="w-8 h-8 text-slate-700" />
                  </div>
                  <div>
                     <p className="text-slate-600 leading-relaxed font-sans text-lg mb-6">
                        These User Guidelines read with our Platform Terms, will help you understand the dos and don'ts in respect of your conduct on the Platform or otherwise during your interaction with anyone in association with the Platform.
                     </p>
                     <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                        <p className="text-amber-900 text-sm leading-relaxed">
                           <strong>Please note:</strong> We are not obligated to monitor content but reserve the right to refuse access, terminate accounts or remove content if violations occur.
                        </p>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Guidelines Content */}
      <section className="w-full py-20 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          {guidelines.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 md:pl-16 group"
            >
               {/* Numerical index and decorative line */}
               <div className="absolute left-0 top-0 h-full w-[2px] bg-slate-100 group-hover:bg-slate-900 transition-colors" />
               <div className="absolute -left-4 top-0 w-8 h-8 bg-white border-2 border-black rounded-lg flex items-center justify-center font-bold text-xs shadow-[2px_2px_0px_#000000]">
                  {item.id}
               </div>

               <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-200 rounded px-2 py-0.5">
                       {tag}
                    </span>
                  ))}
               </div>
               
               <h2 className="font-serif text-2xl md:text-3xl text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {item.title}
               </h2>
               <p className="font-sans text-slate-600 leading-relaxed text-lg whitespace-pre-line">
                  {item.content}
               </p>

               {/* Separator dots */}
               {index !== guidelines.length - 1 && (
                  <div className="mt-12 flex gap-1 opacity-20">
                     <div className="w-1 h-1 bg-black rounded-full" />
                     <div className="w-1 h-1 bg-black rounded-full" />
                     <div className="w-1 h-1 bg-black rounded-full" />
                  </div>
               )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reporting Footer */}
      <section className="w-full py-20 px-4 md:px-8 bg-slate-50 border-t-2 border-black">
         <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-black shadow-[12px_12px_0px_#000000] p-12 rounded-[32px]"
            >
               <h3 className="font-serif text-3xl text-slate-900 mb-6">Report a Violation</h3>
               <p className="text-slate-500 mb-10 text-lg">
                  If you come across any violation of these User Guidelines, please notify us immediately.
               </p>
               <a 
                  href="mailto:support@swanirbhar.in"
                  className="inline-flex items-center gap-4 bg-slate-900 text-white rounded-2xl px-10 py-5 font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
               >
                  <Mail className="w-5 h-5" />
                  support@swanirbhar.in
               </a>
               <div className="mt-8">
                  <a href="/terms" className="text-xs text-slate-400 hover:text-slate-900 flex items-center justify-center gap-1 uppercase font-bold tracking-widest">
                     Full Terms of Service <ExternalLink className="w-3 h-3" />
                  </a>
               </div>
            </motion.div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
