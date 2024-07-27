import React from 'react'
import { Typography, Container, Grid,MenuItem,TextField,Button} from '@mui/material';



const ContactForm = () => (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="First Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Last Name" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Email Address" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Phone Number" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="How did you hear about us?"
            variant="outlined"
          >
            <MenuItem value="social">Social Media</MenuItem>
            <MenuItem value="friend">Friend</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Type of Event"
            variant="outlined"
          >
            <MenuItem value="wedding">Wedding</MenuItem>
            <MenuItem value="corporate">Corporate Event</MenuItem>
            <MenuItem value="social">Social Event</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Requested Date" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Estimated Guest Count"
            variant="outlined"
          >
            <MenuItem value="0-49">0-49</MenuItem>
            <MenuItem value="50-99">50-99</MenuItem>
            <MenuItem value="100+">100+</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Additional Notes"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
  
export default ContactForm