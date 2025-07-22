/* eslint-disable react/prop-types */
import React from 'react';

import { Box, Typography } from '@mui/material';

const pageTitles = {
  '/account': 'Welcome',
  '/account/preference': 'My Account',
  '/account/my-subscription': 'My Account',
  '/account/account-detail': 'My Account',
  '/account/account-payment': 'My Account',
  '/meal': 'My meal plans',
  '/recipes/recipe-detail' : 'My recipes',
  '/meal/modify-calendar': 'My meal plans',
  '/meal/suggested-meal': 'My meal plans',
  '/meal/add-recipe' : 'My meal plans',
  '/meal/modify-meal': 'My meal plans',
  '/meal/modify-meal-plus': 'My meal plans',
  '/meal/replace-meal': 'My meal plans',
  '/meal/replace-meal-verification': 'My meal plans',
  '/meal/recipe-detail': 'My meal plans ',
  '/meal/add-meal': 'My meal plans',
  '/meal/meal-history-calendar': 'My meal plans',
  '/meal/meal-history': 'My meal plans',
  '/meal/my-meal-plan': 'My meal plans',
  '/recipes': 'My recipes',
  '/meal/favorite-meal': 'My meal plans',
  '/how-it-work': 'How does it work?',
  '/referral-work': 'How does the referral work?',
  '/submit-recipe': 'Submit a recipe idea',
  '/contact-dashboard': 'Contact us',
  '/privacy-policy': 'Privacy policy',
  '/terms-conditions': 'Terms & conditions',
  '/faq-dashboard': 'FAQ',
  '/account/card-detail': 'Recently added recipes',
};

const Searchbar = ({ pathName }) => {
  const title = pageTitles[pathName] || '';

  return (
    <Box>
      {pathName === '/account' ? (
        <Typography sx={{ color: '#F79256', fontSize: { xs: '20px !important', sm: '30px !important' } }}>
          Welcome <strong style={{ color: '#000' }}>Jeff</strong>
        </Typography>
      ) : (
        <Typography sx={{ color: '#000', fontSize: { xs: '20px !important', sm: '30px !important' }, fontWeight:'700 !important' }}>
          {title}
        </Typography>
      )}
    </Box>
  );
};

export default Searchbar;
