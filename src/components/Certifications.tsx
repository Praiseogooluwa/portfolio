
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      id: 1,
      title: 'Data Science Bootcamp',
      issuer: 'GOMYCODE',
      date: '2024',
      credentialId: 'GCP-ML-2024',
      image: '/public/GMC.png',
      color: 'from-blue-500 to-blue-600',
      description: 'Completion of the GOMYCODE Data Science Bootcamp Course',
      skills: ['SQL', 'TensorFlow', 'Python', 'PowerBI', 'Machine Learning', 'Deep Learning', 'Data Visualization', 'Data Analysis'],
    },
    {
      id: 2,
      title: 'Data Science Job Simulation',
      issuer: 'BRITISH AIRWAYS',
      date: '2024',
      credentialId: '7p4Zh2mWEhpTz72Po',
      image: '/public/british.png',
      color: 'from-orange-500 to-red-500',
      description: 'Completion of British Airways Data Science job simulation',
      skills: ['Python', 'Scikit-learn', 'BeautifulSoup', 'Requests','Pandas', 'NumPy','Matplotlib', 'Seaborn'],
    },
    {
      id: 3,
      title: 'Data Science Job Simulation',
      issuer: 'Boston Consulting Group (BCG)',
      date: '2022',
      credentialId: 'aPNQTFSAqN3STHfRa',
      image: '/public/BCG.png',
      color: 'from-purple-500 to-pink-500',
      description: 'Comprehensive deep learning and neural network fundamentals',
      skills: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn'],
    },
    /*{
      id: 4,
      title: 'Data Science Professional Certificate',
      issuer: 'IBM',
      date: '2022',
      credentialId: 'IBM-DS-2022-004',
      logo: '📊',
      color: 'from-blue-600 to-indigo-600',
      description: 'Complete data science methodology and tools mastery',
      skills: ['Python', 'Data Analysis', 'Visualization', 'SQL'],
    },
    {
      id: 5,
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2022',
      credentialId: 'TF-DEV-2022-005',
      logo: '⚡',
      color: 'from-yellow-500 to-orange-500',
      description: 'Proficiency in building and deploying ML models with TensorFlow',
      skills: ['TensorFlow', 'Keras', 'Model Building', 'Computer Vision'],
    },
    {
      id: 6,
      title: 'Azure AI Engineer Associate',
      issuer: 'Microsoft',
      date: '2021',
      credentialId: 'AZ-AI-2021-006',
      logo: '🔷',
      color: 'from-blue-400 to-blue-600',
      description: 'AI solution development using Microsoft Azure services',
      skills: ['Azure ML', 'Cognitive Services', 'Bot Framework'],
    },*/
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in data science, machine learning, and cloud technologies.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Header with gradient */}
              <div className="relative w-full">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="w-full"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <Award className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </motion.button>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                  {cert.title}
                </h3>

                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {cert.issuer}
                </p>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Credential ID */}
                <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Credential ID
                  </span>
                  <p className="text-sm font-mono text-gray-700 dark:text-gray-300 mt-1">
                    {cert.credentialId}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 block">
                    Key Skills
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
              >
                5+
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Certifications</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2"
              >
                500+
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Learning Hours</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2"
              >
                2
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Cloud Platforms</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2"
              >
                100%
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Pass Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
