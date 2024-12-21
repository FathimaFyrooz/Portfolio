import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  const textVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 3 } },
  };

  const buttonVariant = {
    hover: {
      scale: 1.1,
      transition: { yoyo: 10 }, // Infinite bounce effect
    },
  };

  return (
    <div
      className="home-container"
      style={{
        textAlign: 'center',
        padding: '50px',
        boxSizing: 'border-box',
        backgroundColor: '#0000',
        color: '#f4f4f9',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <header>
        <motion.h1
          style={{  }}
          class="motion.h1"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          style={{ fontSize: '1.5rem', color: '#7f8c8d' }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay:0.5}}
        >
          Hi, I’m Fathima Fyrooz C S. A Passionate Software Developer
        </motion.p>
      </header>

      <motion.div
        style={{ marginTop: '30px' }}
        whileHover="hover"
        variants={buttonVariant}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#a9ff1c',
            ':hover': {
              backgroundColor: '#86cc19',
            },
          }}
        >
          View Journey
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;
