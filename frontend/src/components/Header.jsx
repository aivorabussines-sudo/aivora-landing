import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/aivora-logo.png"
            alt="AIVORA Logo"
            className="h-10 w-auto"
          />
        </div>
        
        <Button 
          onClick={() => document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          Ver planes
        </Button>
      </div>
    </header>
  );
};

export default Header;