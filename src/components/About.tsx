import React, { useEffect, useRef } from 'react';
import { skills } from '../data/portfolio';
import CyberVisualization from './CyberVisualization';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach((bar) => {
              const progressBar = bar as HTMLElement;
              const width = progressBar.dataset.width;
              progressBar.style.width = '0%';
              setTimeout(() => {
                progressBar.style.width = width || '0%';
              }, 500);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 bg-gray-800/70 mx-4 lg:mx-8 my-12 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,255,157,0.1)] hover:border-blue-400/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 to-blue-400/3 -z-10" />
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-cyan-400 tracking-[3px] relative">
          ABOUT ME
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        </h2>
        
        {/* Cyber Hacking Visualization */}
        <div className="w-full h-64 mb-12 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/80 to-green-900/20 relative">
          <CyberVisualization type="hacking" />
          <div className="absolute top-4 left-4 text-green-400/80">
            <div className="text-lg font-bold mb-2">🔴 ETHICAL HACKING MODE</div>
            <div className="text-sm">Penetration testing simulation active...</div>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              SECURE
            </div>
            <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              SCANNING
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p className="relative pl-6 before:content-['>'] before:absolute before:left-0 before:text-cyan-400 before:font-bold">
                Full stack developer (frontend and backend) and cybersecurity professional with expertise in web development, ethical hacking, penetration testing, and secure system design. Passionate about building secure applications and identifying vulnerabilities.
              </p>
              <p className="relative pl-6 before:content-['>'] before:absolute before:left-0 before:text-cyan-400 before:font-bold">
                Currently pursuing B.Tech in Computer Science with Cybersecurity specialization at IILM University, Greater Noida, while actively developing web applications and participating in CTF competitions.
              </p>
              <p className="relative pl-6 before:content-['>'] before:absolute before:left-0 before:text-cyan-400 before:font-bold">
                My educational journey began at SS Convent, Buxar (CBSE) where I scored 72.8% in 10th grade, followed by PC College, Buxar (Bihar Board) where I achieved 60% in 12th grade, before joining IILM University.
              </p>
              <p className="relative pl-6 before:content-['>'] before:absolute before:left-0 before:text-cyan-400 before:font-bold">
                With a strong interest in AI and machine learning, I've completed certifications in Generative AI and apply AI concepts to enhance security solutions and development workflows.
              </p>
            </div>

            {/* Cyber Skills Showcase */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-cyan-400/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-transparent to-blue-400/5"></div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                CYBER SPECIALIZATIONS
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-green-400">
                  <span>🛡️</span>
                  <span className="text-sm">Penetration Testing</span>
                </div>
                <div className="flex items-center gap-2 text-red-400">
                  <span>🔴</span>
                  <span className="text-sm">Ethical Hacking</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <span>🔍</span>
                  <span className="text-sm">Vulnerability Assessment</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <span>🔐</span>
                  <span className="text-sm">Cryptography</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-400">
                  <span>🌐</span>
                  <span className="text-sm">Web Exploitation</span>
                </div>
                <div className="flex items-center gap-2 text-orange-400">
                  <span>🤖</span>
                  <span className="text-sm">AI Security</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div
                key={category}
                className="bg-blue-400/5 p-6 rounded-xl border border-white/10 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,255,157,0.1)] hover:border-cyan-400/30 backdrop-blur-sm relative overflow-hidden group"
              >
                {/* Animated background grid */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                     style={{
                       backgroundImage: `
                         linear-gradient(rgba(0,255,157,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0,255,157,0.1) 1px, transparent 1px)
                       `,
                       backgroundSize: '20px 20px'
                     }}>
                </div>

                <h3 className="text-xl font-bold mb-6 text-cyan-400 tracking-wider border-b border-blue-400/20 pb-2 flex items-center gap-2">
                  {category === 'Security & AI' && <span>🔒</span>}
                  {category === 'Frontend Development' && <span>🎨</span>}
                  {category === 'Backend & Database' && <span>⚙️</span>}
                  {category}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 text-sm font-medium flex items-center gap-2">
                          {skill.name === 'Penetration Testing' && <span className="text-red-400">🎯</span>}
                          {skill.name === 'Ethical Hacking' && <span className="text-red-400">🔴</span>}
                          {skill.name === 'Generative AI' && <span className="text-orange-400">🤖</span>}
                          {skill.name === 'AI Security' && <span className="text-purple-400">🛡️</span>}
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-blue-400/10 rounded-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-shimmer" />
                        <div
                          className="skill-progress h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-1500 ease-out relative z-10"
                          data-width={`${skill.level}%`}
                          style={{ 
                            width: '0%',
                            background: skill.category === 'Security & AI' 
                              ? 'linear-gradient(90deg, #ff6b35, #ffd166)' 
                              : 'linear-gradient(90deg, #00ff9d, #00b8ff)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTF Achievements Section */}
        <div className="mt-16 bg-gradient-to-r from-red-900/20 to-purple-900/20 p-8 rounded-2xl border border-red-400/20">
          <h3 className="text-2xl font-bold text-center mb-8 text-red-400 flex items-center justify-center gap-3">
            <span className="animate-pulse">🔴</span>
            CTF & ETHICAL HACKING ACHIEVEMENTS
            <span className="animate-pulse">🔴</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-red-500/10 rounded-xl border border-red-400/20">
              <div className="text-3xl font-bold text-red-400 mb-2">TOP 15%</div>
              <div className="text-gray-300">CTF Competitions</div>
              <div className="text-sm text-red-300 mt-2">TryHackMe & HackTheBox</div>
            </div>
            <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-400/20">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Vulnerabilities Found</div>
              <div className="text-sm text-green-300 mt-2">Web Applications</div>
            </div>
            <div className="text-center p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-300">Security Tools</div>
              <div className="text-sm text-purple-300 mt-2">Python & JavaScript</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;