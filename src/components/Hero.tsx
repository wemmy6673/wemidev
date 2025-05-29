import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import wemi from '../images/wemi.jpeg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const subtitleControls = useAnimationControls();

  const text = "Hi there, I'm Wemi";
  const subtitle = "FrontEnd Developer | Web3 Enthusiast";
  const period = 2000; // How long to pause at full text
  const delta = 100; // How fast to type/delete

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [displayText, isDeleting]);

  const tick = () => {
    let updatedText = isDeleting 
      ? text.substring(0, displayText.length - 1)
      : text.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (!isDeleting && updatedText === text) {
      setTimeout(() => setIsDeleting(true), period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  useEffect(() => {
    subtitleControls.start({
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 }
    });
  }, [subtitleControls]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
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

        <motion.div
          className="text-3xl md:text-5xl font-bold mb-4 h-20"
        >
          <div className="flex justify-center">
            <h1 className="relative">
              {displayText}
              <span className="absolute right-[-4px] w-[2px] h-[80%] top-[10%] bg-blue-400 animate-pulse"></span>
            </h1>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={subtitleControls}
          className="text-xl md:text-2xl text-gray-300 mb-8 relative"
        >
          {subtitle}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
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