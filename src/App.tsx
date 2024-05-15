import { Container, CssBaseline, MenuItem, Select, SelectChangeEvent, ThemeProvider, createTheme } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import i18n from './i18n';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const { t } = useTranslation();

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
      <div className="app">
        <header style={{ textAlign: 'center', padding: '50px 0' }}>
          <h1>{t('title')}</h1>
          <p>{t('subtitle')}</p>
          <Container sx={{ mt: 2, mb: 2 }}>
            <Select
              value={i18n.language}
              onChange={handleLanguageChange}
              variant="outlined"
              size="small"
              defaultValue='en'
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Español</MenuItem>
              <MenuItem value="ca">Català</MenuItem>
              <MenuItem value="it">Italiano</MenuItem>
            </Select>
          </Container>
        </header>
        <About />
        <Contact />
        <footer style={{ textAlign: 'center', padding: '20px 0', borderTop: '1px solid #dddddd' }}>
          <DarkModeToggle toggleDarkMode={toggleDarkMode} />
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
