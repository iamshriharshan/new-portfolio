import React, { useEffect, useState } from 'react';
import { ArrowDown, Brain, Code, Cuboid as Cube, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { 
      id: 'ai', 
      label: 'Artificial Intelligence', 
      short: 'AI',
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />, 
      color: 'from-indigo-600 via-blue-600 to-cyan-600',
      shadowColor: 'shadow-blue-500/30'
    },
    { 
      id: 'dev', 
      label: 'Development', 
      short: 'DEV',
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />, 
      color: 'from-emerald-600 via-green-600 to-teal-600',
      shadowColor: 'shadow-green-500/30'
    },
    { 
      id: '3d', 
      label: '3D Design', 
      short: '3D',
      icon: <Cube className="w-6 h-6 sm:w-8 sm:h-8" />, 
      color: 'from-purple-600 via-violet-600 to-indigo-600',
      shadowColor: 'shadow-purple-500/30'
    },
    { 
      id: 'sec', 
      label: 'Cybersecurity', 
      short: 'SEC',
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />, 
      color: 'from-red-600 via-rose-600 to-pink-600',
      shadowColor: 'shadow-red-500/30'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left lg:pl-12 xl:pl-20">
            <div className="mb-6 sm:mb-8">
              <span className="text-blue-400 font-medium text-base sm:text-lg tracking-wide uppercase">
                --
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Hello, my<br />
              name's <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent"><br />Shri Harshan</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I craft powerful digital solutions through innovative design, 
              intelligent systems, and secure architectures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 justify-center lg:justify-start">
              <button 
                onClick={scrollToAbout}
                className="group px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold rounded-xl hover:from-slate-700 hover:to-slate-600 hover:shadow-2xl hover:shadow-slate-500/25 transform hover:scale-105 transition-all duration-500 border border-slate-600/50 relative overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10">Explore My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 sm:px-10 py-3 sm:py-4 border-2 border-slate-600/70 text-white font-semibold rounded-xl hover:bg-slate-800/30 hover:border-slate-500 transition-all duration-500 relative overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={scrollToAbout}
                className="animate-bounce text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                <ArrowDown size={28} className="sm:w-8 sm:h-8" />
              </button>
            </div>
          </div>

          {/* Right Side - Skills Showcase (Mobile & Desktop) */}
          <div className="lg:pr-12 xl:pr-20 mt-8 lg:mt-0">
            <div className="relative w-full h-80 sm:h-96 lg:h-[500px]">
              
              {/* Elegant Frame Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-gray-800/30 to-slate-900/40 rounded-2xl sm:rounded-3xl border border-slate-600/30 backdrop-blur-sm" />
              
              {/* Decorative Corner Elements */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-slate-500/50 rounded-tl-lg" />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-t-2 border-slate-500/50 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-b-2 border-slate-500/50 rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-slate-500/50 rounded-br-lg" />

              {/* Central Title */}
              <div className="absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2 text-center">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Core Expertise
                </h3>
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" />
              </div>

              {/* Skill Showcase - Mobile & Desktop Layout */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs sm:max-w-sm px-4">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {skills.map((skill, index) => {
                    const isHovered = hoveredSkill === skill.id;
                    const scrollProgress = Math.min(scrollY * 0.005, 1);
                    const delay = index * 0.1;
                    
                    return (
                      <div
                        key={skill.id}
                        className="group relative"
                        onMouseEnter={() => setHoveredSkill(skill.id)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                          transform: `translateY(${20 - scrollProgress * 20}px)`,
                          opacity: 0.7 + scrollProgress * 0.3,
                          transitionDelay: `${delay}s`
                        }}
                      >
                        {/* Card Background */}
                        <div className={`
                          relative p-4 sm:p-6 rounded-lg sm:rounded-xl border border-slate-600/40 backdrop-blur-sm
                          bg-gradient-to-br from-slate-800/60 to-slate-900/60
                          hover:from-slate-700/70 hover:to-slate-800/70
                          hover:border-slate-500/60 hover:shadow-xl
                          ${isHovered ? skill.shadowColor : ''}
                          transition-all duration-700 cursor-pointer
                          transform hover:scale-105 hover:-translate-y-2
                        `}>
                          
                          {/* Skill Icon */}
                          <div className={`
                            mb-2 sm:mb-3 text-slate-400 group-hover:text-white 
                            transition-all duration-500 flex justify-center
                            ${isHovered ? 'scale-110' : ''}
                          `}>
                            <div className="w-6 h-6 sm:w-8 sm:h-8">
                              {React.cloneElement(skill.icon, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                            </div>
                          </div>
                          
                          {/* Skill Label */}
                          <div className="text-center">
                            <div className="text-white font-bold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-500">
                              {skill.short}
                            </div>
                            <div className="text-slate-400 text-xs font-medium tracking-wide group-hover:text-slate-300 transition-colors duration-500 leading-tight">
                              {skill.label}
                            </div>
                          </div>

                          {/* Hover Glow Effect */}
                          <div className={`
                            absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br ${skill.color} 
                            opacity-0 group-hover:opacity-10 transition-opacity duration-700
                          `} />
                          
                          {/* Corner Accent */}
                          <div className={`
                            absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-br ${skill.color}
                            opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500
                          `} />
                        </div>

                        {/* Connection Lines (Subtle) */}
                        {isHovered && (
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <div className="w-px h-4 sm:h-6 bg-gradient-to-t from-slate-500/50 to-transparent animate-pulse" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Tagline */}
              <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-slate-400 text-xs sm:text-sm font-medium tracking-wider">
                  Crafting Digital Excellence
                </p>
              </div>

              {/* Ambient Lighting Effects */}
              <div className="absolute top-1/4 -left-4 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 -right-4 sm:-right-8 w-20 h-20 sm:w-24 sm:h-24 bg-cyan-600/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 bg-slate-600/3 rounded-full blur-3xl" />

              {/* Floating Particles */}
              <div className="absolute top-16 sm:top-20 right-8 sm:right-12 w-1 h-1 bg-blue-400/60 rounded-full animate-ping" />
              <div className="absolute bottom-24 sm:bottom-32 left-6 sm:left-8 w-1 h-1 bg-cyan-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/2 right-4 sm:right-6 w-1 h-1 bg-slate-400/60 rounded-full animate-ping" style={{ animationDelay: '4s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;