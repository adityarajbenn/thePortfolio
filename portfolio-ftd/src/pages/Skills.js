import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaLink,
  FaJava,
  FaMusic,
  FaPlane,
  FaDumbbell,
  FaPencilAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiChakraui,
  SiJson,
  SiBootstrap,
  SiExpress,
  SiRender,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const Skills = () => {
  const theme = useTheme();

  // Tech Skills Array
  const techSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Material-UI", icon: <FaReact /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Chakra UI", icon: <SiChakraui /> },
    { name: "JSON", icon: <SiJson /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Render", icon: <SiRender /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "RESTful APIs", icon: <FaLink /> },
  ];

  // Soft Skills Array
  const softSkills = [
    { name: "Communication", icon: <FaLink /> },
    { name: "Creativity", icon: <FaPencilAlt /> },
    { name: "Problem Solving", icon: <FaReact /> },
    { name: "Time Management", icon: <FaClock /> },
    { name: "Team Collaboration", icon: <FaUsers /> },
  ];

  // Hobbies Array
  const hobbies = [
    { name: "Music", icon: <FaMusic /> },
    { name: "Traveling", icon: <FaPlane /> },
    { name: "Badminton", icon: <FaDumbbell /> },
    { name: "Sketching", icon: <FaPencilAlt /> },
  ];

  // Render a Section
  const renderSection = (title, items) => (
    <>
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: "bold",
          // marginTop: 8,
          marginBottom: 4,
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={4} justifyContent="center" marginBottom='20px'>
        {items.map((item, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                borderRadius: 2,
                boxShadow: 2,
                backgroundColor: theme.palette.background.paper,
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 4,
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Box
                sx={{
                  fontSize: 40,
                  marginBottom: 1,
                  color: theme.palette.primary.main,
                }}
              >
                {item.icon}
              </Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
              >
                {item.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        py: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {/* Tech Skills Section */}
        {renderSection("My Tech Skills", techSkills)}

        {/* Soft Skills Section */}
        {renderSection("My Soft Skills", softSkills)}

        {/* Hobbies Section */}
        {renderSection("My Hobbies", hobbies)}
      </Container>
    </Box>
  );
};

export default Skills;
