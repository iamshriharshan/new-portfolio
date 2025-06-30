import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Search in Video Extension",
      description: "A browser extension that allows users to search for specific topics within lengthy videos, making content discovery effortless and significantly improving the viewing experience.",
      tech: ["JavaScript", "Chrome Extension API", "Video Processing", "Search Algorithms"],
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Smart Terminal",
      description: "An intelligent terminal interface that enables natural language communication, allowing users to interact with their system using conversational commands instead of traditional CLI syntax.",
      tech: ["Python", "Natural Language Processing", "Terminal Interface", "AI Integration"],
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "People Recommendation System",
      description: "An ML-powered system using BERT embeddings to recommend like-minded individuals based on semantic profile similarity, processing both structured and unstructured data.",
      tech: ["Python", "BERT", "Machine Learning", "NLP", "Recommendation Systems"],
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      live: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Centered Content */}
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4 sm:px-0">
              A showcase of my latest work spanning browser extensions, AI-powered systems, 
              and machine learning solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 rounded-xl sm:rounded-2xl overflow-hidden hover:bg-slate-700/40 hover:border-slate-600/70 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 relative"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30 text-xs font-medium">
                    <Star className="w-3 h-3" fill="currentColor" />
                    FEATURED
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 mb-3 sm:mb-4 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 text-left">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6 justify-center">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50 hover:bg-slate-600/60 hover:border-slate-500/70 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 sm:gap-6 justify-center">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                      <Github size={16} className="sm:w-5 sm:h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-slate-400 hover:text-blue-300 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                      <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;