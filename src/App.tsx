import React, { useState, useEffect } from 'react';
import { Terminal, Users, Calendar, Info, Mail, ChevronRight, Shield, ExternalLink, Menu, X, ArrowLeft, Flag, Box, Users2 } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    // Enhanced Interactive network effect
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const points = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '1';
      document.body.appendChild(canvas);
    };

    const createPoints = () => {
      for (let i = 0; i < 150; i++) { // Increased number of points
        points.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1 // Added varying point sizes
        });
      }
    };

    const drawNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw points
      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
        ctx.fill();
      });

      // Draw connections
      points.forEach((point, i) => {
        // Move points
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > window.innerWidth) point.vx *= -1;
        if (point.y < 0 || point.y > window.innerHeight) point.vy *= -1;

        // Draw connections
        points.forEach((otherPoint, j) => {
          if (i === j) return;
          
          const dx = otherPoint.x - point.x;
          const dy = otherPoint.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) { // Increased connection distance
            // Calculate opacity based on distance from mouse
            const mouseDistance = Math.sqrt(
              Math.pow(mouseX - point.x, 2) + Math.pow(mouseY - point.y, 2)
            );
            const opacity = mouseDistance < 250 ? 
              0.5 * (1 - mouseDistance / 250) : 
              0.15;

            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = Math.max(0.5, 2 * (1 - distance / 180)); // Varying line width
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(drawNetwork);
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    initCanvas();
    createPoints();
    drawNetwork();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      canvas.remove();
    };
  }, []);

  const events = [
    {
      id: 'tectasy-2k25',
      title: "CCC × Tectasy 2k25",
      date: "March 20-22, 2024",
      description: "A three-day cybersecurity extravaganza featuring multiple challenging events.",
      isCollab: true,
      subEvents: [
        {
          title: "Capture The Flag",
          description: "Test your hacking skills in this intense CTF competition. Hunt for flags, crack codes, and prove your expertise.",
          icon: Flag
        },
        {
          title: "Spell The Box",
          description: "Break into carefully crafted black boxes. Each level brings new challenges and security mechanisms to bypass.",
          icon: Box
        },
        {
          title: "Cyber Imposter",
          description: "A social engineering challenge where participants must identify the imposter while protecting their own identity.",
          icon: Users2
        }
      ],
      registerLink: "https://forms.example.com/tectasy-2k25"
    },
    {
      id: 'ethical-hacking',
      title: "Ethical Hacking Workshop",
      date: "April 15, 2024",
      description: "Learn the basics of ethical hacking and penetration testing.",
      registerLink: "https://forms.example.com/ethical-hacking",
      fullDescription: `Join us for an intensive hands-on workshop on ethical hacking and penetration testing. 
      Learn from industry experts about:
      • Network Security
      • Web Application Security
      • Mobile Security
      • Social Engineering
      Limited seats available!`
    },
    {
      id: 'cybersecurity-seminar',
      title: "Cybersecurity Seminar",
      date: "May 5, 2024",
      description: "Industry experts share insights on latest security trends.",
      registerLink: "https://forms.example.com/cybersecurity-seminar",
      fullDescription: `A comprehensive seminar featuring top cybersecurity experts discussing:
      • Zero Trust Architecture
      • Cloud Security
      • AI in Cybersecurity
      • Threat Intelligence
      Network with industry professionals!`
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const EventModal = ({ event, onClose }) => (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-navy-900 border border-blue-500/30 rounded-lg max-w-2xl w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={() => {
                onClose();
                setTimeout(() => scrollToSection('events'), 100);
              }}
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Events</span>
            </button>
          </div>
          <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
          <p className="text-blue-400/80 mb-6 text-lg">{event.date}</p>
          
          {event.isCollab ? (
            <div className="space-y-8 mb-8">
              {event.subEvents.map((subEvent, index) => (
                <div key={index} className="border border-blue-500/30 rounded-lg p-6 bg-navy-800/50">
                  <div className="flex items-center mb-4">
                    <subEvent.icon className="w-6 h-6 text-blue-400 mr-3" />
                    <h4 className="text-xl font-bold">{subEvent.title}</h4>
                  </div>
                  <p className="text-blue-400/80 text-lg leading-relaxed">
                    {subEvent.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="prose prose-invert mb-8">
              <p className="whitespace-pre-line text-blue-400/80 text-lg leading-relaxed">
                {event.fullDescription}
              </p>
            </div>
          )}
          
          <a 
            href={event.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 px-8 py-4 rounded-lg
                     transition-all duration-300 border border-blue-500/30 hover:border-blue-500/60
                     hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] group"
          >
            <span className="text-lg group-hover:tracking-wider transition-all duration-300">Register Now</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-navy-900 text-white font-sans">
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}

      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 p-4 z-50">
        <nav className="max-w-6xl mx-auto bg-navy-800 rounded-full px-6 py-3 shadow-lg border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <Shield className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-2xl font-bold bg-gradient-text">CCC</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'events', 'team', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="nav-link text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 relative"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="nav-link-underline"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-navy-800 backdrop-blur-md rounded-2xl p-4 border border-blue-500/20 shadow-lg">
              <div className="flex flex-col space-y-4">
                {['about', 'events', 'team', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-500/10 rounded-lg transition-colors duration-300"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-text-glow">
            CBIT Cyber Security Club
          </h1>
          <p className="text-blue-400/80 text-xl md:text-2xl max-w-3xl mx-auto typing-animation">
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
      </div>

      {/* About Section */}
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

      {/* Events Section */}
      <section id="events" className="py-32 bg-navy-900/50 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 flex items-center glitch-text">
            <Calendar className="mr-2" /> Events
          </h2>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group cursor-pointer"
              >
                <div className={`border border-blue-500/30 rounded-lg p-6
                              transform hover:scale-[1.02] transition-all duration-300
                              hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]
                              ${event.isCollab ? 'bg-gradient-to-br from-navy-800/50 to-blue-900/30' : 'bg-navy-800/30'} 
                              backdrop-blur-sm`}>
                  {event.isCollab && (
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                        COLLABORATION
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-blue-400/60 mb-2">{event.date}</p>
                  <p className="text-blue-400/80">{event.description}</p>
                  {event.isCollab && (
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {event.subEvents.map((subEvent, index) => (
                        <div key={index} className="text-center">
                          <subEvent.icon className="w-5 h-5 mx-auto mb-1 text-blue-400/60" />
                          <span className="text-xs text-blue-400/60">{subEvent.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex items-center text-blue-400/60 group-hover:text-blue-400 transition-colors">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 flex items-center glitch-text">
            <Users className="mr-2" /> Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((member, index) => (
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

      {/* Contact Section & Footer Combined */}
      <section id="contact" className="py-20 bg-navy-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 flex items-center justify-center glitch-text">
            <Mail className="mr-2" /> Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="p-6 border border-blue-500/30 rounded-lg bg-navy-800/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
              <Mail className="w-8 h-8 mb-4 mx-auto text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:contact@cbitcyber.club" className="text-blue-400/80 hover:text-blue-400 transition-colors">
                contact@cbitcyber.club
              </a>
            </div>
            <div className="p-6 border border-blue-500/30 rounded-lg bg-navy-800/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
              <Terminal className="w-8 h-8 mb-4 mx-auto text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Discord</h3>
              <a href="https://discord.gg/cbitcyber" target="_blank" rel="noopener noreferrer" className="text-blue-400/80 hover:text-blue-400 transition-colors">
                Join our community
              </a>
            </div>
            <div className="p-6 border border-blue-500/30 rounded-lg bg-navy-800/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
              <Info className="w-8 h-8 mb-4 mx-auto text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-blue-400/80">
                CBIT Campus, Room 42<br />
                Cybersecurity Wing
              </p>
            </div>
          </div>
          <div className="border-t border-blue-500/30 pt-8">
            <p className="text-blue-500/60 hover:text-blue-400 transition-colors duration-300">
              © 2024 CBIT Cyber Security Club. All rights reserved.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .bg-gradient-text {
          background: linear-gradient(to right, #fff, #93c5fd);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .nav-link {
          padding: 0.5rem 0;
        }

        .nav-link-underline {
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, #3b82f6, transparent);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .nav-link:hover .nav-link-underline {
          transform: scaleX(1);
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 15px rgba(59, 130, 246, 0.2); }
          50% { text-shadow: 0 0 30px rgba(59, 130, 246, 0.4); }
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        .typing-animation {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid;
          animation: typing 3.5s steps(40, end),
                     blink-caret .75s step-end infinite;
        }

        .glitch-text {
          position: relative;
        }
        .glitch-text:hover::before,
        .glitch-text:hover::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          text-shadow: 1px 0 #3b82f6;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch 0.5s infinite linear alternate-reverse;
        }

        @keyframes glitch {
          0% {
            clip: rect(44px, 450px, 56px, 0);
            transform: skew(0.5deg);
          }
          100% {
            clip: rect(44px, 450px, 56px, 0);
            transform: skew(-0.5deg);
          }
        }
      `}</style>
    </div>
  );
}

export default App;