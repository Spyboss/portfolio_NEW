import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp, FaTelegram, FaRocket, FaClock, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Prepare template parameters to match your EmailJS template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: `Project Type: ${formData.projectType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.message}`,
        time: new Date().toLocaleString()
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
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
    '$100 - $300',
    '$300 - $800',
    '$800 - $2,000',
    '$2,000+',
    'Let&apos;s discuss'
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
      
      <div className="container-full relative z-10">
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
            Ready to build something amazing? Let&apos;s discuss your project and create a roadmap to success. 
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
          <h3 className="text-heading-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent text-center mb-12">How We Work Together</h3>
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
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg shadow-blue-500/30 border-2 border-blue-400/30">
                  <Image 
                    src="/images/profile/uminda-profile.jpg" 
                    alt="Uminda Aberathne" 
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-heading-2 text-white">Let&apos;s Connect</h3>
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
                    aria-label="Visit GitHub profile"
                    className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20 hover:scale-110"
                    style={{
                      '--github-color': '#181717',
                      '--github-bg': 'rgba(24, 23, 23, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#181717';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(24, 23, 23, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/in/UHAAHM"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect on LinkedIn"
                    className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-110"
                    style={{
                      '--linkedin-color': '#0A66C2',
                      '--linkedin-bg': 'rgba(10, 102, 194, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0A66C2';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(10, 102, 194, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://wa.me/94701234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message on WhatsApp"
                    className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-110"
                    style={{
                      '--whatsapp-color': '#25D366',
                      '--whatsapp-bg': 'rgba(37, 211, 102, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#25D366';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://t.me/UHAAHM"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact via Telegram"
                    className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-110"
                    style={{
                      '--telegram-color': '#0088CC',
                      '--telegram-bg': 'rgba(0, 136, 204, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0088CC';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 136, 204, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
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
                  disabled={isLoading}
                  className={`btn-primary w-full flex items-center justify-center gap-2 transition-all duration-300 ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Project Details'
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-400/30 rounded-lg text-center"
                  >
                    <FaCheckCircle className="text-green-400 text-xl mx-auto mb-2" />
                    <p className="text-green-300 font-medium">Message sent successfully!</p>
                    <p className="text-green-200 text-sm">I&apos;ll respond within 24 hours with a detailed project proposal.</p>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-400/30 rounded-lg text-center"
                  >
                    <p className="text-red-300 font-medium">Failed to send message</p>
                    <p className="text-red-200 text-sm">Please try again or contact me directly via email.</p>
                  </motion.div>
                )}

                {!submitStatus && (
                  <p className="text-body text-gray-400 text-center">
                    I&apos;ll respond within 24 hours with a detailed project proposal
                  </p>
                )}
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
          <h3 className="text-heading-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent text-center mb-8">What Clients Say</h3>
          <div className="card-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 bg-gradient-to-br from-white/5 to-white/10 border border-cyan-400/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-body text-gray-300 italic mb-4">
                  &quot;Uminda delivered an exceptional ERP system that transformed our dealership operations. The automated billing and CRM features reduced our admin time by 60%. Professional, reliable, and highly skilled!&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm shadow-blue-500/30 border-2 border-blue-400/30">
                  <Image 
                    src="https://res.cloudinary.com/dthx4fxte/image/upload/v1753382510/unnamed_kwwvx7.jpg" 
                    alt="Gunawardana Motors" 
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-body-small text-white font-semibold">Gunawardana Motors</p>
                  <p className="text-body-small text-gray-400">Auto Dealership Owner</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 bg-gradient-to-br from-white/5 to-white/10 border border-cyan-400/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-body text-gray-300 italic mb-4">
                  &quot;The restaurant platform Uminda built revolutionized our operations! The digital menu system and table-side ordering improved customer experience dramatically. Modern design and flawless functionality!&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm shadow-blue-500/30 border-2 border-blue-400/30">
                  <Image 
                    src="https://res.cloudinary.com/dthx4fxte/image/upload/v1753382676/FB_IMG_1729942362525_ipfaeu.jpg" 
                    alt="Realtaste Restaurant" 
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-body-small text-white font-semibold">Realtaste Restaurant</p>
                  <p className="text-body-small text-gray-400">Co-Founder</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-6 bg-gradient-to-br from-white/5 to-white/10 border border-cyan-400/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-body text-gray-300 italic mb-4">
                  &quot;Echo Journal has completely transformed my daily routine! The AI-powered insights help me understand my habits better, and the automated reminders keep me on track. The cross-platform sync is seamless!&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm shadow-blue-500/30 border-2 border-blue-400/30">
                  <Image 
                    src="https://res.cloudinary.com/dthx4fxte/image/upload/v1753382813/5951752_i7hk7v.png" 
                    alt="Echo Journal User" 
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-body-small text-white font-semibold">Echo Journal User</p>
                  <p className="text-body-small text-gray-400">Productivity Enthusiast</p>
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