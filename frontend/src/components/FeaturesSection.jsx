import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Bot, Send, Inbox, Brain, BarChart } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
                
                {/* Chat interface */}
                <div className="bg-green-50 h-full pt-10">
                  <div className="bg-green-500 py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                      <div className="text-white font-semibold">Cliente</div>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div className="bg-white rounded-lg rounded-tl-sm p-3 shadow-sm max-w-[80%]">
                      <p className="text-xs text-gray-700">
                        Hola, estoy interesado en una misma habitación para dos personas.
                      </p>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="bg-green-200 rounded-lg rounded-tr-sm p-3 shadow-sm max-w-[80%]">
                        <p className="text-xs text-gray-700">
                          Final de Tenemos una oferta ideal para ustedes de viernes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg rounded-tl-sm p-3 shadow-sm max-w-[80%]">
                      <p className="text-xs text-gray-700">
                        ¿Te gustaría saber cómo usarla o realizar un pedido?
                      </p>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="bg-green-200 rounded-lg rounded-tr-sm p-3 shadow-sm max-w-[80%]">
                        <p className="text-xs text-gray-700">
                          Hacer el pedido, por favor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI indicator */}
              <div className="absolute -left-4 top-32 bg-purple-500 rounded-full p-3 shadow-xl animate-pulse">
                <Bot className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Todo lo que tu negocio necesita para crecer con WhatsApp
            </h2>
            
            <div className="space-y-5">
              <div className="flex items-start space-x-4 group">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/20 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">
                    <span className="font-bold">Chatbot con IA:</span> responde como un humano, segmenta y guía a cada cliente hacia la compra.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/20 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">
                    <span className="font-bold">Campañas de WhatsApp:</span> envía promociones, avisos y recordatorios a gran escala.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/20 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">
                    <span className="font-bold">Inbox único:</span> organiza conversaciones en lista, tabla o kanban con filtros avanzados.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/20 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">
                    <span className="font-bold">IA configurable:</span> entrena al bot con contenido de tu web o documentos internos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/20 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">
                    <span className="font-bold">Reportes claros:</span> visualiza conversaciones, conversiones y métricas en tiempo real.
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Activa ahora tus 14 días gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;