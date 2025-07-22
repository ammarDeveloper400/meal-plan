/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Box, Card, Button, Typography, CardContent } from '@mui/material';

export default function Subscription() {
  return (
    <Box overflow="hidden">
      {/* <Box position="relative" sx={{ display: { xs: 'none', lg: 'block' } }}>
        <Typography position="absolute" right="-120px" width="345px" height="345px">
          <img src="/assets/images/dish.svg" alt="dish" />
        </Typography>
        <Typography position="absolute" top="490px" left="-120px" width="345px" height="345px">
          <img src="/assets/images/dish2.svg" alt="dish2" />
        </Typography>
      </Box> */}
      <Box textAlign="center" mt={5}>
        <Typography
          gutterBottom
          color="primary"
          sx={{
            mx:'7px',
            fontWeight: '700 !important',
            fontSize: { md: '50px !important', xs: '28px !important', sm: '40px !important' },
          }}
        >
          Start your subscription today
        </Typography>

        <Box display="flex" justifyContent="center" mt={3}>
          <Card sx={{ pt: 1, backgroundColor: '#FDE9DD', width: { sm: '664px', xs: '350px' } }}>
            <CardContent>
              <Typography sx={{ fontSize: '20px !important', textAlign: 'center' }}>
                Monthly subscription
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  mt: 2,
                  pb: '10px',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: '700 !important',
                    fontSize: {
                      md: '50px !important',
                      xs: '30px !important',
                      sm: '40px !important',
                    },
                  }}
                >
                  29,99$
                </Typography>
                <Typography
                  variant="caption"
                  component="span"
                  sx={{ alignSelf: 'top', ml: '5px', fontWeight: 500 }}
                >
                  +Taxes
                </Typography>
              </Box>
              <Typography sx={{ mb: 1, fontSize: '20px !important', textAlign: 'center' }}>
                Every month
              </Typography>
              <Typography sx={{ mb: 1, fontSize: '20px !important', textAlign: 'center' }}>
                Standard package
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                <Typography sx={{ fontSize: '16px !important' }}>
                  <img src="/assets/icons/secure.svg" alt="secure" /> Secure Payments
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: '20px !important',
                  fontWeight: '400 !important',
                  px: { sm: '120px', xs: '80px' },
                  borderRadius: '15px',
                }}
              >
                Subscribe
              </Button>
            </CardContent>
          </Card>
        </Box>

        {/* Aligning the box with subscription details */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 3,
            width: { sm: '664px', xs: '350px' },
            margin: '0 auto',
          }}
        >
          <Box display="flex" alignItems="flex-start" sx={{ mb: 1, pt: 5 }}>
            <img
              src="/assets/icons/tickicon.svg"
              style={{ marginRight: '8px', flexShrink: 0 }}
              alt="Tick icon"
            />
            <Typography
              sx={{
                fontSize: '18px !important',
                fontWeight: '400 !important',
                lineHeight: '1.2', // Adjust line height to fine-tune alignment
              }}
            >
              Unlimited access to all our meal plans, features, and exclusive recipes.
            </Typography>
          </Box>

          <Box display="flex" alignItems="flex-start" sx={{ mb: 1 }}>
            <img
              src="/assets/icons/tickicon.svg"
              style={{ marginRight: '8px', flexShrink: 0 }}
              alt="Tick icon"
            />
            <Typography
              sx={{
                fontSize: '18px !important',
                fontWeight: '400 !important',
                lineHeight: '1.2', // Adjust line height to fine-tune alignment
              }}
            >
              Secure and recurring monthly payment until canceled.
            </Typography>
          </Box>

          <Box display="flex" alignItems="flex-start">
            <img
              src="/assets/icons/tickicon.svg"
              style={{ marginRight: '8px', flexShrink: 0 }}
              alt="Tick icon"
            />
            <Typography
              sx={{
                fontSize: '18px !important',
                fontWeight: '400 !important',
                lineHeight: '1.2', // Adjust line height to fine-tune alignment
              }}
            >
              Cancel your subscription anytime.
            </Typography>
          </Box>
        </Box>

        <Box mt={3} pb="190px">
          <Typography variant="h6">Supported by</Typography>
          <Box display="flex" alignItems="center" justifyContent="center" gap="33px" pt="19px">
            <Typography>
              <img src="/assets/icons/visa.svg" style={{ mx: 1 }} />
            </Typography>
            <Typography>
              <img src="/assets/icons/mastercard.svg" style={{ mx: 1 }} />
            </Typography>
            <Typography>
              <img src="/assets/icons/paypal.svg" style={{ mx: 1 }} />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
