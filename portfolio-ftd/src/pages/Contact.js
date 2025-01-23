import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, List, ListItem, ListItemIcon } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import portfolioData from '../data.json';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFeedback('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error);
          setFeedback('Failed to send your message. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
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
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>
        </Box>
      </form>

      {/* Feedback Message */}
      {feedback && (
        <Typography variant="body1" sx={{ marginTop: 2, color: theme.palette.text.secondary }}>
          {feedback}
        </Typography>
      )}

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
