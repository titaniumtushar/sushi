import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import ProjectCard from './shared/ProjectCard';
import { FiUsers, FiCloud, FiGrid, FiHash } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Employee Management System',
      description: 'Developed an Employee Management System using React with full CRUD functionality. Implemented features for adding, updating, deleting, and viewing employee details. Ensured a user-friendly interface with responsive design, enhancing efficiency in managing employee records seamlessly.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      icon: <FiUsers size={24} />,
      color: 'primary',
      github: 'https://github.com/Sushil-Jeengar',
      demo: null
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A responsive weather application built using React that allows users to check real-time weather conditions by entering a city name. The app fetches data from an external API (such as OpenWeatherMap) and displays temperature, humidity, wind speed, and weather conditions.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'API Integration'],
      icon: <FiCloud size={24} />,
      color: 'secondary',
      github: 'https://github.com/Sushil-Jeengar',
      demo: null
    },
    {
      id: 3,
      title: 'Tic-Tac-Toe',
      description: 'Developed a dynamic Tic-Tac-Toe game using HTML, CSS, and JavaScript, implementing interactive features, user-friendly interface, real-time gameplay, and win condition checks. Utilized JavaScript for game logic, CSS for responsive design, and HTML for structure.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: <FiGrid size={24} />,
      color: 'accent',
      github: 'https://github.com/Sushil-Jeengar',
      demo: null
    },
    {
      id: 4,
      title: 'QR Code Generator',
      description: 'Created a QR code generator using HTML, CSS, and JavaScript. Implemented an input field for custom text, with JavaScript handling QR code creation via a library. Styled the interface using CSS for a responsive, user-friendly experience.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: <FiHash size={24} />,
      color: 'primary',
      github: 'https://github.com/Sushil-Jeengar',
      demo: null
    }
  ];

  return (
    <section id="projects" className="section bg-dark-800 relative">
      <div className="container">
        <SectionTitle title="My Projects" subtitle="What I've built" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/Sushil-Jeengar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;