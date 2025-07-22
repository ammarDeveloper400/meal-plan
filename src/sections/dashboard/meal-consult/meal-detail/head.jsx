import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import Iconify from '../../../../components/iconify';

const Head = () => {
  const navigate = useNavigate();

  return (
    <Box pt="20px">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
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
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            flexWrap: { xs: 'wrap', sm: 'nowrap' },
            justifyContent: { xs: 'space-between', sm: 'end' },
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
      </Box>

      <Box sx={{ py: '30px' }}>
        <Typography sx={{ fontSize: '14px !important', fontWeight: '400' }}>
          Week #34, 2024-06-13 Monday-Tuesday-Wednesday - Breakfast
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: '20px !important', fontWeight: '600' }}>
          Recipe in detail
        </Typography>
      </Box>
    </Box>
  );
};

export default Head;
