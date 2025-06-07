import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-800/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl md:text-2xl font-bold text-gradient"
            >
              Sushil Jeengar
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveSection(link.to)}
                className={`nav-link ${activeSection === link.to ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-dark-800/95 backdrop-blur-md"
      >
        {isOpen && (
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-base font-medium text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;