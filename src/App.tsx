
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Users, Calendar, Info, Mail, ChevronRight, Shield, ExternalLink, Menu, X, ArrowLeft, Box, Users2, Instagram, Linkedin } from 'lucide-react';
import { LampContainer } from './components/ui/lamp';
import { motion } from 'framer-motion';
import { GlitchCard } from './components/ui/glitch-card';
import { TerminalInteraction } from './components/ui/terminal-interaction';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showPastEvents, setShowPastEvents] = useState(false);

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
      const numPoints = window.innerWidth < 768 ? 50 : 150; // Reduced points for mobile view
      for (let i = 0; i < numPoints; i++) {
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

          const maxDistance = window.innerWidth < 768 ? 100 : 180; // Reduced connection distance for mobile view

          if (distance < maxDistance) { // Increased connection distance
            // Calculate opacity based on distance from mouse
            const mouseDistance = Math.sqrt(
              Math.pow(mouseX - point.x, 2) + Math.pow(mouseY - point.y, 2)
            );
            const opacity = mouseDistance < 250 ? 
              0.5 * (1 - mouseDistance / 250) : 
              0.15;

            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = Math.max(0.5, 2 * (1 - distance / maxDistance)); // Varying line width
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

    // Enhanced console flag implementation
    console.log("%cCBIT Cyber Security Club - Debug Console", "color: #3b82f6; font-size: 20px; font-weight: bold;");
    console.log("%cHint: Look through the console messages carefully. Some things might be hidden in plain sight.", "color: #60a5fa; font-style: italic;");
    
    // Create a sequence of decoy messages
    setTimeout(() => {
      console.log("%cDebug: Checking security protocols...", "color: #64748b");
    }, 1000);
    
    setTimeout(() => {
      console.log("%cDebug: Initializing system...", "color: #64748b");
    }, 2000);
    
    setTimeout(() => {
      console.log("%cDebug: All systems operational", "color: #64748b");
    }, 4000);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      canvas.remove();
    };
  }, []);

  const events = {
    upcoming: [
      {
        id: 'tectasy-2k25',
        title: "CCC × Tectasy 2k25",
        date: "March 4-5, 2024",
        image: "/ctf.png", // Add event image
        description: "A two-day cybersecurity extravaganza featuring multiple challenging events.",
        isCollab: true,
        subEvents: [
          {
            title: "Capture The Flag",
            shortDescription: "Test your hacking skills in this intense CTF competition.",
            description: `Ready to test your cybersecurity skills? Our CTF Challenge features exciting challenges in cryptography, web security, reverse engineering, forensics, and more!

**Team Size:** 2 members
**Venue:** IT LABS 5 and 6
**Registration Fee:** 
• ₹49 per person
• ₹99 per team

**Prizes:**
• 🥇 Winner: ₹1500
• 🥈 Runner-up: ₹500`,
            icon: Box,
            image: "/ctf.png" // Updated image path
          },
          {
            title: "Spell The Box",
            description: `Wands at the ready! ⚡✨ The Spell Box event is a magical journey filled with Hogwarts vibes, enchanting quizzes, and spellbinding challenges!

Registration Fee:
₹29/- Per person
₹49/- Per team of 2

Venue: Near Library Lane`,
            icon: Box,
            image: "/spellbox.png" // Added image path
          },
          {
            title: "Cyber Imposter",
            description: `Step into the world of deception, deduction, and cybersecurity!

Round 1: Imposter Hunt – Unmask the fake teammate
Round 2: Hacker Among Us – Crack ciphers, decode messages, and defend your system

Team Size: 4 Members
Open to: 1st & 2nd Years
Venue: IT Block (L Block)
Date: March 4-5, 2024`,
            icon: Users2,
            image: "/cyberimposter.png" // Added image path
          }
        ],
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSddT-cmUEd8I4Q7N2RbSLIpFzlhi4VF2V9ZzKmIaQwtq4QweA/viewform"
      }
    ],
    past: [
      {
        id: 'debugging-duel',
        title: "Debugging Duel",
        date: "October 3, 2024",
        description: "In a world full of threats… only the smartest will survive.",
        image: "/debugging-duel.jpg", // Add an image if you have one
        fullDescription: `Greetings from CCC!
Get Ready for The *Debugging Duel* 🔐👨🏻‍💻
Are you passionate about coding, cryptography, and cybersecurity? Then this is the challenge for you! 💻⚡

🛠️ Event: Debugging Duel
🗓 Date: 03rd October 2024 (Thursday)
🏆 Levels: 3 exciting rounds of programming, cryptography, and cybersecurity challenges!
💰 Registration Fee: Absolutely FREE!
🔗 Register Now: https://forms.gle/3EWQRh7UH3RnxYLb6

For more details:
Manobhiram- 9391468489
Gayatri- 7680871908

The Debugging Duel is here to test your coding, cryptography, and debugging skills across 3 exciting levels! Do you have what it takes to rise to the top?`,
        registerLink: "https://forms.gle/3EWQRh7UH3RnxYLb6",
      },
      {
        id: 'ethical-hacking',
        title: "Ethical Hacking Workshop",
        date: "January 15, 2024",
        image: "/ethical-hacking.jpg",
        description: "Learn the basics of ethical hacking and penetration testing.",
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
    ]
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 100; // Adjust this value based on your header height
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const EventModal = ({ event, subEvent, onClose }) => {
    const modalRef = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    return (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 mt-16">
        <div ref={modalRef} className="bg-navy-900 border border-blue-500/30 rounded-lg max-w-2xl w-full">
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
            <h3 className="text-3xl font-bold mb-4">{subEvent ? subEvent.title : event.title}</h3>
            <p className="text-blue-400/80 mb-6 text-lg">{event.date}</p>
            
            {subEvent ? (
              <div className="prose prose-invert mb-8">
                <p className="whitespace-pre-line text-blue-400/80 text-lg leading-relaxed">
                  {subEvent.description}
                </p>
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
  };

  return (
    <div className="min-h-screen bg-navy-900 text-white font-sans">
      {selectedEvent && (
        <EventModal event={selectedEvent.event} subEvent={selectedEvent.subEvent} onClose={() => setSelectedEvent(null)} />
      )}

      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 p-4 z-50">
        <nav className="max-w-6xl mx-auto bg-navy-800 rounded-full px-6 py-3 shadow-lg border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <img src="/cbitccc.png" alt="CBITCCC Logo" className="w-12 h-10" />
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
          {/* Hint: Check the main HTML source (Ctrl+U) for development secrets */}
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
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center glitch-text">
            <Info className="mr-2" /> About CCC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 bg-navy-800/50 rounded-lg border border-blue-500/30">
            <div className="space-y-6">
              <p className="text-blue-400/80 leading-relaxed text-lg">
                The CBIT Cyber Security Club (CCC) is a student-led organization dedicated to promoting cybersecurity awareness
                and skills development. We organize workshops, competitions, and seminars to help students explore the fascinating
                world of information security.
              </p>
              <p className="text-blue-400/80 leading-relaxed text-lg mt-4" id="secret-paragraph">
                Our club focuses on cybersecurity fundamentals, offering hands-on experience with real-world defense techniques. We believe in learning by exploring and solving challenges together as a team.
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
      <section id="events" className="py-32 bg-navy-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 flex items-center justify-center glitch-text">
            <Calendar className="mr-2" /> Events
          </h2>
          <LampContainer className="min-h-fit py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="container mx-auto px-4 relative z-50 mt-2" // Changed from mt-20 to mt-10
            >
              <div className="text-center mb-16">
                <h3 className="text-5xl font-extrabold text-blue-400 animate-text-glow mb-4">
                  SUDHEE 2k25
                </h3>
                <h4 className="text-3xl font-bold text-blue-300">
                  CBITCCC X TECTASY 2k25
                </h4>
              </div>

              {/* Events Toggle */}
              <div className="flex justify-center mb-12 gap-4">
                <button
                  onClick={() => setShowPastEvents(false)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                    !showPastEvents ? 'bg-blue-500/30 text-white' : 'text-blue-400/60'
                  }`}
                >
                  Upcoming Events
                </button>
                <button
                  onClick={() => setShowPastEvents(true)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                    showPastEvents ? 'bg-blue-500/30 text-white' : 'text-blue-400/60'
                  }`}
                >
                  Past Events
                </button>
              </div>

              {!showPastEvents ? (
                /* Upcoming Events */
                <div className="mb-16">
                  {/* Tectasy Events */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.upcoming[0].subEvents.map((subEvent, index) => (
                      <GlitchCard
                        key={index}
                        className="cursor-pointer"
                        onClick={() => setSelectedEvent({ event: events.upcoming[0], subEvent })}
                      >
                        <div className="border border-blue-500/30 rounded-lg overflow-hidden bg-navy-800/60 h-full">
                          {/* Content remains the same */}
                          <div className="h-48 relative">
                            <img
                              src={subEvent.image}
                              alt={subEvent.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
                          </div>
                          <div className="p-6">
                            {/* Rest of the card content */}
                            <div className="flex items-center mb-3">
                              <subEvent.icon className="w-6 h-6 text-blue-400 mr-3" />
                              <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                                {subEvent.title}
                              </h3>
                            </div>
                            <p className="text-blue-400/80 font-medium">
                              {subEvent.shortDescription || "Learn more about this exciting event!"}
                            </p>
                            <div className="mt-4 flex items-center text-blue-400/60 group-hover:text-blue-400 transition-colors">
                              <span>Learn More</span>
                              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </GlitchCard>
                    ))}
                  </div>
                </div>
              ) : (
                /* Past Events */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {events.past.map((event) => (
                    <div
                      key={event.id}
                      onClick={() => window.open("https://www.instagram.com/ccc_cbit/", "_blank")}
                      className="group cursor-pointer"
                    >
                      <div className={`border border-blue-500/30 rounded-lg p-6
                                    transform hover:scale-[1.02] transition-all duration-300
                                    hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]
                                    ${event.isCollab ? 'bg-gradient-to-br from-navy-800/80 to-blue-900/60' : 'bg-navy-800/60'} 
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
                        <div className="mt-4 flex items-center text-blue-400/60 group-hover:text-blue-400 transition-colors">
                          <span>Learn More</span>
                          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </LampContainer>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 flex items-center justify-center glitch-text">
            <Users className="mr-2" /> Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
            <div className="md:col-span-4 flex justify-center">
              {/* President in the center top */}
              <div className="group w-64">
                <div className="border border-blue-500/30 rounded-lg p-8 text-center bg-navy-800/70
                              transform hover:scale-105 transition-all duration-300
                              hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full
                                  group-hover:border-blue-500/60 transition-colors duration-300"></div>
                    <img
                      src="/president.png"
                      alt="Manobhiram"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    Manobhiram
                  </h3>
                  <p className="text-blue-400/80">President</p>
                </div>
              </div>
            </div>

            {/* Other team members in a row below */}
            {[
              {
                name: "Gayatri",
                role: "Vice President",
                image: "/vicepresident.png"
              },
              {
                name: "Harshitha",
                role: "Joint Secretary",
                image: "JS1.png"
              },
              {
                name: "Bhawdeep",
                role: "Joint Secretary",
                image: "JS2.png"
              },
              {
                name: "Sravani",
                role: "Treasurer",
                image: "Treasurer.png"
              }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="border border-blue-500/30 rounded-lg p-8 text-center bg-navy-800/70
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
      <section id="contact" className="py-32 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 flex items-center justify-center glitch-text">
            <Mail className="mr-2" /> Connect With Us
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto mb-12">
            <a 
              href="https://www.instagram.com/ccc_cbit/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-8 border border-blue-500/30 rounded-lg bg-navy-800/30 
                       hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] 
                       hover:bg-navy-800/50
                       transform hover:scale-105
                       transition-all duration-300 w-64 flex flex-col items-center"
            >
              <Instagram className="w-16 h-16 mb-6 text-pink-400" />
              <h3 className="text-2xl font-bold mb-2">Instagram</h3>
              <p className="text-blue-400/80 text-center">Follow us for updates and cybersecurity content</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/company/cbit-cybersecurity-club/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-8 border border-blue-500/30 rounded-lg bg-navy-800/30 
                       hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] 
                       hover:bg-navy-800/50
                       transform hover:scale-105
                       transition-all duration-300 w-64 flex flex-col items-center"
            >
              <Linkedin className="w-16 h-16 mb-6 text-blue-500" />
              <h3 className="text-2xl font-bold mb-2">LinkedIn</h3>
              <p className="text-blue-400/80 text-center">Connect with us professionally</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-navy-900/50">
        <div className="container mx-auto px-4">
          <div className="border-t border-blue-500/30 pt-8 text-center">
            <p className="text-blue-500/60 hover:text-blue-400 transition-colors duration-300">
              © 2025 CBIT Cyber Security Club. All rights reserved.
            </p>
            <p className="text-xs text-blue-500/30 mt-2">
              © 2025 CBIT Cyber Security Club
            </p>
          </div>
        </div>
      </footer>

      <TerminalInteraction />

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

        /* New animation for team member cards */
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .group:hover {
          animation: floatAnimation 3s ease-in-out infinite;
        }
        
        /* Pulse animation for contact icons */
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .text-pink-400, .text-blue-500 {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes glitch-overlay {
          0% { opacity: 0; }
          5% { opacity: 0.3; }
          10% { opacity: 0; }
          15% { opacity: 0.3; }
          20% { opacity: 0; }
          55% { opacity: 0; }
          60% { opacity: 0.3; }
          65% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .animate-glitch-overlay {
          animation: glitch-overlay 2s infinite;
        }
        
        .glitch-scan {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(59, 130, 246, 0.5);
          opacity: 0.7;
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.8);
          animation: scan 2s linear infinite;
        }
        
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        
        .animate-terminal-appear {
          animation: terminal-appear 0.3s ease-out;
        }
        
        @keyframes terminal-appear {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Secret code word styles */
        .secret-letter {
          transition: color 0.3s ease;
        }
        
        .secret-letter:hover {
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.8);
        }
        
        @keyframes matrix-rain {
          0% { 
            transform: translateY(-100%);
            opacity: 0; 
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateY(1000%);
            opacity: 0; 
          }
        }
        
        .matrix-container {
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        
        .matrix-rain {
          position: absolute;
          color: #0f0;
          font-family: "Courier New", monospace;
          font-size: 1.2rem;
          font-weight: bold;
          animation: matrix-rain 8s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
