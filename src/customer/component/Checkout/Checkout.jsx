// Import statements...
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import DelieveryAddressForm from './DelieveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Address', 'Summary', 'Payment'];

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(() => {
        const storedStep = localStorage.getItem('activeStep');
        return storedStep ? parseInt(storedStep, 10) : 1; // Start with 1
      });

  const isServerRestart = React.useRef(false);

  React.useEffect(() => {
    // Check if the page is reloaded after completing all steps
    if (activeStep === steps.length) {
      isServerRestart.current = true;
    }
  }, [activeStep]);

  React.useEffect(() => {
    // Reset step to 0 when the server is restarted
    if (isServerRestart.current) {
      setActiveStep(0);
      localStorage.setItem('activeStep', '0');
      isServerRestart.current = false;
    }
  }, []);

  const handleNext = () => {
    const nextStep = activeStep + 1;
    updateStep(nextStep);
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;
    updateStep(prevStep);
  };

  const updateStep = (step) => {
    setActiveStep(step);
    localStorage.setItem('activeStep', step.toString());
  };

  return (
    <div className='px-10 lg::px-20 py-10'>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep - 1}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length + 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
            <div className='mt-10'>{activeStep==2?<DelieveryAddressForm></DelieveryAddressForm>:<OrderSummary></OrderSummary>}</div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
