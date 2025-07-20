
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Database, TrendingUp, Award, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'TensorFlow', level: 90, icon: '🧠' },
    { name: 'PyTorch', level: 85, icon: '🔥' },
    { name: 'Scikit-learn', level: 92, icon: '📊' },
    { name: 'SQL', level: 88, icon: '🗄️' },
    { name: 'React', level: 70, icon: '⚛️' },
  ];

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '30+' },
    { icon: Users, label: 'Clients Served', value: '10+' },
    { icon: Award, label: 'Certifications', value: '3+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about leveraging data and AI to solve real-world problems and drive innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-1"
              >
                <img
                  src="/me.jpg"
                  alt="My Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Brain className="h-8 w-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Database className="h-8 w-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Building the Future with Data & AI
            </h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 mb-8">
              <p>
                With over 2 years of experience in data science and machine learning, I specialize in 
                developing intelligent systems that transform raw data into actionable insights. My journey 
                began with a fascination for patterns in data and has evolved into building production-ready 
                AI solutions.
              </p>
              <p>
                I've built and contributed to a range of AI and data science projects , from recommendation systems and predictive analytics to automation tools and AI-powered assistants. 
                My work, showcased on GitHub, reflects a strong focus on solving real-world problems using machine learning, data analysis, and backend development. 
                I'm passionate about turning ideas into smart, scalable solutions that create real impact.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Core Skills</h4>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4 mx-auto"
              >
                <stat.icon className="h-8 w-8 text-white" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
