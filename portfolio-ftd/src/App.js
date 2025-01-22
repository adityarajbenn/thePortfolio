import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import baseTheme from './theme';
import { CssBaseline, Box, Container } from '@mui/material';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(baseTheme.primary);

  const handleThemeSwitch = () => {
    if (currentTheme === baseTheme.primary) {
      setCurrentTheme(baseTheme.secondary);
    } else if (currentTheme === baseTheme.secondary) {
      setCurrentTheme(baseTheme.tertiary);
    } else {
      setCurrentTheme(baseTheme.primary);
    }
  };

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      // Ensure the scroll happens only when the location changes
      window.scrollTo(0, 0);
    }, [location]); // Runs only when location (route) changes

    return null;
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline /> {/* Resets CSS styles and applies default styles */}
      <Router>
        <Box sx={{ backgroundColor: currentTheme.background, minHeight: '100vh' }}>
          <Navbar />
          <ThemeSwitcher handleThemeSwitch={handleThemeSwitch} />
          <Container
            maxWidth="md"
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              marginTop: '100px',
            }}
          >
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
