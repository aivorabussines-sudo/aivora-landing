import React from 'react';
import { Card } from './ui/card';
import { Bot, BarChart3, Inbox, Brain, Plug, Send, TrendingUp, Workflow } from 'lucide-react';
import { Button } from './ui/button';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Bot,
      title: 'Chatbot con IA',
      description: 'Responde de inmediato, filtra leads y asesora con un tono humano y configurable.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Reportes y análisis',
      description: 'Mide conversaciones por canal, tasa de conversión y performance en tiempo real.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Inbox,
      title: 'Inbox omnicanal',
      description: 'Centraliza conversaciones de WhatsApp, web y redes sociales en un solo panel con vistas en lista, tabla o kanban.',
      color: 'from-gray-600 to-gray-700'
    },
    {
      icon: Brain,
      title: 'IA configurable',
      description: 'Entrena a tu bot con la información de tu negocio para respuestas más precisas y personalizadas.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Plug,
      title: 'Integraciones',
      description: 'Conecta Cliengo con tus sistemas actuales para potenciar tus procesos.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Send,
      title: 'Campañas de WhatsApp',
      description: 'Envía promociones, lanzamientos y recordatorios de forma masiva y personalizada.',
      color: 'from-gray-600 to-gray-700'
    },
    {
      icon: TrendingUp,
      title: 'Escalabilidad',
      description: 'Una plataforma flexible que crece con tu equipo y necesidades comerciales.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Workflow,
      title: 'Automatización y flujos',
      description: 'Diseña recorridos inteligentes para ventas, soporte y marketing sin intervención manual.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            El WhatsApp que tu negocio necesita
          </h2>
          <p className="text-2xl text-gray-600 font-medium">
            Explora las capacidades de Cliengo Hub
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Tenemos todas las herramientas que necesitas para convertir WhatsApp en el centro de tu estrategia comercial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${capability.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg rounded-full font-semibold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Comienza gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;