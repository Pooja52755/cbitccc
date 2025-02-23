import React from 'react';
import { Calendar, ChevronRight, ExternalLink } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      title: "Ethical Hacking Workshop",
      date: "March 15, 2024",
      description: "Learn the basics of ethical hacking and penetration testing."
    },
    {
      title: "Cybersecurity Seminar",
      date: "April 5, 2024",
      description: "Industry experts share insights on latest security trends."
    }
  ];

  return (
    <section id="events" className="py-32 bg-navy-900 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 flex items-center glitch-text">
          <Calendar className="mr-2" /> Events
        </h2>

        <div className="mb-16 rounded-lg p-8 bg-gradient-to-r from-navy-900 to-blue-900/20 border border-blue-500/30
                       transform hover:scale-[1.02] transition-all duration-300 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold mb-6 text-blue-400 glitch-text">Sudhee 2k25</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-blue-400/80 mb-6 text-lg leading-relaxed">
                  Our annual technical fest featuring cutting-edge cybersecurity challenges, workshops, and competitions.
                  Join us for an immersive experience in the world of information security.
                </p>
                <button className="flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 px-6 py-3 rounded-lg
                                 transition-all duration-300 group border border-blue-500/30 hover:border-blue-500/60">
                  <span className="group-hover:tracking-wider transition-all duration-300">Learn More</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              <div className="space-y-4">
                {['CTF Challenges', 'Security Workshops', 'Expert Talks'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-navy-800/30 border border-blue-500/20
                                            transform hover:translate-x-2 transition-transform duration-300">
                    <ChevronRight className="w-5 h-5" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="border border-blue-500/30 p-6 rounded-lg bg-navy-800/30
                                      transform hover:scale-105 transition-all duration-300
                                      hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-3">{event.title}</h3>
              <p className="text-blue-400/60 mb-3">{event.date}</p>
              <p className="text-blue-400/80">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
