import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const journeyItems = [
    {
      year: '2020',
      title: 'Started Programming Journey',
      description: 'Began learning programming fundamentals, focusing on web technologies and getting familiar with HTML, CSS, and JavaScript.'
    },
    {
      year: '2021',
      title: 'Full-Stack Development',
      description: 'Expanded my skills into full-stack development with React, Node.js, and database technologies. Started building complete web applications.'
    },
    {
      year: '2022',
      title: 'Mobile App Development',
      description: 'Added mobile development to my skill set with Flutter and React Native. Started building cross-platform applications for clients.'
    },
    {
      year: '2023',
      title: 'Freelance Business Growth',
      description: 'Scaled my freelance business, delivering multiple full-stack projects for real clients with a focus on secure, production-ready systems.'
    },
    {
      year: '2024',
      title: 'Advanced Tech Integration',
      description: 'Integrated modern technologies like TypeScript, Prisma, and Supabase into my stack while exploring AI tools to enhance productivity and delivery.'
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
            I'm a self-taught full-stack developer with 4+ years of experience building real-world solutions for businesses and clients. I'm passionate about solving problems through apps, websites, and automation.
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
                I'm a self-taught full-stack developer with over 4 years of hands-on experience building real-world web and mobile applications. From secure billing systems to custom AI agents, I build solutions that solve actual business problems.
              </p>
              <p>
                I specialize in developing full-stack web and mobile applications using React, Node.js, Next.js, Firebase, Supabase, and TypeScript. I've delivered multiple secure, production-ready systems for clients across various industries, focusing on business value and user experience.
              </p>
              <p>
                My freelance experience has given me a unique perspective on sales-driven tech delivery - I understand not just how to code, but how to translate business requirements into technical solutions that drive real results for clients. I also bring strong communication and sales skills from my freelance and work experience.
              </p>
              <p>
                I'm currently open to freelance and remote opportunities worldwide, focusing on creating applications that not only look beautiful but also solve real business problems efficiently.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {['Problem Solver', 'Tech Consultant', 'Fast Learner', 'Business-Focused', 'Solution Architect'].map((trait, index) => (
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