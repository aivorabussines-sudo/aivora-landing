import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { ProductGrid } from '@/components/ProductGrid';
import { products } from '@/lib/products';
import { GlowCard } from '@/components/ui/GlowCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero Section (Magnetic CTA, High Impact) */}
      <HeroSection />

      {/* 2. Problem Section (Dark Cards, Serious Vibe) */}
      <ProblemSection />

      {/* 3. Solution Section (Purple Tech, Glassmorphism) */}
      <SolutionSection />

      {/* 4. Pricing / Plans (Premium Glow Cards) */}
      {/* Added more breathing room */}
      <section className="py-32 md:py-40 relative">
        {/* Background Glow for this section - Softer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Planes diseñados para <br />
              <span className="text-gradient">escalar tu negocio.</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Elige el nivel de inteligencia que tu empresa necesita hoy. <br className="hidden md:block" />
              Sin contratos forzosos. Cancelas cuando quieras.
            </p>
          </div>

          <ProductGrid products={products} />

          <div className="mt-24 text-center">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/5 transition-all hover:scale-105 cursor-pointer">
              <p className="px-8 py-3 text-sm text-slate-400">
                ¿Dudas sobre qué plan elegir?
                <a href="https://wa.me/525652448597" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-primary transition-colors ml-2 inline-flex items-center">
                  Habla con ventas &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
