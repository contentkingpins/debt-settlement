import React from 'react';
import { ThemeProvider, createTheme, Container, Box } from '@mui/material';
import EligibilityForm from './components/forms/EligibilityForm';
import Header from './components/layout/Header';
import TrustBadges from './components/layout/TrustBadges';
import Testimonials from './components/layout/Testimonials';
import Footer from './components/layout/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    success: {
      main: '#4caf50',
      light: '#81c784'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Header />
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            py: 4
          }}>
            <Box sx={{ flex: 1 }}>
              <EligibilityForm />
            </Box>
            <Box sx={{ 
              flex: 1,
              display: { xs: 'none', md: 'block' }
            }}>
              <TrustBadges />
              <Testimonials />
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;