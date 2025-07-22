import * as Yup from 'yup';
import { useFormik } from 'formik'; // Import Yup for validation
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  Box,
  Grid,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';

const Step6 = ({ onNext, onBack }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Password is required')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character')
        .min(8, 'Password must be at least 8 characters long'),
      confirmPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Call onNext to go to the next step
      onNext();
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Box sx={{ maxWidth: 850, margin: 'auto', padding: '2rem' }}>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h1" component="h1" align="center" gutterBottom mb="15px">
          Account creation form
        </Typography>
        <Typography variant="subtitle1" align="center" color="primary" gutterBottom>
          Step 6 of 7
        </Typography>
        <Typography variant="h2" component="h2" align="center" gutterBottom mb="25px">
          Create your password
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
              variant="outlined"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      disableRipple
                      edge="end"
                      onClick={handleClickShowPassword}
                      aria-label="toggle password visibility"
                      size="small"
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <img
                        src={showPassword ? '/assets/icons/eye.svg' : '/assets/icons/hideeye.svg'}
                        alt="eye"
                        style={{ marginRight: 8 }}
                      />
                      <Typography variant="body2" mr="10px">
                        {showPassword ? 'Hide' : 'Show'}
                      </Typography>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  fontSize: '14px',
                },
                '& .MuiFormLabel-root': {
                  fontSize: '14px',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm password"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              variant="outlined"
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      disableRipple
                      edge="end"
                      onClick={handleClickShowConfirmPassword}
                      aria-label="toggle confirm password visibility"
                      size="small"
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <img
                        src={
                          showConfirmPassword
                            ? '/assets/icons/eye.svg'
                            : '/assets/icons/hideeye.svg'
                        }
                        alt="eye"
                        style={{ marginRight: 8 }}
                      />
                      <Typography variant="body2" mr="10px">
                        {showConfirmPassword ? 'Hide' : 'Show'}
                      </Typography>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  fontSize: '14px',
                },
                '& .MuiFormLabel-root': {
                  fontSize: '14px',
                },
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          {/* Go back button */}
          <Button variant='outlined'
            sx={{ fontSize: '20px !important', fontWeight: '600 !important' }}
            onClick={onBack}
          >
            Go back
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ fontSize: '20px !important', fontWeight: '400 !important', borderRadius: '15px' }}
          >
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
};

// Add prop types validation
Step6.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired, // Add prop for Go back function
};

export default Step6;
