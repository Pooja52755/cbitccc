import React from 'react';
import { Info, Terminal } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6 flex items-center glitch-text">
              <Info className="mr-2" /> About CCC
            </h2>
            <p className="text-blue-400/80 leading-relaxed text-lg">
              The CBIT Cyber Security Club (CCC) is a student-led organization dedicated to promoting cybersecurity awareness
              and skills development. We organize workshops, competitions, and seminars to help students explore the fascinating
              world of information security.
            </p>
          </div>
          <div className="border border-blue-500/30 p-8 rounded-lg bg-navy-800/50 transform hover:scale-105 transition-transform duration-300
                        backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <Terminal className="w-16 h-16 mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-blue-400/80 text-lg">
              To create a community of cybersecurity enthusiasts and prepare the next generation of security professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
