import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import EventCard from '../components/EventCard';
import { getEvents } from '../services/eventService';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Upcoming Events
      </Typography>
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <EventCard
              id={event.id}
              image={event.image}
              title={event.title}
              description={event.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventList;