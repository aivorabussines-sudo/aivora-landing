import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import TrustedBySection from '../components/TrustedBySection';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CapabilitiesSection />
      <TrustedBySection />
      <FinalCTA />
    </div>
  );
};

export default Home;