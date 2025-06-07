import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import { FiCode, FiLayers, FiServer, FiSmartphone } from 'react-icons/fi';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="section bg-dark-800 relative">
      <div className="container">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
            <div className="text-gray-300 space-y-4">
              <p>
                I'm Sushil Jeengar, a passionate developer with expertise in Android Development, Front-End Development, React.js, and Java. 
              </p>
              <p>
                I'm currently pursuing a Bachelor of Technology in Information Technology at Rajasthan Technical University Kota. 
                My educational journey has equipped me with a strong foundation in technology and problem-solving skills.
              </p>
              <p>
                I believe in continuous learning and am always exploring new technologies to enhance my skill set. 
                I'm particularly interested in creating responsive, user-friendly applications that solve real-world problems.
              </p>
              <p>
                I'm open to connecting with technology enthusiasts and exploring collaborative opportunities in the tech space.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">What I Do</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                className="glass-card p-5 rounded-xl"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(108, 99, 255, 0.1)' }}
              >
                <div className="text-primary-500 mb-3">
                  <FiSmartphone size={36} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Android Development</h4>
                <p className="text-gray-400 text-sm">Building intuitive mobile applications with clean architecture.</p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-5 rounded-xl"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(108, 99, 255, 0.1)' }}
              >
                <div className="text-primary-500 mb-3">
                  <FiCode size={36} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Front-End Development</h4>
                <p className="text-gray-400 text-sm">Creating responsive, accessible, and beautiful user interfaces.</p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-5 rounded-xl"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(108, 99, 255, 0.1)' }}
              >
                <div className="text-primary-500 mb-3">
                  <FiLayers size={36} />
                </div>
                <h4 className="text-lg font-semibold mb-2">React.js</h4>
                <p className="text-gray-400 text-sm">Building modern, component-based web applications with React.</p>
              </motion.div>
              
              <motion.div 
                className="glass-card p-5 rounded-xl"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(108, 99, 255, 0.1)' }}
              >
                <div className="text-primary-500 mb-3">
                  <FiServer size={36} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Backend Development</h4>
                <p className="text-gray-400 text-sm">Developing reliable server-side applications and APIs.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;