/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Box, Grid, Button, TextField, Typography } from '@mui/material';

const Step5 = ({ onNext, onBack }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpError, setOtpError] = useState(false); // State for OTP validation error

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    const newOtp = [...otp];

    if (value.length <= 1) {
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input if current one is filled
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Move focus to previous input if backspace is pressed
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');

    // Validate that the OTP is exactly 4 digits
    if (/^\d{4}$/.test(otpCode)) {
      console.log('OTP entered:', otpCode);
      setOtpError(false); // Reset OTP error state
      onNext(); // Proceed to the next step
    } else {
      setOtpError(true); // Set OTP error state
    }
  };

  return (
    <Box sx={{ maxWidth: 850, margin: 'auto', padding: '2rem' }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h1" component="h1" align="center" gutterBottom mb="15px">
          Account creation form
        </Typography>
        <Typography variant="subtitle1" align="center" color="primary" gutterBottom>
          Step 5 of 7
        </Typography>
        <Typography variant="h2" component="h2" align="center" gutterBottom mb="25px">
          Phone number verification
        </Typography>
        <Typography align="center" sx={{ fontSize: '18px' }}>
          Enter the verification code we sent on
        </Typography>
        <Typography align="center" sx={{ fontSize: '12px', fontWeight: '700' }}>
          (481) 732-2903
        </Typography>
        {/* <Typography align="center" sx={{ fontSize: '20px', mt: '34px' }}>
          Verify your phone number
        </Typography>
        <Typography align="center" sx={{ fontSize: '12px', color: '#666666', mt: '18px', mb: '5px' }}>
          Enter OTP
        </Typography> */}

        <Grid container spacing={2} justifyContent="center" sx={{ gap: '10px',mt:'12px'}}>
          {otp.map((digit, index) => (
            <Grid item key={index}>
              <TextField
                fullWidth
                id={`otp-${index}`}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                variant="outlined"
                inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
                sx={{
                  width: { sm: '56px', xs: '45px' },
                  height: { sm: '56px', xs: '45px' },
                  backgroundColor: '#EFEDED',
                  borderRadius: '10px',
                  '& .MuiInputBase-input': {
                    padding: 0,
                    textAlign: 'center',
                    height: { sm: '56px', xs: '45px' },
                    lineHeight: { sm: '56px', xs: '45px' },
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>

        {otpError && (
          <Typography color="error" align="center" sx={{ marginTop: '10px' }}>
            Please enter a valid 4-digit OTP.
          </Typography>
        )}

        <Typography align="center" sx={{ fontSize: '18px', pt: '32px' }}>
          Your verification code may take a few moments to arrive.
        </Typography>
        <Typography align="center" sx={{ fontSize: '14px' }}>
          Didn’t receive a verification code?
        </Typography>
        <Typography align="center" color="primary" sx={{ fontSize: '12px !important', pt: '20px', cursor: 'pointer' }}>
          Resend
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
          {/* Go back button */}
          <Button
            variant='outlined'
            sx={{ fontSize: '20px !important', fontWeight: '600 !important' }}
            onClick={onBack}
          >
            Go back
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ fontSize: '20px', fontWeight: '400', borderRadius: '15px' }}
          >
            Verify code
          </Button>
        </Box>
      </form>
    </Box>
  );
};

// Add prop types validation
Step5.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Step5;
