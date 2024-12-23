import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom';

const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [circles, setCircles] = useState([]);
  const nav=useNavigate();

  const navigateToJourney=()=>{
    nav('/home');
  }

  const skills = [
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    'Building Scalable Web Applications',
    'Designing Seamless User Interfaces',
  ];

  const [currentSkill, setCurrentSkill] = useState(skills[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => {
        const currentIndex = skills.indexOf(prev);
        return skills[(currentIndex + 1) % skills.length];
      });
    }, 2500); // Changes skill every 2.5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Update mouse position and generate random circles
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Create random circles at mouse position
      if (Math.random() < 0.3) {  // Trigger circles randomly to avoid overflow
        const newCircle = {
          x: e.clientX,
          y: e.clientY,
          scale: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          id: Date.now() + Math.random(),  // Unique ID for the circle
        };
        
        // Add the new circle to the state
        setCircles((prevCircles) => [...prevCircles, newCircle]);

        // Remove circle after 2 seconds
        setTimeout(() => {
          setCircles((prevCircles) => 
            prevCircles.filter((circle) => circle.id !== newCircle.id)
          );
        }, 2000);  // Circle disappears after 2 seconds
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="home-container"
      style={{
        position: 'relative',
        textAlign: 'center',
        padding: '50px',
        boxSizing: 'border-box',
        backgroundColor:'black',
        color: '#f4f4f9',
        height: '100vh',
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',  // Ensure circles don't go outside the view
      }}
    >
      {/* Infinity Circles Effect */}
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          style={{
            position: 'absolute',
            width: '20%',
            height: '20%',
            borderRadius: '50%',
            border: '2px solid #a9ff1c',
            left: circle.x - 30,
            top: circle.y - 30, // To center the circle around the mouse position
          }}
          animate={{
            scale: [circle.scale, 1, circle.scale],  // Infinity loop on scaling
            opacity: [circle.opacity, 0.2, circle.opacity],  // Fading effect
            rotate: [0, 180, 360],  // Rotation effect
          }}
          transition={{
            duration: 3 + Math.random(),  // Random duration for the animation
            repeat: Infinity,  // Infinite loop
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main Content */}
      <header>
        <motion.h1
          style={{
            fontSize: '80px',
            fontFamily: 'fantasy',
            letterSpacing: '3px',
          }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 3 } },
          }}
        >
          Fathima Fyrooz
        </motion.h1>
        <motion.p
          key={currentSkill}
          style={{
            fontSize: '25px',
            color: '#7f8c8d',
            fontFamily: 'Arial Black',
            fontWeight: 'bold',
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {currentSkill}
        </motion.p>
      </header>

      {/* View Journey Button */}
      <motion.div
        style={{ marginTop: '30px' }}
        whileHover="hover"
        variants={{
          hover: {
            scale: 1.1,
            transition: { yoyo: 10 },
          },
        }}
      >
        <Button
          variant="contained"
          sx={{
            color:'#f8f9fa',
            fontWeight:'bold',
            backgroundColor: '#a9ff1c',
            ':hover': {
              backgroundColor: '#86cc19',
            }
          }}
          onClick={navigateToJourney}
        >
          View Journey
        </Button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
