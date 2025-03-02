import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaTelegram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactMethod = ({ icon, title, value, link, delay }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-4 p-4 glass-card hover:border-neon-cyan transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan text-xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="text-gray-300">{value}</p>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'uminda.h.aberathne@gmail.com',
      link: 'mailto:uminda.h.aberathne@gmail.com'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '+94 71 342 7470',
      link: 'https://api.whatsapp.com/send/?phone=94713427470&text&type=phone_number&app_absent=0'
    },
    {
      icon: <FaTelegram />,
      title: 'Telegram',
      value: '@UHAAHM',
      link: 'https://t.me/UHAAHM'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Sri Lanka',
      link: 'https://www.google.com/maps/place/Sri+Lanka'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-deep-blue to-darker-blue" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you. I'm open to web development projects, UI/UX design work, and business collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8"
            ref={formRef}
          >
            <h3 className="text-2xl font-bold text-white mb-6 relative inline-block">
              Send Me a Message
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-neon-cyan"></span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-darker-blue border border-gray-700 rounded-lg focus:outline-none focus:border-neon-cyan text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-darker-blue border border-gray-700 rounded-lg focus:outline-none focus:border-neon-cyan text-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-darker-blue border border-gray-700 rounded-lg focus:outline-none focus:border-neon-cyan text-white transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-darker-blue border border-gray-700 rounded-lg focus:outline-none focus:border-neon-cyan text-white transition-colors resize-none"
                  placeholder="Hello, I'd like to discuss a project..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 relative overflow-hidden group ${
                    isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-neon-cyan/20 hover:bg-neon-cyan/30 border border-neon-cyan/50'
                  }`}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-cyan to-neon-magenta opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-green-400"
                  >
                    Your message has been sent successfully!
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
          
          {/* Contact Methods */}
          <div className="space-y-6">
            <motion.h3
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-white mb-6 relative inline-block"
            >
              Contact Information
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-neon-cyan"></span>
            </motion.h3>
            
            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <ContactMethod 
                  key={idx} 
                  {...method} 
                  delay={0.3 + idx * 0.1} 
                />
              ))}
            </div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass-card p-6 mt-8"
            >
              <h4 className="text-xl font-bold text-white mb-3">Open To</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  <span>Web & App Development Projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  <span>UI/UX Design Work</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  <span>Crypto Trading & Investment Partnerships</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  <span>Business Collaborations</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 