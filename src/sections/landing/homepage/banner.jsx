import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography, IconButton } from '@mui/material';

import LoginDialog from '../../../components/landing/login'; // Adjust the path as necessary
import NewsletterPopup from '../../../components/newsletter';

const Banner = () => {
  const navigate = useNavigate();
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);

  const handleLoginOpen = () => setLoginDialogOpen(true);
  const handleLoginClose = () => setLoginDialogOpen(false);

  return (
    <Box
      sx={{
        backgroundColor: '#FDE9DD',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '30px',
        pt: { xs: '20px', sm: '40px', md: '72px' },
        pb: { xs: '40px', md: '72px' },
      }}
    >
      <Typography
        sx={{
          fontFamily: 'SecondaryFont',
          fontSize: { xs: '30px !important', sm: '50px !important', md: '90px !important' },
          fontWeight: '400 !important',
          letterSpacing: '10px !important',
          lineHeight: { xs: '30px !important', sm: '50px !important', md: '100px !important' },
        }}
      >
        Smart and Interactive <br /> Meal Planner & Recipe Repertoire
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '16px !important', sm: '24px !important', md: '30px !important' },
          fontWeight: '400 !important',
          px: { xs: '20px', sm: '50px', md: '150px' },
        }}
      >
        Plan your meals, discover simple and delicious recipes, and then get a personalized grocery
        list based on your needs.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <Button
          disableRipple
          variant="contained"
          sx={{
            borderRadius: '50px',
            color: 'black',
            px: { sm: '28px' },
            py: { sm: '12px' },
            fontSize: { sm: '18px' },
          }}
          onClick={() => navigate('/subscription')}
        >
          Subscribe
        </Button>
        <Button
          disableRipple
          variant="contained"
          sx={{
            borderRadius: '50px',
            color: 'black',
            px: { sm: '28px' },
            py: { sm: '12px' },
            fontSize: { sm: '18px' },
          }}
          onClick={handleLoginOpen}
        >
          Login
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <IconButton disableRipple color="primary">
          <img src="/assets/icons/facebook.svg" alt="facebook" />
        </IconButton>
        <IconButton disableRipple color="error">
          <img src="/assets/icons/pintress.svg" alt="pintrest" />
        </IconButton>
        <IconButton disableRipple color="secondary">
          <img src="/assets/icons/instagram.svg" alt="insta" />
        </IconButton>
      </Box>
      <LoginDialog
        open={isLoginDialogOpen}
        setLoginDialogOpen={setLoginDialogOpen}
        handleClose={handleLoginClose}
      />
      <NewsletterPopup />
    </Box>
  );
};

export default Banner;
