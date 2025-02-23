import React from 'react';

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-navy-900/90 border-b border-blue-500/30 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <img src="/logo.png" alt="CCC Logo" className="w-8 h-8" />
            <span className="text-xl font-bold group-hover:text-blue-400 transition-colors">CCC</span>
          </div>
          <div className="flex space-x-6">
            {['about', 'events', 'team', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="capitalize text-blue-300/70 hover:text-blue-400 transition-colors relative group"
              >
                {section}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
