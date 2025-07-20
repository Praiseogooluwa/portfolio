
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, Twitter, Sparkles, Zap } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import FloatingElements from './FloatingElements';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Praiseogooluwa', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: 'https://linkedin.com/in/praise-ogooluwa', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-cyan-400' },
  ];

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  const nameText = "Isaiah Ogooluwa Bakare";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <ParticleBackground />
      <FloatingElements />
      
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full bg-gradient-to-br from-blue-400/30 via-purple-500/30 to-pink-500/30"
          style={{
            backgroundSize: '400% 400%',
          }}
        />
      </div>
      
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Animated name with individual letter animations */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold pb-6 mb-6 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative inline-block">
              {nameText.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1, 
                    rotateZ: [-5, 5, -5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
              
              {/* Floating icons around name */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-4 -right-4"
              >
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>
              
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-4 -left-4"
              >
                <Zap className="w-6 h-6 text-blue-400" />
              </motion.div>
            </div>
          </motion.h1>

          {/* Enhanced subtitle with typewriter effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8"
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
              whileInView={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(90deg, #374151, #3b82f6, #8b5cf6, #374151)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Data Scientist & AI Engineer
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Transforming complex data into intelligent solutions. Passionate about machine learning, 
              deep learning, and building AI systems that make a real-world impact.
            </motion.p>
          </motion.div>

          {/* Enhanced action buttons with more effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <motion.a
                href="/Bakare_Resume.pdf"
                download="Isaiah-Bakare-Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-white rounded-full font-semibold hover:bg-blue-700 transition mx-auto"
              >
                <Download className="h-5 w-5 z-10" />
                <span className="z-10">Download Resume</span>
              </motion.a>


              
              {/* Floating particles on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                whileHover={{
                  background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)"
                }}
              />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: "#8b5cf6",
                color: "#8b5cf6"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="relative px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold flex items-center space-x-2 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 overflow-hidden group"
            >
              <Mail className="h-5 w-5" />
              <span>Get In Touch</span>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
              />
            </motion.button>
          </motion.div>

          {/* Enhanced social links with magnetic effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.3, 
                  y: -5,
                  rotateY: 180,
                }}
                whileTap={{ scale: 0.9 }}
                className={`relative p-4 bg-white/10 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 ${social.color} transition-all duration-300 shadow-lg hover:shadow-2xl group`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <social.icon className="h-6 w-6 relative z-10" />
                
                {/* Ripple effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20"
                  whileHover={{
                    scale: [1, 1.5, 2],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.2,
              backgroundColor: "rgba(59, 130, 246, 0.2)"
            }}
            className="p-4 rounded-full bg-white/10 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
          >
            <ArrowDown className="h-6 w-6 group-hover:animate-bounce" />
            
            {/* Pulsing ring around scroll indicator */}
            <motion.div
              className="absolute inset-0 border-2 border-blue-400 rounded-full opacity-0"
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
