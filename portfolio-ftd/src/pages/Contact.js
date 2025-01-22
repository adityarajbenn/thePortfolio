import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Box, List, ListItem, ListItemIcon } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import portfolioData from '../data.json';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Handle form submission (e.g., send to an API or email service)
  };

  return (
    <Container maxWidth="sm">
      {/* Contact Form */}
      <Typography variant="h4" sx={{ marginTop: 4, color: theme.palette.text.primary }}>
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginTop: 3 }}>
          <TextField
            label="Your Name"
            name="name"
            fullWidth
            required
            value={formData.name}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Your Email"
            name="email"
            type="email"
            fullWidth
            required
            value={formData.email}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Why do you want to hire me?"
            name="message"
            multiline
            rows={4}
            fullWidth
            required
            value={formData.message}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </form>

      <List sx={{ marginTop: 2, display: 'flex', justifyContent: 'center', gap: 3 }}>
        <ListItem
          component="a"
          href={portfolioData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: 'none' }}
        >
          <ListItemIcon>
            <FaGithub color={theme.palette.primary.main} size={32} />
          </ListItemIcon>
        </ListItem>
        <ListItem
          component="a"
          href={portfolioData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: 'none' }}
        >
          <ListItemIcon>
            <FaLinkedin color={theme.palette.primary.main} size={32} />
          </ListItemIcon>
        </ListItem>
        <ListItem
          component="a"
          href={`mailto:${portfolioData.contact.email}`}
          sx={{ textDecoration: 'none' }}
        >
          <ListItemIcon>
            <FaEnvelope color={theme.palette.primary.main} size={32} />
          </ListItemIcon>
        </ListItem>
      </List>
    </Container>
  );
};

export default Contact;
