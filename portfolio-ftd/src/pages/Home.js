import React from 'react';
import { Container, Typography, Button, Grid, Box, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import data from '../data.json';
import profileImage from '../images/profileImage.jpg'

const Home = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        backgroundColor: theme.palette.background.default, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center', 
        py: 8 
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        {/* Profile Image */}
        <Avatar
          alt={data.aboutMe.name}
          src={profileImage} // Add `image` property to your data.json
          sx={{ width: 150, height: 150, margin: '0 auto', mb: 4 }}
        />

        {/* Welcome Section */}
        <Typography 
          variant="h3" 
          sx={{ marginBottom: 2, color: theme.palette.text.primary, fontWeight: 600 }}
        >
          Welcome to {data.aboutMe.name}'s Portfolio
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ marginBottom: 3, color: theme.palette.text.secondary, fontStyle: 'italic' }}
        >
          {data.aboutMe.title}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ marginBottom: 4, color: theme.palette.text.primary }}
        >
          {data.aboutMe.description}
        </Typography>

        {/* Call-to-Action Buttons */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button 
              variant="contained" 
              color="primary" 
              href={`mailto:${data.contact.email}`}
              size="large"
            >
              Contact Me
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant="outlined" 
              color="secondary" 
              href={data.contact.github}
              size="large"
            >
              GitHub
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
