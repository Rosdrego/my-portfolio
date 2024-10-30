// src/components/Carousel.js
import React from 'react';
import { motion } from 'framer-motion';

function Carousel() {
  return (
    <div className="carousel-container">
      <motion.div 
        className="carousel-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img src="https://static.vecteezy.com/system/resources/previews/048/879/279/non_2x/programming-screen-code-on-computer-free-png.png" alt="Futuristic Laptop" /> {/* Caminho absoluto da pasta public */}
      </motion.div>
      <motion.div 
        className="carousel-code"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <p>{`const codeExample = () => { return "Hello World"; }`}</p>
      </motion.div>
    </div>
  );
}

export default Carousel;
