import React from 'react';
import { AppBar, Toolbar, Typography, Box, useMediaQuery, useTheme } from '@mui/material';

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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;