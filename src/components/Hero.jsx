import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Hi, I'm{' '}
                <span className="text-gradient">Sushil Jeengar</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6 h-14">
                <TypeAnimation
                  sequence={[
                    'Android Developer',
                    2000,
                    'Front-End Developer',
                    2000,
                    'React.js Developer',
                    2000,
                    'Java Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                Passionate about technology, coding and problem-solving. Willing to network and connect with technology enthusiasts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                >
                  Contact Me
                  <FiArrowRight className="ml-2" />
                </motion.button>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline"
                >
                  View Projects
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex mt-8 gap-4"
            >
              <motion.a
                href="https://github.com/Sushil-Jeengar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="social-icon"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sushil-jeengar-570311265/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="social-icon"
              >
                <FiLinkedin size={20} />
              </motion.a>
            </motion.div>
          </div>

          <div className="w-full md:w-2/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30"
                ></motion.div>
                
                <div className="absolute inset-4 rounded-full border-2 border-primary-500/20 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-full h-full rounded-full bg-dark-700 flex items-center justify-center"
                  >
                    <div className="text-8xl font-bold text-primary-500">SJ</div>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-0 right-0 bg-primary-500 p-3 rounded-lg text-white shadow-lg"
              >
                <FiGithub size={24} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-10 left-0 bg-secondary-500 p-3 rounded-lg text-white shadow-lg"
              >
                <FiLinkedin size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
            <div className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-primary-500 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;