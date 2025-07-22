import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

const AboutUs = () => (
  <Box>
    <Typography
      variant="h1"
      sx={{
        fontSize:{md:'40px !important', xs:'30px !important'},
        textAlign: { xs: 'center' },
        pt: { md: '40px', xs: '30px' },
        pb: { sm: '0px', xs: '30px' },
      }}
    >
      About us
    </Typography>
    <Grid container spacing={4} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={12} sx={{ mt: { md: '50px', xs: '0px' } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" paragraph sx={{ width: { sm: '680px', xs: '350px' } }}>
            At Planora, our mission is to reinvent your culinary experience by offering you a
            complete meal plan every week along with easy and simple recipe ideas. We understand the
            challenges you face: mealtime monotony, lack of inspiration, desire to lose weight, or
            simply the need to save time.
          </Typography>
          <Typography variant="h5" paragraph sx={{ width: { sm: '680px', xs: '350px' } }}>
            Imagine being freed from the monotony of repetitive dishes. With Planora, discover a
            variety of meals and recipes designed to delight your taste buds and simplify your daily
            life. No more hours spent searching for meal ideas or making grocery lists! Our
            intuitive platform allows you to browse, print, or download each recipe individually, or
            add your favorite dishes to your weekly meal plan.
          </Typography>
          <Typography variant="h5" paragraph sx={{ width: { sm: '680px', xs: '350px' } }}>
            But wait, there is more! Our advanced search tool, equipped with customizable filters,
            enables you to quickly and easily find recipes that suit your needs. Planora is more
            than just a recipe platform; it is your ally for a fulfilling and stress-free culinary
            life. Let us guide you through this flavorful journey and simplify your daily routine
            with just one click!
          </Typography>
        </Box>
      </Grid>

      {/* Image Section */}
      {/* <Grid item xs={12} md={4}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: '80px' }}>
          <img
            src="/assets/images/about.svg"
            alt="about"
            style={{ height: '100%', width: '100%', borderRadius: '10px' }}
          />
        </Box>
      </Grid> */}
    </Grid>
  </Box>
);

export default AboutUs;
