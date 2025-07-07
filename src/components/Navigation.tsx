import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/98 backdrop-blur-md border-b border-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center py-4">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-6 py-2 text-cyan-400 font-bold text-sm uppercase tracking-wider border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:text-black hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)] group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-500" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between py-4">
          <span className="text-cyan-400 font-bold text-lg">NEERAJ</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-400 p-2 rounded-lg border border-white/10 hover:bg-cyan-400/20 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-md border-b border-white/10 shadow-lg">
            <ul className="py-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-6 py-3 text-cyan-400 font-bold text-sm uppercase tracking-wider hover:bg-cyan-400/20 hover:text-cyan-300 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;