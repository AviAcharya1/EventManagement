import React from 'react'
import { Typography, Container, Grid, Box } from '@mui/material';


const Footer = () => (
    <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              ABOUT
            </Typography>
            <Typography>
              Infinity Hospitality is a full-service event planning and management company.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              INFINITY HOSPITALITY GROUP
            </Typography>
            <Typography>
              The Bridge Building Event Space
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              CONTACT US
            </Typography>
            <Typography>
              345 Hill Ave. Nashville, TN 37210<br />
              615-369-6474
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Infinity Hospitality. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );

export default Footer