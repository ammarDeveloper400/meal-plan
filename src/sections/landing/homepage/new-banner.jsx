import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid, Button, Typography } from '@mui/material';

import NewsletterPopup from '../../../components/newsletter';

const NewBanner = () => {
  const navigate = useNavigate();

  return (
  
    <Box
      sx={{
        bgcolor: '#F4F4F4',
        mt: '20px',
        borderRadius: '15px',
        padding: '20px',
        mx: { md: '70px', xs: '10px' },
      }}
    >
      <Grid container columnSpacing={9}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              sx={{
                fontSize: { md: '96px', xs: '40px' },
                fontWeight: 700,
                lineHeight: 1,
                m: 0,
                p: 0,
              }}
            >
              Planora
            </Typography>
            <Typography
              sx={{
                fontSize: { md: '24px', xs: '18px' },
                fontWeight: 300,
                ml: { md: '83px', xs: '0px' },
                lineHeight: 0.2,
              }}
            >
              A new meal planning era
            </Typography>
          </Box>

          <Box sx={{ mt: { md: '72px', xs: '20px' } }}>
            <Typography sx={{ fontSize: { md: '28px', xs: '18px' }, fontWeight: 800 }}>
              Busy people love saving time
              <br />
              Don’t know what to eat next? We got you!
            </Typography>
          </Box>

          <Box sx={{ mt: { md: '42px', xs: '15px' } }}>
            <Typography sx={{ fontSize: { md: '22px', xs: '18px' }, fontWeight: 400 }}>
              Plan your week & Get your grocery list in 5 min or less!
            </Typography>
          </Box>

          <Box sx={{ mt: { md: '37px', xs: '15px' } }}>
            <Typography>
              Effortless planning
              <br />
              Customizable meals
              <br />
              Simple and delicious recipe ideas
            </Typography>
          </Box>

          <Box sx={{ mt: { md: '289px', xs: '15px' } }}>
            <Typography sx={{ fontSize: { md: '18px', xs: '16px' }, fontWeight: 200 }}>
              Works best on PC and Tablet
            </Typography>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative'}}>
            {/* Main Image Box */}
            <Box
              sx={{
                backgroundImage: 'url(/assets/images/hello.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                minHeight: { md: '700px', xs: '500px' },
                position: 'relative',
                backgroundPosition:{md:'right',sm:'center',xs:'center'},
                pointerEvents: 'none',
              }}
            >
              {/* Floating Text Over Image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '15%',
                  right:{md:'10%',xs:'10%',sm:'30%'},
                  padding: '10px',
                  borderRadius: '8px',
                  zIndex: 2,
                }}
              >
                <Typography sx={{ fontSize: { md: '16px', xs: '12px' }, fontWeight: 400 }}>
                  Hi Jeff, here is your
                  <br />
                  Grocery list for <br /> 2024-12-23. Enjoy!
                </Typography>

                <Typography sx={{ fontSize: { md: '16px', xs: '12px' }, fontWeight: 400, mt: '10px' }}>
                  Fruits and Vegetables
                  <br />
                  - Cucumber, 2 pcs
                  <br />
                  - Carrots, 1
                  <br />
                  - Onion (small), 3
                </Typography>

                <Typography sx={{ fontSize: { md: '16px', xs: '12px' }, fontWeight: 400, mt: '10px' }}>
                  Dairy Products
                  <br />
                  - Milk 2%, 1
                  <br />
                  - Eggs, 12
                  <br />
                  - Yogurt, 2 cups
                </Typography>
              </Box>
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                display: 'flex',
                gap: '17px',
                flexWrap: 'wrap',
                // mt: { md: '20px', xs: '10px' },
                mr:{md:'10px',xs:'0px'},
                justifyContent: { md: 'flex-end', xs: 'center' },
                zIndex: 3,
              }}
            >
              <Button
                onClick={() => navigate('/lead-magnet')}
                variant="contained"
                sx={{
                  fontSize: { md: '20px', xs: '16px' },
                  fontWeight: 700,
                  px: { md: '30px', xs: '15px' },
                  py: { md: '20px', xs: '10px' },
                  borderRadius: '15px',
                  ':hover': { backgroundColor: '#F79256 !important' },
                }}
              >
                Try it for free
              </Button>

              <Button
                onClick={() => navigate('/subscription')}
                variant="contained"
                sx={{
                  fontSize: { md: '20px', xs: '16px' },
                  fontWeight: 700,
                  px: { md: '45px', xs: '15px' },
                  py: { md: '20px', xs: '10px' },
                  borderRadius: '15px',
                  ':hover': { backgroundColor: '#F79256 !important' },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <NewsletterPopup />
    </Box>
  );
};

export default NewBanner;
