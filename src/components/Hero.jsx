import React from 'react'
import { Typography,Box } from '@mui/material';


const Hero = () => (
    <Box sx={{
      background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/path-to-hero-image.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '100px 0',
      textAlign: 'center'
    }}>
      <Typography variant="h2" gutterBottom>CHECK OUT OUR</Typography>
      <Typography variant="h1" gutterBottom>IMAGE GALLERY</Typography>
    </Box>
  );
  
export default Hero