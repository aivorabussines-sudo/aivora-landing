import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemsSection from '../components/ProblemsSection';
import SolutionSection from '../components/SolutionSection';
import PricingSection from '../components/PricingSection';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <PricingSection />
      <FinalCTA />
    </div>
  );
};

export default Home;