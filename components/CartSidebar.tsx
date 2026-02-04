"use client";

import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { X, Trash2, Loader2, Sparkles, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CartSidebar() {
    const { items, removeItem, total, isOpen, setIsOpen } = useCart();
    const [mounted, setMounted] = useState(false);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleCheckout = async () => {
        setIsCheckingOut(true);
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        alert("¡Sistema de Pagos listo para configurar! \n\nPara activar pagos reales, necesito las llaves de Stripe en el archivo .env.local.\n\n(Simulación completada con éxito)");
        setIsCheckingOut(false);
    };

    if (!mounted) return null;

    const monthlyTotal = items.reduce((sum, item) => sum + item.monthlyPrice * item.quantity, 0);

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={cn(
                "fixed top-0 right-0 h-full w-full sm:w-[450px] bg-black/90 border-l border-white/10 z-50 transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <ShoppingCart className="w-4 h-4 text-primary" />
                        </div>
                        <h2 className="text-xl font-bold text-white tracking-tight">Tu Compra</h2>
                        <span className="bg-white/10 text-xs px-2 py-1 rounded-full text-zinc-400 font-mono">
                            {items.length} items
                        </span>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(false)}
                        className="rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                            <ShoppingCart className="w-16 h-16 text-zinc-600" />
                            <p className="text-zinc-400 max-w-[200px]">Tu carrito está vacío. Agrega empleados digitales para potenciar tu negocio.</p>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div
                                key={item.id}
                                className="group relative flex gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-primary/30"
                            >
                                {/* Image / Thumbnail */}
                                <div className="h-24 w-24 bg-zinc-900 rounded-lg overflow-hidden relative flex-shrink-0 shadow-inner">
                                    {/* Fallback to simple img if image prop is a URL string. 
                                        Using unoptimized to avoid domain config issues during redesign */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Active Pulse */}
                                    <div className="absolute top-2 left-2 w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                                </div>

                                <div className="flex-1 flex flex-col justify-between py-1">
                                    <div>
                                        <div className="flex justify-between items-start gap-2">
                                            <h3 className="text-base font-bold text-white leading-tight">{item.name}</h3>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-6 w-6 text-zinc-500 hover:text-red-400 -mt-1 -mr-1"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <p className="text-xs text-primary font-medium mt-1">{item.category}</p>
                                    </div>

                                    <div className="flex items-end justify-between mt-3">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-zinc-400 uppercase tracking-wider">Hoy</span>
                                            <span className="text-lg font-bold text-white">${item.price.toLocaleString()}</span>
                                        </div>
                                        {item.monthlyPrice > 0 && (
                                            <div className="flex flex-col items-end text-right">
                                                <span className="text-xs text-zinc-400 uppercase tracking-wider">Mensual</span>
                                                <span className="text-sm font-medium text-slate-300">+${item.monthlyPrice.toLocaleString()}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 bg-gradient-to-t from-black to-zinc-900 border-t border-white/10 space-y-6">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-400">Subtotal (Instalación)</span>
                            <span className="text-white font-medium">${total.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-400">Pagos Recurrentes</span>
                            <span className="text-primary font-medium">${monthlyTotal.toLocaleString()}/mes</span>
                        </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-white">Total a Pagar</span>
                        <span className="text-2xl font-bold text-white tracking-tight">${total.toLocaleString()}</span>
                    </div>

                    <Button
                        onClick={handleCheckout}
                        disabled={items.length === 0 || isCheckingOut}
                        className="relative w-full overflow-hidden bg-primary text-white py-8 text-lg font-bold rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

                        {isCheckingOut ? (
                            <span className="flex items-center justify-center gap-2">
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Procesando...
                            </span>
                        ) : (
                            <span className="flex items-center justify-center gap-2">
                                <Sparkles className="w-5 h-5 fill-white" />
                                Activar Empleados Ahora
                            </span>
                        )}
                    </Button>

                    <p className="text-center text-[10px] text-zinc-500 uppercase tracking-widest">
                        Pago Seguro con Stripe Encrypted
                    </p>
                </div>
            </div>
        </>
    );
}
