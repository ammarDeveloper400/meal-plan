/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Dialog, Button, Typography, IconButton, DialogContent } from '@mui/material';

import Iconify from '../../../components/iconify';

const SubscriptionDialog = ({ open, onClose }) => {
  const navigate = useNavigate();
  return (

  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="sm"
    fullWidth
    PaperProps={{
      sx: {
        borderRadius: '20px',
        backgroundColor: '#FDE9DD',
      },
    }}
  >
    <DialogContent>
      {/* Close Button */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box />

        {/* Title */}
        <Typography
          textAlign="center"
          sx={{ mb: 2, color: '#000', fontSize: '24px', fontWeight: 'bold' }}
        >
          Customize your week, your meals, your <br /> grocery list and more!
        </Typography>
        <Box>
          <IconButton
            onClick={onClose}
            sx={{ bgcolor: '#F7945D', color: '#fff', ':hover': { bgcolor: '#F7945D' } }}
          >
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Box>
      </Box>
      {/* Features List */}
      <Box display="flex" flexDirection="column" gap={1.5} mb={3}>
        {[
          'Get unlimited access to our recipes',
          'Personalize your weekly suggested meal plan. Don’t like it? Change it!',
          'Instantly generate your grocery list, your meal plan or any recipes',
        ].map((text, index) => (
          <Box key={index} display="flex" alignItems="center">
            <Iconify icon="teenyicons:tick-circle-solid" sx={{ color: '#F7945D', mr: 1 }} />
            <Typography sx={{ fontSize: '16px !important', fontWeight: '400' }} color="black">
              {text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Subscribe Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
        onClick={() => navigate('/subscription')}
          fullWidth
          sx={{
            width: '80%',
            backgroundColor: '#F7945D',
            color: '#fff',
            fontWeight: 400,
            fontSize: '14px',
            borderRadius: '50px',
            padding: '12px 24px',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#F57C3D' },
          }}
        >
          Subscribe to unlock all features
        </Button>
      </Box>
    </DialogContent>
  </Dialog>
);
}
export default SubscriptionDialog;
