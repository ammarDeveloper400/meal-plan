/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-return-assign */
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form, Field, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useState } from 'react';

import {
  Box,
  Link,
  Grid,
  Dialog,
  Button,
  Checkbox,
  TextField,
  IconButton,
  Typography,
  DialogContent,
  DialogActions,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';

// Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginDialog = ({ open, handleClose, setLoginDialogOpen }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Added this state
  const [view, setView] = useState('login');
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpRefs = useRef([]);
  const [isForgetMode, setIsForgetMode] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword); // Added this handler
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleLogin = (values) => {
    setIsForgetMode(false);
    console.log('Email:', values.email);
    console.log('Password:', values.password);
    setView('emailVerification'); // Show email verification dialog
  };

  const handleSendRecoveryCode = (values) => {
    console.log('Recovery Email:', values.email);
    setView('emailVerification'); // Show email verification dialog after recovery code is sent
  };

  const handleOtpChange = (index, event) => {
    const { value } = event.target;

    // Ensure the input only accepts one digit
    if (/^\d{0,1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field if the digit is entered
      if (value !== '' && index < otpRefs.current.length - 1) {
        otpRefs.current[index + 1].focus();
      }
    }
  };

  const handleOtpSubmit = (mode) => {
    console.log(mode, 'forgetMode here');

    if (isForgetMode) {
      console.log(otp.join(''));
      setView('newPassword');
    } else {
      setLoginDialogOpen(false);
      setView('');
      navigate('/account');
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        otpRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      {view === 'login' && (
        <DialogContent sx={{ p: { sm: '43px' } }}>
          <Typography sx={{ fontSize: '30px !important', fontWeight: '400' }} pb={2}>
            Log in
          </Typography>
          <Formik
            initialValues={{ email: '', password: '', remember: false }}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
          >
            {({ errors, touched, handleChange, handleBlur }) => (
              <Form>
                <Field
                  as={TextField}
                  name="email"
                  label="Email address"
                  type="email"
                  fullWidth
                  margin="normal"
                  size="medium"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '50px',
                      fontSize: '14px',
                    },
                    '& .MuiFormLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                />
                <TextField
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '50px',
                      fontSize: '14px',
                    },
                    '& .MuiFormLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  margin="normal"
                  size="medium"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          <img
                            src={
                              showPassword
                                ? '/assets/icons/visibilityoff.svg'
                                : '/assets/icons/visibility.svg'
                            }
                            alt="toggle password visibility"
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Box
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <FormControlLabel
                    control={<Field as={Checkbox} sx={{ transform: 'scale(0.8)' }} />}
                    label="Remember me"
                    sx={{
                      '& .MuiTypography-root': { fontSize: { sm: '0.875rem', xs: '0.65rem' } },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { sm: '14px !important', xs: '12px !important' },
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setView('forgotPassword');
                      setIsForgetMode(true);
                    }}
                  >
                    Forgot password?
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Button
                    fullWidth
                    variant="outlined"
                    type="submit"
                    sx={{ py: '6px', borderRadius: '50px', fontSize: '22px', fontWeight: '500' }}
                  >
                    Login
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Typography
            sx={{
              fontSize: { sm: '14px !important', xs: '12px !important' },
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              pt: '20px',
            }}
          >
            Not a member yet?{' '}
            <Link href="/account-form" sx={{ cursor: 'pointer' }}>
              Become a member
            </Link>
          </Typography>
        </DialogContent>
      )}

      {view === 'forgotPassword' && (
        <DialogContent sx={{ p: { sm: '43px' } }}>
          <Typography variant="h2" pb={2}>
            Forgotten Password
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
                  // sx={{ '& .MuiOutlinedInput-root': { borderRadius: '50px' } }}
                  as={TextField}
                  name="email"
                  label="Email address"
                  type="email"
                  fullWidth
                  margin="dense"
                  size="medium"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '50px',
                      fontSize: '14px',
                    },
                    '& .MuiFormLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                />
                <Box mt={4}>
                  <Button
                    fullWidth
                    variant="outlined"
                    type="submit"
                    sx={{
                      py: '6px',
                      borderRadius: '50px',
                      fontSize: { sm: '22px', xs: '18px' },
                      fontWeight: '500',
                    }}
                  >
                    Send Recovery Code
                  </Button>
                </Box>
                <Box mt={2} textAlign="center">
                  <Typography
                    sx={{ cursor: 'pointer', opacity: 0.5, fontSize: '14px !important' }}
                    onClick={() => {
                      setView('login');
                      setIsForgetMode(true);
                    }}
                  >
                    Back to login
                  </Typography>
                </Box>
              </Form>
            )}
          </Formik>
        </DialogContent>
      )}

      {view === 'emailVerification' && (
        <DialogContent sx={{ pt: { sm: '43px' }, pb: { sm: '30px' } }}>
          <Box>
            <Typography align="center" sx={{ fontSize: '18px !important' }}>
              Enter the Verification code we sent on
            </Typography>
            <Typography
              align="center"
              sx={{
                fontSize: '12px !important',
                fontWeight: '700 !important',
                textDecoration: 'underline',
              }}
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
                    type="text"
                    id={`otp-${index}`}
                    value={digit}
                    variant="outlined"
                    inputProps={{
                      maxLength: 1,
                      style: { textAlign: 'center' },
                      inputMode: 'numeric', // Ensure numeric keyboard on mobile devices
                      pattern: '[0-9]*', // Allow only numbers
                    }}
                    onChange={(event) => handleOtpChange(index, event)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    inputRef={(el) => (otpRefs.current[index] = el)}
                    sx={{
                      width: { sm: '56px', xs: '40px' },
                      height: { sm: '56px', xs: '40px' },
                      backgroundColor: '#EFEDED',
                      borderRadius: '10px',
                      '& .MuiInputBase-input': {
                        padding: 0,
                        textAlign: 'center',
                        height: { sm: '56px', xs: '40px' },
                        lineHeight: { sm: '56px', xs: '40px' },
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
            <Box mt={3}>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  pt: '6px',
                  borderRadius: '50px',
                  fontSize: { sm: '22px', xs: '18px' },
                  fontWeight: '500',
                }}
                onClick={() => {
                  setIsForgetMode(true);
                  handleOtpSubmit(true);
                }}
                // onClick={() => navigate('/account')}
              >
                Verify code
              </Button>
            </Box>
          </DialogActions>
        </DialogContent>
      )}

      {view === 'newPassword' && (
        <DialogContent sx={{ p: { sm: '43px' } }}>
          <Box>
            <Typography
              align="center"
              sx={{ fontSize: { sm: '24px !important', xs: '20px !important' }, fontWeight: 600 }}
            >
              Create New Password
            </Typography>
            <Typography
              align="center"
              sx={{ fontSize: '12px !important', color: '#666666', mt: '18px', mb: '5px' }}
            >
              Enter your new password
            </Typography>

            <Formik
              initialValues={{ newPassword: '', confirmPassword: '' }}
              validationSchema={Yup.object().shape({
                newPassword: Yup.string().required('Required'),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
                  .required('Required'),
              })}
              onSubmit={(values) => {
                console.log('New Password:', values.newPassword);
              }}
            >
              {({ errors, touched, handleChange, handleBlur }) => (
                <Form>
                  <Field
                    as={TextField}
                    name="newPassword"
                    label="New Password"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.newPassword && Boolean(errors.newPassword)}
                    helperText={touched.newPassword && errors.newPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            <img
                              src={
                                showPassword
                                  ? '/assets/icons/visibilityoff.svg'
                                  : '/assets/icons/visibility.svg'
                              }
                              alt=""
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '50px',
                        fontSize: '14px',
                      },
                      '& .MuiFormLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                  />

                  <Field
                    as={TextField}
                    name="confirmPassword"
                    label="Confirm Password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                    helperText={touched.confirmPassword && errors.confirmPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            <img
                              src={
                                showConfirmPassword
                                  ? '/assets/icons/visibilityoff.svg'
                                  : '/assets/icons/visibility.svg'
                              }
                              alt=""
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '50px',
                        fontSize: '14px',
                      },
                      '& .MuiFormLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                  />
                  <Box mt={4}>
                    <Button
                      onClick={() => {
                        handleClose();
                        setView('login');
                      }}
                      fullWidth
                      variant="outlined"
                      type="submit"
                      sx={{
                        py: '6px',
                        borderRadius: '50px',
                        fontSize: { sm: '22px', xs: '18px' },
                        fontWeight: '500',
                      }}
                    >
                      Set New Password
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </DialogContent>
      )}
    </Dialog>
  );
};

LoginDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default LoginDialog;
