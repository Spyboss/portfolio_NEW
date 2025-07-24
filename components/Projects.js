import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaImages } from 'react-icons/fa';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ProjectCard = ({ project, openModal, hasGallery }) => {
  return (
    <motion.div
      className="project-card overflow-hidden group cursor-pointer h-full flex flex-col"
      whileHover={{ 
        y: -12, 
        rotateX: 8, 
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(56, 189, 248, 0.3), 0 0 80px rgba(172, 92, 255, 0.3)"
      }}
      transition={{ duration: 0.3 }}
      onClick={() => openModal(project)}
    >
      {/* Enhanced Project Image */}
      <div className="project-image relative overflow-hidden h-52">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          style={{ imageRendering: 'crisp-edges' }}
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-3 py-1 bg-black/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm border border-white/20 shadow-lg">
            {project.technologies && project.technologies[0]}
          </span>
        </div>
        
        {/* Quick Action Buttons */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          {hasGallery && (
            <div className="p-2 bg-black/50 rounded-full backdrop-blur-sm">
              <FaImages className="text-neon-cyan text-sm" />
            </div>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              title="View Live Demo"
            >
              <FaExternalLinkAlt className="text-sm" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
              title="View Source Code"
            >
              <FaGithub className="text-sm" />
            </a>
          )}
        </div>
      </div>
      
      {/* Enhanced Project Info */}
      <div className="project-content p-6 flex-1 flex flex-col">
        <h3 className="text-heading-3 text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">{project.title}</h3>
        <p className="text-body text-gray-300 mb-4 leading-relaxed">{project.shortDescription}</p>
        
        {/* Enhanced Technologies Display with Shields.io Badges */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-neon-cyan mb-3">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies && project.technologies.map((tech, idx) => {
              // Generate shields.io badge URL with proper logo and colors
              const getTechBadge = (technology) => {
                const techMap = {
                  'React': { logo: 'react', color: '61DAFB', logoColor: 'black' },
                  'Node.js': { logo: 'nodedotjs', color: '339933', logoColor: 'white' },
                  'MongoDB': { logo: 'mongodb', color: '47A248', logoColor: 'white' },
                  'TypeScript': { logo: 'typescript', color: '3178C6', logoColor: 'white' },
                  'Python': { logo: 'python', color: '3776AB', logoColor: 'white' },
                  'JavaScript': { logo: 'javascript', color: 'F7DF1E', logoColor: 'black' },
                  'Next.js': { logo: 'nextdotjs', color: '000000', logoColor: 'white' },
                  'Next.js 14': { logo: 'nextdotjs', color: '000000', logoColor: 'white' },
                  'Tailwind CSS': { logo: 'tailwindcss', color: '06B6D4', logoColor: 'white' },
                  'Supabase': { logo: 'supabase', color: '3ECF8E', logoColor: 'white' },
                  'Binance API': { logo: 'binance', color: 'F3BA2F', logoColor: 'black' },
                  'WebSocket': { logo: 'socketdotio', color: '010101', logoColor: 'white' },
                  'React Native': { logo: 'react', color: '61DAFB', logoColor: 'black' },
                  'AI APIs': { logo: 'openai', color: '412991', logoColor: 'white' },
                  'Puppeteer': { logo: 'puppeteer', color: '40B5A4', logoColor: 'white' },
                  'JWT': { logo: 'jsonwebtokens', color: '000000', logoColor: 'white' },
                  'Mistral-Small': { logo: 'ai', color: 'FF6B35', logoColor: 'white' },
                  'MongoDB Atlas': { logo: 'mongodb', color: '47A248', logoColor: 'white' },
                  'SQLite': { logo: 'sqlite', color: '003B57', logoColor: 'white' },
                  'OpenRouter': { logo: 'router', color: '0066CC', logoColor: 'white' },
                  'Prisma': { logo: 'prisma', color: '2D3748', logoColor: 'white' },
                  'Clerk': { logo: 'clerk', color: '6C47FF', logoColor: 'white' },
                  'Redis': { logo: 'redis', color: 'DC382D', logoColor: 'white' }
                };
                
                const config = techMap[technology] || { logo: 'code', color: '4A90E2', logoColor: 'white' };
                return `https://img.shields.io/badge/${encodeURIComponent(technology)}-${config.color}?style=for-the-badge&logo=${config.logo}&logoColor=${config.logoColor}`;
              };
              
              return (
                <img
                  key={idx}
                  src={getTechBadge(tech)}
                  alt={`${tech} technology badge`}
                  className="h-6 transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  loading="lazy"
                />
              );
            })}
          </div>
        </div>
        
        {/* Enhanced Key Features */}
        {project.features && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-neon-cyan mb-3">Key Features:</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              {project.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-300 mr-2 mt-1 shadow-sm shadow-blue-400/50">✓</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Spacer to push action links to bottom */}
        <div className="flex-1"></div>
        
        {/* Enhanced Action Links */}
        <div className="flex gap-4 pt-4 border-t border-white/10">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-cyan to-deep-blue text-white font-semibold rounded-lg hover:from-neon-cyan/80 hover:to-deep-blue/80 transition-all duration-300 transform hover:scale-105"
            >
              <FaExternalLinkAlt className="text-sm" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
            >
              <FaGithub className="text-sm" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, closeModal, projectGalleries }) => {
  if (!project) return null;

  // Find the gallery for this project
  const projectGallery = projectGalleries.find(gallery => gallery.projectId === project.id);

  // Handle escape key for fullscreen mode
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        // Check if we're in fullscreen mode
        const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        if (fullscreenElement) {
          // Exit fullscreen
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div
        className="bg-deep-blue border border-neon-cyan/30 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden neon-glow"
        initial={{ scale: 0.9, y: 20, rotateX: -15 }}
        animate={{ scale: 1, y: 0, rotateX: 0 }}
        exit={{ scale: 0.9, y: 20, rotateX: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-gray-900/95 via-blue-900/20 to-gray-900/95 backdrop-blur-md text-white flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-200 z-20 border border-transparent hover:border-blue-400/30"
          >
            <FaTimes />
          </button>

          {/* Gallery or Single Image */}
          {projectGallery && projectGallery.images.length > 0 ? (
            <div className="gallery-container">
              <ImageGallery
                items={projectGallery.images}
                showPlayButton={false}
                showFullscreenButton={true}
                showThumbnails={true}
                lazyLoad={true}
                thumbnailPosition="bottom"
                useBrowserFullscreen={true}
                showNav={true}
                showBullets={false}
                infinite={true}
                slideOnThumbnailOver={false}
                additionalClass="project-gallery"
              />
            </div>
          ) : (
            <div className="h-64 md:h-80 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-blue"></div>
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between mb-3">
            <h2 className="text-heading-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">{project.title}</h2>
            {project.status && (
              <span className="px-3 py-1 text-body-small rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-200 border border-blue-400/40 backdrop-blur-sm">
                {project.status}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies && project.technologies.map((tech, idx) => {
              // Generate shields.io badge URL with proper logo and colors
              const getTechBadge = (technology) => {
                const techMap = {
                  'React': { logo: 'react', color: '61DAFB', logoColor: 'black' },
                  'Node.js': { logo: 'nodedotjs', color: '339933', logoColor: 'white' },
                  'MongoDB': { logo: 'mongodb', color: '47A248', logoColor: 'white' },
                  'TypeScript': { logo: 'typescript', color: '3178C6', logoColor: 'white' },
                  'Python': { logo: 'python', color: '3776AB', logoColor: 'white' },
                  'JavaScript': { logo: 'javascript', color: 'F7DF1E', logoColor: 'black' },
                  'Next.js': { logo: 'nextdotjs', color: '000000', logoColor: 'white' },
                  'Next.js 14': { logo: 'nextdotjs', color: '000000', logoColor: 'white' },
                  'Tailwind CSS': { logo: 'tailwindcss', color: '06B6D4', logoColor: 'white' },
                  'Supabase': { logo: 'supabase', color: '3ECF8E', logoColor: 'white' },
                  'Binance API': { logo: 'binance', color: 'F3BA2F', logoColor: 'black' },
                  'WebSocket': { logo: 'socketdotio', color: '010101', logoColor: 'white' },
                  'React Native': { logo: 'react', color: '61DAFB', logoColor: 'black' },
                  'AI APIs': { logo: 'openai', color: '412991', logoColor: 'white' },
                  'Puppeteer': { logo: 'puppeteer', color: '40B5A4', logoColor: 'white' },
                  'JWT': { logo: 'jsonwebtokens', color: '000000', logoColor: 'white' },
                  'Mistral-Small': { logo: 'ai', color: 'FF6B35', logoColor: 'white' },
                  'MongoDB Atlas': { logo: 'mongodb', color: '47A248', logoColor: 'white' },
                  'SQLite': { logo: 'sqlite', color: '003B57', logoColor: 'white' },
                  'OpenRouter': { logo: 'router', color: '0066CC', logoColor: 'white' },
                  'Prisma': { logo: 'prisma', color: '2D3748', logoColor: 'white' },
                  'Clerk': { logo: 'clerk', color: '6C47FF', logoColor: 'white' },
                  'Redis': { logo: 'redis', color: 'DC382D', logoColor: 'white' }
                };
                
                const config = techMap[technology] || { logo: 'code', color: '4A90E2', logoColor: 'white' };
                return `https://img.shields.io/badge/${encodeURIComponent(technology)}-${config.color}?style=for-the-badge&logo=${config.logo}&logoColor=${config.logoColor}`;
              };
              
              return (
                <img
                  key={idx}
                  src={getTechBadge(tech)}
                  alt={`${tech} technology badge`}
                  className="h-7 transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  loading="lazy"
                />
              );
            })}
          </div>

          <p className="text-body text-gray-300 mb-3 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6">
            <h3 className="text-heading-4 text-white mb-3">Key Features</h3>
            <ul className="list-disc pl-5 text-body text-gray-300 space-y-2">
              {project.features && project.features.map((feature, idx) => (
                <li key={idx} className="marker:text-blue-300 marker:shadow-sm marker:shadow-blue-400/50">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
              >
                <FaGithub /> View Code
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-white rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
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
  const [projects, setProjects] = useState([]);
  const [projectGalleries, setProjectGalleries] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Project categories for filtering
  const categories = [
    'All',
    'Web Development',
    'AI/ML',
    'Mobile Apps',
    'ERP/CRM',
    'Trading Bots'
  ];

  // Enhanced project categorization
  const categorizeProject = (project) => {
    const title = project.title.toLowerCase();
    const tech = project.technologies.join(' ').toLowerCase();
    
    if (title.includes('bot') || title.includes('trading')) return 'Trading Bots';
    if (title.includes('erp') || title.includes('crm') || title.includes('billgen')) return 'ERP/CRM';
    if (title.includes('ai') || title.includes('pulse') || title.includes('echo')) return 'AI/ML';
    if (tech.includes('react native') || title.includes('mobile')) return 'Mobile Apps';
    return 'Web Development';
  };

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => categorizeProject(project) === selectedCategory);

  // Load project data from JSON files
  useEffect(() => {
    // Load projects data
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => {
        if (data && data.projects) {
          setProjects(data.projects);
        }
      })
      .catch(error => {
        console.error('Error loading projects data:', error);
        // Fallback to placeholder images if data loading fails
        setProjects([
          {
            id: 1,
            title: "Bill Gen – Secure Billing System",
            shortDescription: "A secure billing system with field-level encryption and GDPR compliance for EV sales.",
            description: "Developed a comprehensive billing system for Gunawardhana Motors with advanced security features including field-level encryption and GDPR compliance.",
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
          // Add more fallback projects if needed
        ]);
      });

    // Load gallery data
    fetch('/data/project-images.json')
      .then(response => response.json())
      .then(data => {
        if (data && data.projectGalleries) {
          setProjectGalleries(data.projectGalleries);
        }
      })
      .catch(error => {
        console.error('Error loading gallery data:', error);
        setProjectGalleries([]);
      });
  }, []);

  // Check if a project has a gallery
  const hasGallery = (projectId) => {
    const gallery = projectGalleries.find(gallery => gallery.projectId === projectId);
    return gallery && gallery.images && gallery.images.length > 0;
  };

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section-spacing bg-gradient-to-b from-dark-purple to-darker-blue" ref={sectionRef}>
      <div className="container-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="max-w-2xl mx-auto text-body-large text-gray-300 mb-8">
            Here are some of my recent projects showcasing my skills and expertise in different areas of development and design.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-neon-cyan text-dark-purple font-medium'
                    : 'bg-deep-blue/50 text-gray-300 hover:bg-neon-cyan/20 hover:text-white border border-neon-cyan/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="card-grid">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard
                project={project}
                openModal={openModal}
                hasGallery={hasGallery(project.id)}
              />
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
              <h3 className="text-heading-4 text-white mb-2">More Projects</h3>
              <p className="text-body text-gray-300 mb-4">Explore more of my work on GitHub</p>
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
          <ProjectModal
            project={selectedProject}
            closeModal={closeModal}
            projectGalleries={projectGalleries}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;