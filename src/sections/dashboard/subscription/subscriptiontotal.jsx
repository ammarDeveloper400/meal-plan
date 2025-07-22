import React from 'react';

import { Box, Grid, Divider, Tooltip, Typography } from '@mui/material';

const SubscriptionTotal = () => (
  <Box sx={{ backgroundColor: '#F9A878', borderRadius: '16px', p: 2, height: '200px' }}>
    <Typography gutterBottom sx={{ fontSize: '18px !important', fontWeight: '500 !important' }}>
      Subscription total
    </Typography>
    <Grid container alignItems="center">
      <Grid item xs={5} sm={5} md={5}>
        <Typography sx={{ fontSize: '14px !important', fontWeight: '400 !important', mb: 1 }}>
          Product
        </Typography>
        <Typography sx={{ fontSize: '14px !important', fontWeight: '400 !important', mb: 1 }}>
          My subscription: standard x 1
        </Typography>
        <Typography sx={{ fontSize: '14px !important', fontWeight: '400 !important', mb: 1 }}>
          Type: Standard
        </Typography>
        <Typography sx={{ fontSize: '14px !important', fontWeight: '400 !important', mb: 1 }}>
          Length: 30 days
        </Typography>
      </Grid>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ mx: 2, borderColor: '#000' }} // Set the divider color to black or your preferred color
      />
      <Grid item xs={5} sm={6} md={5}>
        <Typography sx={{ fontSize: '14px !important', fontWeight: '400 !important', mb: 1 }}>
          Total: 29,99$ + taxes
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px !important',
            fontWeight: '400 !important',
            mb: 1,
          }}
        >
          Discount code: No{' '}
          <Box component="span" sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
            <Tooltip
              title="If you want to enter a promotional code, go to the 'Payment Method' section."
              arrow
              placement="right"
              sx={{
                backgroundColor: '#fff',
                color: '#000',
                boxShadow: 3, // to add slight shadow
                '& .MuiTooltip-arrow': {
                  color: '#fff', // Match arrow color with the tooltip background
                },
              }}
              PopperProps={{
                modifiers: [
                  {
                    name: 'arrow',
                    options: {
                      placement: 'bottom-start',
                    },
                  },
                ],
              }}
            >
              <img src="/assets/icons/questionmark1.svg" alt="calories" />
            </Tooltip>
          </Box>
        </Typography>

        <Typography sx={{ fontSize: '14px !important', fontWeight: '400 !important', mb: 1 }}>
          Total with taxes: 35,91$
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

export default SubscriptionTotal;
