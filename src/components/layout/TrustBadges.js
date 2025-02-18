import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { Security, Verified, MonetizationOn } from '@mui/icons-material';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Security sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'BBB Accredited',
      description: 'Trusted debt relief services'
    },
    {
      icon: <Verified sx={{ fontSize: 40, color: 'success.main' }} />,
      title: '15+ Years Experience',
      description: 'Helping thousands become debt-free'
    },
    {
      icon: <MonetizationOn sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Save Up To 50%',
      description: 'On your total debt payments'
    }
  ];

  return (
    <Paper elevation={0} sx={{ p: 3, bgcolor: 'transparent' }}>
      <Typography variant="h6" gutterBottom align="center" sx={{ mb: 4 }}>
        Why Choose Us
      </Typography>
      <Grid container spacing={3}>
        {badges.map((badge, index) => (
          <Grid item xs={12} key={index}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              p: 2,
              bgcolor: 'background.paper',
              borderRadius: 1,
              boxShadow: 1
            }}>
              {badge.icon}
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {badge.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {badge.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TrustBadges;