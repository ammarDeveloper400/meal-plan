/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

import { Box, Dialog, Typography, IconButton, DialogTitle, DialogContent } from '@mui/material';

const SubscriptionDialog = ({ open, handleClose }) => (
  <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
    <DialogTitle>
      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
        <IconButton
          sx={{ backgroundColor: '#F79256', ':hover': { backgroundColor: '#F79256' } }}
          aria-label="close"
          onClick={handleClose}
        >
          <img  src="/assets/icons/closeicon.svg" alt="Close" />
        </IconButton>
      </Box>
    </DialogTitle>
    <DialogContent style={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1" style={{ color: '#F79256', textAlign: 'center' }}>
          Subscribed successfully
        </Typography>
        <Typography sx={{ textAlign: 'center', fontSize: '18px', mt: {sm:'20px', xs:'10px'}, fontWeight: '500' }}>
        Welcome to Planora's newsletter!
        </Typography>
        <Box sx={{ height: '40%', width: '60%' }}>
          <img
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            src="/assets/icons/Success.gif"
            alt="Success"
          />
        </Box>
      </Box>
    </DialogContent>
  </Dialog>
);

SubscriptionDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default SubscriptionDialog;
