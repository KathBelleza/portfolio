import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loading = ({ onLoadingComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      onLoadingComplete();
    }, 2500); // Loading screen duration

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: 'linear-gradient(135deg, #2d1b4e 0%, #1a0b2e 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box textAlign="center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #e0b0ff, #9b4dca)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 30px rgba(224, 176, 255, 0.3)',
              mb: 2,
            }}
          >
            Hello, Welcome!
          </Typography>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Box
              sx={{
                width: '50px',
                height: '50px',
                margin: '0 auto',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #e0b0ff, #9b4dca)',
                boxShadow: '0 0 20px rgba(224, 176, 255, 0.5)',
              }}
            />
          </motion.div>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Loading;
