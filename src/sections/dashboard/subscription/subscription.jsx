import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

import Orders from './orders';
import Referral from './referral';
import SubscriptionTotal from './subscriptiontotal';
import GeneralInformation from './generalinformation';

const Subscription = () => (
  <Box sx={{ p: 2 }}>
    <Typography sx={{ fontSize: '20px !important', fontWeight: '600 !important', mb: 2 }} gutterBottom>
      My subscription
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
      <Box>
        <GeneralInformation />
      </Box>
      <Box sx={{ pt: '20px' }}>
        <SubscriptionTotal />
      </Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <Box sx={{}}>
          <Box>
            <Referral />
          </Box>
          <Box sx={{ pt: '20px' }}>
            <Orders />
          </Box>
        </Box>
      </Grid>
      {/* <Grid item xs={12} md={4}>
          <SubscriptionTotal />
        </Grid>
        <Grid item xs={12} md={8}>
          <Orders />
        </Grid> */}
    </Grid>
  </Box>
);

export default Subscription;
