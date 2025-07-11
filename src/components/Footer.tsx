
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Code, Database, Brain } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Praiseogooluwa', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/praise-ogooluwa', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:praiseogooluwa118@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = [
    { name: 'Machine Learning', icon: Brain },
    { name: 'Data Science', icon: Database },
    { name: 'Web Development', icon: Code },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                <Brain className="h-8 w-8 text-blue-400" />
                <Code className="h-6 w-6 text-purple-400" />
                <Database className="h-6 w-6 text-green-400" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
               Isaiah Ogooluwa Bakare
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Data Scientist & AI Engineer passionate about transforming complex data 
              into intelligent solutions that drive innovation and create real-world impact.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-full"
                >
                  <skill.icon className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-400">
                📧 praiseogooluwa118@gmail.com
              </p>
              <p className="text-gray-400">
                📱 +234 (0) 704-811-6542
              </p>
              <p className="text-gray-400">
                📍 Lagos, Nigeria
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Let's Collaborate
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Praise Ogooluwa. Built with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>and React + TypeScript</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Terms of Service
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
