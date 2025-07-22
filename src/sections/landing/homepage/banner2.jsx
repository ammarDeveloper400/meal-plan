import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

const Banner2 = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: 'url(/assets/background/bannerbg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: { lg: '480px' },
      }}
    >
      <Box
        sx={{
          px: '20px',
          pt: { sm: '80px', xs: '50px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column',
          gap: { sm: '30px', xs: '20px' },
        }}
      >
        <Typography
          sx={{
            color: '#FFFFFF',
            fontWeight: '500',
            fontSize: { sm: '25px !important', xs: '15px !important' },
          }}
        >
          Are you stuck in a routine and often feel uninspired by your meal options?
        </Typography>
        <Typography
          sx={{
            color: '#FFFFFF',
            fontWeight: '500',
            fontSize: { sm: '25px !important', xs: '15px !important' },
          }}
        >
          Do you waste time and energy building a grocery list not knowing what to eat next? <br/> What
          about Saturday and Sunday? What about the leftovers? Did you forget something?
        </Typography>
        <Typography
          sx={{
            color: '#FFFFFF',
            fontWeight: '500',
            fontSize: { sm: '25px !important', xs: '15px !important' },
          }}
        >
          Planora takes care of you in a few easy steps!
        </Typography>
        <Typography sx={{ color: '#FAFAFA', fontSize: '18px !important' }}>
          Receive 30 free days for each person who subscribes because of you
        </Typography>
        <Box>
          <Button
            onClick={() => navigate('/subscription')}
            disableRipple
            variant="contained"
            sx={{
              fontWeight: '400',
              marginRight: '10px',
              fontSize: { xs: '13px', sm: '18px !important' },
              p: { sm: '20px' },
              display: 'flex',
              alignItems: 'center',
              gap: { xs: '5px', sm: '10px' },
            }}
          >
            Subscribe to discover our range of recipes
            <img
              src="/assets/icons/arrow.svg"
              alt="arrow"
              style={{
                marginLeft: '8px',
                transition: 'width 0.3s',
                height: 'auto',
              }}
              className="arrow-icon"
            />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'flex-end' },
          alignItems: 'center',
          gap: '10px',
          pr: { sm: 2 },
          pt: { sm: 2, md: '0px', xs: '20px' },
        }}
      >
        <Typography
          disableRipple
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#FFFFFF',
            borderColor: '#FFFFFF',
            fontSize: { xs: '12px', sm: '16px' },
            pb: { xs: '10px', sm: '0px' },
          }}
          onClick={() => navigate('/referral')}
        >
          Learn more about the referral program
          <img
            src="/assets/icons/arrow.svg"
            alt="arrow"
            style={{
              marginLeft: '8px',
              height: 'auto',
            }}
          />
        </Typography>
      </Box>
      <style>
        {`
        .arrow-icon:hover {
          width: 25px; // Width when hovered
        }
      `}
      </style>
    </Box>
  );
};

export default Banner2;
