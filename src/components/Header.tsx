import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../data/portfolio';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gray-900/98 text-cyan-400 py-12 text-center overflow-hidden border-b border-white/10 shadow-[0_0_30px_rgba(0,255,157,0.1)]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 via-transparent to-purple-500/3 z-0" />
      <div 
        className="absolute inset-0 opacity-30 z-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'><rect width=\'5\' height=\'5\' fill=\'%2300ff9d\' fill-opacity=\'0.1\'/></svg>")'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-[3px] bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:300%_300%]">
          NEERAJ UPADHAYAY
        </h1>
        
        <div className="relative inline-block">
          <p className="text-xl md:text-2xl mb-6 text-blue-400 tracking-[2px] font-medium">
            FULL STACK DEVELOPER | CYBERSECURITY SPECIALIST | AI ENTHUSIAST
          </p>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-500 via-orange-400 to-yellow-400 animate-gradient-shift bg-[length:300%_300%] rounded-full" />
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6">
          <div className="flex items-center gap-2 bg-blue-400/10 px-4 py-2 rounded-full border border-white/10 hover:bg-cyan-400/20 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] backdrop-blur-sm">
            <Phone size={16} />
            <span className="text-sm">{contactInfo.phone}</span>
          </div>
          
          <div className="flex items-center gap-2 bg-blue-400/10 px-4 py-2 rounded-full border border-white/10 hover:bg-cyan-400/20 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] backdrop-blur-sm">
            <Mail size={16} />
            <span className="text-sm">{contactInfo.email}</span>
          </div>
          
          <div className="flex items-center gap-2 bg-blue-400/10 px-4 py-2 rounded-full border border-white/10 hover:bg-cyan-400/20 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] backdrop-blur-sm">
            <MapPin size={16} />
            <span className="text-sm">{contactInfo.location}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;