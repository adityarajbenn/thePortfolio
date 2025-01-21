import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.primary.main, // Use primary theme color
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        {/* Logo/Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: '18px',
            fontWeight: 800,
            color: theme.palette.text.navText, // Nav text color for better visibility
          }}
        >
          Aditya Raj Benn <br />
          <span style={{ fontWeight: 300, fontSize: '14px' }}>Software Engineer</span>
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Home Button */}
          <Button
            component={NavLink}
            to="/"
            sx={{
              color: theme.palette.text.navText,
              textTransform: 'none',
              borderBottom: `2px solid transparent`,
              fontWeight: 'bold',
              '&.active': {
                borderBottom: `2px solid ${theme.palette.highlight}`, // Highlight color from theme
                color: theme.palette.highlight, // Active link color
              },
              '&:hover': {
                borderBottom: `2px solid ${theme.palette.highlight}`, // Hover effect
                color: theme.palette.highlight,
              },
            }}
          >
            Home
          </Button>

          {/* Projects Button */}
          <Button
            component={NavLink}
            to="/projects"
            sx={{
              color: theme.palette.text.navText,
              textTransform: 'none',
              borderBottom: `2px solid transparent`,
              fontWeight: 'bold',
              '&.active': {
                borderBottom: `2px solid ${theme.palette.highlight}`,
                color: theme.palette.highlight,
              },
              '&:hover': {
                borderBottom: `2px solid ${theme.palette.highlight}`,
                color: theme.palette.highlight,
              },
            }}
          >
            Projects
          </Button>

          {/* Contact Button */}
          <Button
            component={NavLink}
            to="/contact"
            sx={{
              color: theme.palette.text.navText,
              textTransform: 'none',
              borderBottom: `2px solid transparent`,
              fontWeight: 'bold',
              '&.active': {
                borderBottom: `2px solid ${theme.palette.highlight}`,
                color: theme.palette.highlight,
              },
              '&:hover': {
                borderBottom: `2px solid ${theme.palette.highlight}`,
                color: theme.palette.highlight,
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
