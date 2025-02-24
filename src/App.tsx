import React, { useState, useEffect } from 'react';
import { Terminal, Users, Calendar, Info, Mail, ChevronRight, Shield, ExternalLink, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    // Interactive background effect with continuous animation
    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetX = 0.5;
    let targetY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Smooth animation for background
    function animate() {
      // Smooth interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Autonomous movement when mouse is not moving
      if (Math.abs(targetX - mouseX) < 0.001) {
        targetX = 0.5 + Math.cos(Date.now() * 0.001) * 0.3;
      }
      if (Math.abs(targetY - mouseY) < 0.001) {
        targetY = 0.5 + Math.sin(Date.now() * 0.001) * 0.3;
      }

      document.documentElement.style.setProperty('--mouse-x', mouseX.toString());
      document.documentElement.style.setProperty('--mouse-y', mouseY.toString());
      
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient text-white font-sans">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 p-4 z-50">
        <nav className="max-w-6xl mx-auto bg-navy-900/80 backdrop-blur-md rounded-full px-6 py-3">
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
            <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-navy-900/95 backdrop-blur-md rounded-2xl p-4 border border-blue-500/20">
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
        <div className="absolute inset-0 bg-hacker opacity-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
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
      <section id="events" className="py-32 bg-navy-900 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 flex items-center glitch-text">
            <Calendar className="mr-2" /> Events
          </h2>

          {/* Sudhee 2k25 Feature */}
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

          {/* Other Events */}
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

      {/* Team Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-navy-900 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 flex items-center glitch-text">
            <Mail className="mr-2" /> Contact Us
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="group">
                <label className="block mb-2 group-hover:text-blue-400 transition-colors duration-300">Name</label>
                <input
                  type="text"
                  className="w-full bg-navy-800 border border-blue-500/30 rounded-lg p-3
                           focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)]
                           transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              <div className="group">
                <label className="block mb-2 group-hover:text-blue-400 transition-colors duration-300">Email</label>
                <input
                  type="email"
                  className="w-full bg-navy-800 border border-blue-500/30 rounded-lg p-3
                           focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)]
                           transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="group">
                <label className="block mb-2 group-hover:text-blue-400 transition-colors duration-300">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-navy-800 border border-blue-500/30 rounded-lg p-3
                           focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)]
                           transition-all duration-300"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500/20 hover:bg-blue-500/30 px-6 py-3 rounded-lg
                         transition-all duration-300 border border-blue-500/30 hover:border-blue-500/60
                         hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] group"
              >
                <span className="group-hover:tracking-wider transition-all duration-300">SEND_MESSAGE</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/30 py-8">
        <div className="container mx-auto px-4 text-center text-blue-500/60">
          <p className="hover:text-blue-400 transition-colors duration-300">
            © 2024 CBIT Cyber Security Club. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        :root {
          --mouse-x: 0.5;
          --mouse-y: 0.5;
        }

        .bg-gradient {
          background-color: #0a192f;
          position: relative;
          overflow: hidden;
        }

        .bg-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(90deg, 
              rgba(10, 25, 47, 0) 0%,
              rgba(62, 84, 172, 0.2) calc(var(--mouse-x) * 100%),
              rgba(10, 25, 47, 0) 100%),
            linear-gradient(180deg,
              rgba(10, 25, 47, 0) 0%,
              rgba(62, 84, 172, 0.2) calc(var(--mouse-y) * 100%),
              rgba(10, 25, 47, 0) 100%);
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .bg-gradient::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: calc(var(--mouse-x) * 10px) calc(var(--mouse-y) * 10px);
          z-index: 1;
          pointer-events: none;
          transition: background-position 0.2s ease;
          animation: gridFloat 20s linear infinite;
        }

        @keyframes gridFloat {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }

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
          background: linear-gradient(to right, transparent, #fff, transparent);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .nav-link:hover .nav-link-underline {
          transform: scaleX(1);
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 15px rgba(255, 255, 255, 0.2); }
          50% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.4); }
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

        .bg-hacker {
          background-image: url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80');
          background-size: cover;
          background-position: center;
          filter: brightness(0.3) contrast(1.2);
        }

        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: calc(var(--mouse-x) * 10px) calc(var(--mouse-y) * 10px);
        }
      `}</style>
    </div>
  );
}

export default App;