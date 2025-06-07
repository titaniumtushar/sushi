import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ name, percentage }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-white">{name}</span>
        <span className="text-primary-500">{percentage}%</span>
      </div>
      <div className="progress-bar-bg">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="progress-bar"
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;