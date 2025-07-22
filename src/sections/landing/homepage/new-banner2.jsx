import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import Iconify from '../../../components/iconify';

const NewBanner2 = () => {
  const navigate = useNavigate();

  return (

  // <Container maxWidth="xl">
  <Box
    sx={{
      borderRadius:'15px',
      backgroundColor: '#F4F4F4',
      px:'28px',
      mt: '10px',
      py:'10px',
      display: 'flex',
      flexWrap: 'wrap',
      // gap: {md:'150px',xs:'20px'},
      alignItems: 'center',
      justifyContent: 'space-between',
      mx: {md:'70px',xs:'10px'},
    }}
  >
    <Box>
      <Typography
        sx={{
          fontSize: { md: '45px !important', xs: '30px !important' },
          fontWeight: '700 !important',
        }}
      >
        Want to use the platform for free?
      </Typography>
      <Typography
        sx={{
          fontSize: { md: '30px !important', xs: '15px !important' },
          fontWeight: '700 !important',
          mt: '10px',
        }}
      >
        {' '}
        Click here and learn more about the Referral Program
      </Typography>
    </Box>
    <Box>
      <Button
        onClick={() => navigate('/referral')}
        variant="contained"
        sx={{
          mt:{md:'0px',xs:'20px'},
          display: 'flex',
          alignItems: 'center',
          fontSize: {md:'32px',xs:'22px'},
          py: {md:'12px',xs:"0px"},
          px: {md:'55px',xs:'30px'},
          borderRadius: '15px',
          flwxwrap: 'wrap',
          ":hover": { backgroundColor: '#F79256 !important' },
        }}
      >
        Learn more
        <Iconify icon="ph:arrow-right-bold" width={28} height={28} sx={{ ml: '8px' }} />
      </Button>
    </Box>
  </Box>
  // </Container> 
);
}

export default NewBanner2;
