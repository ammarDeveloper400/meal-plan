import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid, Button, Container, Typography } from '@mui/material';

import RecipeCard from './card';
import Iconify from '../../../components/iconify';
// import RecipeCard from '../../dashboard/carddetail/card';
import CardDetail from '../../dashboard/carddetail/card-detail';

const Detail = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl">
      <Box mt={3}>
        <Button onClick={() => navigate(-1)} variant="contained" sx={{}}>
          Return to the previous section &nbsp;
          <Iconify icon="proicons:arrow-enter" />
        </Button>
      </Box>
      <Box my={3}>
        <Typography
          sx={{ display: 'flex', fontSize: '20px !important', fontWeight: '600 !important' }}
        >
          Recipe Details
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} alignItems="end">
          <Grid item xs={12} md={3.6}>
            <RecipeCard/>
          </Grid>
          <Grid item xs={12} md={8.4}>
            <CardDetail />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Detail;
