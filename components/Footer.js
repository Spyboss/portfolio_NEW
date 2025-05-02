import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaTelegram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Spyboss', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/uminda-hansana-a3b6021b3/', label: 'LinkedIn' },
    { icon: <FaFacebook />, href: 'https://web.facebook.com/uminda.aberathne', label: 'Facebook' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/uhadev007/', label: 'Instagram' },
    { icon: <FaWhatsapp />, href: 'https://api.whatsapp.com/send/?phone=94713427470&text&type=phone_number&app_absent=0', label: 'WhatsApp' },
    { icon: <FaTelegram />, href: 'https://t.me/UHAAHM', label: 'Telegram' }
  ];

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-darker-blue border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <h2 className="text-2xl font-bold text-white">
                <span className="text-neon-cyan">@</span>UHADEV
              </h2>
            </motion.div>
            <p className="text-gray-400 mb-4">
              Uminda Aberathne - Full-Stack Developer, Freelancer, and Web & Mobile App Builder passionate about creating digital experiences and business solutions that deliver real value.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-neon-cyan"></span>
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4 relative inline-block">
              Contact Me
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-neon-cyan"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Have a project in mind? Get in touch and let's create something amazing together.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>Email: uminda.h.aberathne@gmail.com</p>
              <p>WhatsApp: +94 71 342 7470</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Uminda Aberathne. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <FaHeart className="text-neon-magenta mx-1" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;