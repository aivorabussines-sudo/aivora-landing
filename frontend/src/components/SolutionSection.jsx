import React from 'react';
import { Card } from './ui/card';
import { Zap, Clock, CheckCircle2 } from 'lucide-react';

const SolutionSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Responde al instante',
      description: '0 segundos de espera.',
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: Clock,
      title: 'Vende mientras duermes',
      description: 'Tu negocio nunca se detiene.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: CheckCircle2,
      title: 'Sin errores humanos',
      description: 'Siempre da la información correcta.',
      color: 'from-green-600 to-green-700'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            La solución: un empleado digital
          </h2>
          <p className="text-2xl text-purple-100 max-w-3xl mx-auto">
            AIVORA atiende clientes, responde preguntas y agenda citas como si fuera parte de tu equipo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-purple-100">
                    {benefit.description}
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

export default SolutionSection;