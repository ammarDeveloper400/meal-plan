/* eslint-disable no-return-assign */
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form, Field, Formik } from 'formik';
import React, { useRef, useState } from 'react';

import {
  Box,
  Grid,
  Button,
  Dialog,
  TextField,
  Typography,
  DialogContent,
  DialogActions,
} from '@mui/material';

const ChangeMail = ({ open, handleClose }) => {
  const [view, setView] = useState('newmail');
  const [otp, setOtp] = useState(Array(4).fill('')); // Changed from 6 to 4
  const otpRefs = useRef([]);

  const handleSendRecoveryCode = (values) => {
    // Implement send recovery code logic
    console.log('Recovery code sent to:', values.email);
    setView('emailVerification');
  };

  const handleOtpChange = (index, event) => {
    const { value } = event.target;
    if (/^\d?$/.test(value)) { // Only allow single digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        otpRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index] === '' && index > 0) {
        otpRefs.current[index - 1].focus();
      } else {
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }
  };

  const handleOtpSubmit = () => {
    // Implement OTP verification logic
    console.log('OTP submitted:', otp.join(''));
    handleClose(); // Close the dialog upon successful verification
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      {view === 'newmail' && (
        <DialogContent>
          <Typography textAlign="center" variant="h2" pb={2}>
            Enter new email for verification
          </Typography>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Invalid email').required('Required'),
            })}
            onSubmit={handleSendRecoveryCode}
          >
            {({ errors, touched, handleChange, handleBlur }) => (
              <Form>
                <Field
                  as={TextField}
                  name="email"
                  label="Email address"
                  type="email"
                  fullWidth
                  margin="dense"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '15px',
                      fontSize: '14px',
                    },
                    '& .MuiFormLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                />
                <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      p: '12px 30px;',
                      borderRadius: '15px',
                      fontSize: { sm: '18px !important', xs: '16px !important' },
                      fontWeight: '500',
                    }}
                  >
                    Send verification code
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </DialogContent>
      )}

      {view === 'emailVerification' && (
        <DialogContent>
          <Box>
            <Typography align="center" sx={{ fontSize: '18px !important' }}>
              Enter the Verification code we sent on
            </Typography>
            <Typography
              align="center"
              sx={{ fontSize: '12px !important', fontWeight: '700 !important', textDecoration: 'underline' }}
            >
              jemarch@gmail.com
            </Typography>
            <Typography align="center" sx={{ fontSize: '20px !important', mt: '24px' }}>
              Verify your email address
            </Typography>
            <Typography
              align="center"
              sx={{ fontSize: '12px !important', color: '#666666', mt: '18px', mb: '5px' }}
            >
              Enter OTP
            </Typography>

            <Grid container spacing={2} justifyContent="center" sx={{ gap: '10px' }}>
              {otp.map((digit, index) => (
                <Grid item key={index}>
                  <TextField
                    fullWidth
                    type="text" // Changed to 'text' to prevent increment on key press in some browsers
                    id={`otp-${index}`}
                    value={digit}
                    variant="outlined"
                    inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
                    onChange={(event) => handleOtpChange(index, event)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    inputRef={(el) => (otpRefs.current[index] = el)}
                    sx={{
                      width: {sm:'56px', xs:'45px'},
                      height: {sm:'56px', xs:'45px'},
                      backgroundColor: '#EFEDED',
                      borderRadius: '10px',
                      '& .MuiInputBase-input': {
                        padding: 0, 
                        textAlign: 'center',
                        height: {sm:'56px', xs:'45px'},
                        lineHeight: {sm:'56px', xs:'45px'},
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>

            <Typography align="center" sx={{ fontSize: '18px !important', pt: '32px' }}>
              Your verification code may take a few moments to arrive
            </Typography>
            <Typography align="center" sx={{ fontSize: '14px !important' }}>
              Didn’t receive a Verification code?
            </Typography>
            <Typography
              align="center"
              color="primary"
              sx={{ fontSize: '12px !important', pt: '20px' }}
            >
              Change email
            </Typography>
          </Box>
          <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ fontSize: {sm:'20px !important', xs: '16px !important'}, fontWeight: '400 !important' }}
                onClick={handleOtpSubmit}
              >
                Verify code
              </Button>
            </Box>
          </DialogActions>
        </DialogContent>
      )}
    </Dialog>
  );
};

ChangeMail.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ChangeMail;
