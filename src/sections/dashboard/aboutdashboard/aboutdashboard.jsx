/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Box, Container, Typography } from '@mui/material';

const steps = [
  {
    description:
      'At Planora, our mission is to reinvent your culinary experience by offering you a complete meal plan every week along with easy and simple recipe ideas. We understand the challenges you face: mealtime monotony, lack of inspiration, desire to lose weight, or simply the need to save time.',
  },
  {
    description:
      'Imagine being freed from the monotony of repetitive dishes. With Planora, discover a variety of meals and recipes designed to delight your taste buds and simplify your daily life. No more hours spent searching for meal ideas or making grocery lists! Our intuitive platform allows you to browse, print, or download each recipe individually, or add your favorite dishes to your weekly meal plan.',
  },
  {
    description:
      'But wait, there is more! Our advanced search tool, equipped with customizable filters, enables you to quickly and easily find recipes that suit your needs. Planora is more than just a recipe platform; it is your ally for a fulfilling and stress-free culinary life. Let us guide you through this flavorful journey and simplify your daily routine with just one click!',
  },
];

const AboutDashboard = () => (
  <Container maxWidth="xl" sx={{ padding: '2rem' }}>
    <Box sx={{ pt: '20px' }}>
      {steps.map((step, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <Box>
            <Typography
              component="span"
              sx={{
                fontSize: '16px !important',
                fontWeight: '400',
                // lineHeight: '0.02 !important', // Reduced line height
              }}
              dangerouslySetInnerHTML={{ __html: step.description }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  </Container>
);

export default AboutDashboard;
