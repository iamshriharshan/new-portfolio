import React from 'react';
import { 
  Brain, 
  Code, 
  Cuboid as Cube, 
  Shield, 
  Palette,
  CheckCircle,
  Zap,
  Target,
  MessageSquare,
  Users,
  Search,
  Settings
} from 'lucide-react';

const About: React.FC = () => {
  const coreSkills = [
    {
      icon: <Cube className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "3D Design",
      description: "Creating immersive 3D experiences and interactive visualizations"
    },
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Machine Learning",
      description: "Building intelligent systems with advanced AI algorithms"
    },
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Development",
      description: "Full-stack development with modern technologies and frameworks"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Cybersecurity",
      description: "Implementing secure systems and protecting digital assets"
    }
  ];

  const detailedSkills = [
    {
      category: "Development (NLP)",
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Natural Language Processing & Machine Learning",
      color: "from-blue-600 to-indigo-600"
    },
    {
      category: "Performance Team Leadership",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Agile & Project Management",
      color: "from-emerald-600 to-teal-600"
    },
    {
      category: "Graphic Designing",
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Visual Design & Creative Solutions",
      color: "from-purple-600 to-pink-600"
    },
    {
      category: "Web Development",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Full Stack & Modern Frameworks",
      color: "from-orange-600 to-red-600"
    },
    {
      category: "Quality Assurance",
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Testing & Code Reviews",
      color: "from-green-600 to-emerald-600"
    },
    {
      category: "Cyber Security",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Security Research & Penetration Testing",
      color: "from-red-600 to-rose-600"
    },
    {
      category: "Problem Solving",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Analytical & Creative Thinking",
      color: "from-cyan-600 to-blue-600"
    },
    {
      category: "Performance Optimization",
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "System Efficiency & Best Practice",
      color: "from-yellow-600 to-orange-600"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Centered Content */}
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              I'm a passionate technologist who loves pushing the boundaries of what's possible. 
              With expertise spanning multiple domains, I create solutions that are both innovative and practical.
            </p>
          </div>

          {/* Core Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {coreSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-slate-700/40 hover:border-slate-600/70 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group"
              >
                <div className="text-blue-400 mb-3 sm:mb-4 group-hover:text-slate-300 transition-colors duration-300 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Skills Section */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12">
              Professional Expertise
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {detailedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/20 backdrop-blur-lg border border-slate-700/40 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-slate-700/30 hover:border-slate-600/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                >
                  {/* Icon with Gradient Background */}
                  <div className={`
                    w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${skill.color} 
                    flex items-center justify-center mb-3 sm:mb-4 mx-auto
                    group-hover:scale-110 transition-transform duration-300
                    shadow-lg group-hover:shadow-xl
                  `}>
                    <div className="text-white">
                      {skill.icon}
                    </div>
                  </div>
                  
                  {/* Skill Title */}
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300 text-center">
                    {skill.category}
                  </h4>
                  
                  {/* Skill Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300 text-center">
                    {skill.description}
                  </p>
                  
                  {/* Hover Accent Line */}
                  <div className={`
                    w-0 h-0.5 bg-gradient-to-r ${skill.color} mx-auto mt-3 sm:mt-4
                    group-hover:w-full transition-all duration-500
                  `} />
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-slate-800/40 to-gray-800/40 backdrop-blur-lg border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 hover:from-slate-700/50 hover:to-gray-700/50 transition-all duration-500">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Let's Build Something Powerful Together
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
                I believe in the power of technology to solve real-world problems. 
                Whether it's creating stunning 3D visualizations, developing intelligent systems, 
                building robust web applications, or securing digital infrastructure, I'm always excited to take on new challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;