import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import data from '../data.json';

const Contact = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ marginTop: 4, color: theme.palette.text.primary }}>
        Contact Me
      </Typography>

      <List sx={{ marginTop: 3 }}>
        <ListItem>
          <ListItemText primary="Email" secondary={data.contact.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone" secondary={data.contact.phone} />
        </ListItem>
        <ListItem>
          <ListItemText primary="GitHub" secondary={data.contact.github} />
        </ListItem>
        <ListItem>
          <ListItemText primary="LinkedIn" secondary={data.contact.linkedin} />
        </ListItem>
      </List>

      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid item>
          <Button variant="contained" color="primary" href={`mailto:${data.contact.email}`}>
            Email Me
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
