import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-800 text-gray-400 relative">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Sushil Jeengar</h3>
            <p className="mb-4 text-gray-300">
              Android Development | Front-End Developer | React-Js | JAVA | Backend
            </p>
            <div className="flex space-x-3">
              <motion.a
                href="https://github.com/Sushil-Jeengar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#6C63FF" }}
                className="social-icon"
              >
                <FiGithub size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sushil-jeengar-570311265/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#6C63FF" }}
                className="social-icon"
              >
                <FiLinkedin size={18} />
              </motion.a>
              <motion.a
                href="mailto:sushiljeengar8@gmail.com"
                whileHover={{ y: -3, color: "#6C63FF" }}
                className="social-icon"
              >
                <FiMail size={18} />
              </motion.a>
              <motion.a
                href="tel:6376032704"
                whileHover={{ y: -3, color: "#6C63FF" }}
                className="social-icon"
              >
                <FiPhone size={18} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-primary-500 transition-colors duration-300 cursor-pointer"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-primary-500 transition-colors duration-300 cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-primary-500 transition-colors duration-300 cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-primary-500 transition-colors duration-300 cursor-pointer"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-primary-500 transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-primary-500" />
                <span>sushiljeengar8@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-primary-500" />
                <span>+91 6376032704</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-dark-600 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Sushil Jeengar. All rights reserved.</p>
          
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mt-4 md:mt-0 flex items-center text-primary-500 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
          >
            <span className="mr-2">Back to Top</span>
            <FiArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;