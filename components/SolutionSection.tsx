"use client";

import { motion } from "framer-motion";
import { Bot, Zap, Globe, Sparkles, CheckCircle2 } from "lucide-react";

const features = [
    {
        icon: Bot,
        title: "Inteligencia Real",
        description: "No es un chatbot básico. Entiende contexto, intención y tono humano."
    },
    {
        icon: Zap,
        title: "Respuesta Inmediata",
        description: "0 segundos de espera. Tus clientes reciben atención al instante, siempre."
    },
    {
        icon: Globe,
        title: "Multicanal 24/7",
        description: "Funciona en WhatsApp, Web, Instagram. Tu empleado nunca duerme."
    }
];

export function SolutionSection() {
    return (
        <section className="py-32 relative overflow-hidden bg-[#020205]">
            {/* Dynamic Background: Purple Explosion */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-purple-600/20 rounded-full blur-[150px] opacity-60 animate-pulse-slow mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[180px] opacity-50 mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-purple-900/5 rounded-full blur-[100px] -z-10" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Content */}
                    <div className="space-y-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/50 bg-purple-500/10 text-xs font-bold text-purple-400 tracking-widest uppercase shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-md">
                            <Zap className="w-3 h-3 fill-current" />
                            La Solución Definitiva
                        </div>

                        <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight drop-shadow-2xl">
                            Contrata a tu primer <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 animate-gradient-x underline decoration-purple-500/30 underline-offset-8">Empleado Digital</span>
                        </h2>

                        <p className="text-xl text-slate-300 leading-relaxed font-light border-l-2 border-purple-500/50 pl-6">
                            AIVORA se integra en tu negocio para encargarse de todo el flujo de atención, ventas y soporte. Es como clonar a tu mejor vendedor, disponible <span className="text-white font-medium">24/7</span>.
                        </p>

                        <div className="space-y-6 pt-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-5 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-purple-500/30 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] group backdrop-blur-sm"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">{feature.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual (Chat Mockup) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative perspective-1000"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-25 blur-[100px] rounded-full animate-pulse-slow" />

                        {/* Glass Container */}
                        <div className="relative glass-panel rounded-[2.5rem] p-8 border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden bg-[#0F172A]/90 backdrop-blur-3xl ring-1 ring-white/10">

                            {/* Reflection */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                            {/* Header */}
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6 relative z-10">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                </div>
                                <div className="text-[10px] text-purple-300/70 uppercase font-black tracking-[0.2em]">AIVORA INTELLIGENCE CORE</div>
                            </div>

                            <div className="space-y-6 font-sans relative z-10">
                                {/* User Message */}
                                <div className="flex gap-4 items-end">
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 mb-1 border border-white/10" />
                                    <div className="bg-[#1E293B] rounded-2xl rounded-bl-none px-5 py-3 text-sm text-slate-200 max-w-[85%] shadow-lg border border-white/5">
                                        ¿Tienen disponibilidad para el próximo martes a las 10am?
                                    </div>
                                </div>

                                {/* AI Message */}
                                <div className="flex gap-4 items-end flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(124,58,237,0.5)] mb-1 ring-2 ring-purple-500/30">
                                        <Bot className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-2xl rounded-br-none px-5 py-4 text-sm text-white max-w-[90%] shadow-lg relative overflow-hidden backdrop-blur-md">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent pointer-events-none" />
                                        <span className="flex items-center gap-2 mb-2 text-[10px] text-purple-300 font-bold uppercase tracking-wider">
                                            <Sparkles className="w-3 h-3 animate-pulse text-purple-400" /> Analizando Agenda...
                                        </span>
                                        <p className="relative z-10">¡Sí! Tenemos un espacio disponible a las <span className="text-purple-300 font-bold">10:00 AM</span>. ¿Te gustaría que lo reserve por ti ahora mismo?</p>
                                    </div>
                                </div>

                                {/* User Message */}
                                <div className="flex gap-4 items-end">
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 mb-1 border border-white/10" />
                                    <div className="bg-[#1E293B] rounded-2xl rounded-bl-none px-5 py-3 text-sm text-slate-200 max-w-[85%] shadow-lg border border-white/5">
                                        Sí por favor, agéndalo.
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card Success */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-8 right-8 bg-white/95 text-black p-4 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] z-20 w-[240px] border border-white/50 backdrop-blur-xl"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 animate-pulse" />
                                    <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">Venta Cerrada</span>
                                </div>
                                <div className="text-sm font-bold mb-1">Cita Confirmada</div>
                                <div className="text-xs text-slate-500 flex justify-between items-center bg-slate-100 rounded-lg p-2 mt-2">
                                    <span>Valor potencial:</span>
                                    <span className="font-bold text-green-600 text-sm">$150.00</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
