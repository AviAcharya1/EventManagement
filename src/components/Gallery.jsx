import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent,
  Box
} from '@mui/material';

// Sample data - replace with your actual gallery items
const galleryItems = [
  { id: 1, title: 'Wedding Event', image: 'path/to/wedding-image.jpg', category: 'Weddings' },
  { id: 2, title: 'Corporate Gala', image: 'path/to/corporate-image.jpg', category: 'Corporate Events' },
  { id: 3, title: 'Birthday Party', image: 'path/to/birthday-image.jpg', category: 'Social Events' },
  { id: 1, title: 'Wedding Event', image: 'path/to/wedding-image.jpg', category: 'Weddings' },
  { id: 2, title: 'Corporate Gala', image: 'path/to/corporate-image.jpg', category: 'Corporate Events' },
  { id: 3, title: 'Birthday Party', image: 'path/to/birthday-image.jpg', category: 'Social Events' },
  { id: 1, title: 'Wedding Event', image: 'path/to/wedding-image.jpg', category: 'Weddings' },
  { id: 2, title: 'Corporate Gala', image: 'path/to/corporate-image.jpg', category: 'Corporate Events' },
  { id: 3, title: 'Birthday Party', image: 'path/to/birthday-image.jpg', category: 'Social Events' },
  // Add more items as needed
];

const Gallery = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Our Gallery
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Showcasing our finest moments and creations
      </Typography>
      
      <Box sx={{ mt: 6 }}>
        <Grid container spacing={4}>
          {galleryItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="260"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.category}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Gallery;