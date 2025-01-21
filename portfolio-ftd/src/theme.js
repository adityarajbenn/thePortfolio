import { createTheme } from '@mui/material/styles';

const primaryPalette = {
    main: "#ED4059", // Pink (kept as it is, vibrant and bold)
    secondary: "#375BE7", // Adjusted Blue for better pairing with Pink
    background: "#FAF3B0", // Soft Yellow for a fresh and clean look
    text: "#333333", // Darker Gray for readability (new for normal text)
    navText: "#FFFFFF", // White (kept for navbar)
    headingText: "#4A4A4A", // Slightly darker gray for headings
    highlight: "#4DCFFF", // Slightly richer Light Blue for better vibrancy
  };
  
  const secondaryPalette = {
    main: "#F5A623", // Brighter Orange for warmth
    secondary: "#3F826D", // Deepened Green for a more professional look
    background: "#FDF7E6", // Creamy White for a clean backdrop
    text: "#333333", // Darker Gray for normal text
    navText: "#4F4F4F", // Subtle Dark Gray for navbar text
    headingText: "#2E2E2E", // Stronger contrast for headings
    highlight: "#F7C948", // Bright Golden Yellow for highlighting
  };
  
  const tertiaryPalette = {
    main: "#39796B", // Richer Teal for elegance
    secondary: "#A8DADC", // Muted Light Cyan for a cohesive look
    background: "#F4F4F4", // Very Light Gray for a neutral background
    text: "#285E61", // Deepened Aqua Blue for normal text
    navText: "#FFFFFF", // White (kept for navbar)
    headingText: "#1B4D3E", // Darker Aqua for heading text
    highlight: "#52C571", // Brighter Green for a fresh pop
  };
  
  

const baseTheme = {
  primary: createTheme({
    palette: {
      primary: { main: primaryPalette.main },
      secondary: { main: primaryPalette.secondary },
      background: {
        default: primaryPalette.background,
      },
      text: {
        primary: primaryPalette.text,
        highlight: primaryPalette.highlight,
        navText: primaryPalette.navText,
      },
    },
  }),

  secondary: createTheme({
    palette: {
      primary: { main: secondaryPalette.main },
      secondary: { main: secondaryPalette.secondary },
      background: {
        default: secondaryPalette.background,
      },
      text: {
        primary: secondaryPalette.text,
        highlight: secondaryPalette.highlight,
        navText: secondaryPalette.navText,
      },
    },
  }),

  tertiary: createTheme({
    palette: {
      primary: { main: tertiaryPalette.main },
      secondary: { main: tertiaryPalette.secondary },
      background: {
        default: tertiaryPalette.background,
      },
      text: {
        primary: tertiaryPalette.text,
        highlight: tertiaryPalette.highlight,
        navText: tertiaryPalette.navText,
      },
    },
  }),
};

export default baseTheme;
