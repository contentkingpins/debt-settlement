import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, mt: 4 }}>
      <Container maxWidth="lg">
        <Divider sx={{ mb: 4 }} />
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 2 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              © 2024 Debt Relief Experts. All rights reserved.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" color="text.secondary" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" color="text.secondary" underline="hover">
              Terms of Service
            </Link>
            <Link href="#" color="text.secondary" underline="hover">
              Contact Us
            </Link>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          This site is a debt relief advertisement. This site is not a lender or debt collector.
          Results may vary. Read and understand all program materials prior to enrollment.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;