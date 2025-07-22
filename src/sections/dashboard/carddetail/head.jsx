/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import Iconify from '../../../components/iconify';

const Head = () => {
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
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
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
              borderRadius: '10px',
            }}
            onClick={() => navigate('/account')}
          >
            Return to main menu <Iconify sx={{ color: '#fff' }} icon="lets-icons:refund-back" />
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            flexWrap: { xs: 'wrap', sm: 'nowrap' },
            justifyContent: { xs: 'space-between', sm: 'flex-end' }, // Space between on xs, flex-end on larger screens
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
              // p: '5px 10px',
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

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { xs: 'space-between' }, // Flex-end on larger screens
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <Box sx={{ pt: '30px' }}>
          <Typography
            sx={{ display: 'flex', fontSize: '20px !important', fontWeight: '600 !important' }}
          >
            Recipe in detail
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Head;
