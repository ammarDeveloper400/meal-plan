/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Box, Container, Typography } from '@mui/material';

const steps = [
  {
    description:
      'In order to share our program with as many people as possible, feel free to talk about it with your friends and in return, you will be rewarded!',
  },
  {
    description:
      'It is simple: for each person who subscribes through you, you will receive 30 days free!<br/> To take advantage of this offer, new subscribers must enter your last name, your last name along with your email or phone number in the "Referral" section that will appear during their account creation.',
  },
  {
    description:
      'Once completed, 30 days will be added to your free days bank for each person you refer. This means that if you refer 12 people, you could have access to our entire site for free for a year!',
  },
  {
    description:
      'If you have already paid for the current month subscription, the free days will be used when your monthly subscription renews. Your subscription will use all available days in your referral bank before charging you again.If your goal is to use the meal plan that we update every Thursday morning, click on "Download", "Print", "Send by email", or "Send by SMS". You will automatically receive a meal plan consisting of 3 meals and a snack for one person, along with a grocery list containing all the necessary ingredients for the week recipes.',
  },
];

const ReferralWork = () => (
  <Container maxWidth="xl" sx={{ padding: '2rem' }}>
    {/* <Typography gutterBottom sx={{ fontSize: '18px !important', fontWeight: '500' }}>
      How does the referral work?
    </Typography> */}
    <Box>
      {steps.map((step, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <Box>
            <Typography
              component="span"
              sx={{
                fontSize: '14px !important',
                fontWeight: '400',
                // lineHeight: '0.02 !important', // Reduced line height
              }}
              dangerouslySetInnerHTML={{ __html: step.description }}
            />
          </Box>
        </Box>
      ))}
    </Box>
    <Typography
      sx={{
        fontSize: { sm: '40px !important', xs: '30px !important' },
        fontWeight: '400',
        color: '#F79256',
        display: 'block',
        textAlign: 'center',
        pt: '30px',
      }}
    >
      Talking to your friends... it's a win-win!
    </Typography>
  </Container>
);

export default ReferralWork;
