import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaImages } from 'react-icons/fa';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ProjectCard = ({ project, openModal, hasGallery }) => {
  return (
    <motion.div
      className="project-card overflow-hidden group cursor-pointer h-full flex flex-col"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={() => openModal(project)}
    >
      {/* Enhanced Project Image */}
      <div className="relative overflow-hidden h-52">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          style={{ imageRendering: 'crisp-edges' }}
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-3 py-1 bg-neon-cyan/90 text-gray-900 text-xs font-semibold rounded-full backdrop-blur-sm">
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
              className="p-2 bg-neon-cyan/90 text-gray-900 rounded-full hover:bg-neon-cyan transition-colors duration-300"
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
              className="p-2 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-colors duration-300"
              title="View Source Code"
            >
              <FaGithub className="text-sm" />
            </a>
          )}
        </div>
      </div>
      
      {/* Enhanced Project Info */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300 leading-tight">{project.title}</h3>
        <p className="text-base text-gray-300 mb-6 flex-1 leading-relaxed">{project.shortDescription}</p>
        
        {/* Enhanced Technologies Display */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-neon-cyan mb-3">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies && project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-gradient-to-r from-neon-cyan/20 to-deep-blue/20 text-neon-cyan text-sm rounded-lg border border-neon-cyan/30 hover:border-neon-cyan/60 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Enhanced Key Features */}
        {project.features && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-neon-cyan mb-3">Key Features:</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              {project.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-neon-cyan mr-2 mt-1">✓</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Enhanced Action Links */}
        <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
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
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-20"
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
            <h2 className="text-heading-2 text-white">{project.title}</h2>
            {project.status && (
              <span className="px-3 py-1 text-body-small rounded-full bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30">
                {project.status}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies && project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-body-small rounded-full bg-darker-blue text-neon-cyan border border-neon-cyan/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-body text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6">
            <h3 className="text-heading-4 text-white mb-3">Key Features</h3>
            <ul className="list-disc pl-5 text-body text-gray-300 space-y-2">
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
    <section id="projects" className="py-24 bg-gradient-to-b from-dark-purple to-darker-blue" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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