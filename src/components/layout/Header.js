import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { Phone } from '@mui/icons-material';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" color="default" elevation={2}>
      <Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Debt Relief Experts
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {!isMobile && (
              <Typography variant="body1" color="text.secondary">
                Call Now:
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              startIcon={<Phone />}
              href="tel:1-800-555-5555"
              sx={{ fontWeight: 'bold' }}
            >
              1-800-555-5555
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;