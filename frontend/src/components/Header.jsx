import React from 'react';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">Cliengo</span>
        </div>
        
        <Button 
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          Empieza tu prueba gratuita de 14 días
        </Button>
      </div>
    </header>
  );
};

export default Header;