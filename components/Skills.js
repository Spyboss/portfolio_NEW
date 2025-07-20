import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  IconBrandReact, IconBrandNextjs, IconBrandTypescript, IconBrandTailwind,
  IconBrandHtml5, IconBrandJavascript, IconBrandCss3, IconBrandFlutter,
  IconBrandFirebase, IconBrandFigma, IconBrandAndroid, IconBrandNodejs,
  IconDatabase, IconBrandSupabase, IconBrandMongodb, IconApi,
  IconBrandPython, IconBrandGit, IconBrandDocker, IconBrandAws,
  IconBrandGithub, IconBrandVscode,
  IconRobot, IconBrain, IconSearch, IconTool, IconCode,
  IconDeviceMobile, IconPalette, IconServer, IconCloud,
  IconTerminal, IconChartDots3, IconCpu,
  IconBrandOpenai, IconSparkles, IconMessageChatbot, IconBulb,
  IconBrandMysql, IconBrandRedux, IconBrandBootstrap, IconBrandPhp,
  IconBrandLaravel, IconBrandWordpress, IconBrandApple, IconBrandLinux,
  IconBrandWindows, IconBrandUbuntu, IconBrandVue, IconBrandAngular,
  IconBrandSass, IconBrandGraphql, IconBrandPostgresql, IconBrandRedis,
  IconBrandDigitalocean, IconBrandVercel, IconBrandNetlify, IconHeart,
  IconWind, IconNetwork
} from '@tabler/icons-react';
import { SiExpress, SiPostgresql, SiPrisma, SiKubernetes, SiJenkins, SiGithubactions, SiPostman, SiOpenai } from 'react-icons/si';
import { RiCopilotFill } from 'react-icons/ri';
import { SiAnthropic, SiPerplexity } from '@icons-pack/react-simple-icons';

// Using Tabler icons for AI technologies (brand-accurate alternatives)
// @lobehub/icons has compilation issues in this environment

// Technology icon mapping function with brand-accurate colors
const getTechIcon = (techName) => {
  const iconMap = {
    // Frontend Technologies
    'React': { icon: IconBrandReact, color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.1)' },
    'React.js': { icon: IconBrandReact, color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.1)' },
    'Next.js': { icon: IconBrandNextjs, color: '#000000', bgColor: 'rgba(0, 0, 0, 0.1)' },
    'Vue.js': { icon: IconBrandVue, color: '#4FC08D', bgColor: 'rgba(79, 192, 141, 0.1)' },
    'Angular': { icon: IconBrandAngular, color: '#DD0031', bgColor: 'rgba(221, 0, 49, 0.1)' },
    'JavaScript': { icon: IconBrandJavascript, color: '#F7DF1E', bgColor: 'rgba(247, 223, 30, 0.1)' },
    'TypeScript': { icon: IconBrandTypescript, color: '#3178C6', bgColor: 'rgba(49, 120, 198, 0.1)' },
    'HTML/CSS/JS': { icon: IconBrandHtml5, color: '#E34F26', bgColor: 'rgba(227, 79, 38, 0.1)' },
    'CSS3': { icon: IconBrandCss3, color: '#1572B6', bgColor: 'rgba(21, 114, 182, 0.1)' },
    'Sass': { icon: IconBrandSass, color: '#CC6699', bgColor: 'rgba(204, 102, 153, 0.1)' },
    'Tailwind CSS': { icon: IconBrandTailwind, color: '#06B6D4', bgColor: 'rgba(6, 182, 212, 0.1)' },
    'Bootstrap': { icon: IconBrandBootstrap, color: '#7952B3', bgColor: 'rgba(121, 82, 179, 0.1)' },
    'Redux': { icon: IconBrandRedux, color: '#764ABC', bgColor: 'rgba(118, 74, 188, 0.1)' },
    'Framer Motion': { icon: IconSparkles, color: '#0055FF', bgColor: 'rgba(0, 85, 255, 0.1)' },
    
    // Backend Technologies
    'Node.js': { icon: IconBrandNodejs, color: '#339933', bgColor: 'rgba(51, 153, 51, 0.1)' },
    'Express': { icon: SiExpress, color: '#000000', bgColor: 'rgba(0, 0, 0, 0.1)' },
    'Python': { icon: IconBrandPython, color: '#3776AB', bgColor: 'rgba(55, 118, 171, 0.1)' },
    'PHP': { icon: IconBrandPhp, color: '#777BB4', bgColor: 'rgba(119, 123, 180, 0.1)' },
    'Laravel': { icon: IconBrandLaravel, color: '#FF2D20', bgColor: 'rgba(255, 45, 32, 0.1)' },
    'GraphQL': { icon: IconBrandGraphql, color: '#E10098', bgColor: 'rgba(225, 0, 152, 0.1)' },
    'REST APIs': { icon: IconApi, color: '#FF6B35', bgColor: 'rgba(255, 107, 53, 0.1)' },
    
    // Databases
    'MongoDB': { icon: IconBrandMongodb, color: '#47A248', bgColor: 'rgba(71, 162, 72, 0.1)' },
    'MySQL': { icon: IconBrandMysql, color: '#4479A1', bgColor: 'rgba(68, 121, 161, 0.1)' },
    'PostgreSQL': { icon: SiPostgresql, color: '#336791', bgColor: 'rgba(51, 103, 145, 0.1)' },
    'Prisma': { icon: SiPrisma, color: '#5A67D8', bgColor: 'rgba(90, 103, 216, 0.1)' },
    'Redis': { icon: IconBrandRedis, color: '#DC382D', bgColor: 'rgba(220, 56, 45, 0.1)' },
    'Firebase': { icon: IconBrandFirebase, color: '#FFCA28', bgColor: 'rgba(255, 202, 40, 0.1)' },
    'Supabase': { icon: IconBrandSupabase, color: '#3ECF8E', bgColor: 'rgba(62, 207, 142, 0.1)' },
    'Vector Databases': { icon: IconChartDots3, color: '#F59E0B', bgColor: 'rgba(245, 158, 11, 0.1)' },
    
    // DevOps & Cloud
    'Docker': { icon: IconBrandDocker, color: '#2496ED', bgColor: 'rgba(36, 150, 237, 0.1)' },
    'Kubernetes': { icon: SiKubernetes, color: '#326CE5', bgColor: 'rgba(50, 108, 229, 0.1)' },
    'AWS': { icon: IconBrandAws, color: '#FF9900', bgColor: 'rgba(255, 153, 0, 0.1)' },
    'DigitalOcean': { icon: IconBrandDigitalocean, color: '#0080FF', bgColor: 'rgba(0, 128, 255, 0.1)' },
    'Vercel': { icon: IconBrandVercel, color: '#000000', bgColor: 'rgba(0, 0, 0, 0.1)' },
    'Netlify': { icon: IconBrandNetlify, color: '#00C7B7', bgColor: 'rgba(0, 199, 183, 0.1)' },
    'Jenkins': { icon: SiJenkins, color: '#D33833', bgColor: 'rgba(211, 56, 51, 0.1)' },
    'GitHub Actions': { icon: SiGithubactions, color: '#2088FF', bgColor: 'rgba(32, 136, 255, 0.1)' },
    
    // Tools & Platforms
    'Git/GitHub': { icon: IconBrandGit, color: '#F05032', bgColor: 'rgba(240, 80, 50, 0.1)' },
    'VS Code': { icon: IconBrandVscode, color: '#007ACC', bgColor: 'rgba(0, 122, 204, 0.1)' },
    'Figma': { icon: IconBrandFigma, color: '#F24E1E', bgColor: 'rgba(242, 78, 30, 0.1)' },
    'WordPress': { icon: IconBrandWordpress, color: '#21759B', bgColor: 'rgba(33, 117, 155, 0.1)' },
    'Postman': { icon: SiPostman, color: '#FF6C37', bgColor: 'rgba(255, 108, 55, 0.1)' },
    'Notion': { icon: IconBulb, color: '#000000', bgColor: 'rgba(0, 0, 0, 0.1)' },
    
    // Mobile Development
    'Flutter': { icon: IconBrandFlutter, color: '#02569B', bgColor: 'rgba(2, 86, 155, 0.1)' },
    'React Native': { icon: IconBrandReact, color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.1)' },
    'Mobile UI/UX': { icon: IconPalette, color: '#FF6B6B', bgColor: 'rgba(255, 107, 107, 0.1)' },
    'App Publishing': { icon: IconBrandAndroid, color: '#3DDC84', bgColor: 'rgba(61, 220, 132, 0.1)' },
    'iOS': { icon: IconBrandApple, color: '#000000', bgColor: 'rgba(0, 0, 0, 0.1)' },
    
    // Operating Systems
    'Linux': { icon: IconBrandLinux, color: '#FCC624', bgColor: 'rgba(252, 198, 36, 0.1)' },
    'Ubuntu': { icon: IconBrandUbuntu, color: '#E95420', bgColor: 'rgba(233, 84, 32, 0.1)' },
    'Windows': { icon: IconBrandWindows, color: '#0078D4', bgColor: 'rgba(0, 120, 212, 0.1)' },
    
    // AI Technologies (using brand-accurate icons)
    'OpenAI': { icon: SiOpenai, color: '#00A67E', bgColor: 'rgba(0, 166, 126, 0.1)' },
    'Claude': { icon: SiAnthropic, color: '#D97706', bgColor: 'rgba(217, 119, 6, 0.1)' },
    'Gemini': { icon: IconSparkles, color: '#4285F4', bgColor: 'rgba(66, 133, 244, 0.1)' },
    'Anthropic': { icon: SiAnthropic, color: '#D97706', bgColor: 'rgba(217, 119, 6, 0.1)' },
    'Hugging Face': { icon: IconRobot, color: '#FFD21E', bgColor: 'rgba(255, 210, 30, 0.1)' },
    'Ollama': { icon: IconTerminal, color: '#000000', bgColor: 'rgba(0, 0, 0, 0.1)' },
    'Mistral': { icon: IconBrain, color: '#FF7000', bgColor: 'rgba(255, 112, 0, 0.1)' },
    'Cohere': { icon: IconMessageChatbot, color: '#39C5BB', bgColor: 'rgba(57, 197, 187, 0.1)' },
    'Perplexity': { icon: SiPerplexity, color: '#20B2AA', bgColor: 'rgba(32, 178, 170, 0.1)' },
    'GitHub Copilot': { icon: RiCopilotFill, color: '#24292E', bgColor: 'rgba(36, 41, 46, 0.1)' },
    'Stable Diffusion': { icon: IconSparkles, color: '#8B5CF6', bgColor: 'rgba(139, 92, 246, 0.1)' },
    'Midjourney': { icon: IconPalette, color: '#000000', bgColor: 'rgba(0, 0, 0, 0.1)' },
    'Replicate': { icon: IconCloud, color: '#000000', bgColor: 'rgba(0, 0, 0, 0.1)' },
    'OpenAI API': { icon: SiOpenai, color: '#10A37F', bgColor: 'rgba(16, 163, 127, 0.1)' },
    'Claude/ChatGPT': { icon: IconMessageChatbot, color: '#CC785C', bgColor: 'rgba(204, 120, 92, 0.1)' },
    'Anthropic/Claude': { icon: SiAnthropic, color: '#D97706', bgColor: 'rgba(217, 119, 6, 0.1)' },
    'RAG Systems': { icon: IconBrain, color: '#8B5CF6', bgColor: 'rgba(139, 92, 246, 0.1)' },
    'AI Tools': { icon: IconCpu, color: '#10B981', bgColor: 'rgba(16, 185, 129, 0.1)' }
  };
  
  return iconMap[techName] || { icon: IconCode, color: '#6B7280', bgColor: 'rgba(107, 114, 128, 0.1)' };
};



// Enhanced skill badge component with professional specialization descriptions
const SkillBadge = ({ skill, category, index }) => {
  const { icon: IconComponent, color, bgColor } = getTechIcon(skill);
  const specialization = getTechSpecialization(skill);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-gray-600/70 hover:bg-gray-700/40 transition-all duration-300 hover:scale-105 hover:shadow-lg"
      style={{
        '--brand-color': color,
        '--brand-bg': bgColor
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color + '50';
        e.currentTarget.style.boxShadow = `0 10px 25px ${color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {/* Icon */}
      <div 
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: bgColor }}
      >
        {IconComponent ? (
          React.createElement(IconComponent, {
            className: "w-5 h-5 transition-colors duration-300",
            style: { color: color },
            stroke: 1.5
          })
        ) : (
          <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
            {skill.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      
      {/* Skill Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors duration-300 truncate">
          {skill}
        </h4>
        <p className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
          {specialization}
        </p>
      </div>
      
      {/* Brand-accurate glow effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: bgColor }}
      />
      
      {/* Accessibility: Screen reader support */}
      <span className="sr-only">{skill} - {specialization}</span>
    </motion.div>
  );
};

// Core Competency Card Component
const CompetencyCard = ({ competency, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-lg font-semibold text-white">{competency.skill}</h4>
        <span className="text-blue-400 font-bold text-lg">{competency.percentage}%</span>
      </div>
      <p className="text-gray-400 text-sm mb-4">{competency.description}</p>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${competency.percentage}%` }}
          transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

// Core competencies for the overview section
const coreCompetencies = [
  { skill: 'Full-Stack Development', percentage: 85, description: 'End-to-end web application development' },
  { skill: 'Mobile App Development', percentage: 80, description: 'Cross-platform mobile solutions' },
  { skill: 'UI/UX Design', percentage: 80, description: 'User-centered design and prototyping' },
  { skill: 'Problem Solving', percentage: 90, description: 'Analytical thinking and solution architecture' },
  { skill: 'AI Integration', percentage: 85, description: 'Modern AI tools and workflow optimization' }
];

// Enhanced skill categories with professional expertise descriptions
const getTechSpecialization = (skill) => {
  const specializationMap = {
    // Frontend Development
    'React.js': 'Component Architecture',
    'Next.js': 'SSR & Performance',
    'TypeScript': 'Type Safety & DX',
    'Tailwind CSS': 'Design Systems',
    'HTML/CSS/JS': 'Web Standards',
    'JavaScript': 'ES6+ & Async Patterns',
    
    // Mobile Development
    'Flutter': 'Native Performance',
    'React Native': 'Code Reusability',
    'Firebase': 'Real-time Sync',
    'Mobile UI/UX': 'Platform Guidelines',
    'App Publishing': 'Store Optimization',
    
    // Backend Development
    'Node.js': 'Event-Driven Architecture',
    'Express': 'RESTful Design',
    'Python': 'Data Processing',
    'MongoDB': 'Document Modeling',
    'PostgreSQL': 'ACID Compliance',
    'Prisma': 'Type-Safe ORM',
    'Supabase': 'Backend-as-a-Service',
    
    // DevOps & Tools
    'Git/GitHub': 'Version Control',
    'Docker': 'Containerization',
    'AWS': 'Cloud Architecture',
    'Kubernetes': 'Orchestration',
    'Jenkins': 'CI/CD Pipelines',
    'GitHub Actions': 'Workflow Automation',
    'VS Code': 'IDE Optimization',
    'Figma': 'Design-to-Code',
    'Postman': 'API Testing',
    
    // AI & Modern Tools
    'GitHub Copilot': 'AI Pair Programming',
    'OpenAI API': 'LLM Integration',
    'Anthropic/Claude': 'Advanced Reasoning',
    'Perplexity': 'Research Automation',
    'Vector Databases': 'Semantic Search',
    'RAG Systems': 'Knowledge Retrieval'
  };
  
  return specializationMap[skill] || 'Technical Expertise';
};

// Core skills organized by expertise domains
const coreSkills = [
  {
    category: "Frontend Development",
    description: "Building modern, responsive web applications with cutting-edge frameworks",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS/JS", "JavaScript"]
  },
  {
    category: "Mobile Development", 
    description: "Creating cross-platform mobile applications with native performance",
    skills: ["Flutter", "React Native", "Firebase", "Mobile UI/UX", "App Publishing"]
  },
  {
    category: "Backend Development",
    description: "Developing robust server-side applications and database systems",
    skills: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "Prisma", "Supabase"]
  },
  {
    category: "DevOps & Tools",
    description: "Managing deployment pipelines and development workflows",
    skills: ["Git/GitHub", "Docker", "AWS", "Kubernetes", "Jenkins", "GitHub Actions", "VS Code", "Figma", "Postman"]
  },
  {
    category: "AI & Modern Tools",
    description: "Integrating AI technologies and modern development tools",
    skills: ["GitHub Copilot", "OpenAI API", "Anthropic/Claude", "Perplexity", "Vector Databases", "RAG Systems"]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and core competencies, 
            developed through years of hands-on experience and continuous learning.
          </p>
        </motion.div>

        {/* Core Competencies Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Core Competencies
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Key areas of expertise that drive my development approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {coreCompetencies.map((competency, index) => (
              <CompetencyCard key={competency.skill} competency={competency} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Skills by Category */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Technical Skills
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I work with across different domains
            </p>
          </div>

          <div className="space-y-16">
            {coreSkills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className=""
              >
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-3">
                    <h4 className="text-xl font-semibold text-white">{skillCategory.category}</h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                  </div>
                  <p className="text-gray-400 text-sm max-w-4xl leading-relaxed">
                    {skillCategory.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill}
                      skill={skill}
                      category={skillCategory.category}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;