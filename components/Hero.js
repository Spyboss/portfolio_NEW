import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaTelegram, FaRocket, FaCode, FaBrain } from 'react-icons/fa';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const skills = [
    'Full-Stack Developer',
    'Freelancer',
    'Web & Mobile App Builder',
    'Tech Problem Solver'
  ];

  useEffect(() => {
    const currentSkill = skills[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Adding characters
        setDisplayText(currentSkill.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        // If we've typed the full word
        if (displayText === currentSkill) {
          // Pause at the end of the word
          setTypingSpeed(1000);
          setIsDeleting(true);
        }
      } else {
        // Removing characters
        setDisplayText(currentSkill.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        // If we've deleted the entire word
        if (displayText === '') {
          setIsDeleting(false);
          // Move to next skill
          setCurrentIndex((currentIndex + 1) % skills.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, skills, typingSpeed]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    { icon: FaRocket, text: "15+ Production Apps", subtext: "Serving 1000+ users" },
    { icon: FaCode, text: "4+ Years Experience", subtext: "Modern tech stacks" },
    { icon: FaBrain, text: "AI Integration", subtext: "Smart automation" }
  ];

  return (
    <>
      {/* Main Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center section-spacing overflow-hidden pb-32 sm:pb-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-neon-cyan/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 bg-neon-magenta/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-spacing z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Profile Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card w-full max-w-md transition-all duration-300"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(56, 189, 248, 0.4)"
            }}
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-magenta animate-pulse-slow"></div>
              <img
                src="/images/profile/uminda-profile.jpg"
                alt="Uminda Aberathne"
                className="relative w-full h-full object-cover rounded-full border-4 border-darker-blue"
              />
            </div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-heading-1 text-white"
            >
              <span className="text-neon-cyan">@</span>UHADEV
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-body-large text-gray-300"
            >
              Uminda Aberathne
            </motion.p>

            {/* Enhanced Profile Stats */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 mb-8 mt-6 border border-cyan-400/20">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">4+</div>
                  <div className="text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">50+</div>
                  <div className="text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">Projects Completed</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">100%</div>
                  <div className="text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Strong CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="w-full btn-primary"
            >
              Get Started Now
            </motion.button>

            {/* Highlights */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-2xl mx-auto mt-8"
            >
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="glass-card p-3 text-center group transition-all duration-300 hover:shadow-2xl"
                    whileHover={{ 
                      scale: 1.08,
                      rotateY: 8,
                      boxShadow: "0 30px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(56, 189, 248, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)"
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <IconComponent className="text-neon-cyan text-xl mx-auto mb-1 group-hover:scale-125 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all duration-400" />
                    <h3 className="text-white font-bold text-body-small group-hover:text-cyan-100 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">{highlight.text}</h3>
                    <p className="text-gray-400 text-caption group-hover:text-gray-200 transition-all duration-300">{highlight.subtext}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-heading-4 text-neon-cyan h-8 min-h-[2rem]"
            >
              {displayText}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex justify-center space-x-4 mt-6"
            >
              {[
                { icon: <FaGithub />, href: 'https://github.com/Spyboss', color: 'hover:text-white', className: 'text-2xl text-gray-400' },
                { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/uminda-hansana-a3b6021b3/', color: 'hover:text-blue-400', className: 'text-2xl text-gray-400' },
                { icon: <FaFacebook />, href: 'https://web.facebook.com/uminda.aberathne', color: 'hover:text-blue-500', className: 'text-2xl text-gray-400' },
                { icon: <FaInstagram />, href: 'https://www.instagram.com/uhadev007/', color: 'hover:text-pink-500', className: 'text-2xl text-gray-400' },
                { icon: <FaWhatsapp />, href: 'https://api.whatsapp.com/send/?phone=94713427470&text&type=phone_number&app_absent=0', color: 'hover:text-green-500', className: 'text-2xl text-gray-400' },
                { icon: <FaTelegram />, href: 'https://t.me/UHAAHM', color: 'hover:text-blue-400', className: 'text-2xl text-gray-400' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.className} transition-all duration-300 transform hover:scale-110 ${social.color} hover:shadow-glow`}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-6 mb-8 sm:mb-0"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Start Your Project
            </motion.button>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          >
            <div className="flex flex-col items-center">
              <span className="text-gray-400 mb-2">Scroll Down</span>
              <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2"
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="flex flex-col items-center mt-24 sm:hidden"
          >
            <span className="text-gray-400 mb-2 text-sm">Scroll Down</span>
            <div className="w-5 h-8 rounded-full border-2 border-gray-400 flex justify-center">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-1 rounded-full bg-neon-cyan mt-1.5"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Client-Focused Value Proposition Section */}
    <section className="section-spacing bg-gradient-to-br from-blue-900 via-gray-900 to-blue-900">
      <div className="container-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-1 text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-body-large text-gray-300 max-w-3xl mx-auto">
            I help businesses leverage modern technology to increase efficiency, reduce costs, and drive growth. 
            From concept to deployment, I deliver solutions that make a real impact.
          </p>
        </motion.div>

        <div className="card-grid mb-16">
          {[
            {
              title: "Reduce Operational Costs",
              description: "Automate repetitive tasks and streamline workflows to save time and money",
              icon: "💰",
              stat: "40% average cost reduction"
            },
            {
              title: "Scale Your Business",
              description: "Build robust systems that grow with your business needs",
              icon: "📈",
              stat: "1000+ users supported"
            },
            {
              title: "Stay Competitive",
              description: "Leverage AI and modern tech to stay ahead of the competition",
              icon: "🚀",
              stat: "15+ successful launches"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-heading-3 text-white mb-4">{benefit.title}</h3>
              <p className="text-body text-gray-300 mb-4">{benefit.description}</p>
              <div className="text-neon-cyan font-bold text-body-small">{benefit.stat}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Let's Discuss Your Project
          </motion.button>
          <p className="text-body-small text-gray-400 mt-4">Free consultation • No commitment required</p>
        </motion.div>
      </div>
    </section>
  </>
  );
};

export default Hero;