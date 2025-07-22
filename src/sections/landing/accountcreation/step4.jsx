/* eslint-disable no-undef */
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Box, Grid, Button, Select, MenuItem, TextField, Typography, FormControl, InputAdornment } from '@mui/material';

import ImportantDialog from '../../../components/landing/skip-dialoge'; // Import the ImportantDialog component

const Step4 = ({ onNext, onBack }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    onSubmit: (values) => {
      console.log(values);
      onNext(); // Go to the next step
    },
  });

  // Function to handle the Skip button click
  const handleSkipClick = () => {
    setDialogOpen(true); // Open the dialog when Skip is clicked
  };

  // Function to handle closing the dialog
  const handleCloseDialog = () => {
    setDialogOpen(false); // Close the dialog
  };

  // Updated: Skip anyway should skip Step 5 and move to Step 6
  const handleSkipAnyway = () => {
    setDialogOpen(false); // Close the dialog
    onNext(2); // Skip Step 5 and go to Step 6
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value); // Update selected country code
  };

  return (
    <Box sx={{ maxWidth: 850, margin: 'auto', padding: '2rem' }}>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h1" component="h1" align="center" gutterBottom mb="15px">
          Account creation form
        </Typography>
        <Typography variant="subtitle1" align="center" color="primary" gutterBottom>
          Step 4 of 7
        </Typography>
        <Typography variant="h2" component="h2" align="center" gutterBottom mb="25px">
          Phone number verification
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="number"
              size="medium"
              variant="outlined"
              placeholder="Phone number"
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
                    <FormControl>
                      <Select
                        sx={{ minWidth: 80 }}
                        value={countryCode}
                        onChange={handleCountryCodeChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="">
                          <img src="/assets/icons/canada.svg" alt="Canada" style={{ width: '20px', height: '20px' }} />
                        </MenuItem>
                        <MenuItem value="1">
                          <img src="/assets/icons/usa.svg" alt="USA" style={{ width: '20px', height: '20px' }} />
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          {/* Go back button */}
          <Button
            variant="outlined"
            sx={{ fontSize: '20px !important', fontWeight: '600 !important' }}
            onClick={onBack}
          >
            Go back
          </Button>

          {/* Right aligned buttons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              sx={{ mr: 1, fontSize: '20px !important', fontWeight: '400 !important' }}
              onClick={handleSkipClick}
            >
              Skip
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ fontSize: '20px !important', fontWeight: '400 !important', borderRadius: '15px' }}
            >
              Send verification code
            </Button>
          </Box>
        </Box>
      </form>

      {/* Important Dialog Component */}
      <ImportantDialog open={dialogOpen} onClose={handleCloseDialog} onSkip={handleSkipAnyway} />
    </Box>
  );
};

Step4.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Step4;
