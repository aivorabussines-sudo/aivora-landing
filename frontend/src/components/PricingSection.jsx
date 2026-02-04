import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Plan Básico',
      description: 'WhatsApp automático 24/7',
      price: '$1,100',
      period: '/mo',
      setup: '+$2,250 activación',
      recommended: false,
      link: 'https://buy.stripe.com/bJefZh4V0c1d8ewdX67N603',
      color: 'from-blue-600 to-blue-700',
      borderColor: 'border-blue-500/50'
    },
    {
      name: 'Plan Avanzado',
      description: 'WhatsApp + llamadas + agenda',
      price: '$4,000',
      period: '/mo',
      setup: '+$7,600 activación',
      recommended: true,
      link: 'https://buy.stripe.com/28E4gz0EK6GT0M4dX67N604',
      color: 'from-purple-600 to-purple-700',
      borderColor: 'border-purple-500'
    },
  ];

  return (
    <section id="prices" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Elige dejar de perder clientes
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 bg-zinc-900 border-2 ${plan.borderColor} hover:scale-105 transition-all duration-300 relative overflow-hidden group`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                    Recomendado
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-2`}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {plan.description}
                  </p>
                </div>
                
                <div className="py-6 border-y border-zinc-800">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-2xl text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.setup}</p>
                </div>
                
                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white px-8 py-6 text-lg rounded-xl font-bold shadow-xl transition-all duration-300 hover:shadow-2xl`}
                  >
                    Activar {plan.name}
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;