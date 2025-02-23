import React from 'react';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
