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
      title: 'Full-Stack Development',
      description: 'End-to-end web applications with modern tech stacks',
      icon: '🚀'
    },
    {
      title: 'AI Integration',
      description: 'Smart automation and AI-powered features for your business',
      icon: '🤖'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love',
      icon: '🎨'
    },
    {
      title: 'Tech Consulting',
      description: 'Strategic guidance for your technology decisions',
      icon: '💡'
    },
    {
      title: 'Product Roadmapping',
      description: 'From concept to launch - complete product strategy',
      icon: '📋'
    }
  ];

  const timelineData = [
    {
      year: '2020',
      title: 'Started Programming Journey',
      description: 'Began learning Python and discovered my passion for coding'
    },
    {
      year: '2021',
      title: 'Web Development Focus',
      description: 'Transitioned to web development, learning HTML, CSS, and JavaScript'
    },
    {
      year: '2022',
      title: 'Full-Stack Development',
      description: 'Mastered React, Node.js, and database technologies'
    },
    {
      year: '2023',
      title: 'Professional Projects',
      description: 'Started building real-world applications and client projects'
    },
    {
      year: '2024',
      title: 'AI & Advanced Systems',
      description: 'Expanded into AI integration and complex system architecture'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who I Am
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
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
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
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
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Recent Achievements</h3>
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
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">My Journey</h3>
            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-cyan-400/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-cyan-400 font-bold text-lg">{item.year}</span>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
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
          <h3 className="text-3xl font-bold text-white text-center mb-12">Core Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSkills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center"
              >
                <h4 className="text-xl font-bold text-cyan-400 mb-4">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">What I Can Do For You</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;