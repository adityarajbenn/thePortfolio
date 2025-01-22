import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 2,
        mt: 4,
        backgroundColor: theme.palette.primary.main, // Use primary color from the theme
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: theme.palette.text.navText }} // Ensure text is readable
      >
        © 2025 Aditya Raj Benn. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
