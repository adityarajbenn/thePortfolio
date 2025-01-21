import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4 as ThemeIcon } from '@mui/icons-material'; // Use MUI icons

const ThemeSwitcher = ({ handleThemeSwitch }) => {
  return (
    <IconButton
      onClick={handleThemeSwitch}
      sx={{
        position: 'fixed',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)', // Center vertically
        zIndex: 1101,
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        '&:hover': {
          backgroundColor: '#f1f1f1',
        },
      }}
    >
      <ThemeIcon />
    </IconButton>
  );
};

export default ThemeSwitcher;
