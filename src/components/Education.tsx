import React, { useEffect, useRef } from 'react';
import { education } from '../data/portfolio';
import CyberVisualization from './CyberVisualization';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll('.education-step');
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('animate-slide-up');
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

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-16 bg-gray-800/70 mx-4 lg:mx-8 my-12 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,255,157,0.1)] hover:border-blue-400/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 to-blue-400/3 -z-10" />
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-cyan-400 tracking-[3px] relative">
          EDUCATION
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        </h2>
        
        {/* Network Topology Visualization */}
        <div className="w-full h-64 mb-12 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/80 to-purple-900/20 relative">
          <CyberVisualization type="network" />
          <div className="absolute top-4 left-4 text-cyan-400/80">
            <div className="text-lg font-bold mb-2">🎓 EDUCATION NETWORK</div>
            <div className="text-sm">Knowledge distribution system</div>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              B.TECH CSE
            </div>
            <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              CYBERSECURITY
            </div>
          </div>
        </div>
        
        {/* Education Path */}
        <div className="relative">
          {/* Enhanced connection line for desktop */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-500 to-yellow-400 bg-[length:300%_300%] animate-gradient-shift mx-16 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-500 to-yellow-400 rounded-full animate-pulse opacity-50"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            {education.map((edu, index) => (
              <div key={edu.id} className="education-step opacity-0 transform translate-y-8 flex flex-col items-center relative group">
                {/* Enhanced Dot with cyber effects */}
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-6 relative shadow-[0_0_20px_rgba(0,184,255,0.5)] hover:transform hover:scale-150 transition-all duration-500 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] z-10 group">
                  <div className="absolute -inset-3 bg-blue-400/20 rounded-full animate-ping group-hover:bg-cyan-400/30"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse group-hover:from-cyan-400 group-hover:to-blue-400"></div>
                  
                  {/* Academic level indicator */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full text-black text-xs flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                
                {/* Education Info with enhanced styling */}
                <div className="bg-gray-800/70 p-6 rounded-xl text-center w-full border border-white/10 backdrop-blur-sm hover:border-blue-400/50 hover:transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,255,157,0.2)] relative overflow-hidden group">
                  {/* Cyber grid overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
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
                    <div className="text-cyan-400 font-bold mb-2 text-lg tracking-wider flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                      {edu.year}
                      {edu.percentage && (
                        <span className="block text-sm font-normal text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                          {edu.percentage}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-200 tracking-wider group-hover:text-cyan-400 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors duration-300">
                      {edu.school}
                    </p>

                    {/* Special indicators for current education */}
                    {edu.id === 'btech' && (
                      <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold">
                          🎯 CURRENT
                        </span>
                        <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold">
                          🔒 CYBERSECURITY
                        </span>
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                          💻 CSE
                        </span>
                      </div>
                    )}

                    {/* Achievement indicators */}
                    {edu.percentage && parseFloat(edu.percentage) > 70 && (
                      <div className="mt-3">
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                          🏆 HIGH ACHIEVER
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-xl border border-cyan-400/0 group-hover:border-cyan-400/30 transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Progress Visualization */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-400/20">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-400 flex items-center justify-center gap-3">
            <span className="animate-pulse">🎓</span>
            ACADEMIC JOURNEY
            <span className="animate-pulse">🎓</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-500/10 rounded-xl border border-blue-400/20 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">2023-2027</div>
              <div className="text-gray-300">B.Tech Duration</div>
              <div className="text-sm text-blue-300 mt-2">Computer Science & Cybersecurity</div>
              <div className="w-full h-2 bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-400/20 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl font-bold text-green-400 mb-2">72.8%</div>
              <div className="text-gray-300">Best Performance</div>
              <div className="text-sm text-green-300 mt-2">10th Grade CBSE</div>
              <div className="w-full h-2 bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse" style={{ width: '73%' }}></div>
              </div>
            </div>
            <div className="text-center p-4 bg-purple-500/10 rounded-xl border border-purple-400/20 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-gray-300">Education Levels</div>
              <div className="text-sm text-purple-300 mt-2">10th, 12th, B.Tech</div>
              <div className="w-full h-2 bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;