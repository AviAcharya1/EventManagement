import React from 'react';
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';

const Services = () => (
  <Container>
    <Typography variant="h4" gutterBottom>Our Services</Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Event Planning</Typography>
            <Typography>Full-service event planning and coordination</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Event Planning</Typography>
            <Typography>Full-service event planning and coordination</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Event Planning</Typography>
            <Typography>Full-service event planning and coordination</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Event Planning</Typography>
            <Typography>Full-service event planning and coordination</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Event Planning</Typography>
            <Typography>Full-service event planning and coordination</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Event Planning</Typography>
            <Typography>Full-service event planning and coordination</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default Services;