import React from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-between relative overflow-hidden px-4 md:px-0">
        <div className="absolute inset-0 bg-hacker opacity-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="text-left md:w-1/2">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-text-glow">
              CBIT Cyber Security Club
            </h1>
            <p className="text-blue-400/80 text-xl md:text-2xl max-w-3xl typing-animation">
              Exploring the depths of cybersecurity, one byte at a time
            </p>
            <div className="mt-12">
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg border border-blue-500/30 
                           hover:border-blue-500/60 transition-all duration-300 group"
              >
                <span className="group-hover:tracking-wider transition-all duration-300">ENTER_SYSTEM</span>
              </button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-blue-500/20 rounded-full animate-spin-slow">
                {/* Add 3D animation here */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-500/50 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
