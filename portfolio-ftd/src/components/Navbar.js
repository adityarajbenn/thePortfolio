import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Drawer, IconButton, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu'; // Import the hamburger icon

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if the screen size is mobile or tablet
  const [openDrawer, setOpenDrawer] = useState(false); // Drawer open/close state

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer); // Toggle drawer visibility
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.primary.main,
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
            color: theme.palette.text.navText,
          }}
        >
          Aditya Raj Benn <br />
          <span style={{ fontWeight: 300, fontSize: '14px' }}>Software Engineer</span>
        </Typography>

        {/* Mobile Hamburger Icon */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer} // Toggle drawer on click
            sx={{ fontSize: '30px' }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={NavLink}
              to="/"
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
              Home
            </Button>

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
        )}
      </Toolbar>

      {/* Drawer for Mobile and Tablet Views */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer} // Close drawer when clicked outside
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.navText,
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
          <Button
            component={NavLink}
            to="/"
            sx={{
              color: theme.palette.text.navText,
              textTransform: 'none',
              fontWeight: 'bold',
              '&.active': {
                color: theme.palette.highlight,
              },
            }}
            onClick={toggleDrawer} // Close the drawer when a link is clicked
          >
            Home
          </Button>

          <Button
            component={NavLink}
            to="/projects"
            sx={{
              color: theme.palette.text.navText,
              textTransform: 'none',
              fontWeight: 'bold',
              '&.active': {
                color: theme.palette.highlight,
              },
            }}
            onClick={toggleDrawer}
          >
            Projects
          </Button>

          <Button
            component={NavLink}
            to="/contact"
            sx={{
              color: theme.palette.text.navText,
              textTransform: 'none',
              fontWeight: 'bold',
              '&.active': {
                color: theme.palette.highlight,
              },
            }}
            onClick={toggleDrawer}
          >
            Contact
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
