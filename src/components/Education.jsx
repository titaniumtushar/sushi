import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      id: 1,
      institution: 'Rajasthan Technical University Kota',
      location: 'Kota, Rajasthan',
      degree: 'Bachelor of Technology in Information Technology',
      period: 'Sep 2022 – Present',
      description: 'Currently pursuing a B.Tech degree in Information Technology with a focus on software development, data structures, algorithms, and web technologies.'
    },
    {
      id: 2,
      institution: "St. Anslem's Sr. Sec. School",
      location: 'Bhilwara, Rajasthan',
      degree: 'Physics, Chemistry, Mathematics',
      period: 'March 2021 – March 2022',
      description: 'Completed higher secondary education with a focus on PCM (Physics, Chemistry, Mathematics), which provided a strong foundation for pursuing technical education.'
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'Responsive Web Design',
      organization: 'Free Code Camp',
      description: '300+ Hours of work in HTML, CSS',
      link: 'https://www.freecodecamp.org/certification/sushil-jeengar/responsive-web-design'
    }
  ];

  return (
    <section id="education" className="section bg-dark-900 relative">
      <div className="container">
        <SectionTitle title="Education & Certifications" subtitle="My academic journey" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="timeline-item"
                >
                  <div className="timeline-dot"></div>
                  <div className="glass-card p-6 rounded-xl ml-2">
                    <h4 className="text-xl font-bold text-white mb-1">{item.institution}</h4>
                    <h5 className="text-lg font-semibold text-primary-500 mb-3">{item.degree}</h5>
                    
                    <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4">
                      <div className="flex items-center mr-4 mb-2">
                        <FiCalendar className="mr-1" size={14} />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <FiMapPin className="mr-1" size={14} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-5 rounded-xl border border-dark-600 hover:border-primary-500/30 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                  <h5 className="text-md font-medium text-primary-500 mb-3">{cert.organization}</h5>
                  <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                  
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-400 text-sm flex items-center transition-colors duration-300"
                    >
                      View Certificate →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 glass-card p-5 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">Coursework</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Data Structures</li>
                <li>• Algorithms</li>
                <li>• Databases</li>
                <li>• Computer Networking</li>
                <li>• Software Engineering</li>
                <li>• System Design</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;