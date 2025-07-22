import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Dialog, Tooltip, Typography, DialogContent } from '@mui/material';

import Iconify from '../../../components/iconify';
import PreferencesDialog from './saved-preferences'; // Import PreferencesDialog

const Head = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isPreferencesDialogOpen, setPreferencesDialogOpen] = useState(false); // State for PreferencesDialog

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDialogConfirm = () => {
    console.log('Meal plan saved!');
    setOpen(false);
  };

  const handlePreferencesDialogClose = () => {
    setPreferencesDialogOpen(false);
  };

  return (
    <Box pt="20px">
      {/* ----------- Main menu ----------- */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <Box>
          <Button
            variant="contained"
            sx={{
              fontSize: '16px !important',
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
              fontWeight: '400',
            }}
            onClick={() => window.history.back()}
          >
            Return to the previous section
            <Iconify sx={{ color: '#fff' }} icon="lets-icons:refund-back" />
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              fontSize: '16px !important',
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
              fontWeight: '400 !important',
            }}
            onClick={() => navigate('/meal')}
          >
            Main menu
          </Button>
        </Box>
      </Box>

      {/* ----------- Preferences ----------- */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          py: '20px',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'start' },
              alignItems: 'center',
              pb: { xs: '10px', md: 0 },
            }}
          >
            <Box>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  fontSize: '16px !important',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center',
                  fontWeight: '600 !important',
                }}
                onClick={() => setPreferencesDialogOpen(true)} // Open PreferencesDialog
              >
                My saved preferences
                <Iconify sx={{ color: '#fff' }} icon="mi:filter" />
              </Button>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Tooltip
                title="Saved preferences will be filters saved into your account that will be used for the random meal generation and for the weekly suggested meal plan."
                arrow
              >
                <Button disableRipple sx={{ ':hover': { backgroundColor: 'transparent' } }}>
                  <Iconify sx={{ color: '#000' }} icon="mdi:question-mark-circle-outline" />
                </Button>
              </Tooltip>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: { sm: 'end', xs: 'center' } }}>
            <Button
              variant="contained"
              sx={{
                fontSize: { sm: '16px !important', xs: '12px !important' },
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                fontWeight: '600 !important',
              }}
              onClick={() => navigate('/meal/replace-meal')}
            >
             Replace with older meal plan
              <Iconify sx={{ color: '#fff' }} icon="oi:loop" />
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: { sm: 'end', xs: 'center' } }}>
            <Button
              variant="contained"
              sx={{
                fontSize: { sm: '16px !important', xs: '12px !important' },
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                fontWeight: '600 !important',
              }}
            >
              Generate new random meal plan
              <Iconify sx={{ color: '#fff' }} icon="foundation:shuffle" />
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button
              sx={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                fontSize: '14px !important',
                fontWeight: '600 !important',
                backgroundColor: '#272932',
                ':hover': { backgroundColor: '#272932' },
                color: '#fff',
                p: '5px 10px',
                flex: { xs: '1 0 48%', sm: 'none' }, // Each button takes up 48% of the row on xs
              }}
              onClick={() => setOpen(true)} // Open the dialog on button click
            >
              Save meal plan  <Iconify sx={{ color: '#fff' }} icon="lets-icons:save-fill" />  
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', pt: '20px' }}>
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Button variant="contained">Detailed version</Button>
          <Button
            onClick={() => navigate('/meal/modify-calendar')}
            variant="outlined"
            sx={{ color: '#000' }}
          >
            Calendar version
          </Button>
        </Box>
      </Box>

      {/* Warning Dialog */}
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogContent>
          <Typography
            sx={{
              fontSize: '20px !important',
              fontWeight: '500',
              color: '#F79256',
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              pb: '10px',
              pt: '20px',
            }}
          >
            <Iconify sx={{ color: '#F79256' }} icon="fluent:warning-20-regular" />
            Warning
          </Typography>
          <Typography>
            Are you sure you want to leave this section without saving the meal plan? If you do so,
            all modifications will be lost.
          </Typography>
        </DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'end', gap: '10px', pb: '20px', pr: '20px' }}>
          <Button
            sx={{ fontSize: '14px !important', fontWeight: '400', px: '36px' }}
            onClick={handleDialogConfirm}
            variant="outlined"
          >
            Yes
          </Button>
          <Button
            sx={{ fontSize: '14px !important', fontWeight: '400', px: '36px' }}
            onClick={handleDialogClose}
            variant="contained"
          >
            No
          </Button>   
        </Box>
      </Dialog>

      {/* Preferences Dialog */}
      <PreferencesDialog open={isPreferencesDialogOpen} onClose={handlePreferencesDialogClose} />
    </Box>
  );
};

export default Head;
