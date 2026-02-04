import React from 'react';
import { Card } from './ui/card';
import { MessageCircleX, RotateCw, BellRing, TrendingDown } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      icon: MessageCircleX,
      title: 'Mensajes sin contestar por horas',
    },
    {
      icon: RotateCw,
      title: 'Responder lo mismo todos los días',
    },
    {
      icon: BellRing,
      title: 'Interrupciones constantes',
    },
    {
      icon: TrendingDown,
      title: 'Clientes que se van con la competencia',
    },
  ];

  return (
    <section id="how" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold leading-tight">
            El problema no es WhatsApp.{' '}
            <span className="text-red-500">Es no responder a tiempo.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-red-500" />
                  </div>
                  <p className="text-lg font-semibold text-gray-200">
                    {problem.title}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;