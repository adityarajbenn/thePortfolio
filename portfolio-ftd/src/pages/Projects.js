import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import data from "../data.json";

const Projects = () => {
  const theme = useTheme();
  console.log(data.professionalExperience,'aslcksna')

  return (
    <Container
      maxWidth="lg"
      sx={{ marginTop: 6, marginBottom: 6, minHeight: "100vh" }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 4,
          textAlign: "center",
          color: theme.palette.text.primary,
        }}
      >
        My Professional Journey
      </Typography>

      {/* Professional Experience Section */}
      <Box
        sx={{
          marginBottom: 6,
          backgroundColor: theme.palette.background.paper,
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: "bold",
            marginBottom: 2,
          }}
        >
          Professional Experience
        </Typography>
        {data.professionalExperience?.map((experience, index) => (
        <Box key={index} sx={{ marginBottom: 4 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
          >
            {experience.position} | {experience.company}
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: 1, color: theme.palette.text.secondary }}
          >
            <strong>Duration:</strong> {experience.years}
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: 2, color: theme.palette.text.secondary, fontSize: '13.5px' }}
          >
            {experience.responsibilities.map((responsibility, idx) => (
              <div key={idx}>- {responsibility}</div>
            ))}
          </Typography>
        </Box>
      ))}
      </Box>

      {/* Projects Section */}
      <Typography
        variant="h4"
        sx={{
          marginBottom: 4,
          textAlign: "center",
          color: theme.palette.text.primary,
        }}
      >
        My Projects
      </Typography>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {data.projects.map((project, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }} // Animate only opacity and vertical position
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 1, ease: "easeOut" },
              y: { duration: 1, ease: "easeOut" },
              delay: index * 0.2,
            }}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "row",
                md: index % 2 === 0 ? "row-reverse" : "row",
              },
              alignItems: "center",
              marginBottom: 6,
              width: "100%",
              position: "relative", // Ensure no layout disruption
            }}
          >
            {/* Project content */}
            <Card
              sx={{
                flex: 1,
                marginLeft: { xs: 2, md: 0 },
                marginRight: { xs: 0, md: 2 },
                backgroundColor: theme.palette.background.paper,
                boxShadow: 3,
                opacity: 1, // Ensure it's visible when animation completes
                transition: "opacity 0.6s ease-out", // Smooth opacity transition
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.name}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  color="primary"
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: 1, color: theme.palette.text.secondary }}
                >
                  {project.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: 1, fontStyle: "italic" }}
                >
                  <strong>Technologies Used:</strong>{" "}
                  {project.technologies.join(", ")}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  <strong>My Contribution:</strong> {project.contribution}
                </Typography>

                {/* Buttons for Demo and GitHub */}
                <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        sx={{
                          padding: "8px 16px",
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                          borderRadius: "4px",
                          textAlign: "center",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                          },
                        }}
                      >
                        Demo
                      </Box>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        sx={{
                          padding: "8px 16px",
                          backgroundColor: theme.palette.secondary.main,
                          color: theme.palette.secondary.contrastText,
                          borderRadius: "4px",
                          textAlign: "center",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: theme.palette.secondary.dark,
                          },
                        }}
                      >
                        GitHub
                      </Box>
                    </a>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
