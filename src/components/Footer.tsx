import React from 'react';
import { Heart, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Github size={18} className="sm:w-5 sm:h-5" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={18} className="sm:w-5 sm:h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={18} className="sm:w-5 sm:h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={18} className="sm:w-5 sm:h-5" />, href: '#', label: 'Instagram' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 sm:py-12 border-t border-slate-700/50 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 hover:text-blue-300 transition-colors duration-300">
                Shri Harshan
              </h3>
              <p className="text-slate-400 leading-relaxed hover:text-slate-300 transition-colors duration-300 text-sm sm:text-base px-4 md:px-0">
                Crafting powerful digital experiences through 3D design, machine learning, 
                development, and cybersecurity solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 hover:text-blue-300 transition-colors duration-300">
                Quick Links
              </h4>
              <div className="space-y-1 sm:space-y-2">
                {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm sm:text-base mx-auto md:mx-0"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 hover:text-blue-300 transition-colors duration-300">
                Let's Connect
              </h4>
              <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4 justify-center md:justify-start">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-600/60 hover:border-slate-500/70 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-slate-600/50"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <p className="text-slate-400 text-xs sm:text-sm hover:text-slate-300 transition-colors duration-300 px-4 md:px-0">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <ScrollReveal direction="up" delay={400}>
          <div className="border-t border-slate-700/50 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-slate-400 text-xs sm:text-sm flex items-center gap-2 hover:text-slate-300 transition-colors duration-300 justify-center md:justify-start">
              Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 hover:text-red-300 transition-colors duration-300" fill="currentColor" /> by Shri Harshan
            </p>
            
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
              <span className="hover:text-slate-300 transition-colors duration-300">© 2025 All rights reserved</span>
              <button
                onClick={scrollToTop}
                className="text-blue-400 hover:text-blue-300 hover:scale-105 transition-all duration-300"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;