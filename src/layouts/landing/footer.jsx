import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Box,
  Grid,
  Button,
  styled,
  Divider,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';

import { getMuiColors } from 'src/utils/color';

import LoginDialog from '../../components/landing/login';
import RecipeDialog from '../../components/landing/submit-recipe-dialoge'; // Import SubscriptionDialog
import SubscriptionDialog from '../../components/landing/sucess';

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px 50px 50px 50px',
  padding: '10px 20px',
  backgroundColor: '#F79256',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: '#F67B34',
  },
}));

function Footer() {
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);

  const handleLoginOpen = () => setLoginDialogOpen(true);
  const handleLoginClose = () => setLoginDialogOpen(false);
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
    <Box sx={{ backgroundColor: secondaryColor, color: '#fff',px:'10px', pt: '40px '}}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={3.5}>
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box>
              <Box
                sx={{ width: '345px', height: '123px', mb: 2, cursor: 'pointer' }}
                onClick={() => navigate('/')}
              >
                <img
                  src="/assets/footerlogo.svg"
                  alt="Planora Logo"
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
              <Typography sx={{ fontSize: '16px', fontWeight: '400', pl: 3 }}>
                All rights reserved
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Divider
                sx={{ color: '#fff', mx: 2, width: '1px', height: '250px', bgcolor: 'white' }}
                orientation="vertical"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h1" sx={{ pb: '16px' }}>
              Subscribe to our newsletter
            </Typography>
            <Box
              sx={{
                marginTop: 2,
                pb: 3,
                // pr: 8,
                width: { xs: '100%', sm: '100%' },
              }}
            >
              <TextField
                placeholder="Email"
                variant="outlined"
                fullWidth
                sx={{
                  width: { xs: '100%', sm: '100%' },
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    borderRadius: '50px 50px  50px 50px',
                    paddingRight: 1,
                  },
                  '& .MuiInputBase-input': {
                    // padding: '20px 20px',
                    color: '#00000',
                    fontSize: '14px !important',
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SubmitButton onClick={handleSubscribe}>Submit</SubmitButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              pt: '25px',
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box>
              <img
                style={{ cursor: 'pointer' }}
                src="/assets/icons/facebook.svg"
                alt="Facebook Icon"
              />
            </Box>
            {/* <Box>
              <img
                style={{ cursor: 'pointer' }}
                src="/assets/icons/pintress.svg"
                alt="Pinterest Icon"
              />
            </Box> */}
            <Box>
              <img
                style={{ cursor: 'pointer' }}
                src="/assets/icons/instagram.svg"
                alt="Instagram Icon"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Typography
                  sx={{
                    cursor: 'pointer',
                    color: isActive('/account-form') ? activeColor : 'inherit',
                  }}
                  onClick={() => handleNavigate('/account-form')}
                >
                  Become a member
                </Typography>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/login') ? activeColor : 'inherit' }}
                  onClick={handleLoginOpen}
                >
                  Already a member? Login
                </Typography>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/referral') ? activeColor : 'inherit' }}
                  onClick={() => handleNavigate('/referral')}
                >
                  Referral
                </Typography>
                <Typography
                  sx={{
                    cursor: 'pointer',
                    color: isActive('/submit-recipe-idea') ? activeColor : 'inherit',
                  }}
                  onClick={() => handleNavigate('/submit-recipe-idea')}
                >
                  Submit a recipe idea
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/contact') ? activeColor : 'inherit' }}
                  onClick={() => handleNavigate('/contact')}
                >
                  Contact us
                </Typography>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/about') ? activeColor : 'inherit' }}
                  onClick={() => handleNavigate('/about')}
                >
                  About us
                </Typography>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/privacy') ? activeColor : 'inherit' }}
                  onClick={() => handleNavigate('/privacy')}
                >
                  Privacy Policy
                </Typography>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/terms') ? activeColor : 'inherit' }}
                  onClick={() => handleNavigate('/terms')}
                >
                  Terms and conditions
                </Typography>
                <Typography
                  sx={{ cursor: 'pointer', color: isActive('/faq') ? activeColor : 'inherit' }}
                  onClick={() => handleNavigate('/faq')}
                >
                  FAQ
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: '#fff', height: 1, mt: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <Typography variant="body2">
          Designed and Developed by{' '}
          <a
            style={{ textDecoration: 'none' }}
            href="https://code-xperts.com/"
            target="_blank"
            title="Code Xperts - Quality Conscious Developers"
            rel="noopener noreferrer"
          >
            <Typography component="span" sx={{ color: 'primary.main', textDecoration: 'none' }}>
              Code Xperts
            </Typography>
          </a>
        </Typography>
      </Box>
      <RecipeDialog open={openRecipeDialog} handleClose={handleCloseRecipeDialog} />
      <LoginDialog open={openLoginDialog} handleClose={handleCloseLoginDialog} />
      <SubscriptionDialog
        open={openSubscriptionDialog}
        handleClose={handleCloseSubscriptionDialog}
      />{' '}
      {/* Add SubscriptionDialog */}
      <LoginDialog
        open={isLoginDialogOpen}
        setLoginDialogOpen={setLoginDialogOpen}
        handleClose={handleLoginClose}
      />
    </Box>
  );
}

export default Footer;
