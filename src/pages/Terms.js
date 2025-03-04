import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Terms = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Terms and Conditions
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Agreement to Terms
        </Typography>
        <Typography paragraph>
          By accessing and using our debt relief services, you agree to be bound by these Terms and Conditions.
          Please read them carefully before proceeding.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Services Description
        </Typography>
        <Typography paragraph>
          We provide debt relief services including:
        </Typography>
        <ul>
          <li>Debt consolidation</li>
          <li>Debt settlement</li>
          <li>Credit counseling</li>
          <li>Financial education</li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Eligibility
        </Typography>
        <Typography paragraph>
          To be eligible for our services, you must:
        </Typography>
        <ul>
          <li>Be at least 18 years old</li>
          <li>Have valid identification</li>
          <li>Meet minimum debt requirements</li>
          <li>Provide accurate information</li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Fees and Payments
        </Typography>
        <Typography paragraph>
          Our services may include:
        </Typography>
        <ul>
          <li>Initial consultation fees</li>
          <li>Monthly service fees</li>
          <li>Success fees based on debt reduction</li>
          <li>Administrative fees</li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Limitation of Liability
        </Typography>
        <Typography paragraph>
          We are not liable for:
        </Typography>
        <ul>
          <li>Results that may vary by individual</li>
          <li>Third-party actions or services</li>
          <li>Credit score impacts</li>
          <li>Legal consequences of debt relief</li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Contact Information
        </Typography>
        <Typography paragraph>
          For questions about these Terms and Conditions, please contact us at:
        </Typography>
        <Typography>
          Email: legal@debtreliefexperts.com<br />
          Phone: 1-800-555-5555
        </Typography>
      </Box>
    </Container>
  );
};

export default Terms; 