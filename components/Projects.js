import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ProjectCard = ({ project, openModal }) => {
  return (
    <motion.div 
      className="glass-card overflow-hidden group cursor-pointer"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={() => openModal(project)}
    >
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-darker-blue z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 line-clamp-2 text-sm mb-4">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies && project.technologies.slice(0, 3).map((tech, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 text-xs rounded-full bg-deep-blue text-neon-cyan border border-neon-cyan/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies && project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-full bg-deep-blue text-gray-400">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div 
            className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan"
            whileHover={{ scale: 1.1 }}
          >
            <FaExternalLinkAlt />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, closeModal }) => {
  if (!project) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div 
        className="bg-deep-blue border border-neon-cyan/30 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="h-64 md:h-80 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-blue"></div>
          </div>
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <FaTimes />
          </button>
        </div>
        
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies && project.technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 text-sm rounded-full bg-darker-blue text-neon-cyan border border-neon-cyan/30"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-3">Key Features</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              {project.features && project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-darker-blue text-white rounded-lg flex items-center gap-2 hover:bg-black/50 transition-colors"
              >
                <FaGithub /> View Code
              </a>
            )}
            {project.liveDemo && (
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-neon-cyan/20 text-white rounded-lg flex items-center gap-2 hover:bg-neon-cyan/30 transition-colors border border-neon-cyan/50"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      shortDescription: "A sleek, dark-themed portfolio website with neon accents to showcase my skills and projects.",
      description: "Designed and developed a responsive portfolio website using Next.js and Tailwind CSS. The site features a dark theme with vibrant neon accents, smooth animations, and responsive design for all devices.",
      image: "/images/project-portfolio.svg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design that works on all devices",
        "Dark theme with neon accent colors",
        "Smooth page transitions and micro-interactions",
        "Interactive components and project showcase"
      ],
      liveLink: "https://portfolio.uhadev.com",
      githubLink: "https://github.com/Spyboss/personal-portfolio"
    },
    {
      id: 2,
      title: "Crypto Portfolio Tracker",
      shortDescription: "A cryptocurrency portfolio tracker with real-time market data and analytics.",
      description: "Built a cryptocurrency portfolio tracking application that allows users to monitor their investments, track performance over time, and analyze market trends. The app integrates with multiple cryptocurrency APIs to provide real-time data.",
      image: "/images/project-crypto.svg",
      technologies: ["React", "Firebase", "CoinGecko API", "Chart.js"],
      features: [
        "Real-time cryptocurrency price updates",
        "Portfolio performance tracking and visualization",
        "Market trend analysis and comparison tools",
        "User authentication and profile management"
      ],
      liveLink: "https://crypto-tracker.uhadev.com",
      githubLink: "https://github.com/Spyboss/crypto-tracker"
    },
    {
      id: 3,
      title: "Customer Management App",
      shortDescription: "A Flutter-based mobile application for managing customer information and interactions.",
      description: "Developed a mobile application for businesses to manage their customer relationships. The app allows for tracking customer information, interaction history, and setting follow-up reminders. It features both online and offline functionality.",
      image: "/images/project-mobile-app.svg",
      technologies: ["Flutter", "Dart", "Firebase", "RESTful APIs"],
      features: [
        "Customer information management with searchable database",
        "Interaction and communication history tracking",
        "Reminder and follow-up scheduling system",
        "Offline mode with data synchronization"
      ],
      liveLink: "https://play.google.com/store/apps/details?id=com.uhadev.customermanager",
      githubLink: "https://github.com/Spyboss/customer-manager"
    },
    {
      id: 4,
      title: "WhatsApp Business Bot",
      shortDescription: "An automated WhatsApp Business Bot for handling customer inquiries and orders.",
      description: "Created a WhatsApp Business Bot that automates customer service functions such as answering FAQs, processing orders, and providing product information. The bot uses natural language processing to understand customer queries.",
      image: "/images/project-chat-bot.svg",
      technologies: ["Node.js", "WhatsApp Business API", "NLP", "MongoDB"],
      features: [
        "Natural language processing for understanding customer queries",
        "Automated order processing and confirmation",
        "Product catalog integration and search functionality",
        "Seamless handoff to human agents when needed"
      ],
      liveLink: "https://whatsapp-bot.uhadev.com",
      githubLink: "https://github.com/Spyboss/whatsapp-business-bot"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-dark-purple to-darker-blue" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Here are some of my recent projects showcasing my skills and expertise in different areas of development and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} openModal={openModal} />
            </motion.div>
          ))}
          
          {/* View All Projects Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: projects.length * 0.1 }}
            className="glass-card flex items-center justify-center p-8 h-full"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGithub className="text-2xl text-neon-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">More Projects</h3>
              <p className="text-gray-300 mb-4">Explore more of my work on GitHub</p>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-neon-cyan/10 text-white rounded-lg inline-flex items-center gap-2 hover:bg-neon-cyan/20 transition-colors border border-neon-cyan/50"
              >
                View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 