import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaChartLine, FaMobileAlt, FaBitcoin, FaCode, FaUsers, FaClock, FaLaptopCode } from 'react-icons/fa';

const ExperienceCard = ({ icon, title, period, company, description, skills }) => {
  return (
    <motion.div
      className="glass-card p-6 h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan text-xl flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-neon-cyan">{company}</span>
            <span className="text-gray-400 text-sm">• {period}</span>
          </div>
          <p className="text-gray-300 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {skills && skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded-full bg-deep-blue text-gray-300 border border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ icon, value, label, delay }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan text-2xl mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
      <p className="text-gray-300">{label}</p>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const experiences = [
    {
      title: "Mobile App Developer",
      company: "TMR Trading Lanka Pvt Ltd",
      date: "2023 - Present",
      description: "Specializing in developing mobile applications with Flutter. Creating intuitive and responsive UIs, implementing business logic, and ensuring smooth performance across devices.",
      skills: ['Flutter', 'Dart', 'Firebase', 'UI/UX', 'REST APIs'],
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      date: "2022 - Present",
      description: "Developing custom web and mobile solutions for clients. Managing projects from concept to delivery while ensuring client satisfaction and maintaining code quality.",
      skills: ['React', 'Next.js', 'Flutter', 'Firebase', 'Client Management'],
    },
    {
      title: "Crypto Enthusiast",
      company: "Independent",
      date: "2021 - Present",
      description: "Actively exploring the cryptocurrency space through trading, research, and community involvement. Analyzing market trends and implementing various investment strategies.",
      skills: ['Market Analysis', 'Trading Strategies', 'Risk Management', 'Blockchain'],
    },
  ];

  const stats = [
    { value: "2+", label: "Mobile Apps Developed" },
    { value: "5+", label: "Design Projects" },
    { value: "3+", label: "Satisfied Clients" },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-darker-blue to-deep-blue" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Experience</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            My professional journey as a self-taught developer has equipped me with a unique blend of technical skills and business acumen.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8 mt-12">
          <ExperienceCard
            icon={<FaCode />}
            title="Freelance Full-Stack Developer"
            period="2020 - Present"
            company="Self-employed"
            description="Delivering complete web and mobile solutions for clients across various industries. Building secure, production-ready systems with a focus on business value and user experience. Managing the entire development lifecycle from requirements gathering to deployment and maintenance."
            skills={['React', 'Node.js', 'TypeScript', 'Firebase', 'Supabase', 'MongoDB']}
          />

          <ExperienceCard
            icon={<FaLaptopCode />}
            title="Mobile App Developer"
            period="2021 - Present"
            company="Self-employed"
            description="Developing cross-platform mobile applications with Flutter and React Native. Creating intuitive user interfaces, implementing complex business logic, and ensuring smooth performance across devices. Handling app store submissions and updates."
            skills={['Flutter', 'React Native', 'Firebase', 'UI/UX', 'REST APIs']}
          />

          <ExperienceCard
            icon={<FaBriefcase />}
            title="Tech-Sales Experience"
            period="2019 - Present"
            company="Various"
            description="Leveraging my technical knowledge to effectively communicate complex solutions to clients. Translating business requirements into technical specifications and ensuring client satisfaction throughout the project lifecycle."
            skills={['Client Communication', 'Requirements Gathering', 'Project Scoping', 'Technical Consulting']}
          />
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10 relative inline-block">
            Achievements & Stats
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-neon-cyan"></span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <StatCard
              icon={<FaCode />}
              value="15+"
              label="Projects Completed"
              delay={0.1}
            />
            <StatCard
              icon={<FaUsers />}
              value="6+"
              label="Satisfied Clients"
              delay={0.2}
            />
            <StatCard
              icon={<FaClock />}
              value="100%"
              label="On-Time Delivery"
              delay={0.3}
            />
            <StatCard
              icon={<FaBriefcase />}
              value="4+"
              label="Years Experience"
              delay={0.4}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;