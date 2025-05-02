import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillCategory = ({ title, skills, delay }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 overflow-hidden flex flex-col"
    >
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <span className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center mr-2">
          <span className="text-neon-cyan text-lg">
            {title === "Web App Development" ? "🖥️" :
             title === "Mobile Development" ? "📱" :
             title === "Backend/API Development" ? "⚙️" :
             title === "Productivity Tools" ? "🚀" : "🔧"}
          </span>
        </span>
        {title}
      </h3>
      <div className="flex-1 space-y-4">
        {skills && skills.map((skill, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-white">{skill.name}</span>
              <span className="text-neon-cyan">{skill.proficiency}%</span>
            </div>
            <div className="h-2 w-full bg-darker-blue rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan"
                initial={{ width: 0 }}
                animate={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillBubble = ({ skill, index }) => {
  const bubbleVariants = {
    hover: {
      scale: 1.1,
      boxShadow: '0 0 15px rgba(0, 238, 255, 0.7)',
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
  };

  const getSkillColor = () => {
    const colors = [
      'from-neon-cyan to-blue-500',
      'from-neon-magenta to-purple-500',
      'from-neon-green to-green-500',
      'from-yellow-400 to-orange-500',
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
      <div className="w-full h-2 bg-deep-blue rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta"
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
    <section id="skills" className="py-24 bg-gradient-to-b from-deep-blue to-dark-purple" ref={sectionRef}>
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

        {/* Skill Categories with Bubbles */}
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
          <h3 className="text-xl font-bold text-white mb-8 relative inline-block">
            Technical Proficiency
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-neon-cyan"></span>
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