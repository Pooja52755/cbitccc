"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

export const TerminalInteraction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    'CCC Terminal v1.0.0',
    'Type "help" to see available commands',
    ''
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: 'Available commands: help, about, clear, events, team, contact, hack',
    about: 'CBIT Cyber Security Club (CCC) is dedicated to promoting cybersecurity awareness and skills development.',
    events: 'Current events: Debugging Duel, CTF Challenge, Spell The Box, Cyber Imposter',
    team: 'Team: Manobhiram (President), Gayatri (Vice President), and other dedicated members',
    contact: 'Follow us: Instagram: @ccc_cbit, LinkedIn: CBIT Cybersecurity Club',
    clear: 'CLEAR_COMMAND',
    hack: 'HACK_SIMULATION'
  };

  const simulateHacking = async () => {
    const hackingLines = [
      'Initializing hack sequence...',
      'Scanning target systems...',
      'Bypassing firewall...',
      'Accessing mainframe...',
      'Decrypting credentials...',
      'Extracting data packets...',
      'Covering tracks...',
      'Exfiltrating data...',
      'Hack complete! Just kidding! This was only a simulation :)'
    ];
    
    setOutput(prev => [...prev, '> hack', '']);
    
    for (const line of hackingLines) {
      setOutput(prev => [...prev, line]);
      await new Promise(resolve => setTimeout(resolve, 400));
    }
    
    setOutput(prev => [...prev, '']);
  };

  const handleCommand = (cmd: string) => {
    setInput('');
    
    if (!cmd) return;
    
    const normalizedCmd = cmd.toLowerCase().trim();
    
    if (normalizedCmd === 'clear') {
      setOutput(['CCC Terminal v1.0.0', 'Type "help" to see available commands', '']);
      return;
    }
    
    if (normalizedCmd === 'hack') {
      simulateHacking();
      return;
    }
    
    const response = commands[normalizedCmd] || `Command not found: ${cmd}`;
    setOutput(prev => [...prev, `> ${cmd}`, response, '']);
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-5 right-5 p-3 bg-navy-800 border border-blue-500/30 rounded-full hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all z-10"
      >
        <Terminal className="w-6 h-6 text-blue-400" />
      </button>
      
      {isVisible && (
        <div 
          className="fixed bottom-20 right-5 w-80 md:w-96 h-96 bg-navy-900/95 backdrop-blur-md border border-blue-500/30 rounded-md shadow-lg overflow-hidden z-10 animate-terminal-appear"
        >
          <div className="flex items-center justify-between p-2 bg-navy-800 border-b border-blue-500/30">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-mono text-blue-400/90">CCC Terminal</span>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-blue-400/70 hover:text-blue-400"
            >
              ×
            </button>
          </div>
          
          <div 
            ref={terminalRef}
            className="p-3 h-[calc(100%-76px)] overflow-y-auto font-mono text-sm text-blue-400/90 font-medium"
            onClick={() => inputRef.current?.focus()}
          >
            {output.map((line, i) => (
              <div key={i}>
                {line === '' ? <br /> : line}
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 flex items-center border-t border-blue-500/30 bg-navy-800/70">
            <span className="pl-3 text-blue-400 font-mono">{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleCommand(input);
                }
              }}
              className="flex-1 p-3 bg-transparent border-none outline-none text-blue-300 font-mono text-sm"
              autoFocus
            />
          </div>
        </div>
      )}
    </div>
  );
};
