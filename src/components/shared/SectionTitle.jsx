import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      <p className="text-gray-400">{subtitle}</p>
      <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-6"></div>
    </motion.div>
  );
};

export default SectionTitle;