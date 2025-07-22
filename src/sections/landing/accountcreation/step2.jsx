import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik'; // Import Yup for schema validation
import { Box, Grid, Button, TextField, Typography } from '@mui/material';

const Step2 = ({ onNext, onBack }) => {
  const formik = useFormik({
    initialValues: {
      email: '', // Added email field
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address') // Validate that it is a valid email format
        .required('Email is required'), // Email is a required field
    }),
    onSubmit: (values) => {
      console.log(values);
      onNext(); // Move to the next step on form submission
    },
  });

  return (
    <Box sx={{ maxWidth: 850, margin: 'auto', padding: '2rem', py: '60px' }}>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h1" component="h1" align="center" gutterBottom mb="15px">
          Account creation form
        </Typography>
        <Typography variant="subtitle1" align="center" color="primary" gutterBottom>
          Step 2 of 7
        </Typography>
        <Typography variant="h2" component="h2" align="center" gutterBottom mb="35px">
          Email verification
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type='email'
              id="email"
              name="email"
              label="Email address"
              size="medium"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} // Trigger validation on blur
              error={formik.touched.email && Boolean(formik.errors.email)} // Show error if touched and there's an error
              helperText={formik.touched.email && formik.errors.email} // Display error message
              variant="outlined"
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
          <Button
            variant="outlined"
            color="primary"
            sx={{ fontSize: '20px !important', fontWeight: '600 !important', borderRadius: '15px' }}
            onClick={onBack} // Call onBack function when clicked
          >
            Go back
          </Button>

          {/* Send verification code button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ fontSize: '20px !important', fontWeight: '400 !important', borderRadius: '15px' }}
          >
            Send verification code
          </Button>
        </Box>
      </form>
    </Box>
  );
};

// Add propTypes validation
Step2.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired, // Add onBack to propTypes
};

export default Step2;
