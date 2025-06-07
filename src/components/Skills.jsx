import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import ProgressBar from './shared/ProgressBar';
import { FiCode, FiDatabase, FiLayout, FiTool } from 'react-icons/fi';

const Skills = () => {
  const programmingSkills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'Java', percentage: 80 },
  ];

  const frameworkSkills = [
    { name: 'React', percentage: 85 },
    { name: 'Bootstrap', percentage: 90 },
    { name: 'Tailwind CSS', percentage: 85 },
  ];

  const developerTools = [
    { name: 'Git', percentage: 85 },
    { name: 'Github', percentage: 90 },
    { name: 'VS Code', percentage: 95 },
    { name: 'Visual Studio', percentage: 85 },
  ];

  const designTools = [
    { name: 'Figma', percentage: 80 },
    { name: 'Canva', percentage: 85 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section bg-dark-900 relative">
      <div className="container">
        <SectionTitle title="My Skills" subtitle="What I bring to the table" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <FiCode className="text-primary-500 mr-3" size={24} />
              <h3 className="text-xl font-bold">Programming Languages</h3>
            </div>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {programmingSkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <ProgressBar name={skill.name} percentage={skill.percentage} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <FiLayout className="text-primary-500 mr-3" size={24} />
              <h3 className="text-xl font-bold">Frameworks & Libraries</h3>
            </div>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {frameworkSkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <ProgressBar name={skill.name} percentage={skill.percentage} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <FiTool className="text-primary-500 mr-3" size={24} />
              <h3 className="text-xl font-bold">Developer Tools</h3>
            </div>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {developerTools.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <ProgressBar name={skill.name} percentage={skill.percentage} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-6 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <FiDatabase className="text-primary-500 mr-3" size={24} />
              <h3 className="text-xl font-bold">Design Tools</h3>
            </div>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {designTools.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <ProgressBar name={skill.name} percentage={skill.percentage} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 glass-card p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold mb-4">Additional Skills & Coursework</h3>
          <div className="flex flex-wrap gap-3">
            {['Data Structures', 'Algorithms', 'Databases', 'Computer Networking', 'Software Engineering', 'System Design'].map((item) => (
              <motion.span
                key={item}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(108, 99, 255, 0.2)' }}
                className="px-4 py-2 bg-dark-700 rounded-full text-sm font-medium border border-dark-600"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;