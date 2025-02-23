import React from 'react';
import { useParams, Link } from 'react-router-dom';

const events = [
  {
    title: "Ethical Hacking Workshop",
    date: "March 15, 2024",
    description: "Learn the basics of ethical hacking and penetration testing.",
    banner: "https://example.com/ethical-hacking-banner.jpg"
  },
  {
    title: "Cybersecurity Seminar",
    date: "April 5, 2024",
    description: "Industry experts share insights on latest security trends.",
    banner: "https://example.com/cybersecurity-seminar-banner.jpg"
  }
];

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const event = events[parseInt(id)];

  return (
    <div className="min-h-screen bg-gradient text-blue-300 font-mono">
      <nav className="fixed top-0 w-full bg-navy-900/90 border-b border-blue-500/30 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
              <img src="/logo.png" alt="CCC Logo" className="w-8 h-8" />
              <span className="text-xl font-bold group-hover:text-blue-400 transition-colors">CCC</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-navy-900/90 border border-blue-500/30 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <p className="text-blue-400/80 mb-4">{event.date}</p>
          <img src={event.banner} alt={event.title} className="w-full h-auto mb-8 rounded-lg" />
          <p className="text-blue-400/80 leading-relaxed">{event.description}</p>
          <div className="mt-8 flex space-x-4">
            <Link to="/" className="px-6 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg border border-blue-500/30 
                                   hover:border-blue-500/60 transition-all duration-300">
              Back to Home
            </Link>
            <button className="px-6 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg border border-blue-500/30 
                              hover:border-blue-500/60 transition-all duration-300">
              Register
            </button>
          </div>
        </div>
      </div>

      <footer className="border-t border-blue-500/30 py-8">
        <div className="container mx-auto px-4 text-center text-blue-500/60">
          <p className="hover:text-blue-400 transition-colors duration-300">
            © 2024 CBIT Cyber Security Club. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        .bg-gradient {
          background: radial-gradient(
            circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%),
            #1e3a8a 0%,
            #0f172a 30%,
            #020617 100%
          );
        }
      `}</style>
    </div>
  );
};

export default EventPage;
