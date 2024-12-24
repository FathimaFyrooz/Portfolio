import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{backgroundColor:"black"}}>
      <Toolbar>
        <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            <Link to="/" style={{ textDecoration: 'none', color: 'white',display:"flex",fontFamily:"fantasy" }}>
              fathimafyrooz <div style={{width:"10px",height:"10px",backgroundColor:"#a9ff1c"}}></div>
            </Link>
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/" style={{ textTransform: 'none',fontFamily:"fantasy" }}>
            <div style={{width:"10px",height:"10px",backgroundColor:"#a9ff1c",marginRight:"4px"}}></div>Home
            </Button>
            <Button color="inherit" component={Link} to="/journey" style={{ textTransform: 'none',fontFamily:"fantasy" }}>
            <div style={{width:"10px",height:"10px",backgroundColor:"#a9ff1c",marginRight:"4px"}}></div> Journey
            </Button>
            <Button color="inherit" component={Link} to="/projects" style={{ textTransform: 'none',fontFamily:"fantasy" }}>
            <div style={{width:"10px",height:"10px",backgroundColor:"#a9ff1c",marginRight:"4px"}}></div>Projects
            </Button>
            <Button color="inherit" component={Link} to="/contact" style={{ textTransform: 'none',fontFamily:"fantasy" }}>
            <div style={{width:"10px",height:"10px",backgroundColor:"#a9ff1c",marginRight:"4px"}}></div> Contact
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
