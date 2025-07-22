import React from 'react';

import { Box, Typography } from '@mui/material';

import Bar from './bar';
import MealCard from './history';
import MainMenu from './main-menu';

const MealPlan = () => (
  <Box p={2}>
    <Box sx={{ pt: '10px' }}>
      <Typography sx={{ fontSize: '20px !important', fontWeight: '600 !important', pb: '0px', pl: '10px' }}>
        Main menu{' '}
      </Typography>
      <MainMenu />
    </Box>
    <Bar />
    <MealCard />
  </Box>
);

export default MealPlan;
