/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';

import Head from './head';
import Cards from './cards';
import Iconify from '../../../components/iconify';

const FavoriteMeal = () => {
    const navigate = useNavigate();

    return (

  <Box p={2}>
    <Box pt='20px'>
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
        Return to main menu{' '}
        <Iconify sx={{ color: '#fff' }} icon="lets-icons:refund-back" />
      </Button>
    </Box>
    <Box>
      <Head />
    </Box>
    <Box>
        <Cards />
    </Box>
  </Box>
);
};

export default FavoriteMeal;
