import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import { FiCalendar, FiAward } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'OpenHack Hackathon',
      role: 'Participant',
      description: 'Participated in a hackathon focusing on real-time coding challenges, collaborating with team members to develop solutions to complex problems within a limited timeframe.',
      skills: ['Real-time Coding', 'Team Building', 'Problem Solving', 'Innovation']
    },
    {
      id: 2,
      title: 'Organizing Committee Member',
      role: 'Core Team Member',
      description: 'Appointed as Core Team Member for Convocation, managed 250+ students and guests, and acted as a bridge between students, alumni, and faculty for effective and seamless communication.',
      skills: ['Team Building', 'Communication Skills', 'Management', 'Leadership']
    }
  ];

  return (
    <section id="experience" className="section bg-dark-800 relative">
      <div className="container">
        <SectionTitle title="Experience & Responsibilities" subtitle="My professional journey" />
        
        <div className="mt-12 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6 rounded-xl border border-dark-600 hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-dark-700 rounded-full flex items-center justify-center mb-4">
                    <FiAward className="text-primary-500" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                  <p className="text-primary-500 font-medium mb-4">{exp.role}</p>
                </div>
                
                <div className="md:w-3/4">
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-white font-medium mb-3">Skills Gained:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 text-sm bg-dark-700 text-primary-500 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 italic">
            Currently seeking new opportunities to grow and contribute to innovative projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;