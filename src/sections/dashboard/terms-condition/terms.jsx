/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';

import { Box, Container, Typography } from '@mui/material';

const sections = [
  {
    title: "Welcome to the Planora.ca website.",
    content: `Please read these terms before using or submitting any content in any form or by any means
    for publication on Planora.ca. By continuing to use us or submit content or comments for
    publication on this site, you consent to abide by and be bound by these terms. We reserve
    the right to modify these terms at any time, and you consent (including by continuing to use
    our site) to be bound by such modifications. You should check these terms and conditions
    periodically to stay informed of any additions or modifications.`,
  },
  {
    title: "IF YOU DO NOT WISH TO BE BOUND BY THIS AGREEMENT, DO NOT BROWSE PLANORA.CA.",
    content: `No form of account sharing will be tolerated. If you engage in collusion practices or share
    recipes with non-member users, your account will be automatically banned. In such a case,
    you will lose access to your saved favorite recipes and meal plans.
    All rights are reserved to Planora Inc. Reproduction or recreation of this site in any
    manner is strictly prohibited.`,
  },
  {
    title: "General Subscription and Use Terms:",
    content: `By accessing and using this website, you agree to the following general subscription and use
    terms. Please read them carefully before proceeding.`,
  },
  {
    title: "Subscription:",
    content: `By subscribing to our subscription service, you agree to pay the agreed amount each month to
    access our library of exclusive, downloadable recipes. Subscriptions automatically renew
    each month unless you choose to cancel your subscription before the renewal date.`,
  },
  {
    title: "Use of Content:",
    content: `The content available on this site is intended for personal use only. You are not authorized
    to reproduce, distribute, or sell downloaded recipes without prior permission. You are
    responsible for the security of your account and login information. Any misuse or
    unauthorized use of your account must be reported immediately to our team.`,
  },
  {
    title: "Intellectual Property:",
    content: `All intellectual property rights related to the site's content, including recipes, images,
    and videos, belong to Planora Inc. No license or right is granted implicitly or otherwise in
    relation to this content.`,
  },
  {
    title: "Modification of Terms:",
    content: `Planora Inc. reserves the right to modify these Terms and Conditions at any time. The
    modifications will take effect upon publication on the site. It is your responsibility to
    regularly check this page for updates.`,
  },
  {
    title: "Privacy Policy:",
    content: `Please refer to our Privacy Policy to understand how we collect, use, and protect your personal data.
    By using this site, you acknowledge that you have read, understood, and agreed to these
    terms and conditions. If you have any questions or concerns, please Contact Us at
    info@planora.ca or through our Contact Us section.
    At any time, the user may choose to express and modify their preferences regarding cookies.`,
    links: [
      { text: "Privacy Policy", to: "/privacy-policy" },
      { text: "Contact Us", to: "/contact" },
    ],
  },
];

const TermsCondition = () => (
  <Container sx={{ p:'2rem' }}>
    {sections.map((section, index) => (
      <Box key={index}>
        <Typography sx={{ pb: '10px', fontSize: '20px !important', fontWeight: '500 !important' }}>
          {section.title}
        </Typography>
        <Typography sx={{ pb: '30px', textAlign: 'justify', fontSize: '16px !important' }}>
          {section.content}
          {section.links &&
            section.links.map((link, linkIndex) => (
              <React.Fragment key={linkIndex}>
                <Link
                  component={RouterLink}
                  to={link.to}
                  sx={{ textDecoration: 'underline' }}
                >
                  {link.text}
                </Link>{' '}
              </React.Fragment>
            ))}
        </Typography>
      </Box>
    ))}
  </Container>
);

export default TermsCondition;
