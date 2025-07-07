import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { projects } from '../data/portfolio';
import CyberVisualization from './CyberVisualization';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
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
    return Icon ? <Icon size={64} /> : <LucideIcons.Code size={64} />;
  };

  const getProjectTypeColor = (technologies: string[]) => {
    if (technologies.some(tech => tech.toLowerCase().includes('security'))) {
      return 'from-red-400 to-orange-400';
    }
    if (technologies.some(tech => tech.toLowerCase().includes('ai'))) {
      return 'from-purple-400 to-pink-400';
    }
    return 'from-cyan-400 to-blue-400';
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 bg-gray-800/70 mx-4 lg:mx-8 my-12 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,255,157,0.1)] hover:border-blue-400/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 to-blue-400/3 -z-10" />
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-cyan-400 tracking-[3px] relative">
          PROJECTS
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        </h2>
        
        {/* Security Network Visualization */}
        <div className="w-full h-64 mb-12 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/80 to-blue-900/20 relative">
          <CyberVisualization type="security" />
          <div className="absolute top-4 left-4 text-cyan-400/80">
            <div className="text-lg font-bold mb-2">🛡️ SECURITY PROJECTS</div>
            <div className="text-sm">Advanced protection systems active</div>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              8 PROJECTS
            </div>
            <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              FULL STACK
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card opacity-0 transform translate-y-8 bg-gray-800/70 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-3 hover:scale-105 hover:shadow-[0_15px_30px_rgba(0,255,157,0.2)] hover:border-blue-400/50 backdrop-blur-sm group relative"
            >
              {/* Cyber grid overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-10"
                   style={{
                     backgroundImage: `
                       linear-gradient(rgba(0,255,157,0.1) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(0,255,157,0.1) 1px, transparent 1px)
                     `,
                     backgroundSize: '20px 20px'
                   }}>
              </div>

              {/* Scanning line effect */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 z-20"></div>

              <div className="relative h-48 bg-blue-400/5 flex items-center justify-center text-blue-400 overflow-hidden">
                <div className="z-10 transform group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400 relative">
                  {getIcon(project.icon)}
                  
                  {/* Project type indicator */}
                  {project.technologies.some(tech => tech.toLowerCase().includes('security')) && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  )}
                  {project.technologies.some(tech => tech.toLowerCase().includes('ai')) && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                  )}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
              </div>
              
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-3 text-cyan-400 tracking-wider flex items-center gap-2">
                  {project.technologies.some(tech => tech.toLowerCase().includes('security')) && (
                    <span className="text-red-400">🔒</span>
                  )}
                  {project.technologies.some(tech => tech.toLowerCase().includes('ai')) && (
                    <span className="text-purple-400">🤖</span>
                  )}
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full border border-white/10 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_5px_10px_rgba(0,184,255,0.2)] ${
                        tech.toLowerCase().includes('security') 
                          ? 'bg-red-400/10 text-red-400 hover:bg-red-400 hover:text-black' 
                          : tech.toLowerCase().includes('ai')
                          ? 'bg-purple-400/10 text-purple-400 hover:bg-purple-400 hover:text-black'
                          : 'bg-blue-400/10 text-cyan-400 hover:bg-blue-400 hover:text-black'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 font-bold text-sm rounded-full border border-white/10 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)] hover:transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group/btn ${
                        project.technologies.some(tech => tech.toLowerCase().includes('security'))
                          ? 'bg-gradient-to-r from-red-400 to-orange-400 text-black'
                          : 'bg-gradient-to-r from-cyan-400 to-blue-400 text-black'
                      }`}
                    >
                      <Github size={16} />
                      <span className="relative z-10">View Code</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transform -translate-x-full group-hover/btn:translate-x-full transition-all duration-500" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-cyan-400 font-bold text-sm rounded-full border border-cyan-400/30 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_rgba(0,255,157,0.3)] hover:transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Project status indicators */}
                <div className="mt-4 flex gap-2">
                  {project.id === 'password-checker' && (
                    <div className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-bold">
                      🔒 SECURITY
                    </div>
                  )}
                  {project.id === 'kyc-system' && (
                    <div className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-bold">
                      🚧 IN DEVELOPMENT
                    </div>
                  )}
                  {project.id === 'tech-buddy' && (
                    <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-bold">
                      🏥 HEALTHCARE
                    </div>
                  )}
                </div>
              </div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/0 group-hover:border-cyan-400/30 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-gray-800/70 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300 group text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">8</div>
            <div className="text-gray-300">Total Projects</div>
            <div className="w-full h-1 bg-gray-700 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" style={{ width: '100%' }}></div>
            </div>
          </div>
          
          <div className="bg-gray-800/70 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-red-400/30 transition-all duration-300 group text-center">
            <div className="text-3xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">3</div>
            <div className="text-gray-300">Security Projects</div>
            <div className="w-full h-1 bg-gray-700 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-pulse" style={{ width: '75%' }}></div>
            </div>
          </div>
          
          <div className="bg-gray-800/70 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-green-400/30 transition-all duration-300 group text-center">
            <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
            <div className="text-gray-300">Full Stack Apps</div>
            <div className="w-full h-1 bg-gray-700 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse" style={{ width: '85%' }}></div>
            </div>
          </div>
          
          <div className="bg-gray-800/70 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300 group text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">2</div>
            <div className="text-gray-300">AI Integration</div>
            <div className="w-full h-1 bg-gray-700 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;