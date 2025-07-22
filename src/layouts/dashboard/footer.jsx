import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Grid, Button, TextField, Typography } from '@mui/material';

import { getMuiColors } from 'src/utils/color';

import LoginDialog from '../../components/landing/login';
import RecipeDialog from '../../components/landing/submit-recipe-dialoge'; // Import SubscriptionDialog
import SubscriptionDialog from '../../components/landing/sucess';

function DashbordFooter() {
  const { secondaryColor } = getMuiColors();
  const location = useLocation();
  const navigate = useNavigate();
  const [openRecipeDialog, setOpenRecipeDialog] = useState(false);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [openSubscriptionDialog, setOpenSubscriptionDialog] = useState(false); // State for SubscriptionDialog

  const handleNavigate = (path) => {
    if (path === '/submit-recipe-idea') {
      setOpenRecipeDialog(true);
    } else if (path === '/login') {
      setOpenLoginDialog(true);
    } else if (location.pathname !== path) {
      navigate(path);
    }
  };

  const isActive = (path) => location.pathname === path;

  const handleCloseRecipeDialog = () => {
    setOpenRecipeDialog(false);
  };

  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
  };

  const handleSubscribe = () => {
    setOpenSubscriptionDialog(true); // Open SubscriptionDialog
  };

  const handleCloseSubscriptionDialog = () => {
    setOpenSubscriptionDialog(false); // Close SubscriptionDialog
  };

  const activeColor = '#F79256';

  return (
    <Box sx={{ backgroundColor: secondaryColor, color: '#fff', padding: '40px 10px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box sx={{ width: '266.638px', height: '80.945px', mb: 2 }}>
            <img
              src="/assets/footerlogo.svg"
              alt="Planora Logo"
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
          <Typography sx={{ fontSize: '14px', fontWeight: '400', opacity: '0.5', pl: 2 }}>
            All rights reserved
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} mr={1}>
          <Typography variant="h1" sx={{ pb: '16px' }}>
            Subscribe to our newsletter
          </Typography>
          <Box
            sx={{
              display: 'flex',
              backgroundColor: '#fff',
              borderRadius: '47px',
              px: '10px',
              py: '5px',
              width: {xs: '100%', sm:'80%'},
            }}
          >
            <TextField
              placeholder="Email"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                  '& input': {
                    padding: '8px 14px', 
                  },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                borderRadius: '47px',
                padding: '6px 30px',
              }}
              onClick={handleSubscribe}
            >
              Submit
            </Button>
          </Box>

          <Box sx={{ pt: '25px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <Box>
              <img
                style={{ cursor: 'pointer' }}
                src="/assets/icons/facebook.svg"
                alt="Facebook Icon"
              />
            </Box>
            <Box>
              <img
                style={{ cursor: 'pointer' }}
                src="/assets/icons/pintress.svg"
                alt="Pinterest Icon"
              />
            </Box>
            <Box>
              <img
                style={{ cursor: 'pointer' }}
                src="/assets/icons/instagram.svg"
                alt="Instagram Icon"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5.9}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Typography
                  sx={{
                    cursor: 'pointer',
                    color: isActive('/account-form') ? activeColor : 'inherit',
                  }}
                  onClick={() => handleNavigate('/')}
                >
                  Logout
                </Typography>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/login') ? activeColor : 'inherit' }}
                  onClick={() => handleNavigate('/how-it-work')}
                >
                  How does it work
                </Typography>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/referral') ? activeColor : 'inherit' }}
                  onClick={() => handleNavigate('/referral-work')}
                >
                  How does the referral work?
                </Typography>
                <Typography
                  sx={{
                    cursor: 'pointer',
                    color: isActive('/submit-recipe-idea') ? activeColor : 'inherit',
                  }}
                  onClick={() => handleNavigate('/submit-recipe')}
                >
                  Submit a recipe idea
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/contact') ? activeColor : 'inherit' }}
                  onClick={() => handleNavigate('/contact-dashboard')}
                >
                  Contact us
                </Typography>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/about') ? activeColor : 'inherit' }}
                  onClick={() => handleNavigate('/about-us')}
                >
                  About us
                </Typography>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/privacy') ? activeColor : 'inherit' }}
                  onClick={() => handleNavigate('/privacy-policy')}
                >
                  Privacy Policy
                </Typography>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/terms') ? activeColor : 'inherit' }}
                  onClick={() => handleNavigate('/terms-conditions')}
                >
                  Terms and conditions
                </Typography>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/faq') ? activeColor : 'inherit' }}
                  onClick={() => handleNavigate('/faq-dashboard')}
                >
                  FAQ
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <RecipeDialog open={openRecipeDialog} handleClose={handleCloseRecipeDialog} />
      <LoginDialog open={openLoginDialog} handleClose={handleCloseLoginDialog} />
      <SubscriptionDialog
        open={openSubscriptionDialog}
        handleClose={handleCloseSubscriptionDialog}
      />{' '}
      {/* Add SubscriptionDialog */}
    </Box>
  );
}

export default DashbordFooter;
