/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Box, Container, Typography } from '@mui/material';

const Referral = () => (
  <Container sx={{ pt: { xs: '40px', sm: '66px' } }}>
    <Box sx={{ pb: { xs: '20px', sm: '68px' } }}>
      <Typography variant="h1" textAlign="center">
        Referral
      </Typography>
    </Box>
    <Box>
      <Typography variant="body1" sx={{ textAlign: 'justify', pb: '10px' }}>
        In order to share our program with as many people as possible, feel free to talk about it
        with your friends and in return, you'll be rewarded!
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'justify', pb: '10px' }}>
        It's simple: for each person who subscribes through you, you'll receive 30 days free! To
        take advantage of this offer, new subscribers must enter your last name along with your
        email or phone number in the "Referral" section that will appear during their account
        creation.
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'justify', pb: '10px' }}>
        Once completed, 30 days will be added to your free days bank for each person you refer. This
        means that if you refer 12 people, you could have access to our entire site for free for a
        year!
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'justify', pb: '10px' }}>
        If you have already paid for the current month's subscription, the free days will be used
        when your monthly subscription renews. Your subscription will use all available days in your
        referral bank before charging you again.
      </Typography>
    </Box>
    <Typography
      sx={{
        fontSize: '40px !important',
        fontWeight: '400',
        textAlign: 'center',
        color: '#F79256',
        pt: '50px',
      }}
    >
      Talking to your friends... it's a win-win!
    </Typography>
  </Container>
);

export default Referral;
