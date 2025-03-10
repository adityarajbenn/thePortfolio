import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GitHub, LinkedIn, Email } from "@mui/icons-material"; // Import required icons
import data from "../data.json";
import DownloadIcon from "@mui/icons-material/Download";

const Home = () => {
  const theme = useTheme();

  const handleResumeDownload = () => {
    window.open("/Aditya_Raj_Benn_Resume.pdf", "_blank");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 8,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        {/* Profile Image */}
        <Avatar
          alt={data.aboutMe.name}
          src={data.aboutMe.profileImage}
          sx={{ width: 150, height: 150, margin: "0 auto", mb: 4 }}
        />

        {/* Welcome Section */}
        <Typography
          variant="h3"
          sx={{
            marginBottom: 2,
            color: theme.palette.text.primary,
            fontWeight: 600,
          }}
        >
          Welcome to {data.aboutMe.name}'s Portfolio
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginBottom: 3,
            color: theme.palette.text.secondary,
            fontStyle: "italic",
          }}
        >
          {data.aboutMe.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 4,
            color: theme.palette.text.primary,
          }}
        >
          {data.aboutMe.description}
        </Typography>

        {/* Icons for Contact, GitHub, and LinkedIn */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <IconButton
              href={`mailto:${data.contact.email}`}
              color="primary"
              size="large"
            >
              <Email />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href={data.contact.github}
              color="secondary"
              size="large"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href={data.contact.linkedin}
              sx={{
                color: theme.palette.info.main, // Custom color for LinkedIn
              }}
              size="large"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>
        <a
          href="/Aditya_Raj_Benn_Resume.pdf"
          download="Aditya_Raj_Benn_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleResumeDownload}
            startIcon={<DownloadIcon />}
            sx={{ marginTop: 2 }}
          >
          Resume
          </Button>
        </a>
      </Container>
    </Box>
  );
};

export default Home;
