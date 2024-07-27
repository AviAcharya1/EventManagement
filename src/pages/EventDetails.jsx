import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Card, CardMedia } from '@mui/material';
import { getEventById } from '../services/eventService';

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEventById(parseInt(id));
        setEvent(eventData);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Card elevation={3} sx={{ mt: 4, mb: 4 }}>
        <CardMedia
          component="img"
          height="300"
          image={event.image || 'https://via.placeholder.com/800x300'}
          alt={event.title}
        />
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {event.title}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Date: {event.date}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Location: {event.location}
          </Typography>
          <Typography variant="body1" paragraph>
            {event.description}
          </Typography>
          <Button component={Link} to="/events" variant="contained" color="primary">
            Back to Events
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default EventDetails;