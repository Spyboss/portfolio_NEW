import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp, FaTelegram, FaRocket, FaClock, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Platform',
    'AI Integration',
    'Custom Software',
    'Consultation',
    'Other'
  ];

  const budgetRanges = [
    '$200 - $500',
    '$500 - $1,500',
    '$1,500 - $5,000',
    '$5,000+',
    'Let\'s discuss'
  ];

  const timelines = [
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3+ months',
    'Flexible'
  ];

  const processSteps = [
    {
      icon: FaEnvelope,
      title: 'Initial Contact',
      description: 'Share your project details and requirements'
    },
    {
      icon: FaClock,
      title: 'Free Consultation',
      description: 'We discuss your goals and create a roadmap'
    },
    {
      icon: FaRocket,
      title: 'Project Launch',
      description: 'Development begins with regular updates'
    },
    {
      icon: FaCheckCircle,
      title: 'Delivery & Support',
      description: 'Launch your solution with ongoing support'
    }
  ];

  return (
    <section id="contact" className="section-spacing bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/10 to-blue-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.4"/%3E%3C/svg%3E")'}}></div>
      
      <div className="container-spacing relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Transform Your Vision into Reality
          </h2>
          <p className="text-large text-gray-300 max-w-3xl mx-auto">
            Ready to build something amazing? Let's discuss your project and create a roadmap to success. 
            Get expert guidance and a custom solution tailored to your business needs.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-heading-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent text-center">How We Work Together</h3>
          <div className="card-grid">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/30 shadow-lg shadow-blue-500/20">
                    <IconComponent className="text-blue-300 text-2xl" />
                  </div>
                  <h4 className="text-heading-5 text-white">{step.title}</h4>
                  <p className="text-body text-gray-300">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 neon-glow">
              {/* Enhanced Header with Avatar */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <span className="text-white text-2xl font-bold">UA</span>
                </div>
                <div>
                  <h3 className="text-heading-2 text-white">Let's Connect</h3>
                  <p className="text-body text-blue-300 font-medium">Transform Your Vision into Reality</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                    <FaEnvelope className="text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-heading-5 text-white">Email</h4>
                    <p className="text-body text-gray-300">Uminda.h.aberathne@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                    <FaMapMarkerAlt className="text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-heading-5 text-white">Location</h4>
                    <p className="text-body text-gray-300">Sri Lanka (Remote Worldwide)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                    <FaClock className="text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-heading-5 text-white">Response Time</h4>
                    <p className="text-body text-gray-300">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-heading-5 text-white">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Spyboss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/uminda-hansana-a3b6021b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://wa.me/94701234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-green-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://t.me/UHAAHM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
                  >
                    <FaTelegram />
                  </a>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-400/30 backdrop-blur-sm">
                <h4 className="text-heading-5 text-blue-300">Free Consultation Available</h4>
                <p className="text-body text-gray-300">
                  Get expert advice on your project requirements, technology stack, and implementation strategy at no cost.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 neon-glow">
              <h3 className="text-heading-2 text-white">Tell Me About Your Project</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:border-gray-600 backdrop-blur-sm"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:border-gray-600 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-white font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:border-gray-600 backdrop-blur-sm"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-white font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:border-gray-600 backdrop-blur-sm"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-white font-medium mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:border-gray-600 backdrop-blur-sm"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:border-gray-600 resize-none backdrop-blur-sm"
                    placeholder="Describe your project goals, requirements, and any specific features you need..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Project Details
                </button>

                <p className="text-body text-gray-400 text-center">
                  I'll respond within 24 hours with a detailed project proposal
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Social Proof / Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-heading-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent text-center">What Clients Say</h3>
          <div className="card-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-body text-gray-300 italic">
                "Great work on our CRM system! The solution exceeded our expectations and improved our workflow significantly."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-sm shadow-blue-500/30">
                  <span className="text-white text-sm font-bold">JS</span>
                </div>
                <div>
                  <p className="text-body-small text-white font-semibold">John Smith</p>
                  <p className="text-body-small text-gray-400">CEO, TechCorp</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 bg-gradient-to-br from-white/5 to-white/10 border border-cyan-400/20"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-body text-gray-300 italic">
                "Exceptional development skills and great communication throughout the project. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-sm shadow-blue-500/30">
                  <span className="text-white text-sm font-bold">MJ</span>
                </div>
                <div>
                  <p className="text-body-small text-white font-semibold">Maria Johnson</p>
                  <p className="text-body-small text-gray-400">Founder, StartupXYZ</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-6 bg-gradient-to-br from-white/5 to-white/10 border border-cyan-400/20"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-body text-gray-300 italic">
                "Fast delivery and clean code. The web application works perfectly and our customers love the new features."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-sm shadow-blue-500/30">
                  <span className="text-white text-sm font-bold">RK</span>
                </div>
                <div>
                  <p className="text-body-small text-white font-semibold">Robert Kim</p>
                  <p className="text-body-small text-gray-400">CTO, InnovateLab</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;