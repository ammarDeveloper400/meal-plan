import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'; // Import useSearchParams
import { Box, Button } from '@mui/material';

import MealPlanning1 from './mealplanning'; // Calendar version
import MealPlanning from './meal-planning-head'; // Detailed version
import Iconify from '../../../components/iconify';

const MealConsult = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams(); // Hook for handling URL search params
  const [activeComponent, setActiveComponent] = useState(
    searchParams?.get('activeTab') ?? 'detailed'
  ); // State to track active component

  const navigate = useNavigate();

  // Sync state with URL params on mount
  useEffect(() => {
    if (searchParams.get('activeTab')) {
      setActiveComponent(searchParams.get('activeTab'));
    }
  }, [searchParams]);

  // Handle Like Click
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  // Handle Modify Click, will navigate based on activeComponent
  const handleModifyClick = () => {
    navigate(`/meal/modify-meal?activeTab=${activeComponent}`);
  };

  // Switch the active component and update the search params
  const handleComponentSwitch = (component) => {
    setSearchParams({ activeTab: component }); // Update URL
    setActiveComponent(component);
  };

  return (
    <Box px={2}>
      <Box pt="20px">
        {/* Navigation and action buttons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Button to return to main menu */}
          <Box
            sx={{
              mb: { xs: '10px', md: '0' },
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <Button
              onClick={() => navigate('/meal')}
              variant="contained"
              sx={{
                fontSize: '16px !important',
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                fontWeight: '400',
              }}
            >
              Return to main menu <Iconify sx={{ color: '#fff' }} icon="lets-icons:refund-back" />
            </Button>
          </Box>

          {/* Additional action buttons (Download, Print, Send by email, SMS) */}
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              justifyContent: { xs: 'space-between', sm: 'flex-start' },
              width: { xs: '100%', sm: 'auto' },
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
                flex: { xs: '1 0 48%', sm: 'none' },
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
                flex: { xs: '1 0 48%', sm: 'none' },
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
                flex: { xs: '1 0 48%', sm: 'none' },
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
                flex: { xs: '1 0 48%', sm: 'none' },
              }}
            >
              Send by SMS <Iconify icon="ic:round-sms" />
            </Button>
          </Box>
        </Box>

        {/* Tab switcher for Detailed version and Calendar version */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: '20px',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '10px', md: '20px' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <Button
              variant={activeComponent === 'detailed' ? 'contained' : 'outlined'}
              sx={{
                width: { xs: '100%', md: 'auto' },
                color: activeComponent === 'detailed' ? '#fff' : '#000',
              }}
              onClick={() => handleComponentSwitch('detailed')}
            >
              Detailed version
            </Button>

            <Button
              variant={activeComponent === 'calendar' ? 'contained' : 'outlined'}
              sx={{
                width: { xs: '100%', md: 'auto' },
                color: activeComponent === 'calendar' ? '#fff' : '#000',
              }}
              onClick={() => handleComponentSwitch('calendar')}
            >
              Calendar version
            </Button>
          </Box>

          {/* Modify and Like buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <Button
              variant="contained"
              onClick={handleModifyClick} // Call the function here
              sx={{
                width: { xs: '100%', md: 'auto' },
                // mb: { xs: '10px', md: '0' },
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
                width: { xs: '100%', md: 'auto' },
              }}
            >
              Like this meal plan{' '}
              <Iconify icon={isLiked ? 'twemoji:red-heart' : 'ph:heart-light'} />
            </Button>
          </Box>
        </Box>

        {/* Conditionally render components based on the activeComponent state */}
        {activeComponent === 'detailed' ? <MealPlanning /> : <MealPlanning1 />}
      </Box>
    </Box>
  );
};

export default MealConsult;
