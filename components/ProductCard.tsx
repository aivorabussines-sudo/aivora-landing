"use client";

import { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GlowCard } from '@/components/ui/GlowCard';
import { Check, Sparkles, Star } from 'lucide-react';

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
    const isPopular = product.category === 'Most Popular';
    // Use Electric Purple for popular, simpler cool grey/blue for standard
    const glowColor = isPopular ? "#8B5CF6" : "#475569";

    return (
        <GlowCard
            glowColor={glowColor}
            className={cn(
                "h-full flex flex-col group relative transition-all duration-500 rounded-[2.5rem]",
                isPopular
                    ? "shadow-[0_40px_100px_-20px_rgba(139,92,246,0.2)] bg-gradient-to-b from-[#1a1033] to-[#020205] border-purple-500/30"
                    : "bg-[#050508] border-white/5 hover:border-white/20 hover:bg-[#0a0a0f]"
            )}
        >
            {/* Animated Gradient Border for Popular */}
            {isPopular && (
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-purple-500/20 to-transparent pointer-events-none" />
            )}

            {/* Badge - Floating & Glowing */}
            {isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30">
                    <div className="relative group/badge animate-float">
                        <div className="absolute -inset-2 bg-purple-500/40 rounded-full blur-lg opacity-50"></div>
                        <div className="relative bg-[#1a103c] border border-purple-400/50 text-purple-200 text-[11px] uppercase tracking-[0.2em] font-bold px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 whitespace-nowrap">
                            <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />
                            Recomendado
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col h-full relative z-10 p-10">
                {/* Header */}
                <div className="mb-10 space-y-4 text-center border-b border-white/5 pb-8">
                    <div className="h-6 flex items-center justify-center mb-4">
                        {product.target && (
                            <span className={cn(
                                "text-xs font-bold uppercase tracking-[0.2em]",
                                isPopular ? "text-purple-400" : "text-slate-500"
                            )}>
                                {product.target}
                            </span>
                        )}
                    </div>
                    <h3 className={cn(
                        "text-3xl font-black tracking-tighter",
                        isPopular ? "text-white drop-shadow-md" : "text-white/90"
                    )}>
                        {product.name}
                    </h3>
                </div>

                {/* Pricing - Massive */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-1.5 align-top">
                        <span className="text-xl text-slate-500 font-bold self-start mt-2">$</span>
                        <span className="text-6xl md:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
                            {product.price.toLocaleString()}
                        </span>
                    </div>
                    <p className="text-sm text-slate-500 font-bold mt-2 uppercase tracking-wider">
                        USD Pago Único
                    </p>

                    {product.monthlyPrice > 0 && (
                        <div className="mt-6 inline-flex items-center gap-2 justify-center">
                            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold flex items-center gap-2 text-white/90">
                                <span className="text-purple-400 font-black">+</span>
                                <span>${product.monthlyPrice.toLocaleString()} / mes</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Features */}
                <ul className="space-y-6 mb-12 flex-1 px-2">
                    {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-4 group/item">
                            <div className={cn(
                                "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm",
                                isPopular
                                    ? "bg-purple-500 text-white shadow-purple-500/20"
                                    : "bg-slate-800 text-slate-400"
                            )}>
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                            <span className="text-sm text-slate-300 font-medium leading-relaxed group-hover/item:text-white transition-colors text-left">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Action Button */}
                <Button
                    onClick={() => {
                        if (product.stripeLink) {
                            window.location.href = product.stripeLink;
                        } else {
                            onAddToCart?.(product);
                        }
                    }}
                    className={cn(
                        "w-full h-16 rounded-2xl font-bold text-sm tracking-[0.15em] uppercase transition-all duration-300 relative overflow-hidden group/btn",
                        isPopular
                            ? "bg-purple-600 text-white shadow-[0_10px_40px_-10px_rgba(124,58,237,0.5)] hover:bg-purple-500 hover:shadow-[0_20px_60px_-10px_rgba(124,58,237,0.7)] hover:scale-[1.02] border-0"
                            : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-[1.02]"
                    )}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:animate-[shimmer_1s_infinite]" />
                    <span className="relative z-10 flex items-center gap-2">
                        {isPopular ? 'Empezar Ahora' : 'Seleccionar'}
                    </span>
                </Button>
            </div>
        </GlowCard>
    );
}
