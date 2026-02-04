import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-black text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
            Mientras no respondes,{' '}
            <span className="text-red-500">otro negocio sí.</span>
          </h1>
          
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            AIVORA responde, filtra y agenda clientes en WhatsApp 24/7. Sin descanso. Sin errores. Sin perder dinero.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={() => document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-7 text-xl rounded-xl font-bold shadow-2xl transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
            >
              Activar AIVORA
            </Button>
            
            <Button 
              onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-10 py-7 text-xl rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              Ver cómo funciona
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;