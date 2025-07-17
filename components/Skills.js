import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, 
  SiJavascript, SiCss3, SiFlutter, SiFirebase, SiFigma, 
  SiAndroid, SiNodedotjs, SiPrisma, SiSupabase, SiMongodb,
  SiFastapi, SiTensorflow, SiVisualstudiocode, SiPython,
  SiGit, SiDocker, SiExpress, SiPostgresql, SiAmazonaws,
  SiKubernetes, SiGithubactions, SiJenkins, SiGithubcopilot,
  SiPostman, SiNotion, SiOpenai
} from 'react-icons/si';

// Technology icon mapping using react-icons
const getTechIcon = (techName) => {
  const iconMap = {
    'React': SiReact,
    'React.js': SiReact,
    'Next.js': SiNextdotjs,
    'TypeScript': SiTypescript,
    'Tailwind CSS': SiTailwindcss,
    'Framer Motion': SiReact,
    'HTML/CSS/JS': SiHtml5,
    'JavaScript': SiJavascript,
    'CSS3': SiCss3,
    'Flutter': SiFlutter,
    'React Native': SiReact,
    'Firebase': SiFirebase,
    'Mobile UI/UX': SiFigma,
    'App Publishing': SiAndroid,
    'Node.js': SiNodedotjs,
    'Express': SiExpress,
    'Python': SiPython,
    'MongoDB': SiMongodb,
    'PostgreSQL': SiPostgresql,
    'Prisma': SiPrisma,
    'Supabase': SiSupabase,
    'REST APIs': SiFastapi,
    'OpenAI API': SiTensorflow,
    'Mistral': SiTensorflow,
    'Vector Databases': SiMongodb,
    'RAG Systems': SiTensorflow,
    'Docker': SiDocker,
    'AWS': SiAmazonaws,
    'Kubernetes': SiKubernetes,
    'Jenkins': SiJenkins,
    'GitHub Actions': SiGithubactions,
    'AI Tools': SiTensorflow,
    'VS Code': SiVisualstudiocode,
    'Claude/ChatGPT': SiTensorflow,
    'Git/GitHub': SiGit,
  };
  return iconMap[techName] || null;
};





// Minimal Skill Badge Component
const SkillBadge = ({ skill, category, index }) => {
  const techIcon = getTechIcon(skill);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105"
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-colors duration-300">
        {techIcon ? (
          React.createElement(techIcon, {
            className: "w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
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
        {category && (
          <p className="text-xs text-gray-400 truncate">{category}</p>
        )}
      </div>
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

// Core skills organized by category
const coreSkills = [
  {
    category: "Frontend Development",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS/JS", "JavaScript"]
  },
  {
    category: "Mobile Development", 
    skills: ["Flutter", "React Native", "Firebase", "Mobile UI/UX", "App Publishing"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "Prisma", "Supabase"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Git/GitHub", "Docker", "AWS", "Kubernetes", "Jenkins", "GitHub Actions"]
  },
  {
    category: "AI & Modern Tools",
    skills: ["VS Code", "Claude/ChatGPT", "OpenAI API", "Vector Databases", "RAG Systems"]
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
            Skills & 
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

          <div className="space-y-12">
            {coreSkills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className=""
              >
                <div className="flex items-center gap-4 mb-6">
                  <h4 className="text-xl font-semibold text-white">{skillCategory.category}</h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
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