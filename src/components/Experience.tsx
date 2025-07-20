
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: 'Data Scientist',
      company: 'Boston Consulting Group (BCG)',
      location: 'Remotely',
      period: '2022 - 2024',
      description: 'Conducted a customer churn analysis using Python and machine learning (Random Forest, 85% accuracy), delivered actionable insights through visualizations and a summary report for executive decision-making.',
      achievements: [
        'Conducted efficient data analysis using Python, including Pandas and NumPy',
        'Employed data visualization techniques for insightful trend interpretation',
        'Completed the engineering and optimization of a random forest model, achieving an 85% accuracy rate in predicting customer churn',
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'British Airways',
      location: 'Remotely',
      period: '2024 - 2025',
      description: 'Completed a data science simulation highlighting its impact on British Airways’ success. Scraped and analyzed customer reviews to uncover key insights and built a predictive model to identify factors influencing customer purchasing behavior.',
      achievements: [
        'Completed a simulation focussing on how data science is a critical component of British Airways success',
        'Scraped and analysed customer review data to uncover findings',
        'Built a predictive model to understand factors that influence buying behaviour',
      ],
      technologies: ['Python', 'Scikit-learn', 'BeautifulSoup', 'Requests','Pandas', 'NumPy','Matplotlib', 'Seaborn'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Hamoye',
      location: 'Remotely',
      period: '2023 - 2023',
      description: 'Developed a Random Forest model to reduce customer attrition, boosting monthly retention by 12 basis points. Collaborated with product and marketing teams to increase service opt-ins by 18%. Built a Python-based recommendation engine that generated $225K in annual revenue and contributed to a prosthesis prototype analysis, saving over $1M in development costs.',
      achievements: [
        'Built a Random Forest model to predict customer attrition. Improved retention by 12 basis points with feature-based targeting.',
        'Analyzed prototype data for a prosthesis project. Helped save over $1M in production costs',
        'Created a Python-based recommendation engine with the product team. Increased user engagement and generated $225K in annual revenue',
      ],
      technologies: ['Python', 'scikit-learn (Random Forest)', 'Pandas', 'NumPy','Matplotlib', 'Seaborn', 'Plotly', 'Git', 'Jupyter'],
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My career progression in data science and AI, building impactful solutions across various industries.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden lg:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 z-10 hidden lg:block" />

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}
              >
                <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Header */}
                  <div className="mb-6">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-medium mb-4`}>
                      {exp.period}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-semibold text-lg">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/Bakare_Resume.pdf"
            download="Isaiah-Full-Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition mx-auto w-max"
          >
            <Calendar className="h-5 w-5" />
            <span>Download Full Resume</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
