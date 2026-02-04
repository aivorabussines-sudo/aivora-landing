import React from 'react';
import { Button } from './ui/button';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          No lo pienses más.
        </h2>
        
        <p className="text-3xl text-purple-100 mb-10 max-w-2xl mx-auto font-semibold">
          Cada día sin AIVORA es dinero regalado.
        </p>
        
        <Button 
          onClick={() => document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-purple-700 hover:bg-gray-100 px-12 py-8 text-2xl rounded-xl font-bold shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-110"
        >
          Empezar ahora
        </Button>
      </div>
      
      {/* Footer */}
      <div className="container mx-auto px-6 mt-20 pt-12 border-t border-white/20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-purple-200">
            © 2025 AIVORA. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm text-purple-200">
            <a href="#" className="hover:text-white transition-colors duration-200">Términos</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Contacto</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;