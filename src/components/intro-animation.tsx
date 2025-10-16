"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      // Wait for text to be visible for 1s
      await new Promise(resolve => setTimeout(resolve, 3500)); 
      
      // Then fade out
      setIsVisible(false);
    };

    sequence();
  }, []);

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } },
  };

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: 'easeOut', delay: 1 } },
  };
  
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 1.5, ease: 'easeOut' } }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="intro-overlay"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onAnimationComplete={() => {
            // Optional: to remove from DOM after animation
            // document.querySelector('.intro-overlay')?.remove();
          }}
        >
          <motion.h1
            className="text-5xl font-bold text-foreground md:text-7xl font-headline"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            Ankit Singh
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-muted-foreground"
            variants={taglineVariants}
            initial="hidden"
            animate="visible"
          >
            Building things that make sense.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
