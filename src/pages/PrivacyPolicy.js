import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Information We Collect
        </Typography>
        <Typography paragraph>
          We collect information that you provide directly to us, including but not limited to:
        </Typography>
        <ul>
          <li>Name and contact information</li>
          <li>Financial information</li>
          <li>Debt information</li>
          <li>Communication preferences</li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          How We Use Your Information
        </Typography>
        <Typography paragraph>
          We use the information we collect to:
        </Typography>
        <ul>
          <li>Provide debt relief services</li>
          <li>Communicate with you about our services</li>
          <li>Improve our services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Information Sharing
        </Typography>
        <Typography paragraph>
          We may share your information with:
        </Typography>
        <ul>
          <li>Service providers who assist in our operations</li>
          <li>Creditors and debt collectors</li>
          <li>Legal authorities when required by law</li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Your Rights
        </Typography>
        <Typography paragraph>
          You have the right to:
        </Typography>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions about this Privacy Policy, please contact us at:
        </Typography>
        <Typography>
          Email: privacy@debtreliefexperts.com<br />
          Phone: 1-800-555-5555
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy; 