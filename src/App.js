import React from 'react';
import { ThemeProvider, createTheme, Container, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EligibilityForm from './components/forms/EligibilityForm';
import Header from './components/layout/Header';
import TrustBadges from './components/layout/TrustBadges';
import Testimonials from './components/layout/Testimonials';
import Footer from './components/layout/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

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
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/">
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
            <Routes>
              <Route path="/" element={
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 4
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
              } />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;