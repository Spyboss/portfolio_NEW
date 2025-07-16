import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const coreSkills = [
    { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL'] },
    { category: 'AI/ML', skills: ['OpenAI API', 'Mistral', 'Vector Databases', 'RAG Systems'] },
    { category: 'DevOps', skills: ['Docker', 'Railway', 'Cloudflare', 'GitHub Actions'] }
  ];

  const achievements = [
    'Built 15+ production applications serving 1000+ users',
    'Reduced client operational costs by 40% through automation',
    'Led development of AI-powered workflow systems',
    'Mentored 5+ junior developers in modern web technologies'
  ];

  const services = [
    {
      title: 'Custom Web Development',
      description: 'Full-stack web applications tailored to your business needs',
      icon: '💻',
      process: ['Requirements Analysis', 'Design & Architecture', 'Development & Testing'],
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with third-party services and APIs',
      icon: '🔗',
      process: ['API Analysis', 'Integration Planning', 'Implementation & Testing'],
      color: 'from-green-400 to-blue-400',
      bgColor: 'from-green-500/10 to-blue-500/10'
    },
    {
      title: 'Database Design',
      description: 'Efficient database architecture and optimization',
      icon: '🗄️',
      process: ['Schema Design', 'Optimization', 'Migration & Backup'],
      color: 'from-purple-400 to-pink-400',
      bgColor: 'from-purple-500/10 to-pink-500/10'
    },
    {
      title: 'Tech Consulting',
      description: 'Strategic technology guidance for your projects',
      icon: '🚀',
      process: ['Technology Assessment', 'Strategy Planning', 'Implementation Roadmap'],
      color: 'from-orange-400 to-red-400',
      bgColor: 'from-orange-500/10 to-red-500/10'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed and efficiency improvements for existing applications',
      icon: '📈',
      process: ['Performance Audit', 'Optimization Strategy', 'Implementation & Monitoring'],
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      title: 'Product Roadmapping',
      description: 'Strategic planning and feature prioritization',
      icon: '💡',
      process: ['Vision Definition', 'Feature Prioritization', 'Timeline Planning'],
      color: 'from-cyan-400 to-purple-400',
      bgColor: 'from-cyan-500/10 to-purple-500/10'
    }
  ];

  const timelineData = [
    {
      year: '2020',
      title: 'Started Programming Journey',
      description: 'Began learning Python and discovered my passion for coding',
      achievement: 'Built first Python scripts',
      icon: '🚀',
      color: 'from-purple-400 to-pink-400'
    },
    {
      year: '2021',
      title: 'Web Development Focus',
      description: 'Transitioned to web development, learning HTML, CSS, and JavaScript',
      achievement: 'Created 5+ responsive websites',
      icon: '🌐',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      year: '2022',
      title: 'Full-Stack Development',
      description: 'Mastered React, Node.js, and database technologies',
      achievement: 'Developed 10+ web applications',
      icon: '⚡',
      color: 'from-green-400 to-blue-400'
    },
    {
      year: '2023',
      title: 'Professional Projects',
      description: 'Started building real-world applications and client projects',
      achievement: 'Delivered 15+ client projects',
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
    }
  ];

  return (
    <section id="about" className="section-spacing bg-gradient-to-br from-black via-dark-blue to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-noise-overlay opacity-[0.02] pointer-events-none"></div>
      <div className="container-spacing">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card">
              <h3 className="text-heading-3 text-white">About Me</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate full-stack developer with over 4 years of experience 
                building modern web applications. My journey started with Python and has 
                evolved into creating comprehensive solutions using cutting-edge technologies.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I specialize in React, Node.js, and modern JavaScript frameworks, with a 
                strong focus on creating user-centric applications that solve real-world problems. 
                My experience spans from small business solutions to complex enterprise systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to 
                open-source projects, and sharing knowledge with the developer community.
              </p>
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

        {/* Core Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent text-center mb-12">Core Skills</h3>
          <div className="card-grid">
            {coreSkills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center"
              >
                <h4 className="text-xl font-bold text-blue-300 mb-4">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 px-3 py-1 rounded-full text-sm mr-2 mb-2 border border-blue-400/30 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-12 text-center">What I Can Do For You</h3>
          <div className="card-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="glass-card p-8 h-full group-hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                  {/* Icon with subtle background */}
                  <div className="w-16 h-16 rounded-xl bg-black/80 border-2 border-blue-500/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  
                  {/* Service Title */}
                  <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent group-hover:text-white transition-all duration-300">
                    {service.title}
                  </h4>
                  
                  {/* Service Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Process Overview */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-blue-300 mb-3">Process Overview:</h5>
                    {service.process.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white shadow-sm shadow-blue-500/30">
                          {stepIndex + 1}
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;