"use client";

import { motion } from "framer-motion";
import { MessageSquareOff, Repeat, Clock, UserX, AlertTriangle } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";

const problems = [
    {
        icon: MessageSquareOff,
        title: "Mensajes Ignorados",
        description: "Cada minuto que un cliente espera, es una venta entregada directamente a tu competencia.",
        color: "#EF4444" // Red
    },
    {
        icon: Repeat,
        title: "Robot Humano",
        description: "El 80% de tu día se va en copiar y pegar las mismas respuestas. Estás perdiendo vida.",
        color: "#F97316" // Orange Red
    },
    {
        icon: Clock,
        title: "Cerrado = Pérdida",
        description: "Tu negocio duerme, pero internet no. Tus clientes compran a las 2 AM en otro lado.",
        color: "#EF4444" // Red
    },
    {
        icon: UserX,
        title: "Sueldos Altos",
        description: "Contratar 3 turnos de personal para cubrir 24/7 cuesta una fortuna mensual.",
        color: "#DC2626" // Deep Red
    }
];

export function ProblemSection() {
    return (
        <section className="py-32 relative z-10 overflow-hidden bg-black">
            {/* Background: Severe dark red tension */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F0202] via-[#1A0303] to-black pointer-events-none" />

            {/* Ambient Red Spotlights */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 relative">
                <div className="text-center max-w-4xl mx-auto mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/30 bg-red-950/30 text-red-500 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_30px_-5px_rgba(239,68,68,0.4)]"
                    >
                        <AlertTriangle className="w-4 h-4 fill-red-500/20" />
                        Peligro Crítico
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 relative z-10 tracking-tighter leading-[0.95]">
                        Escalar manualmente <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-gradient-x drop-shadow-lg">es un suicidio financiero.</span>
                    </h2>
                    <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                        La atención lenta no solo molesta: <span className="text-red-400 font-bold border-b border-red-500/50">destruye tu reputación</span> y quema tu dinero.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((item, index) => (
                        <GlowCard
                            key={index}
                            glowColor={item.color}
                            className="bg-[#0A0101] border-red-900/20 p-8 h-full hover:bg-gradient-to-b hover:from-red-950/30 hover:to-black group"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col h-full"
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 shadow-[0_0_30px_-5px_transparent] group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]"
                                    style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                                >
                                    <item.icon className="w-8 h-8" style={{ color: item.color }} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-400 transition-colors">
                                    {item.description}
                                </p>
                            </motion.div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
