/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Box, Container, Typography } from '@mui/material';
// import { Circle } from '@mui/icons-material'; // Use a custom dot component if needed

const steps = [
  {
    title: 'Step 1:',
    description:
      'To begin, go to the main menu page and click on the "My account" section, then select "Account details". Before proceeding, ensure you have correctly synchronized your email address and mobile phone number with your account using the verification option.',
  },
  {
    title: 'Step 2:',
    description:
      'Once Step 1 is completed, on the left side of the webpage, click on "My meal plans".',
  },
  {
    title: 'Step 3:',
    description:
      'Click on "Consult or modify the suggested meal plan for this week". You can view it in two different ways: a brief overview or detailed view. This is where meal planning begins!',
  },
  {
    title: 'Step 4:',
    description:
      'If your goal is to use the meal plan that we update every Thursday morning, click on "Download", "Print", "Send by email", or "Send by SMS". You will automatically receive a meal plan consisting of 3 meals and a snack for one person, along with a grocery list containing all the necessary ingredients for the week recipes.',
  },
  {
    title: 'Step 5:',
    description:
      'If you wish to modify the suggested meal plan, click on "Modify the plan". Three options will be available to you: "Replace the current plan with one of my previous plans", "Generate a meal plan randomly according to My Preferences", or modify your week manually, one meal at a time.',
  },
  {
    title: 'Step 5.1:',
    description:
      'If you want to use a previous plan, simply select this function and click on the "+" for the desired week. This old plan will become your plan for the week and you can modify it as you wish.',
  },
  {
    title: 'Step 5.2:',
    description:
      'If you want to generate a meal plan randomly according to your preferences, make sure you have entered your preferences in the "Saved Preferences" section located at the top of the page. These preferences can be modified at any time. Once your selected preferences are set, click on "Generate a new plan randomly". The meal plan will be tailored to your needs and preferences.',
  },
  {
    title: 'Step 5.3:',
    description:
      'To modify a meal plan (automatically generated or ours), simply click on the "+" icons to add a meal or day of meals to the week, or click on the pencil icon to modify meals. A meal can be modified randomly (arrows icon on the photo) or manually by searching for a recipe in our recipe bank.',
  },
  {
    title: 'Step 6:',
    description:
      'Subscribers can also choose which days of the week will be grouped together. A grouping means that the selected days will repeat. To do this, simply click on "Change the grouping of days".',
  },
  {
    title: 'Step 7:',
    description: 'Once the meal plan suits you, click on "Save".',
  },
];

const HowDoesItWork = () => (
  <Container maxWidth="xl" sx={{ padding: '2rem' }}>
    {/* <Typography gutterBottom sx={{fontSize: '18px !important', fontWeight: '500'}}>
      How does it work?
    </Typography> */}
    <Typography sx={{ fontSize: '14px !important', fontWeight: '400' }}>
      Subscribers have the option to browse recipes on the site simply by heading to the "My
      recipes" section of the site. However, the most sought-after and utilized function of the site
      is indeed creating a personalized meal plan to suit YOUR needs. Below is a guide to help you
      design YOUR weekly meal plan.
    </Typography>
    <Box sx={{ px: { md: '20px' }, pt: '20px' }}>
      {steps.map((step, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <Box>
            <li>
              <Typography
                component="span"
                sx={{ display: 'inline', fontSize: '16px !important', fontWeight: '600' }}
              >
                {step.title}{' '}
              </Typography>
              <Typography component="span" sx={{ fontSize: '14px !important', fontWeight: '400' }}>
                {step.description}
              </Typography>
            </li>
          </Box>
        </Box>
      ))}
    </Box>
  </Container>
);

export default HowDoesItWork;
