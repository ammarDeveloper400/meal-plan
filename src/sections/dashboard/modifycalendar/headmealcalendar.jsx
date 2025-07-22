/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Tooltip, TextField, IconButton, Typography } from '@mui/material';

import Iconify from '../../../components/iconify';
import PreferencesDialog from '../modify-meal/saved-preferences';

const HeadMealCalendar = () => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const [isPreferencesDialogOpen, setPreferencesDialogOpen] = useState(false); // State for PreferencesDialog
  const [text, setText] = useState('Week #34');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (event) => {
    if (event.target.value.length <= 25) {
      setText(event.target.value);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
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
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap', // Allows wrapping of content to avoid overflow
        }}
      >
        <Box
          sx={{
            mb: { xs: '10px', md: '0' }, // Margin-bottom on smaller screens
            width: { xs: '100%', md: 'auto' }, // Full width on smaller screens
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontSize: '16px !important',
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
              fontWeight: '400',
            }}
            onClick={() => navigate('/meal')}
          >
            Return to the previous section{' '}
            <Iconify sx={{ color: '#fff' }} icon="lets-icons:refund-back" />
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            flexWrap: { xs: 'wrap', sm: 'nowrap' }, // Wrap buttons on xs screens
            justifyContent: { xs: 'space-between', sm: 'flex-start' }, // Space between buttons on xs
            width: { xs: '100%', sm: 'auto' }, // Full width on xs
          }}
        >
          <Button
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              fontSize: '14px !important',
              fontWeight: '400',
              backgroundColor: '#272932',
              ':hover': { backgroundColor: '#272932' },
              color: '#fff',
              p: '5px 10px',
              flex: { xs: '1 0 48%', sm: 'none' }, // Each button takes up 48% of the row on xs
            }}
          >
            Download <Iconify icon="oi:cloud-download" />
          </Button>
          <Button
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              fontSize: '14px !important',
              fontWeight: '400',
              backgroundColor: '#272932',
              ':hover': { backgroundColor: '#272932' },
              color: '#fff',
              p: '5px 10px',
              flex: { xs: '1 0 48%', sm: 'none' }, // Each button takes up 48% of the row on xs
            }}
          >
            Print <Iconify icon="ic:round-print" />
          </Button>
          <Button
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              fontSize: '14px !important',
              fontWeight: '400',
              backgroundColor: '#272932',
              ':hover': { backgroundColor: '#272932' },
              color: '#fff',
              p: '5px 10px',
              flex: { xs: '1 0 48%', sm: 'none' }, // Each button takes up 48% of the row on xs
            }}
          >
            Send by email <Iconify icon="ic:round-mail" />
          </Button>
          <Button
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              fontSize: '14px !important',
              fontWeight: '400',
              backgroundColor: '#272932',
              ':hover': { backgroundColor: '#272932' },
              color: '#fff',
              p: '5px 10px',
              flex: { xs: '1 0 48%', sm: 'none' }, // Each button takes up 48% of the row on xs
            }}
          >
            Send by SMS <Iconify icon="ic:round-sms" />
          </Button>
        </Box>
      </Box> */}
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
            <Box>
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
              Replace this meal plan with one of my saved meal plans
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
              Generate a new meal plan based on my saved preferences
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
              Save meal plan <Iconify sx={{ color: '#fff' }} icon="lets-icons:save-fill" />
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: '20px',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '10px', md: '20px' }, // Adjust gap for different screen sizes
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack buttons vertically on xs, row on md and up
            width: { xs: '100%', md: 'auto' }, // Full width on xs
          }}
        >
          <Button
            onClick={() => navigate('/meal/modify-meal')}
            variant="outlined"
            sx={{
              color: '#000',
              width: { xs: '100%', md: 'auto' }, // Full width on xs
              mb: { xs: '10px', md: '0' }, // Add margin-bottom on xs
            }}
          >
            Detailed version
          </Button>
          <Button
            variant="contained"
            sx={{
              width: { xs: '100%', md: 'auto' }, // Full width on xs
            }}
          >
            Calendar version
          </Button>
        </Box>

        {/* <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' }, // Stack buttons vertically on xs, row on md and up
            width: { xs: '100%', md: 'auto' }, // Full width on xs
          }}
        >
          <Button
           onClick={() => navigate('/modify-meal')}
            variant="contained"
            sx={{
              width: { xs: '100%', md: 'auto' }, // Full width on xs
              mb: { xs: '10px', md: '0' }, // Add margin-bottom on xs
            }}
          >
            Modify this meal plan <Iconify icon="basil:edit-solid" />
          </Button>
          <Button
            disableRipple
            variant="contained"
            onClick={handleLikeClick}
            sx={{
              display: 'flex',
              gap: '5px',
              width: { xs: '100%', md: 'auto' }, // Full width on xs
            }}
          >
            Like this meal plan <Iconify icon={isLiked ? 'twemoji:red-heart' : 'ph:heart-light'} />
          </Button>
        </Box> */}
      </Box>
      <Box sx={{ pt: '20px', pb: '5px' }}>
        <Typography
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { sm: '10px', xs: '0px' },
            fontSize: '20px !important',
            fontWeight: '600 !important',
            alignItems: 'center',
          }}
        >
          {/* My actual meal plan:{' '} */}
          <Box display="flex" alignItems="center">
            {isEditing ? (
              <TextField
                value={text}
                onChange={handleTextChange}
                onBlur={handleBlur}
                autoFocus
                variant="standard"
                inputProps={{ maxLength: 25 }}
              />
            ) : (
              <Typography sx={{ fontSize: '20px !important', fontWeight: '600 !important' }}>
                {text}
              </Typography>
            )}
            <IconButton sx={{ color: 'black' }} onClick={handleEditClick}>
              <Iconify icon="mynaui:edit-one" />
            </IconButton>
          </Box>
        </Typography>
      </Box>
      {/* Preferences Dialog */}
      <PreferencesDialog open={isPreferencesDialogOpen} onClose={handlePreferencesDialogClose} />
    </Box>
  );
};

export default HeadMealCalendar;
