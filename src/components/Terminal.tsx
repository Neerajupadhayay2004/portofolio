import React, { useEffect, useRef, useState } from 'react';
import { X, Minus, Square } from 'lucide-react';
import { TerminalLine } from '../types';

const Terminal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const terminalLines: TerminalLine[] = [
    { text: "Welcome to Neeraj's Security Terminal", delay: 500 },
    { text: "Initializing system...", delay: 800 },
    { text: "Loading security modules...", delay: 600 },
    { text: "Checking network connections...", delay: 700 },
    { text: "System ready.", delay: 500 },
    { text: "> ", prompt: true, delay: 200 },
    { text: "whoami", delay: 300 },
    { text: "neeraj-upadhayay --full-stack-developer --cybersecurity-specialist --ai-enthusiast", delay: 800 },
    { text: "> ", prompt: true, delay: 200 },
    { text: "skills --list", delay: 300 },
    { text: "Frontend: HTML/CSS | JavaScript | React", delay: 800 },
    { text: "Backend: Node.js | Python | Java", delay: 800 },
    { text: "Database: MongoDB | MySQL", delay: 800 },
    { text: "Security: Penetration Testing | Ethical Hacking", delay: 800 },
    { text: "AI: Generative AI | AI Security", delay: 800 },
    { text: "> ", prompt: true, delay: 200 },
    { text: "projects --count", delay: 300 },
    { text: "8 projects found:", delay: 500 },
    { text: "1. Hidden Spots Stories", delay: 100 },
    { text: "2. MLM System", delay: 100 },
    { text: "3. Google Home Dev Challenge", delay: 100 },
    { text: "4. Password Strength Checker", delay: 100 },
    { text: "5. Tic Tac Toe Game", delay: 100 },
    { text: "6. Chess Game", delay: 100 },
    { text: "7. TECH BUDDY (Healthcare)", delay: 100 },
    { text: "8. KYC System", delay: 100 },
    { text: "> ", prompt: true, delay: 200, loop: true }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const typeLines = () => {
      if (currentLine >= terminalLines.length) {
        if (!isLooping) {
          setIsLooping(true);
          setCurrentLine(6); // Loop back to after initial setup
        }
        return;
      }

      const line = terminalLines[currentLine];
      const div = document.createElement('div');
      div.className = 'terminal-line mb-1 whitespace-pre-wrap';

      if (line.prompt) {
        const promptSpan = document.createElement('span');
        promptSpan.className = 'text-cyan-400 mr-1';
        promptSpan.textContent = line.text;
        div.appendChild(promptSpan);

        if (line.loop) {
          const cursorSpan = document.createElement('span');
          cursorSpan.className = 'inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1';
          div.appendChild(cursorSpan);
        }
      } else {
        div.textContent = line.text;
      }

      if (terminalBodyRef.current) {
        terminalBodyRef.current.appendChild(div);
        terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
      }

      setCurrentLine(prev => prev + 1);

      if (currentLine < terminalLines.length - 1 || line.loop) {
        setTimeout(typeLines, line.delay);
      }
    };

    const timer = setTimeout(typeLines, 500);
    return () => clearTimeout(timer);
  }, [currentLine, isVisible, isLooping, terminalLines]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 w-80 lg:w-96 h-64 bg-gray-900/95 backdrop-blur-md rounded-2xl border border-cyan-400/30 shadow-[0_0_20px_rgba(0,0,0,0.3)] z-50 overflow-hidden transform transition-all duration-500">
      {/* Terminal Header */}
      <div className="bg-blue-400/10 px-4 py-2 flex items-center justify-between border-b border-white/10">
        <div className="text-cyan-400 font-bold text-sm tracking-wider">
          security-terminal
        </div>
        <div className="flex items-center gap-2">
          <button className="w-3 h-3 bg-green-400 rounded-full hover:opacity-80 transition-opacity"></button>
          <button className="w-3 h-3 bg-yellow-400 rounded-full hover:opacity-80 transition-opacity"></button>
          <button
            onClick={handleClose}
            className="w-3 h-3 bg-red-400 rounded-full hover:opacity-80 transition-opacity"
          ></button>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalBodyRef}
        className="h-full p-4 overflow-y-auto text-cyan-400 font-mono text-sm leading-6 scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent"
        style={{ height: 'calc(100% - 40px)' }}
      >
        {/* Terminal content will be added by useEffect */}
      </div>
    </div>
  );
};

export default Terminal;