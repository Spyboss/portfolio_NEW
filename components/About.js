import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const journeyItems = [
    {
      year: '2021',
      title: 'Started Programming Journey',
      description: 'Began learning programming fundamentals, focusing on web technologies and getting familiar with HTML, CSS, and JavaScript.'
    },
    {
      year: '2022',
      title: 'Mobile App Development',
      description: 'Expanded my skills into mobile app development, learning Flutter and Dart. Started building cross-platform applications.'
    },
    {
      year: '2023',
      title: 'Freelance Developer',
      description: 'Started taking on freelance projects, developing web and mobile applications for various clients while continuously improving my skills.'
    },
    {
      year: '2023',
      title: 'Crypto Trading',
      description: 'Expanded into cryptocurrency trading, developing technical analysis skills and trading strategies.'
    },
    {
      year: '2024',
      title: 'Portfolio Expansion',
      description: 'Continued to grow my portfolio of projects and skills, focusing on creating more complex and feature-rich applications.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-darker-blue to-deep-blue">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="section-title mb-4">About Me</h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            I'm a passionate Mobile App Developer and UI/UX Designer with a keen interest in creating intuitive and engaging mobile experiences. My journey in the tech world began when I discovered my love for turning creative ideas into functional applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Bio Section */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Hi there! I'm Uminda Aberathne, a passionate Mobile App Developer and UI/UX Designer with a keen interest in creating intuitive and engaging mobile experiences. My journey in the tech world began when I discovered my love for turning creative ideas into functional applications.
              </p>
              <p>
                I specialize in developing cross-platform mobile applications using Flutter, while also having experience in web development with technologies like React and Next.js. I enjoy working on the entire development process - from initial design concepts and wireframing to deployment and maintenance.
              </p>
              <p>
                Beyond coding, I'm an avid cryptocurrency enthusiast and trader, always staying updated with the latest blockchain technologies and market trends. I also work in sales, where I've developed strong communication and client relationship skills.
              </p>
              <p>
                My goal is to create mobile applications that not only look beautiful but also provide meaningful solutions to real-world problems. I believe in continuous learning and constantly expanding my skill set to embrace new technologies and methodologies.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {['Problem Solver', 'Creative Thinker', 'Fast Learner', 'Entrepreneur'].map((trait, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-deep-blue rounded-full text-sm text-gray-300 border border-gray-700"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative pl-8 md:pl-0 md:pr-8"
          >
            <div className="absolute left-0 md:left-auto md:right-full h-full w-px bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-green opacity-30 mx-4"></div>
            
            {journeyItems && journeyItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants} 
                className="mb-8 relative"
              >
                <div className="absolute left-[-41px] md:left-auto md:right-[-41px] w-8 h-8 rounded-full bg-darker-blue border-2 border-neon-cyan flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-neon-cyan"></div>
                </div>
                <div className="glass-card p-4 ml-4 md:ml-0 md:mr-4">
                  <span className="text-neon-cyan font-bold">{item.year}</span>
                  <h4 className="text-xl font-bold text-white mt-1">{item.title}</h4>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 