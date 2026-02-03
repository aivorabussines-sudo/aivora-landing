import React from 'react';
import { Button } from './ui/button';
import { Sparkles, Inbox, Clock, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              WhatsApp con IA para potenciar ventas, marketing y atención en un solo lugar
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Convierte cada conversación en una oportunidad real de crecimiento con WhatsApp, Web e Instagram. Atiende más rápido, automatiza tareas y genera más clientes sin esfuerzo.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">WhatsApp potenciado con IA:</span>
                  <span className="text-gray-600"> detecta oportunidades y recomienda respuestas inteligentes.</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Inbox className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Inbox unificado:</span>
                  <span className="text-gray-600"> organiza y responde todas tus conversaciones desde un único panel.</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Automatización 24/7:</span>
                  <span className="text-gray-600"> responde al instante y genera leads automáticamente.</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Procesos optimizados:</span>
                  <span className="text-gray-600"> tu equipo trabaja más rápido y sin tareas repetitivas.</span>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg rounded-full font-semibold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Prueba gratis
            </Button>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-[600px] bg-gradient-to-br from-pink-100 to-pink-200 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl"></div>
                
                {/* Chat header */}
                <div className="bg-pink-300 pt-10 pb-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center">
                      <span className="text-white font-semibold">C</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Camila</div>
                      <div className="text-xs text-gray-600">En línea</div>
                    </div>
                  </div>
                </div>
                
                {/* Chat messages */}
                <div className="bg-pink-200 h-full p-4 space-y-3">
                  <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-md max-w-[85%]">
                    <p className="text-sm text-gray-800">
                      ¡Hola, Nombre! Como hace 6 meses que no vienes a tu control, te regalamos un 30% de descuento en tu Limpieza Facial. ¿Te interesa agendar tu cita esta semana?
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 shadow-md max-w-[85%]">
                      <p className="text-sm text-gray-800">
                        ¡Qué buena promo! Sí, me interesa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;