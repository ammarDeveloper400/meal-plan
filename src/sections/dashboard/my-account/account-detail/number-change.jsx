/* eslint-disable no-return-assign */
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import 'react-phone-number-input/style.css';
import React, { useRef, useState } from 'react';

import {
  Box,
  Grid,
  Button,
  Select,
  Dialog,
  MenuItem,
  TextField,
  Typography,
  FormControl,
  DialogActions,
  DialogContent,
  InputAdornment,
} from '@mui/material';

const NumberChange = ({ open, handleClose, onNext }) => {
  const [view, setView] = useState('phone');
  const [otp, setOtp] = useState(Array(4).fill(''));
  const otpRefs = useRef([]);
  
  // Track the selected flag
  const [selectedFlag, setSelectedFlag] = useState("/assets/icons/deutch.svg");

  // Handle flag selection
  const handleFlagChange = (event) => {
    const {value} = event.target;
    if (value === 'deutch') {
      setSelectedFlag('/assets/icons/deutch.svg');
    } else if (value === 'canada') {
      setSelectedFlag('/assets/icons/canada.svg');
    }
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    onSubmit: (values) => {
      console.log(values);
      setView('emailVerification');
    },
  });

  const handleOtpChange = (index, event) => {
    const { value } = event.target;
    if (/^\d$/.test(value)) {  // Only allow single digits
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1) {
        otpRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace') {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = ''; // Clear the current input
        setOtp(newOtp);
      } else if (index > 0) {
        otpRefs.current[index - 1].focus(); // Move to the previous input box
      }
    } else if (event.key === 'ArrowLeft' && index > 0) {
      otpRefs.current[index - 1].focus(); // Move to the previous input box
    } else if (event.key === 'ArrowRight' && index < otp.length - 1) {
      otpRefs.current[index + 1].focus(); // Move to the next input box
    }
  };

  const handleOtpSubmit = () => {
    console.log('OTP Submitted:', otp.join(''));
    handleClose();
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      {view === 'phone' && (
        <>
          <DialogContent>
            <Box>
              <form onSubmit={formik.handleSubmit}>
                <Typography
                  sx={{ fontSize: { sm: '25px !important', xs: '20px !important' }, fontWeight: '400', pb: '30px' }}
                  align="center"
                >
                  Enter new phone number for verification
                </Typography>

                <TextField
                  type="number"
                  variant="outlined"
                  placeholder="Enter your phone number"
                  sx={{
                    borderRadius: '20px',
                    backgroundColor: '#fff',
                    border: '1px solid #989898',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                      },
                    },
                  }}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={selectedFlag} alt="Selected Flag" style={{ width: '24px', marginRight: '10px' }} />
                        <FormControl>
                          <Select
                            // sx={{ minWidth: 20 }}
                            value={selectedFlag}
                            onChange={handleFlagChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="deutch">
                              <img src="/assets/icons/deutch.svg" alt="German Flag" />
                            </MenuItem>
                            <MenuItem value="canada">
                              <img src="/assets/icons/canada.svg" alt="Canada Flag" />
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </InputAdornment>
                    ),
                  }}
                  {...formik.getFieldProps('phoneNumber')}
                />
              </form>
            </Box>
          </DialogContent>
          <DialogActions sx={{ display: 'flex', justifyContent: 'center', pb: '30px' }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontSize: { sm: '20px', xs: '16px' }, fontWeight: '400' }}
              onClick={() => setView('emailVerification')}
            >
              Verify Phone Number
            </Button>
          </DialogActions>
        </>
      )}

      {view === 'emailVerification' && (
        <>
          <DialogContent>
            <Box>
              <Typography align="center" sx={{ fontSize: '18px !important', mb: 1 }}>
                Enter the Verification code we sent on
              </Typography>
              <Typography
                align="center"
                sx={{
                  fontSize: '12px !important',
                  fontWeight: '700',
                  textDecoration: 'underline',
                  mb: 2,
                }}
              >
                (481) 732-2903
              </Typography>
              <Typography align="center" sx={{ fontSize: '20px !important', mb: 2 }}>
                Verify your email address
              </Typography>
              <Typography
                align="center"
                sx={{ fontSize: '12px !important', color: '#666666', mb: 2 }}
              >
                Enter OTP
              </Typography>

              <Grid container spacing={2} justifyContent="center" sx={{ gap: '10px', mb: 2 }}>
                {otp.map((digit, index) => (
                  <Grid item key={index}>
                    <TextField
                      fullWidth
                      type="text"
                      id={`otp-${index}`}
                      value={digit}
                      variant="outlined"
                      inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
                      onChange={(event) => handleOtpChange(index, event)}
                      onKeyDown={(event) => handleKeyDown(index, event)}
                      inputRef={(el) => (otpRefs.current[index] = el)}
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

              <Typography align="center" sx={{ fontSize: '18px !important', mb: 2 }}>
                Your verification code may take a few moments to arrive
              </Typography>
              <Typography align="center" sx={{ fontSize: '14px !important', mb: 2 }}>
                Didn’t receive a Verification code?
              </Typography>
              <Typography
                align="center"
                color="primary"
                sx={{ fontSize: '12px !important', cursor: 'pointer' }}
              >
                Resend
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions sx={{ display: 'flex', justifyContent: 'center', pb: '30px' }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontSize: { sm: '20px !important', xs: '16px !important' }, fontWeight: '400' }}
              onClick={handleOtpSubmit}
            >
              Verify code
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

NumberChange.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default NumberChange;
