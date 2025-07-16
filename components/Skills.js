import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Technology icon mapping for Devicon CDN
const getTechIcon = (techName) => {
  const iconMap = {
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'HTML/CSS/JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'Mobile UI/UX': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'App Publishing': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googleplay/googleplay-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Prisma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
    'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'AI Tools': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'Cursor AI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'Claude/Grok': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg',
    'Git/GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  };
  return iconMap[techName] || null;
};

// Skill Badge Component
const SkillBadge = ({ skill, delay }) => {
  const techIcon = getTechIcon(skill.name);
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      className="group relative"
    >
      <div className="flex items-center space-x-3 p-3 rounded-lg bg-black/40 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:bg-black/60">
        {techIcon ? (
          <div className="w-8 h-8 flex items-center justify-center">
            <img 
              src={techIcon} 
              alt={skill.name}
              className="w-6 h-6 object-contain filter brightness-110"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold" style={{display: 'none'}}>
              {skill.name.charAt(0)}
            </div>
          </div>
        ) : (
          <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            {skill.name.charAt(0)}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-1">
            <span className="text-white text-sm font-medium truncate">{skill.name}</span>
            <span className="text-blue-300 text-xs font-semibold ml-2">{skill.proficiency}%</span>
          </div>
          <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm shadow-blue-500/30"
              initial={{ width: 0 }}
              animate={{ width: `${skill.proficiency}%` }}
              transition={{ duration: 1, delay: delay + 0.2 }}
            />
          </div>
        </div>
      </div>
      
      {/* Hover tooltip */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
        {skill.proficiency}% proficiency
      </div>
    </motion.div>
  );
};

// Category icon mapping
const getCategoryIcon = (title) => {
  const iconMap = {
    'Web App Development': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Mobile Development': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'Backend/API Development': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Productivity Tools': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  };
  return iconMap[title] || null;
};

const SkillCategory = ({ title, skills, delay }) => {
  const categoryIcon = getCategoryIcon(title);
  
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 overflow-hidden flex flex-col h-full"
    >
      <h3 className="text-lg font-bold text-white mb-6 flex items-center">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mr-3 border border-blue-400/30">
          {categoryIcon ? (
            <img 
              src={categoryIcon} 
              alt={title}
              className="w-6 h-6 object-contain filter brightness-110"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold" style={{display: categoryIcon ? 'none' : 'flex'}}>
            {title.charAt(0)}
          </div>
        </div>
        <span className="text-sm leading-tight">{title}</span>
      </h3>
      <div className="flex-1 space-y-3">
        {skills && skills.map((skill, idx) => (
          <SkillBadge
            key={idx}
            skill={skill}
            delay={delay + idx * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillBubble = ({ skill, index }) => {
  const bubbleVariants = {
    hover: {
      scale: 1.1,
      boxShadow: '0 0 15px rgba(59, 130, 246, 0.7)',
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
  };

  const getSkillColor = () => {
    const colors = [
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600',
      'from-blue-500 to-purple-500',
      'from-purple-500 to-blue-500',
    ];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      className={`px-4 py-2 rounded-full text-white text-sm font-medium
                  bg-gradient-to-r ${getSkillColor()} opacity-90
                  transition-all duration-300 cursor-pointer`}
      whileHover="hover"
      variants={bubbleVariants}
      layout
    >
      {skill}
    </motion.div>
  );
};

const SkillBar = ({ skill, percentage, delay }) => {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true, margin: "-50px 0px" });

  return (
    <div className="mb-6" ref={barRef}>
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skill}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden border border-blue-400/20">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm shadow-blue-500/30"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const categories = [
    {
      name: "Web App Development",
      skills: [
        { name: "React.js", proficiency: 85 },
        { name: "Next.js", proficiency: 80 },
        { name: "TypeScript", proficiency: 75 },
        { name: "Tailwind CSS", proficiency: 90 },
        { name: "HTML/CSS/JS", proficiency: 85 },
      ],
    },
    {
      name: "Mobile Development",
      skills: [
        { name: "Flutter", proficiency: 85 },
        { name: "React Native", proficiency: 70 },
        { name: "Firebase", proficiency: 80 },
        { name: "Mobile UI/UX", proficiency: 85 },
        { name: "App Publishing", proficiency: 75 },
      ],
    },
    {
      name: "Backend/API Development",
      skills: [
        { name: "Node.js", proficiency: 80 },
        { name: "Prisma", proficiency: 75 },
        { name: "Supabase", proficiency: 85 },
        { name: "MongoDB", proficiency: 75 },
        { name: "REST APIs", proficiency: 85 },
      ],
    },
    {
      name: "Productivity Tools",
      skills: [
        { name: "AI Tools", proficiency: 90 },
        { name: "Cursor AI", proficiency: 85 },
        { name: "Claude/Grok", proficiency: 80 },
        { name: "Git/GitHub", proficiency: 85 },
        { name: "Docker", proficiency: 70 },
      ],
    },
  ];

  const technicalSkills = [
    { skill: 'Full-Stack Development', percentage: 85 },
    { skill: 'UI/UX Design', percentage: 80 },
    { skill: 'App Development', percentage: 75 },
    { skill: 'Problem Solving', percentage: 90 },
    { skill: 'Business Communication', percentage: 85 }
  ];

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            I've developed a diverse set of skills spanning development, design, and business. Here's what I bring to the table.
          </p>
        </motion.div>

        {/* Technology Badges Showcase */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js',
              'Flutter', 'Firebase', 'MongoDB', 'Git/GitHub', 'Docker'
            ].map((tech, idx) => {
              const techIcon = getTechIcon(tech);
              return (
                <motion.div
                  key={tech}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                  className="group relative"
                >
                  <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-black/40 border border-blue-400/20 hover:border-blue-400/60 hover:bg-black/60 transition-all duration-300 hover:scale-105">
                    {techIcon && (
                      <img 
                        src={techIcon} 
                        alt={tech}
                        className="w-5 h-5 object-contain filter brightness-110"
                      />
                    )}
                    <span className="text-white text-sm font-medium">{tech}</span>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {tech}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skill Categories with Enhanced Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, idx) => (
            <SkillCategory
              key={idx}
              title={category.name}
              skills={category.skills}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Skill Bars */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent mb-8 relative inline-block">
            Technical Proficiency
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 shadow-sm shadow-blue-500/30"></span>
          </h3>

          {technicalSkills.map((skill, idx) => (
            <SkillBar
              key={idx}
              skill={skill.skill}
              percentage={skill.percentage}
              delay={idx * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;