import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const { title, description, technologies, icon, color, github, demo } = project;
  
  const getColorClass = (colorName) => {
    const colorMap = {
      primary: 'from-primary-500 to-primary-700',
      secondary: 'from-secondary-500 to-secondary-700',
      accent: 'from-accent-500 to-accent-700',
    };
    
    return colorMap[colorName] || colorMap.primary;
  };
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="project-card h-full flex flex-col"
    >
      <div className={`p-6 rounded-t-lg bg-gradient-to-br ${getColorClass(color)}`}>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full backdrop-blur-sm">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-300 mb-6 flex-1">{description}</p>
        
        <div className="mt-auto">
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-xs bg-dark-600 text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 text-sm px-3 py-2 bg-dark-600 hover:bg-dark-700 text-white rounded-md transition-colors duration-300"
              >
                <FiGithub size={16} />
                <span>GitHub</span>
              </motion.a>
            )}
            
            {demo && (
              <motion.a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 text-sm px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors duration-300"
              >
                <FiExternalLink size={16} />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;