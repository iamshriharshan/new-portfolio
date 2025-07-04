import React from 'react';
import { Calendar, MapPin, Award, Briefcase, Trophy, Star, Users, Target, Shield, Search, Brain, Palette } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useStaggeredReveal } from '../hooks/useScrollReveal';

const Experience: React.FC = () => {
  const experiences = [
    {
      year: '2021',
      period: 'May 2021 – Present',
      title: "Security Researcher",
      company: "Freelance",
      location: "Remote",
      jobType: "Current Position",
      description: "Conducting comprehensive security assessments including penetration testing, vulnerability scanning, and code analysis to identify and mitigate security threats across various platforms.",
      achievements: [
        "Secured bounties from multiple organizations",
        "Conducted source code analysis to detect vulnerabilities", 
        "Performed penetration testing on web applications",
        "Recognized in WHO Hall of Fame for security vulnerability reporting"
      ],
      skills: ["Penetration Testing", "Vulnerability Assessment", "Code Analysis", "Security Research"],
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'from-red-600 to-rose-600'
    },
    {
      year: '2024',
      period: 'April 2024 – July 2024',
      title: "Summer Research Intern",
      company: "SCaLar Lab NITK",
      location: "Karnataka, India",
      jobType: "Internship",
      description: "Enhanced search tool functionality under Prof Anand Kumar by implementing transformer-based search models, significantly improving accuracy and relevance of search results.",
      achievements: [
        "Implemented transformer-based search model",
        "Replaced keyword-based search with advanced AI techniques",
        "Significantly improved search accuracy and relevance",
        "Contributed to research publications"
      ],
      skills: ["Transformers", "NLP", "Python", "Research", "Machine Learning"],
      icon: <Search className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      year: '2024',
      period: 'June 2024 – July 2024',
      title: "ML Internship",
      company: "Swasth Mind",
      location: "Remote",
      jobType: "Internship",
      description: "Worked on training chatbots from scratch, including data processing, fine-tuning, and database integration for efficient data storage and retrieval.",
      achievements: [
        "Trained chatbot models from scratch",
        "Implemented data processing pipelines",
        "Integrated PostgreSQL for data management",
        "Enabled seamless chatbot interactions"
      ],
      skills: ["Machine Learning", "NLP", "PostgreSQL", "Python", "Data Processing"],
      icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'from-purple-600 to-violet-600'
    },
    {
      year: '2022',
      period: '2022 – 2023',
      title: "Graphic Designer & Video Editor",
      company: "Youth India Foundation",
      location: "Remote",
      jobType: "Contract",
      description: "Created visual content and edited videos for social media campaigns and organizational events, contributing to the foundation's digital presence and outreach efforts.",
      achievements: [
        "Designed graphics for social media campaigns",
        "Edited promotional videos for events",
        "Enhanced organization's digital presence",
        "Collaborated with marketing team on creative projects"
      ],
      skills: ["Graphic Design", "Video Editing", "Adobe Creative Suite", "Social Media"],
      icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'from-cyan-600 to-blue-600'
    }
  ];

  const achievements = [
    {
      year: '2023',
      title: "WHO Hall of Fame",
      organization: "Google Developer Student Club",
      description: "Recognized by the World Health Organization for reporting critical security vulnerabilities, contributing to global cybersecurity efforts.",
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-green-600 to-emerald-600'
    },
    {
      year: '2023',
      title: "Community Volunteer",
      organization: "Google Cloud Community Day",
      description: "Volunteered at Google Cloud Community Day, supporting technical workshops and networking events.",
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-orange-600 to-red-600'
    },
    {
      year: '2022-2023',
      title: "Vice President",
      organization: "GeeksforGeeks, BV(DU)COEP",
      description: "Led technical initiatives, organized coding competitions, and managed community workshops.",
      icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-yellow-600 to-orange-600'
    },
    {
      year: '2022',
      title: "EDC Director",
      organization: "Entrepreneurship Development Cell, BV(DU)COEP",
      description: "Directed entrepreneurship initiatives and startup incubation programs for students.",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-pink-600 to-rose-600'
    }
  ];

  const { containerRef: timelineRef, visibleItems: timelineVisible } = useStaggeredReveal(experiences.length, 300);
  const { containerRef: achievementsRef, visibleItems: achievementsVisible } = useStaggeredReveal(achievements.length, 200);

  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Centered Content */}
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={200}>
            <div className="mb-12 sm:mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Professional Experience
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4 sm:px-0">
                My professional journey showcasing growth in cybersecurity, machine learning, and development.
              </p>
            </div>
          </ScrollReveal>

          {/* Experience Timeline */}
          <div className="relative mb-16 sm:mb-20">
            {/* Central Timeline Line - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-30" />
            
            {/* Mobile Timeline Line - Visible only on mobile */}
            <div className="lg:hidden absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-red-500 via-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-30" />
            
            {/* Timeline Items */}
            <div ref={timelineRef} className="space-y-12 sm:space-y-16 lg:space-y-20">
              {experiences.map((item, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={index} 
                    className="relative"
                    style={{
                      opacity: timelineVisible[index] ? 1 : 0,
                      transform: `translateY(${timelineVisible[index] ? 0 : 50}px)`,
                      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  >
                    {/* Timeline Node - Center positioned on desktop, left on mobile */}
                    <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 z-10 top-8">
                      <div className={`
                        w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-4 border-slate-800 
                        bg-gradient-to-br ${item.color} 
                        flex items-center justify-center shadow-xl
                        hover:scale-110 transition-transform duration-300
                        relative
                      `}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                        {/* Pulse animation */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} animate-ping opacity-20`} />
                      </div>
                    </div>

                    {/* Desktop Layout - Alternating Cards */}
                    <div className="hidden lg:block">
                      <div className="grid grid-cols-2 gap-8 xl:gap-16">
                        {/* Left Side */}
                        <div className={`${isLeft ? 'order-1' : 'order-2'} ${!isLeft ? 'opacity-0 pointer-events-none' : ''}`}>
                          {isLeft && (
                            <div className="pr-8 xl:pr-12">
                              <ExperienceCard item={item} isLeft={true} />
                            </div>
                          )}
                        </div>

                        {/* Right Side */}
                        <div className={`${isLeft ? 'order-2' : 'order-1'} ${isLeft ? 'opacity-0 pointer-events-none' : ''}`}>
                          {!isLeft && (
                            <div className="pl-8 xl:pl-12">
                              <ExperienceCard item={item} isLeft={false} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Mobile Layout - Always show on mobile */}
                    <div className="lg:hidden pl-20">
                      <ExperienceCard item={item} isLeft={true} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements Section */}
          <ScrollReveal direction="up" delay={400}>
            <div className="mb-12 sm:mb-16">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                  Achievements & Leadership
                </h3>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto px-4 sm:px-0">
                  Recognition and leadership roles that showcase my commitment to community and excellence.
                </p>
              </div>

              {/* Achievements Grid */}
              <div ref={achievementsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-slate-800/40 to-gray-800/40 backdrop-blur-lg border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:from-slate-700/50 hover:to-gray-700/50 hover:border-slate-600/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl"
                    style={{
                      opacity: achievementsVisible[index] ? 1 : 0,
                      transform: `translateY(${achievementsVisible[index] ? 0 : 30}px) scale(${achievementsVisible[index] ? 1 : 0.95})`,
                      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  >
                    {/* Achievement Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`
                        w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${achievement.color} 
                        flex items-center justify-center shadow-lg
                        group-hover:scale-110 transition-transform duration-300
                        relative
                      `}>
                        <div className="text-white">
                          {achievement.icon}
                        </div>
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${achievement.color} animate-pulse opacity-20`} />
                      </div>
                      
                      <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30 font-medium">
                        {achievement.year}
                      </span>
                    </div>

                    {/* Achievement Content */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                        {achievement.title}
                      </h4>
                      
                      <div className="text-blue-400 font-semibold mb-3 group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
                        {achievement.organization}
                      </div>
                      
                      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 text-sm sm:text-base">
                        {achievement.description}
                      </p>

                      {/* Achievement Badge */}
                      <div className="mt-4 flex items-center gap-2">
                        <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                        <span className="text-xs text-yellow-300 font-medium">Achievement</span>
                      </div>

                      {/* Hover Accent */}
                      <div className={`
                        w-0 h-1 bg-gradient-to-r ${achievement.color} mt-4 rounded-full
                        group-hover:w-full transition-all duration-700
                      `} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Skills Summary */}
          <ScrollReveal direction="up" delay={600}>
            <div className="text-center">
              <div className="bg-gradient-to-r from-slate-800/40 to-gray-800/40 backdrop-blur-lg border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:from-slate-700/50 hover:to-gray-700/50 transition-all duration-300 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 hover:text-blue-300 transition-colors duration-300 flex items-center justify-center gap-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  Core Competencies
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {[
                    'Security Research', 
                    'Penetration Testing', 
                    'Machine Learning', 
                    'Natural Language Processing', 
                    'Python Development', 
                    'Data Processing',
                    'Research & Development',
                    'Graphic Design',
                    'Video Editing',
                    'Community Leadership'
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50 hover:bg-slate-600/60 hover:border-slate-500/70 hover:text-white transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

// Experience Card Component
interface ExperienceCardProps {
  item: any;
  isLeft: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, isLeft }) => {
  return (
    <div className={`
      relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg 
      border border-slate-700/50 rounded-2xl p-6 sm:p-8 
      hover:from-slate-700/70 hover:to-slate-800/70 hover:border-slate-600/70 
      transition-all duration-500 transform hover:scale-105 
      group shadow-xl hover:shadow-2xl
      ${isLeft ? 'lg:hover:-translate-x-2' : 'lg:hover:translate-x-2'}
    `}>
      {/* Card Arrow - Only visible on desktop */}
      <div className={`
        hidden lg:block absolute top-8 ${isLeft ? '-right-4' : '-left-4'} 
        w-8 h-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 
        border-r border-b border-slate-700/50 
        transform rotate-45 group-hover:from-slate-700/70 group-hover:to-slate-800/70
        transition-colors duration-500
      `} />
      
      {/* Year Badge */}
      <div className={`
        absolute -top-3 sm:-top-4 ${isLeft ? 'lg:right-6 right-6' : 'lg:left-6 right-6'}
        px-3 sm:px-4 py-1 sm:py-2 text-sm font-bold text-white rounded-full
        bg-gradient-to-r ${item.color} shadow-lg
        hover:scale-110 transition-transform duration-300
      `}>
        {item.year}
      </div>

      {/* Content */}
      <div className="pt-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
              {item.title}
            </h3>
            <div className="text-blue-400 font-semibold mb-3 group-hover:text-blue-300 transition-colors duration-300 text-base sm:text-lg">
              {item.company}
            </div>
          </div>
          
          <span className="text-xs sm:text-sm px-3 py-1 rounded-full font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 ml-3 whitespace-nowrap">
            {item.jobType}
          </span>
        </div>

        {/* Details */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-400 text-sm mb-4">
          <span className="flex items-center gap-2 hover:text-slate-300 transition-colors duration-300">
            <Calendar size={14} />
            {item.period}
          </span>
          <span className="flex items-center gap-2 hover:text-slate-300 transition-colors duration-300">
            <MapPin size={14} />
            {item.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 text-sm sm:text-base mb-5">
          {item.description}
        </p>

        {/* Key Achievements */}
        <div className="mb-5">
          <h4 className="text-sm sm:text-base font-semibold text-white mb-3 flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {item.achievements.map((achievement: string, achIndex: number) => (
              <li key={achIndex} className="text-xs sm:text-sm text-slate-400 flex items-start gap-3">
                <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                <span className="group-hover:text-slate-300 transition-colors duration-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.skills.map((skill: string, skillIndex: number) => (
            <span
              key={skillIndex}
              className="px-3 py-1 text-xs sm:text-sm bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50 hover:bg-slate-600/60 hover:border-slate-500/70 transition-all duration-300 hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Hover Accent */}
        <div className={`
          w-0 h-1 bg-gradient-to-r ${item.color} mt-4 rounded-full
          group-hover:w-full transition-all duration-700
        `} />
      </div>
    </div>
  );
};

export default Experience;