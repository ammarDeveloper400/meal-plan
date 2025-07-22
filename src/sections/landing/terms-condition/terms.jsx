/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';

import { Box, Container, Typography } from '@mui/material';

const TermsCondition = () => (
  <Container sx={{ pt: { xs: '40px', sm: '66px' } }}>
    <Box sx={{ pb: { xs: '20px', sm: '68px' } }}>
      <Typography variant="h1" textAlign="center">
        Terms and conditions
      </Typography>
    </Box>
    <Box>
      <Typography variant="h4" sx={{ pb: '10px' }}>
        Welcome to the Planora.ca website.
      </Typography>
      <Typography variant="body1" sx={{ pb: '30px', textAlign: 'justify' }}>
        Please read these terms before using or submitting any content in any form or by any means
        for publication on Planora.ca. By continuing to use us or submit content or comments for
        publication on this site, you consent to abide by and be bound by these terms. We reserve
        the right to modify these terms at any time, and you consent (including by continuing to use
        our site) to be bound by such modifications. You should check these terms and conditions
        periodically to stay informed of any additions or modifications.
      </Typography>
    </Box>
    <Box>
      <Typography variant="h4" sx={{ pb: '10px' }}>
        IF YOU DO NOT WISH TO BE BOUND BY THIS AGREEMENT, DO NOT BROWSE PLANORA.CA.
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'justify' }}>
        No form of account sharing will be tolerated. If you engage in collusion practices or share
        recipes with non-member users, your account will be automatically banned. In such a case,
        you will lose access to your saved favorite recipes and meal plans.
        <Typography variant="body1" sx={{ pt: '20px', pb: '30px', textAlign: 'justify' }}>
          All rights are reserved to Planora Inc. Reproduction or recreation of this site in any
          manner is strictly prohibited.
        </Typography>
      </Typography>
    </Box>
    <Box>
      <Typography variant="h4" sx={{ pb: '10px' }}>
        General Subscription and Use Terms:
      </Typography>
      <Typography variant="body1" sx={{ pb: '30px', textAlign: 'justify' }}>
        By accessing and using this website, you agree to the following general subscription and use
        terms. Please read them carefully before proceeding.
      </Typography>
    </Box>
    <Box>
      <Typography variant="h4" sx={{ pb: '10px' }}>
        Subscription:
      </Typography>
      <Typography variant="body1" sx={{ pb: '30px', textAlign: 'justify' }}>
        By subscribing to our subscription service, you agree to pay the agreed amount each month to
        access our library of exclusive, downloadable recipes. Subscriptions automatically renew
        each month unless you choose to cancel your subscription before the renewal date.
      </Typography>
    </Box>

    <Box>
      <Typography variant="h4" sx={{ pb: '10px' }}>
        Use of Content:
      </Typography>
      <Typography variant="body1" sx={{ pb: '30px', textAlign: 'justify' }}>
        The content available on this site is intended for personal use only. You are not authorized
        to reproduce, distribute, or sell downloaded recipes without prior permission. You are
        responsible for the security of your account and login information. Any misuse or
        unauthorized use of your account must be reported immediately to our team.
      </Typography>
    </Box>
    <Box>
      <Typography variant="h4" sx={{ pb: '10px' }}>
        Intellectual Property:
      </Typography>
      <Typography variant="body1" sx={{ pb: '30px', textAlign: 'justify' }}>
        All intellectual property rights related to the site's content, including recipes, images,
        and videos, belong to Planora Inc. No license or right is granted implicitly or otherwise in
        relation to this content.
      </Typography>
    </Box>
    <Box>
      <Typography variant="h4" sx={{ pb: '10px' }}>
        Modification of Terms:
      </Typography>
      <Typography variant="body1" sx={{ pb: '30px', textAlign: 'justify' }}>
        Planora Inc. reserves the right to modify these Terms and Conditions at any time. The
        modifications will take effect upon publication on the site. It is your responsibility to
        regularly check this page for updates.
      </Typography>
    </Box>
    <Box sx={{pb: {xs:'100px',md:'200px'},}}>
      <Typography variant="h4" sx={{ pb: '10px' }}>
        Privacy Policy:
      </Typography>
      <Typography variant="body1" sx={{  textAlign: 'justify' }}>
        Please refer to our{' '}
        <Link component={RouterLink} to="/privacy-policy" sx={{ textDecoration: 'underline' }}>
          Privacy Policy
        </Link>{' '}
        to understand how we collect, use, and protect your personal data.
        <Typography variant="body1" pt={1}>
          By using this site, you acknowledge that you have read, understood, and agreed to these
          terms and conditions. If you have any questions or concerns, please Contact Us at
          info@planora.ca or through our{' '}
          <Link component={RouterLink} to="/contact" sx={{ textDecoration: 'underline' }}>
            Contact Us
          </Link>{' '}
          section.
        </Typography>
        <Typography variant="body1" pt={1}>
          At any time, the user may choose to express and modify their preferences regarding
          cookies.
        </Typography>
      </Typography>
    </Box>
  </Container>
);

export default TermsCondition;
