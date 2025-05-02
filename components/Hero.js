import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';

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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-neon-cyan/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 bg-neon-magenta/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Profile Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 mb-8 w-full max-w-md neon-glow"
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
              className="text-4xl md:text-5xl font-bold text-white mb-2"
            >
              <span className="text-neon-cyan">@</span>UHADEV
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl text-gray-300 mb-4"
            >
              Uminda Aberathne
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-2xl font-bold text-neon-cyan h-8"
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
                // Make GitHub and LinkedIn more prominent
                { icon: <FaGithub />, href: 'https://github.com/Spyboss', color: 'hover:text-gray-300', className: 'text-2xl text-neon-cyan' },
                { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/uminda-hansana-a3b6021b3/', color: 'hover:text-blue-400', className: 'text-2xl text-neon-cyan' },
                { icon: <FaFacebook />, href: 'https://web.facebook.com/uminda.aberathne', color: 'hover:text-blue-500', className: 'text-2xl text-gray-400' },
                { icon: <FaInstagram />, href: 'https://www.instagram.com/uhadev007/', color: 'hover:text-pink-500', className: 'text-2xl text-gray-400' },
                { icon: <FaWhatsapp />, href: 'https://api.whatsapp.com/send/?phone=94713427470&text&type=phone_number&app_absent=0', color: 'hover:text-green-500', className: 'text-2xl text-gray-400' },
                { icon: <FaTelegram />, href: 'https://t.me/UHAAHM', color: 'hover:text-blue-300', className: 'text-2xl text-gray-400' }
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
            className="flex flex-col sm:flex-row gap-4 mt-6"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-neon-cyan/10 hover:bg-neon-cyan/20 text-white border border-neon-cyan rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,238,255,0.5)]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white rounded-full transition-all duration-300"
            >
              Hire Me
            </a>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;