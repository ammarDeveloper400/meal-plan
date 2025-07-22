import React, { useState } from 'react';

import { Box, Chip, Button, Typography } from '@mui/material';

import CancelSubscriptionDialog from './cancel-subscription'; // Import the dialog

const GeneralInformation = () => {
  const [open, setOpen] = useState(false); // State to control dialog visibility

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: '#F9A878', borderRadius: '16px', p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography gutterBottom sx={{ fontSize: '18px !important', fontWeight: '500 !important' }}>
          General information
        </Typography>
        <Chip label="Status: Active" sx={{ mb: 2, backgroundColor: '#F57A31', color: '#FFF' }} />
      </Box>
      <Typography sx={{ fontSize: '14px !important', fontWeight: 400, mb: 2 }}>
        Subscription start date:{' '}
        <Box
          component="span"
          sx={{
            fontWeight: 700,
            fontSize: { sm: '14px', xs: '12px' },
          }}
        >
          March 26th 2024
        </Box>
      </Typography>

      <Typography sx={{ fontSize: '14px !important', fontWeight: '400 !important', mb: 2 }}>
        Last subscription renewal date: 
        <Box
          component="span"
          sx={{
            pl:'5px',
            fontWeight: 700,
            fontSize: { sm: '14px', xs: '12px' },
          }}
        >
          April 26th 2024
        </Box>
      </Typography>
      <Typography sx={{ fontSize: '14px !important', fontWeight: '400 !important', mb: 2 }}>
        Next payment:
        <Box
          component="span"
          sx={{
            pl:'5px',
            fontWeight: 700,
            fontSize: { sm: '14px', xs: '12px' },
          }}
        >
          May 26th 2024
        </Box>
      </Typography>
      <Typography sx={{ fontSize: '14px !important', fontWeight: '400 !important' }}>
        Payment method:
        <Box
          component="span"
          sx={{
            pl:'5px',
            fontWeight: 700,
            fontSize: { sm: '14px', xs: '12px' },
          }}
        >
          Credit card ending in 6908
        </Box> 
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#F57A31' }}
          onClick={handleClickOpen}
        >
          Cancel my subscription
        </Button>
      </Box>

      {/* Include the dialog */}
      <CancelSubscriptionDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default GeneralInformation;
