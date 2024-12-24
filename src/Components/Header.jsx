import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { keyframes, styled } from '@mui/system';

// Define the keyframes animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Typography component
const AnimatedText = styled(Typography)(({ theme }) => ({
  marginBottom: '1rem',
  fontFamily: 'fantasy',
  color: 'transparent',
  background: 'linear-gradient(90deg,rgb(255, 254, 254),rgba(110, 109, 109, 0.77),rgb(245, 243, 243))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
  backgroundSize: '200% 200%',
  animation: `${gradientAnimation} 5s ease infinite`,
}));

const Header = () => {
  const downloadCV = () => {
    window.open('/path-to-your-cv.pdf', '_blank'); // Replace with your CV URL
  };

  const scheduleCall = () => {
    window.location.href = '/schedule-call'; // Replace with your scheduling URL
  };

  return (
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>

    
    <Box
      sx={{
        textAlign: 'center',
        padding: '5rem',
        color:"white",
        borderRadius: '10px',
        // margin: '2rem auto',
        marginLeft:"70px",
        marginTop:"70px",
        marginRight:"100px",
        maxWidth: '600px',
        boxShadow: '0px 2px 8px #a9ff1c',
        
      }}
    >
 <AnimatedText variant="h3" component="h1">
    Hey, I am Fathima Fyrooz
  </AnimatedText>
      <Typography
        variant="body1"
        component="p"
        sx={{ marginBottom: '2rem', color: '#555', lineHeight: 1.6}}
      >
        I am a passionate individual dedicated to Software building. Always eager to take on new challenges and make a
        meaningful impact in my work.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
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
                  onClick={scheduleCall}
                >
                  Schedule Call
        </Button>
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
                  onClick={downloadCV}
                >
                  Download CV
        </Button>
      </Box>
    </Box>
    <Box
  sx={{
    color: "white",
    margin: '2 rem auto',
    marginTop:"70px",
    width: "400px", // Increased size
    height: "400px", // Increased size
    borderRadius: "89% 11% 84% 16% / 22% 61% 39% 78%",
    backgroundColor: "#a9ff1c",
    overflow:"hidden",
    display:"flex",
    position:"relative",
    alignItems:"center",
    justifyContent:"center"
  }}
>
  <img src='/IMG_20240420_215419-removebg-preview.png' style={{height:'350px'}}/>
</Box>

    </Box>
  );
};

export default Header;
