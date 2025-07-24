import React from 'react';
import { motion } from 'framer-motion';

const About = () => {

  const achievements = [
    'Built 5+ production applications with modern tech stacks',
    'Developed 3+ full-stack web applications currently in production',
    'Implemented automation solutions for improved efficiency',
    'Integrated AI-powered features in modern applications'
  ];

  const services = [
    {
      title: 'Custom Web Development',
      description: 'Full-stack web applications tailored to your business needs',
      icon: '💻',
      image: 'https://res.cloudinary.com/dthx4fxte/image/upload/v1753379946/download_dnzrqy.jpg',
      process: ['Requirements Analysis', 'Design & Architecture', 'Development & Testing'],
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with third-party services and APIs',
      icon: '🔗',
      image: 'https://res.cloudinary.com/dthx4fxte/image/upload/v1753379948/download_1_qbh4uh.png',
      process: ['API Analysis', 'Integration Planning', 'Implementation & Testing'],
      color: 'from-green-400 to-blue-400',
      bgColor: 'from-green-500/10 to-blue-500/10'
    },
    {
      title: 'Database Design',
      description: 'Efficient database architecture and optimization',
      icon: '🗄️',
      image: 'https://res.cloudinary.com/dthx4fxte/image/upload/v1753379945/images_2_orrpds.jpg',
      process: ['Schema Design', 'Optimization', 'Migration & Backup'],
      color: 'from-purple-400 to-pink-400',
      bgColor: 'from-purple-500/10 to-pink-500/10'
    },
    {
      title: 'Tech Consulting',
      description: 'Strategic technology guidance for your projects',
      icon: '🚀',
      image: 'https://res.cloudinary.com/dthx4fxte/image/upload/v1753379947/images_qdtq7q.jpg',
      process: ['Technology Assessment', 'Strategy Planning', 'Implementation Roadmap'],
      color: 'from-orange-400 to-red-400',
      bgColor: 'from-orange-500/10 to-red-500/10'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed and efficiency improvements for existing applications',
      icon: '📈',
      image: 'https://res.cloudinary.com/dthx4fxte/image/upload/v1753379945/download_3_we6qi3.png',
      process: ['Performance Audit', 'Optimization Strategy', 'Implementation & Monitoring'],
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      title: 'Product Roadmapping',
      description: 'Strategic planning and feature prioritization',
      icon: '💡',
      image: 'https://res.cloudinary.com/dthx4fxte/image/upload/v1753379947/images_1_czp14s.jpg',
      process: ['Vision Definition', 'Feature Prioritization', 'Timeline Planning'],
      color: 'from-cyan-400 to-purple-400',
      bgColor: 'from-cyan-500/10 to-purple-500/10'
    }
  ];

  const timelineData = [
    {
      year: '2020',
      title: 'Started Programming Journey',
      description: 'Began learning Python and Java, discovering my passion for programming fundamentals',
      achievement: 'Built first Python and Java applications',
      icon: '🚀',
      color: 'from-purple-400 to-pink-400'
    },
    {
      year: '2021',
      title: 'Web Development Focus',
      description: 'Transitioned to web development, learning HTML, CSS, and JavaScript',
      achievement: 'Built first responsive websites',
      icon: '🌐',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      year: '2022',
      title: 'Full-Stack Development',
      description: 'Mastered React, Node.js, and database technologies',
      achievement: 'Created full-stack applications',
      icon: '⚡',
      color: 'from-green-400 to-blue-400'
    },
    {
      year: '2023',
      title: 'Professional Projects',
      description: 'Started building real-world applications and production systems',
      achievement: 'Launched production applications',
      icon: '💼',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      year: '2024',
      title: 'AI & Advanced Systems',
      description: 'Expanded into AI integration and complex system architecture',
      achievement: 'Built AI-powered applications',
      icon: '🤖',
      color: 'from-cyan-400 to-purple-400'
    },
    {
      year: '2025',
      title: 'Portfolio Launch & Market Entry',
      description: 'Launching professional portfolio to showcase expertise and connect with clients',
      achievement: 'Professional portfolio & market presence',
      icon: '🌟',
      color: 'from-emerald-400 to-blue-400'
    }
  ];

  return (
    <section id="about" className="section-spacing bg-gradient-to-br from-black via-dark-blue to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-noise-overlay opacity-[0.02] pointer-events-none"></div>
      <div className="container-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 h-full flex flex-col"
          >
            <div className="glass-card">
              <h3 className="text-heading-3 text-white">About Me</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I&apos;m a passionate full-stack developer with over 4 years of experience 
                building modern web applications. My journey started with Python and has 
                evolved into creating comprehensive solutions using cutting-edge technologies.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I specialize in React, Node.js, and modern JavaScript frameworks, with a 
                strong focus on creating user-centric applications that solve real-world problems. 
                My experience spans from small business solutions to complex enterprise systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I&apos;m not coding, I enjoy exploring new technologies, contributing to 
                open-source projects, and sharing knowledge with the developer community.
              </p>
            </div>

            {/* Technical Approach */}
            <div className="glass-card">
              <h3 className="text-heading-3 text-white">Technical Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                    <span className="text-blue-300 text-xs">🔧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Problem-First Development</h4>
                    <p className="text-gray-400 text-sm">I start by understanding the core problem before choosing technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                    <span className="text-green-300 text-xs">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Performance Optimization</h4>
                    <p className="text-gray-400 text-sm">Every application is built with speed and efficiency in mind</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                    <span className="text-purple-300 text-xs">🔒</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Security Best Practices</h4>
                    <p className="text-gray-400 text-sm">Security is integrated from the ground up, not added as an afterthought</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Achievements */}
            <div className="glass-card">
              <h3 className="text-heading-3 text-white">Recent Achievements</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-blue-300 mt-1 shadow-sm shadow-blue-400/50">✓</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Animated Skills Visualization */}
            <div className="glass-card">
              <h3 className="text-heading-3 text-white mb-6">Skills at a Glance</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Frontend', level: 90, color: 'from-blue-400 to-cyan-400' },
                  { name: 'Backend', level: 85, color: 'from-green-400 to-emerald-400' },
                  { name: 'Database', level: 80, color: 'from-purple-400 to-pink-400' },
                  { name: 'DevOps', level: 75, color: 'from-orange-400 to-red-400' }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="text-center mb-2">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </div>
                    <div className="relative w-16 h-16 mx-auto">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="2"
                        />
                        <motion.path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke={`url(#gradient-${index})`}
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: '0 100' }}
                          whileInView={{ strokeDasharray: `${skill.level} 100` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={skill.color.split(' ')[1]} />
                            <stop offset="100%" stopColor={skill.color.split(' ')[3]} />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{skill.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Graphical Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-12 text-center">My Journey</h3>
            <div className="relative">
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot">
                      <span>{item.icon}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-blue-400">{item.year}</span>
                      <div className="h-px bg-gradient-to-r from-blue-400/50 to-purple-400/50 flex-1"></div>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    {item.achievement && (
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-4 py-2 text-sm text-blue-300">
                        <span className="text-yellow-400">🏆</span>
                        {item.achievement}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>



        {/* Enhanced Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-12 text-center">What I Can Do For You</h3>
          <div className="card-grid">
            {services.map((service, index) => {
              const gradients = [
                'from-blue-500/20 via-cyan-500/20 to-blue-600/20',
                'from-purple-500/20 via-pink-500/20 to-purple-600/20',
                'from-green-500/20 via-emerald-500/20 to-green-600/20',
                'from-orange-500/20 via-red-500/20 to-orange-600/20',
                'from-indigo-500/20 via-blue-500/20 to-indigo-600/20',
                'from-pink-500/20 via-rose-500/20 to-pink-600/20'
              ];
              const borderGradients = [
                'from-blue-400 to-cyan-400',
                'from-purple-400 to-pink-400',
                'from-green-400 to-emerald-400',
                'from-orange-400 to-red-400',
                'from-indigo-400 to-blue-400',
                'from-pink-400 to-rose-400'
              ];
              const textGradients = [
                'from-blue-400 to-cyan-400',
                'from-purple-400 to-pink-400',
                'from-green-400 to-emerald-400',
                'from-orange-400 to-red-400',
                'from-indigo-400 to-blue-400',
                'from-pink-400 to-rose-400'
              ];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="relative group cursor-pointer"
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-none`} />
                  
                  {/* Border Animation */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-r ${borderGradients[index % borderGradients.length]} rounded-xl p-[1px]`}>
                      <div className="w-full h-full bg-gray-900/90 rounded-xl" />
                    </div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className={`w-full h-full bg-gradient-to-br ${borderGradients[index % borderGradients.length]} rounded-full animate-pulse`} />
                  </div>
                  <div className="absolute top-2 right-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    <div className={`w-full h-full bg-gradient-to-bl ${borderGradients[index % borderGradients.length]} rounded-full animate-pulse`} />
                  </div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <div className={`w-full h-full bg-gradient-to-tr ${borderGradients[index % borderGradients.length]} rounded-full animate-pulse`} />
                  </div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-250">
                    <div className={`w-full h-full bg-gradient-to-tl ${borderGradients[index % borderGradients.length]} rounded-full animate-pulse`} />
                  </div>
                  
                  {/* Main Card Content */}
                  <div className="relative glass-card p-8 rounded-xl backdrop-blur-xl bg-gray-900/40 border border-gray-700/50 group-hover:border-transparent transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20 h-full">
                    {/* Image Container */}
                    <motion.div 
                      className="relative mb-8"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.4, ease: "easeOut" }
                      }}
                    >
                      <div className={`w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-500 relative border-2 border-gradient-to-br ${borderGradients[index % borderGradients.length]}`}>
                        {/* Background Image */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url(${service.image})` }}
                        />
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${borderGradients[index % borderGradients.length]} opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />
                        {/* Particle Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full animate-ping" />
                          <div className="absolute top-3 right-2 w-1 h-1 bg-white rounded-full animate-ping animation-delay-200" />
                          <div className="absolute bottom-2 left-3 w-1 h-1 bg-white rounded-full animate-ping animation-delay-400" />
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Enhanced Title */}
                    <h4 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${textGradients[index % textGradients.length]} bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300 text-center`}>
                      {service.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-300 mb-8 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed text-center">
                      {service.description}
                    </p>
                    
                    {/* Enhanced Process Overview */}
                    <div className="space-y-4">
                      <h5 className={`text-sm font-semibold bg-gradient-to-r ${textGradients[index % textGradients.length]} bg-clip-text text-transparent transition-colors duration-300 text-center mb-6`}>
                        Process Overview
                      </h5>
                      {service.process.map((step, stepIndex) => (
                        <motion.div 
                          key={stepIndex} 
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: stepIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r ${borderGradients[index % borderGradients.length]} rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                            {stepIndex + 1}
                          </div>
                          <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed pt-1">
                            {step}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-r ${borderGradients[index % borderGradients.length]} blur-xl -z-10`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;