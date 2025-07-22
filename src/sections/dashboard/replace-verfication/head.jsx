/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';

import Iconify from '../../../components/iconify';

const Head = ({ setView, activeComponent }) => {
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Box pt="20px">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Space out left and right groups
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {/* Left-side buttons grouped together */}
        <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            sx={{
              fontSize: '16px !important',
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
              fontWeight: '400 !important',
            }}
            onClick={() => window.history.back()}
          >
            Return to the previous section
            <Iconify sx={{ color: '#fff' }} icon="lets-icons:refund-back" />
          </Button>
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
            Main menu
          </Button>
        </Box>

        {/* Right-side button */}
        <Box>
          <Button
            disableRipple
            variant="contained"
            onClick={handleLikeClick}
            sx={{
              display: 'flex',
              gap: '5px',
              width: { xs: '100%', md: 'auto' },
            }}
          >
            Like this meal plan
            <Iconify icon={isLiked ? 'twemoji:red-heart' : 'ph:heart-light'} />
          </Button>
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
            variant={activeComponent === 'detailed' ? 'contained' : 'outlined'}
            sx={{
              width: { xs: '100%', md: 'auto' },
              color: activeComponent === 'detailed' ? '#fff' : '#000', // White text for contained, black for outlined
            }}
            onClick={() => setView('detailed')} // Switch to detailed view
          >
            Detailed version
          </Button>
          <Button
            variant={activeComponent === 'calendar' ? 'contained' : 'outlined'}
            sx={{
              color: activeComponent === 'calendar' ? '#fff' : '#000', // White text for contained, black for outlined
              width: { xs: '100%', md: 'auto' },
            }}
            onClick={() => setView('calendar')} // Switch to calendar view
          >
            Calendar version
          </Button>
        </Box>

        <Box
          sx={{
            alignItems: 'center',
            width: { xs: '100%', md: 'auto' },
          }}
        >
          <Button
            onClick={() => navigate('/meal/modify-meal')}
            variant="contained"
            sx={{
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
              width: { xs: '100%', md: 'auto' },
              mb: { xs: '10px', md: '0' },
            }}
          >
            Replace the current meal plan with this one{' '}
            <Iconify style={{ width: '20px', height: '20px' }} icon="oi:loop" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Head;
