import React from 'react';

import { Box, Grid } from '@mui/material';

import Head from './head';
import Steps from './steps';
import RecipeCard from './card';

const RecipeDetail = () => (
  <Box p={2}>
    <Box pb="20px">
    < Head />
    </Box>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <RecipeCard />
      </Grid>
      <Grid item xs={12} md={8}>
        <Steps />
      </Grid>
    </Grid>
  </Box>
);

export default RecipeDetail;
