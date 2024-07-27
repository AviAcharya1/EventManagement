// import React from 'react';
// import { Card, CardContent, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const EventCard = ({ event }) => {
//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {event.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Date: {event.date}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Location: {event.location}
//         </Typography>
//         <Button component={Link} to={`/event/${event.id}`} variant="contained" sx={{ mt: 2 }}>
//           View Details
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default EventCard;

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const EventCard = ({ image, title, description, id }) => {
  return (
    <Card elevation={3}>
      <CardMedia
        component="img"
        height="200"
        image={image || 'https://via.placeholder.com/300x200'}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button component={Link} to={`/event/${id}`} size="small" color="primary" sx={{ mt: 2 }}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;