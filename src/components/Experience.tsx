import React, { useEffect, useRef } from 'react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-slide-up');
              }, index * 200);
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

  // 3D Cyber Network Visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = 400;

    const nodes = [];
    const connections = [];
    const nodeCount = 30;
    const maxDistance = 150;

    // Initialize nodes with cyber-themed properties
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 4 + 2,
        pulse: Math.random() * Math.PI * 2,
        type: Math.random() > 0.7 ? 'secure' : 'normal'
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Update pulse
        node.pulse += 0.1;

        // Draw node with pulsing effect
        const pulseSize = node.size + Math.sin(node.pulse) * 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        
        if (node.type === 'secure') {
          ctx.fillStyle = `rgba(0, 255, 157, ${0.8 + Math.sin(node.pulse) * 0.2})`;
          ctx.shadowBlur = 15;
          ctx.shadowColor = '#00ff9d';
        } else {
          ctx.fillStyle = `rgba(0, 184, 255, ${0.6 + Math.sin(node.pulse) * 0.2})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#00b8ff';
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j];
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            
            // Animated connection lines
            const gradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y);
            gradient.addColorStop(0, `rgba(0, 255, 157, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(0, 184, 255, ${opacity * 1.5})`);
            gradient.addColorStop(1, `rgba(189, 0, 255, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      // Draw scanning lines effect
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const y = (Math.sin(time + i * 2) * 0.5 + 0.5) * canvas.height;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = `rgba(0, 255, 157, ${0.3 - i * 0.1})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-16 bg-gray-800/70 mx-4 lg:mx-8 my-12 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,255,157,0.1)] hover:border-blue-400/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 to-blue-400/3 -z-10" />
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-cyan-400 tracking-[3px] relative">
          EXPERIENCE & ACHIEVEMENTS
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        </h2>
        
        {/* 3D Cyber Network Visualization */}
        <div className="w-full h-96 mb-12 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/50 to-blue-900/20 relative">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,20,40,0.6) 100%)' }}
          />
          <div className="absolute top-4 left-4 text-cyan-400/60">
            <div className="text-lg font-bold mb-2">🔒 Cyber Security Network</div>
            <div className="text-sm">Real-time threat monitoring simulation</div>
          </div>
          
          {/* Floating security badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <div className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              🛡️ SECURE
            </div>
            <div className="bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              🔍 SCANNING
            </div>
            <div className="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              ⚡ ACTIVE
            </div>
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Enhanced Timeline line with cyber effects */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent relative">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-500 animate-pulse opacity-50"></div>
            {/* Scanning effect */}
            <div className="absolute w-4 h-4 bg-cyan-400 rounded-full left-1/2 transform -translate-x-1/2 animate-bounce shadow-[0_0_20px_rgba(0,255,157,0.5)]" style={{ top: '10%' }}></div>
          </div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`timeline-item opacity-0 transform translate-y-8 relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center group`}
              >
                {/* Enhanced Timeline dot with cyber effects */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-4 border-gray-900 shadow-[0_0_20px_rgba(0,184,255,0.5)] z-10 group-hover:scale-125 transition-all duration-300">
                  <div className="absolute -inset-3 bg-cyan-400/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                </div>
                
                {/* Content with enhanced cyber styling */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-800/70 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 hover:transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,255,157,0.2)] relative overflow-hidden group">
                    {/* Cyber grid overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                         style={{
                           backgroundImage: `
                             linear-gradient(rgba(0,255,157,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0,255,157,0.1) 1px, transparent 1px)
                           `,
                           backgroundSize: '20px 20px'
                         }}>
                    </div>
                    
                    {/* Scanning line effect */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="text-cyan-400 font-bold mb-2 text-lg tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                        {experience.period}
                        {experience.id === 'ethical-hacking' && (
                          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">🔴 LIVE</span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-200 tracking-wider border-b border-blue-400/20 pb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {experience.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                        {experience.description}
                      </p>
                      
                      {/* Achievement badges */}
                      {experience.id === 'ethical-hacking' && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold">
                            🎯 TOP 15% CTF
                          </span>
                          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                            🛡️ PENETRATION TESTING
                          </span>
                          <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold">
                            🔐 WEB EXPLOITATION
                          </span>
                        </div>
                      )}
                      
                      {experience.id === 'hackathon-lead' && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold">
                            🏆 2ND PLACE
                          </span>
                          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                            ⛓️ BLOCKCHAIN
                          </span>
                          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                            🔒 SECURITY
                          </span>
                        </div>
                      )}
                      
                      {experience.id === 'cyber-simulations' && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                            🏢 AIG SHIELDS UP
                          </span>
                          <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold">
                            🏦 ANZ CYBER SEC
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-xl border border-cyan-400/0 group-hover:border-cyan-400/30 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Cyber Stats Dashboard */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/70 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300 group">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">8+</div>
              <div className="text-gray-300">Projects Completed</div>
              <div className="w-full h-2 bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/70 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-green-400/30 transition-all duration-300 group">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">15%</div>
              <div className="text-gray-300">Top CTF Ranking</div>
              <div className="w-full h-2 bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/70 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300 group">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">9+</div>
              <div className="text-gray-300">Certifications</div>
              <div className="w-full h-2 bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;