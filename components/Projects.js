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
          <div className="flex flex-wrap items-center justify-between mb-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
            {project.status && (
              <span className="px-3 py-1 text-sm rounded-full bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30">
                {project.status}
              </span>
            )}
          </div>

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
      title: "Bill Gen – Secure Billing System",
      shortDescription: "A secure billing system with field-level encryption and GDPR compliance for EV sales.",
      description: "Developed a comprehensive billing system for Gunawardhana Motors with advanced security features including field-level encryption and GDPR compliance. The system allows the business to create, manage, and track invoices for electric vehicle sales while ensuring sensitive customer data remains protected.",
      image: "/images/project-portfolio.svg",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "JWT"],
      features: [
        "Field-level encryption for sensitive customer data",
        "GDPR compliance with data export and deletion features",
        "Secure authentication with JWT and refresh tokens",
        "Real-time invoice tracking and management",
        "Support for different payment methods and vehicle types"
      ],
      liveDemo: "https://gunawardanamotors.pages.dev",
      github: "https://github.com/Spyboss/bill-gen"
    },
    {
      id: 2,
      title: "P.U.L.S.E. – AI Agent Framework",
      shortDescription: "An AI-powered personal workflow assistant with multi-model capabilities and GitHub integration.",
      description: "Built a powerful AI assistant designed to enhance coding workflows, freelancing, and personal growth. P.U.L.S.E. (Prime Uminda's Learning System Engine) combines multiple AI models, a robust memory system, and a personality that adapts to user needs and preferences.",
      image: "/images/project-crypto.svg",
      technologies: ["Python", "Google ADK", "Gemini", "GitHub API", "LanceDB"],
      features: [
        "Multi-model AI system with specialized models for different tasks",
        "Long-term memory with vector database for semantic search",
        "GitHub integration for repository management and commit assistance",
        "Adaptive neural router for query classification and model selection",
        "Offline capabilities with local model support"
      ],
      liveDemo: null,
      github: "https://github.com/Spyboss/P.U.L.S.E."
    },
    {
      id: 3,
      title: "YT Contest Platform",
      shortDescription: "A YouTube contest platform with automated metrics tracking and contestant management.",
      description: "Created a streamlined platform for managing YouTube talent contests with automated metrics tracking and contestant management. The system integrates with YouTube's API to verify submissions, track engagement metrics, and manage the contest lifecycle.",
      image: "/images/project-mobile-app.svg",
      technologies: ["Next.js 14", "Tailwind CSS", "Supabase", "Prisma", "Clerk"],
      features: [
        "YouTube API integration for video metrics and playlist management",
        "Community video contests with admin dashboard",
        "Voting system and contest lifecycle management",
        "WhatsApp integration for contestant communication",
        "Subscriber verification system"
      ],
      liveDemo: null,
      github: "https://github.com/Spyboss/yt-contest"
    },
    {
      id: 4,
      title: "Quotation Generator",
      shortDescription: "A professional quotation system with PDF generation for Gunawardana Motors.",
      description: "Developed a web application for generating professional quotations with PDF export functionality for Gunawardana Motors. The system allows the business to create, manage, and track quotations for potential customers, streamlining the sales process.",
      image: "/images/project-chat-bot.svg",
      technologies: ["React", "Puppeteer", "Node.js", "MongoDB", "Docker"],
      features: [
        "Generate branded, professional PDF quotations",
        "Dynamic pricing and history tracking",
        "Automatic quotation number generation",
        "Customer information management",
        "Real-time total calculation"
      ],
      liveDemo: null,
      github: "https://github.com/GME-dev/QUOTATION-GEN"
    },
    {
      id: 5,
      title: "Portfolio Website",
      shortDescription: "My personal portfolio website built with Next.js, React, and Tailwind CSS.",
      description: "This portfolio website showcases my skills, projects, and experience as a full-stack developer. Built with modern web technologies, it features a responsive design, dark mode, and animated components for an engaging user experience.",
      image: "/images/project-portfolio.svg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design with dark mode",
        "Animated hero and modular project cards",
        "Optimized for performance and SEO",
        "Interactive UI elements and smooth transitions",
        "Hosted on Cloudflare Pages"
      ],
      liveDemo: "https://uminda-portfolio.pages.dev/",
      github: "https://github.com/Spyboss/portfolio_NEW"
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
                href="https://github.com/Spyboss"
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