import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section bg-dark-900 relative">
      <div className="container">
        <SectionTitle title="Contact Me" subtitle="Let's get in touch" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-dark-700 rounded-full mr-4">
                  <FiMail className="text-primary-500" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                  <a 
                    href="mailto:sushiljeengar8@gmail.com" 
                    className="text-white hover:text-primary-500 transition-colors duration-300"
                  >
                    sushiljeengar8@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-dark-700 rounded-full mr-4">
                  <FiPhone className="text-primary-500" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                  <a 
                    href="tel:6376032704" 
                    className="text-white hover:text-primary-500 transition-colors duration-300"
                  >
                    +91 6376032704
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-dark-700 rounded-full mr-4">
                  <FiGithub className="text-primary-500" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">GitHub</h4>
                  <a 
                    href="https://github.com/Sushil-Jeengar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-500 transition-colors duration-300"
                  >
                    github.com/Sushil-Jeengar
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-dark-700 rounded-full mr-4">
                  <FiLinkedin className="text-primary-500" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/sushil-jeengar-570311265/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-500 transition-colors duration-300"
                  >
                    linkedin.com/in/sushil-jeengar-570311265
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors duration-300"
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors duration-300 resize-none"
                  placeholder="Your Message"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                      <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <FiSend className="mr-2" />
                    Send Message
                  </div>
                )}
              </motion.button>
              
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-success-500/20 border border-success-500/30 text-success-500 rounded-lg text-center"
                >
                  Your message has been sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;