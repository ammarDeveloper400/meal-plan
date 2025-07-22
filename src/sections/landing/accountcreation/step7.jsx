/* eslint-disable react/prop-types */
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik'; // Import Yup for validation
import { useNavigate } from 'react-router-dom';

import { Box, Grid, Button, TextField, Typography } from '@mui/material';

const Step7 = ({ onBack }) => { // Accepting onBack as a prop
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailOrPhone: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('First name is required')
        .matches(/^[A-Za-z]+$/, 'First name must contain only letters'), // Only letters
      lastName: Yup.string()
        .required('Last name is required')
        .matches(/^[A-Za-z]+$/, 'Last name must contain only letters'), // Only letters
      emailOrPhone: Yup.string()
        .required('Email or phone number is required')
        .test('email-or-phone', 'Must be a valid email or 10-digit phone number', (value) => {
          // Regex for email
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          // Regex for exactly 15 digits
          const phoneRegex = /^\d{10}$/;

          // Validate if value matches email or phone regex
          return emailRegex.test(value) || phoneRegex.test(value);
        }),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
      navigate('/account'); // Navigate to the next page after submission
    },
  });

  return (
    <Box sx={{ maxWidth: 850, margin: 'auto', padding: '2rem' }}>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h1" component="h1" align="center" gutterBottom mb="15px">
          Account creation form
        </Typography>
        <Typography variant="subtitle1" align="center" color="primary" gutterBottom>
          Step 7 of 7
        </Typography>
        <Typography variant="h2" component="h2" align="center" gutterBottom mb="25px">
          Referral (If any)
        </Typography>
        <Typography align="center" sx={{ fontSize: '18px !important', pt: '10px', pb: '20px' }}>
        If you were referred by someone, please provide their information here
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              variant="outlined"
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              sx={{
                '& .MuiOutlinedInput-root': { fontSize: '14px' },
                '& .MuiFormLabel-root': { fontSize: '14px' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              variant="outlined"
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              sx={{
                '& .MuiOutlinedInput-root': { fontSize: '14px' },
                '& .MuiFormLabel-root': { fontSize: '14px' },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="emailOrPhone"
              name="emailOrPhone"
              label="Email or phone number"
              value={formik.values.emailOrPhone}
              onChange={formik.handleChange}
              variant="outlined"
              error={formik.touched.emailOrPhone && Boolean(formik.errors.emailOrPhone)}
              helperText={formik.touched.emailOrPhone && formik.errors.emailOrPhone}
              sx={{
                '& .MuiOutlinedInput-root': { fontSize: '14px' },
                '& .MuiFormLabel-root': { fontSize: '14px' },
              }}
            />
            <Box sx={{ display:'flex', justifyContent: 'space-between', pt: '8px' }}>
            <Typography sx={{ fontSize:'12px !important', fontWeight: '600 !important', color: 'green' }}>
              Success! We found a match
            </Typography>
            <Typography sx={{ fontSize:'12px !important', fontWeight: '600 !important'  }}>
            *Referral only becomes valid when the next step is completed.
            </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <Button
            variant='outlined'
            sx={{ fontSize: '20px !important', fontWeight: '600 !important' }}
            onClick={onBack} // Call the onBack function to go to the previous step
          >
            Go Back
          </Button>
          <Box>
            <Button
              sx={{ mr: 1, fontSize: '20px !important', fontWeight: '400 !important' }}
              onClick={() => navigate('/account')}
            >
              Skip
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ fontSize: '20px !important', fontWeight: '400 !important', borderRadius: '15px' }}
            >
              Proceed to next step
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Step7;
