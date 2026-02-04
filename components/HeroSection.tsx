"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Sparkles } from "lucide-react";
import { BackgroundPattern, Logo } from "@/components/Logo";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#020205]">
            {/* Navigation Header */}
            <nav className="absolute top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center max-w-[1400px] mx-auto right-0">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Logo />
                </motion.div>
                {/* Login removed */}
                <div className="hidden md:flex gap-6">
                </div>
            </nav>

            {/* Background Effects (Aurora & Moving Gradients) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <BackgroundPattern />

                {/* Aurora Animation */}
                <div className="absolute inset-0 opacity-40 animate-aurora overflow-hidden mix-blend-screen pointer-events-none">
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[image:radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/40 via-[#020205] to-[#020205] blur-[100px]" />
                </div>

                {/* Vivid Light Blobs - Moving */}
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-600/30 rounded-full blur-[120px] animate-float mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-600/20 rounded-full blur-[150px] animate-pulse-slow mix-blend-screen" />

                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#020205]/80 to-[#020205] z-10" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center flex-1 justify-center pt-32 pb-20">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs font-bold text-white mb-10 shadow-[0_0_30px_-10px_rgba(139,92,246,0.5)] ring-1 ring-white/5 hover:bg-white/10 transition-colors"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></span>
                    </span>
                    <span className="tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 font-sans">
                        Intelligence Refined
                    </span>
                </motion.div>

                {/* Headline - HUGE & IMPACTFUL */}
                <motion.h1
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white mb-8 max-w-7xl leading-[0.9] drop-shadow-2xl font-sans"
                >
                    Tu Negocio, <br className="hidden md:block" />
                    <span className="relative inline-block">
                        {/* Dynamic Spotlight Behind Text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/20 blur-[80px] -z-10 rounded-full animate-pulse-slow" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-indigo-300 relative z-10 animate-gradient-x">
                            En Piloto Automático.
                        </span>
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-14 leading-relaxed font-light"
                >
                    Atiende clientes 24/7, cierra ventas y agenda citas sin intervención humana.
                    La tecnología que usan los grandes, <span className="text-white font-medium border-b border-purple-500/50">ahora a tu alcance</span>.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 items-center w-full justify-center"
                >
                    <a href="https://wa.me/525652448597" target="_blank" rel="noopener noreferrer">
                        <MagneticButton className="px-10 py-5 text-xl">
                            <span className="font-bold">Empieza Ya</span>
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </MagneticButton>
                    </a>


                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/20 pointer-events-none"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </motion.div>
        </section>
    );
}
