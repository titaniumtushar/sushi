import React from 'react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/shared/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 border-t-2 border-primary-500 rounded-full"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute text-primary-500 font-medium"
            >
              Loading...
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-dark-900 min-h-screen text-gray-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
              <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
              
              <Navbar />
              
              <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Experience />
                <Contact />
              </main>
              
              <Footer />
              <ScrollToTop />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;