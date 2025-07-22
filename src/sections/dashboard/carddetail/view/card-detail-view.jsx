import React from 'react';

import { Box, Grid } from '@mui/material';

import Head from '../head';
import RecipeCard from '../card';
import CardDetail from '../card-detail';

const CardDetailView = () => (
  <Box p={2}>
    <Head />
    <Grid container spacing={2} alignItems='end'>
      <Grid item xs={12} md={3.6} mt={2}>
        <RecipeCard />
      </Grid>
      <Grid item xs={12} md={8.4}>
        <CardDetail />
      </Grid>
    </Grid>
  </Box>
);

export default CardDetailView;
