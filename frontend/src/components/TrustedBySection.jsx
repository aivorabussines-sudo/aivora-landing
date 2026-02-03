import React from 'react';

const TrustedBySection = () => {
  const companies = [
    { name: 'ADT', width: 120 },
    { name: 'REHAU', width: 140 },
    { name: 'EDLP', width: 100 },
    { name: 'SHOP', width: 110 },
    { name: 'CFG', width: 90 },
    { name: 'AVIATUR', width: 130 },
    { name: 'VIAJO BIEN', width: 140 },
    { name: 'IZZI', width: 100 },
    { name: 'QUITATE', width: 120 },
    { name: 'STRIX', width: 110 },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Más de 3.000 empresas de distintos sectores confían en nosotros.
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 w-full h-24"
            >
              <div 
                className="font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300"
                style={{ fontSize: company.width > 120 ? '16px' : '18px' }}
              >
                {company.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;