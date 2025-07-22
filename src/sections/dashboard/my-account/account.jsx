import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import Head from './head';
import RecipeCard from './card';
import ReferralPopup from './dilogue';

const Account = () => {
  const navigate = useNavigate();
  return (
    <Box p={2}>
      <Box sx={{ pt: '10px' }}>
        <Head />
      </Box>
      <Box sx={{ pt: '30px', pb: '28px' }}>
        <Typography sx={{ fontSize: '18px !important', fontWeight: '600' }}>
          Recently added recipes
        </Typography>
        <RecipeCard />
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: { sm: 'center', xs: 'flex-start' },
            pt: '80px',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Button
            onClick={() => navigate('/submit-recipe')}
            variant="contained"
            sx={{ fontSize: '16px !important', fontWeight: '400' }}
          >
            Submit your recipe idea{' '}
            <Typography
              sx={{
                textDecoration: 'underline',
                fontSize: '16px !important',
                fontWeight: '400',
                pl: '5px',
              }}
            >
              HERE
            </Typography>
          </Button>{' '}
          <Typography sx={{ fontSize: '16px !important', fontWeight: '400' }}>
            Who knows, maybe it will be your recipe that will be featured next week!
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ fontSize: '16px !important', fontWeight: '400', pt: { md: '20px' } }}>
        Every bit of feedback helps :) If you have any feedback or suggestions on how we can
        improve, please use the “Contact us” form.
      </Typography>
      <ReferralPopup />
    </Box>
  );
};

export default Account;
