import React, { useEffect, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { certifications } from '../data/portfolio';

const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.cert-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={48} /> : <LucideIcons.Award size={48} />;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'ai':
        return 'from-orange-400 to-yellow-400';
      case 'security':
        return 'from-cyan-400 to-blue-400';
      default:
        return 'from-green-400 to-blue-400';
    }
  };

  const groupedCerts = certifications.reduce((acc, cert) => {
    const key = Math.floor(acc.total / 3);
    if (!acc[key]) acc[key] = [];
    acc[key].push(cert);
    acc.total++;
    return acc;
  }, { total: 0 } as Record<string, typeof certifications>);

  delete groupedCerts.total;

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-16 bg-gray-800/70 mx-4 lg:mx-8 my-12 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,255,157,0.1)] hover:border-blue-400/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 to-blue-400/3 -z-10" />
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-cyan-400 tracking-[3px] relative">
          CERTIFICATIONS
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        </h2>
        
        <div className="space-y-12">
          {Object.values(groupedCerts).map((row, rowIndex) => (
            <div key={rowIndex} className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
              {row.map((cert) => (
                <div
                  key={cert.id}
                  className="cert-card opacity-0 transform translate-y-8 w-full max-w-sm bg-gray-800/70 rounded-2xl border border-white/10 overflow-hidden hover:transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,255,157,0.1)] hover:border-blue-400/50 backdrop-blur-sm group"
                >
                  {/* 3D Flip Container */}
                  <div className="h-48 relative overflow-hidden perspective-1000">
                    <div className="w-full h-full transition-transform duration-1000 transform-style-preserve-3d group-hover:rotate-y-180">
                      {/* Front */}
                      <div className="absolute inset-0 bg-blue-400/5 flex flex-col items-center justify-center backface-hidden">
                        <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${getTypeColor(cert.type || 'development')} flex items-center justify-center text-black mb-4 shadow-[0_0_20px_rgba(0,184,255,0.2)] group-hover:scale-110 transition-transform duration-300`}>
                          {getIcon(cert.icon)}
                        </div>
                        <p className="text-cyan-400 font-bold tracking-wider text-center px-4">
                          {cert.organization}
                        </p>
                      </div>
                      
                      {/* Back */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(cert.type || 'development')} flex items-center justify-center p-6 text-black transform rotate-y-180 backface-hidden`}>
                        <p className="text-center font-bold leading-relaxed text-sm">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-cyan-400 tracking-wider">
                      {cert.title}
                    </h3>
                    <p className="text-blue-400 font-bold mb-4 tracking-wider">
                      {cert.organization}
                    </p>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {cert.description}
                    </p>
                    
                    {cert.type && (
                      <div className="mt-4">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${getTypeColor(cert.type)} text-black`}>
                          {cert.type.toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;