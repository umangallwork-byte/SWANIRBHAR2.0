'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { ChevronRight, ArrowRight, User, Mail, Sparkles } from 'lucide-react';

const communityLogos = [
    { name: "Goldman Sachs", logo: "/community members/Goldman_Sachs_logo.PNG" },
    { name: "IIIT Bhubaneswar", logo: "/community members/IIIT_Bhubaneswar_Logo.PNG" },
    { name: "IISer Pune", logo: "/community members/IISER_Pune_Logo.PNG" },
    { name: "IISc", logo: "/community members/IISc-logo.PNG" },
    { name: "Microsoft", logo: "/community members/Microsoft_njgxlo_3da5200b24.PNG" },
    { name: "SIU Deemed University", logo: "/community members/SIUDeemedUniversity151.PNG" },
    { name: "Amazon", logo: "/community members/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.PNG" },
];

export default function HeroSection() {
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const sectionRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !userType) return;
        setStatus('loading');
        try {
            const { error } = await supabase.from('waitlist').insert([{ email, user_type: userType }]);
            if (error) setStatus('error');
            else setStatus('success');
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden bg-background pt-40 pb-32">
            
            {/* --- DECORATIVE BACKGROUND ELEMENTS (The Physics) --- */}
            <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] rounded-full nm-flat opacity-30 animate-float pointer-events-none" />
            <div className="absolute bottom-40 left-[-5%] w-[400px] h-[400px] rounded-full nm-inset opacity-20 animate-float pointer-events-none" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    
                    {/* LEFT CONTENT: Typography Focus */}
                    <div className="w-full lg:w-3/5 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full nm-inset-deep mb-10"
                        >
                            <div className="w-6 h-6 rounded-full nm-flat flex items-center justify-center">
                                <Sparkles size={12} className="text-accent" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">India's Hardware Architecture</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] text-foreground mb-10"
                        >
                            Self-Reliance <br/>
                            <span className="text-muted">Molded by Design.</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-muted font-sans font-medium mb-12 max-w-xl leading-relaxed"
                        >
                            Swanirbhar 2.0 is the physical infrastructure for the next generation of Indian innovation. Engineered for speed, stability, and scale.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            <button className="px-12 py-6 rounded-2xl nm-flat nm-transition nm-flat-hover bg-accent text-white font-bold text-sm uppercase tracking-widest flex items-center gap-3 active:nm-inset">
                                Start Expedition <ArrowRight size={18} />
                            </button>
                            <button className="px-10 py-6 rounded-2xl nm-flat nm-transition nm-flat-hover text-foreground font-bold text-sm uppercase tracking-widest active:nm-inset">
                                Architecture
                            </button>
                        </div>
                    </div>

                    {/* RIGHT CONTENT: The Tactile Form */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="w-full lg:w-2/5"
                    >
                        <div className="p-10 rounded-[40px] nm-flat border border-white/20">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div 
                                        key="success" 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center py-10"
                                    >
                                        <div className="w-20 h-20 rounded-full nm-inset mx-auto mb-8 flex items-center justify-center">
                                            <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center text-white">
                                                <ChevronRight size={24} />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">You're in the Loop.</h3>
                                        <p className="text-muted font-medium">Cohort allocation protocol initiated.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="text-center mb-10">
                                            <h3 className="text-2xl font-display font-bold text-foreground mb-2">Priority List</h3>
                                            <p className="text-muted text-sm font-medium">Join the architecture phase.</p>
                                        </div>

                                        {/* Inset Select */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted ml-4 opacity-60">Identity</label>
                                            <div className="relative group">
                                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-muted nm-transition group-focus-within:text-accent">
                                                    <User size={18} />
                                                </div>
                                                <select 
                                                    value={userType}
                                                    onChange={(e) => setUserType(e.target.value)}
                                                    className="w-full h-16 pl-16 pr-8 rounded-2xl nm-inset-deep nm-transition focus:nm-inset focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background appearance-none font-bold text-foreground outline-none text-sm"
                                                    required
                                                >
                                                    <option value="" disabled>Select Role...</option>
                                                    <option value="student">Student</option>
                                                    <option value="startup">Founder</option>
                                                    <option value="industry">Industry</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Inset Input */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted ml-4 opacity-60">Communication</label>
                                            <div className="relative group">
                                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-muted nm-transition group-focus-within:text-accent">
                                                    <Mail size={18} />
                                                </div>
                                                <input 
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="your@nexus.com"
                                                    className="w-full h-16 pl-16 pr-8 rounded-2xl nm-inset-deep nm-transition focus:nm-inset focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background font-bold text-foreground outline-none text-sm placeholder:text-muted/40"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <button 
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full h-16 rounded-2xl nm-flat bg-foreground text-white font-bold uppercase tracking-[0.2em] text-[11px] nm-transition hover:nm-flat-hover active:nm-inset mt-4"
                                        >
                                            {status === 'loading' ? 'Processing...' : 'Secure Access'}
                                        </button>
                                    </form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* --- COMMUNITY LOGOS (The Proof) --- */}
                <div className="mt-32 pt-20 border-t border-white/10">
                    <div className="flex flex-col items-center">
                        <p className="text-[9px] font-bold text-muted uppercase tracking-[0.5em] mb-12">Institutional Integration</p>
                        <div className="w-full relative overflow-hidden h-16">
                            <div className="flex animate-scroll-marquee gap-24 opacity-30 grayscale hover:opacity-80 transition-opacity">
                                {communityLogos.map((member, idx) => (
                                    <img key={idx} src={member.logo} alt={member.name} className="h-10 w-auto object-contain" />
                                ))}
                                {communityLogos.map((member, idx) => (
                                    <img key={`d-${idx}`} src={member.logo} alt={member.name} className="h-10 w-auto object-contain" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
