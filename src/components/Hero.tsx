import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import wemi from '../images/wemi.jpeg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const text = "Hi, I'm Wemi";
  const period = 2000; // How long to pause at full text
  const delta = 100; // How fast to type/delete

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    let ticker = setTimeout(() => {
      let updatedText = isDeleting 
        ? text.substring(0, displayText.length - 1)
        : text.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === text) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
      }
    }, delta);

    return () => clearTimeout(ticker);
  }, [displayText, isDeleting]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center container mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-400"
        >
          <img
            src={wemi}
            alt="Wemi's Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="h-12 mb-2">
          <h1 className="text-xl md:text-3xl font-semibold tracking-tight relative inline-block">
            {displayText}
            <span className="absolute right-[-4px] w-[2px] h-[80%] top-[10%] bg-blue-400 animate-pulse"></span>
          </h1>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm md:text-base text-gray-300 mb-6"
        >
          Frontend Developer | Web3 Enthusiast
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          onClick={scrollToContact}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold"
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero; 