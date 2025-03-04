import React, { useState } from 'react';
import { Box, Card, TextField, Button, Typography, MenuItem, Select, FormControl, InputLabel, LinearProgress, Stepper, Step, StepLabel, useMediaQuery, useTheme, Checkbox, FormHelperText, Link } from '@mui/material';
import { Phone } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';

const debtOptions = [
  { value: '10k', label: '$10,000 - $19,999' },
  { value: '20k', label: '$20,000 - $29,999' },
  { value: '30k', label: '$30,000 - $39,999' },
  { value: '40k', label: '$40,000 - $49,999' },
  { value: '50k', label: '$50,000+' }
];

const creditCardOptions = [
  { value: '1-2', label: '1-2 Credit Cards' },
  { value: '3-5', label: '3-5 Credit Cards' },
  { value: '6+', label: '6+ Credit Cards' }
];

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const steps = ['Basic Info', 'Location', 'Debt Details'];

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string()
    .matches(/^[0-9]{5}$/, 'Please enter a valid 5-digit ZIP code')
    .required('ZIP code is required'),
  debtAmount: Yup.string().required('Please select your debt amount'),
  creditCards: Yup.string().required('Please select number of credit cards'),
  tcpaConsent: Yup.boolean()
    .oneOf([true], 'You must accept the terms')
    .required('You must accept the terms')
});

const EligibilityForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = (formikProps) => {
    const { validateForm, setTouched } = formikProps;
    const currentFields = {
      0: ['firstName', 'lastName', 'email'],
      1: ['city', 'state', 'zipCode'],
      2: ['debtAmount', 'creditCards', 'tcpaConsent']
    }[activeStep];

    const touchedFields = {};
    currentFields.forEach(field => touchedFields[field] = true);
    setTouched(touchedFields);

    validateForm().then(errors => {
      const hasErrors = currentFields.some(field => errors[field]);
      if (!hasErrors) {
        setActiveStep(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsCalculating(true);
    setProgress(0);
    
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    await new Promise(resolve => setTimeout(resolve, 3000));
    clearInterval(timer);
    setProgress(100);
    setIsCalculating(false);
    setShowSuccess(true);
    setSubmitting(false);
  };

  if (showSuccess) {
    return (
      <Card sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5" color="primary" gutterBottom>
          Congratulations! You Pre-Qualify!
        </Typography>
        <Typography variant="body1" paragraph>
          One of our debt relief specialists will contact you shortly to discuss your options.
        </Typography>
      </Card>
    );
  }

  return (
    <Card sx={{ p: { xs: 2, md: 4 } }}>
      {isCalculating ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" gutterBottom>
            Calculating Your Savings...
          </Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ my: 2 }} />
          <Typography variant="body2" color="text.secondary">
            Please wait while we analyze your information
          </Typography>
        </Box>
      ) : (
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            state: '',
            zipCode: '',
            debtAmount: '',
            creditCards: '',
            tcpaConsent: false
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <Form>
              <Typography variant="h5" gutterBottom align="center" sx={{ mb: 4 }}>
                See If You Qualify For Debt Relief
              </Typography>

              <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{!isMobile ? label : ''}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {activeStep === 0 && (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                      name="firstName"
                      label="First Name"
                      value={formikProps.values.firstName}
                      onChange={formikProps.handleChange}
                      error={formikProps.touched.firstName && Boolean(formikProps.errors.firstName)}
                      helperText={formikProps.touched.firstName && formikProps.errors.firstName}
                    />
                    <TextField
                      name="lastName"
                      label="Last Name"
                      value={formikProps.values.lastName}
                      onChange={formikProps.handleChange}
                      error={formikProps.touched.lastName && Boolean(formikProps.errors.lastName)}
                      helperText={formikProps.touched.lastName && formikProps.errors.lastName}
                    />
                    <TextField
                      name="email"
                      label="Email"
                      type="email"
                      value={formikProps.values.email}
                      onChange={formikProps.handleChange}
                      error={formikProps.touched.email && Boolean(formikProps.errors.email)}
                      helperText={formikProps.touched.email && formikProps.errors.email}
                    />
                  </Box>
                )}

                {activeStep === 1 && (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                      name="city"
                      label="City"
                      value={formikProps.values.city}
                      onChange={formikProps.handleChange}
                      error={formikProps.touched.city && Boolean(formikProps.errors.city)}
                      helperText={formikProps.touched.city && formikProps.errors.city}
                    />
                    <FormControl error={formikProps.touched.state && Boolean(formikProps.errors.state)}>
                      <InputLabel>State</InputLabel>
                      <Select
                        name="state"
                        value={formikProps.values.state}
                        label="State"
                        onChange={formikProps.handleChange}
                      >
                        {states.map(state => (
                          <MenuItem key={state} value={state}>
                            {state}
                          </MenuItem>
                        ))}
                      </Select>
                      {formikProps.touched.state && formikProps.errors.state && (
                        <FormHelperText>{formikProps.errors.state}</FormHelperText>
                      )}
                    </FormControl>
                    <TextField
                      name="zipCode"
                      label="ZIP Code"
                      value={formikProps.values.zipCode}
                      onChange={formikProps.handleChange}
                      error={formikProps.touched.zipCode && Boolean(formikProps.errors.zipCode)}
                      helperText={formikProps.touched.zipCode && formikProps.errors.zipCode}
                    />
                  </Box>
                )}

                {activeStep === 2 && (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <FormControl error={formikProps.touched.debtAmount && Boolean(formikProps.errors.debtAmount)}>
                      <InputLabel>Total Debt Amount</InputLabel>
                      <Select
                        name="debtAmount"
                        value={formikProps.values.debtAmount}
                        label="Total Debt Amount"
                        onChange={formikProps.handleChange}
                      >
                        {debtOptions.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                      {formikProps.touched.debtAmount && formikProps.errors.debtAmount && (
                        <FormHelperText>{formikProps.errors.debtAmount}</FormHelperText>
                      )}
                    </FormControl>

                    <FormControl error={formikProps.touched.creditCards && Boolean(formikProps.errors.creditCards)}>
                      <InputLabel>Number of Credit Cards</InputLabel>
                      <Select
                        name="creditCards"
                        value={formikProps.values.creditCards}
                        label="Number of Credit Cards"
                        onChange={formikProps.handleChange}
                      >
                        {creditCardOptions.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                      {formikProps.touched.creditCards && formikProps.errors.creditCards && (
                        <FormHelperText>{formikProps.errors.creditCards}</FormHelperText>
                      )}
                    </FormControl>

                    <FormControl error={formikProps.touched.tcpaConsent && Boolean(formikProps.errors.tcpaConsent)}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <Checkbox
                          name="tcpaConsent"
                          checked={formikProps.values.tcpaConsent}
                          onChange={formikProps.handleChange}
                          sx={{ mt: -1 }}
                        />
                        <Box>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            By checking this box, I agree to receive messages from our Marketing Partners, including:
                          </Typography>
                          <Typography variant="body2" color="text.secondary" component="ul" sx={{ pl: 2, mb: 1 }}>
                            <li>Text messages (Msg & data rates may apply)</li>
                            <li>Up to 30 messages per month</li>
                            <li>Text STOP to stop or HELP for help</li>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            By checking this box, I agree to the{' '}
                            <Link component={RouterLink} to="/terms" color="primary" underline="hover">
                              Terms and Conditions
                            </Link>{' '}
                            and{' '}
                            <Link component={RouterLink} to="/privacy" color="primary" underline="hover">
                              Privacy Policy
                            </Link>
                          </Typography>
                        </Box>
                      </Box>
                      {formikProps.touched.tcpaConsent && formikProps.errors.tcpaConsent && (
                        <FormHelperText>{formikProps.errors.tcpaConsent}</FormHelperText>
                      )}
                    </FormControl>
                  </Box>
                )}
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => prev - 1)}
                >
                  Back
                </Button>
                {activeStep === steps.length - 1 ? (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Check Eligibility
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => handleNext(formikProps)}
                  >
                    Continue
                  </Button>
                )}
              </Box>
            </Form>
          )}
        </Formik>
      )}
    </Card>
  );
};

export default EligibilityForm;