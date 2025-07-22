/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Box, Grid, Button, TextField, Typography } from '@mui/material';

const Step3 = ({ onNext, onBackToChangeEmail, onBack }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpError, setOtpError] = useState(false); // State for OTP validation error

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numeric input
    const newOtp = [...otp];

    if (value.length <= 1) {
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input if the current value is valid and not empty
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus(); // Move focus back if the current field is empty
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
          Step 3 of 7
        </Typography>
        <Typography variant="h2" component="h2" align="center" gutterBottom mb="25px">
          Email verification
        </Typography>
        <Typography align="center" sx={{ fontSize: '18px' }}>
          Enter the verification code we sent on
        </Typography>
        <Typography
          align="center"
          sx={{
            fontSize: '12px !important',
            fontWeight: '700 !important',
            textDecoration: 'underline',
            // mb:'15px'
          }}
        >
          jemarch@gmail.com
        </Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ gap: '10px',mt:'12px' }}>
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
        <Typography
          align="center"
          color="primary"
          sx={{ fontSize: '12px !important', pt: '20px', cursor: 'pointer' }}
          onClick={onBackToChangeEmail}
        >
          Resend
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
          {/* Go back button */}
          <Button
            variant="outlined"
            color="primary"
            sx={{ fontSize: '20px', fontWeight: '600', borderRadius: '15px' }}
            onClick={onBack}
          >
            Go back
          </Button>

          {/* Verify code button */}
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

Step3.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBackToChangeEmail: PropTypes.func.isRequired,
};

export default Step3;
