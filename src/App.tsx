import { Brightness4, Brightness7 } from '@mui/icons-material';
import { AppBar, Box, Container, CssBaseline, IconButton, MenuItem, Select, SelectChangeEvent, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const { i18n, t } = useTranslation();

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('title')}
          </Typography>
          <Box sx={{ minWidth: 120 }}>
            <Select
              value={i18n.language}
              onChange={handleLanguageChange}
              variant="outlined"
              size="small"
              sx={{ color: 'white', borderColor: 'white', borderWidth: 1 }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Español</MenuItem>
              <MenuItem value="ca">Català</MenuItem>
              <MenuItem value="it">Italiano</MenuItem>
            </Select>
          </Box>
          <IconButton edge="end" color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {t('subtitle')}
          </Typography>
          <About />
          <Contact />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
