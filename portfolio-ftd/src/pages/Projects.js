import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import data from '../data.json';

const Projects = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ marginTop: 4, color: theme.palette.text.primary }}>
        My Projects
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: 3 }}>
        {data.projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, backgroundColor: theme.palette.background.paper }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} color='primary'>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                  {project.description}
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                  <Grid item>
                    <Button variant="outlined" color="primary" href={project.github}>
                      GitHub
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="secondary" href={project.demo}>
                      Demo
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
