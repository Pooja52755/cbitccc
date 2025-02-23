import React from 'react';
import { Users } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "John Doe",
      role: "Club President",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Jane Smith",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Mike Johnson",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <section id="team" className="py-32 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 flex items-center glitch-text">
          <Users className="mr-2" /> Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="border border-blue-500/30 rounded-lg p-8 text-center bg-navy-800/30
                            transform hover:scale-105 transition-all duration-300
                            hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full
                                group-hover:border-blue-500/60 transition-colors duration-300"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-400/80">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
