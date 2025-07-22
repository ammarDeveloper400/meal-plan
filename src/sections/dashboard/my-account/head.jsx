import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import CongratulationsDialog from '../../../components/congratulations/congratulation'; // Import your dialog component

const menuItems = [
  { label: 'Preferences', link: '/account/preference' },
  { label: 'My subscription', link: '/account/my-subscription' },
  { label: 'Account details', link: '/account/account-detail' },
  { label: 'Payment method', link: '/account/account-payment' },
];

const Head = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for controlling the dialog

  const handleTabClick = (link) => {
    setActiveTab(link);
    navigate(link);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true); // Open the dialog
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false); // Close the dialog
  };

  return (
    <Box>
      {/* Main header box */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#F79256',
          borderRadius: '15px',
          alignItems: 'center',
          px: '23px',
          py: '10px',
          color: 'white',
        }}
      >
        <Box>
          <Typography variant="body2" sx={{ fontWeight: '400' }}>
            Accumulated free days
          </Typography>
          <Typography sx={{ fontSize: '14px !important', fontWeight: '400' }}>
            1 referral = 30 free days
          </Typography>
        </Box>
        <Box>
          {/* Clickable area for "90 Days" */}
          <Typography
            sx={{ fontSize: '24px !important', fontWeight: '600', cursor: 'pointer' }}
            onClick={handleDialogOpen}
          >
            90 Days
          </Typography>
        </Box>
      </Box>

      {/* Navigation items */}
      <Box pt="16px">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {menuItems.map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                onClick={() => handleTabClick(item.link)}
                sx={{
                  marginRight: index < menuItems.length - 1 ? { md: '40px', xs: '20px' } : 'auto',
                  fontSize: { sm: '14px !important', xs: '12px !important' },
                  pb: { xs: '10px', sm: '0' },
                  fontWeight: '600',
                  cursor: 'pointer',
                  color: activeTab === item.link ? '#F79256' : 'inherit',
                  ':hover': {
                    color: '#F79256',
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Referral Work Button */}
          <Box onClick={() => navigate('/referral-work')}>
            <Button
              variant="contained"
              sx={{
                fontSize: { sm: '14px !important', xs: '10px !important' },
                fontWeight: '400',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <img width={15} src="/assets/icons/questionmark.svg" alt="question" />
              How does the referral work?
            </Button>
          </Box>
        </Box>
      </Box>

      {/* CongratulationsDialog Component */}
      <CongratulationsDialog open={isDialogOpen} onClose={handleDialogClose} />
    </Box>
  );
};

export default Head;
