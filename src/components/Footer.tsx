import React from 'react';
import { Github, Linkedin, Twitter, HardDrive, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: contactInfo.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: contactInfo.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter'
    },
    {
      icon: HardDrive,
      href: '#',
      label: 'HackerRank'
    },
    {
      icon: MessageCircle,
      href: '#',
      label: 'Discord'
    }
  ];

  return (
    <footer className="bg-gray-900/98 backdrop-blur-md text-cyan-400 text-center py-12 mt-12 border-t border-white/10 shadow-[0_-5px_15px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold mb-4 tracking-wider">NEERAJ UPADHAYAY</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer | Cybersecurity Specialist | AI Enthusiast passionate about building secure applications and protecting digital systems.
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-400/10 border border-white/10 rounded-full flex items-center justify-center text-cyan-400 text-xl hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:text-black hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,184,255,0.3)] relative overflow-hidden group"
              >
                <Icon size={20} className="relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-500" />
              </a>
            );
          })}
        </div>
        
        <div className="text-blue-400 text-sm">
          <p className="mb-2">© 2024 Neeraj Upadhayay. All rights reserved.</p>
          <p>Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;