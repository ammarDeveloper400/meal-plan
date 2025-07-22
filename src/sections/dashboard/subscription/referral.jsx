import React, { useRef, useState, useEffect } from 'react';

import { Box, Grid, Typography, IconButton } from '@mui/material';

const Referral = () => {
  const referralData = [
    {
      no: 'Client no:',
      name: 'Josianne Dupré',
      date: '2024-03-25',
    },
    {
      no: 'Client no:',
      name: 'Josianne Dupré',
      date: '2024-03-25',
    },
    {
      no: 'Client no:',
      name: 'Josianne Dupré',
      date: '2024-03-25',
    },
    {
      no: 'Client no:',
      name: 'Josianne Dupré',
      date: '2024-03-25',
    },
    {
      no: 'Client no:',
      name: 'Josianne Dupré',
      date: '2024-03-25',
    },
    {
      no: 'Client no:',
      name: 'Josianne Dupré',
      date: '2024-03-25',
    },
    {
      no: 'Client no:',
      name: 'Josianne Dupré',
      date: '2024-03-25',
    },
  ];

  const scrollRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollDown = () => {
    scrollRef.current.scrollBy({ top: 100, behavior: 'smooth' });
  };

  const handleScrollUp = () => {
    scrollRef.current.scrollBy({ top: -100, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (scrollRef.current.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#F9A878',
        borderRadius: '16px',
        p: 2,
        mx: 'auto',
        height: { sm: '230px', xs: '420px', md: '240px', lg: '220px' },
        position: 'relative',
      }}
    >
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <Typography sx={{ fontSize: '18px !important', fontWeight: '500' }}>Referral</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography sx={{ fontSize: {sm:'14px !important', xs:'12px !important'}, fontWeight: '400 !important' }}>
              Current balance of my referral bank
            </Typography>
            <Typography sx={{ fontWeight: '700 !important', fontSize: {sm:'14px !important', xs:'12px !important'} }}>
              90 days
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography sx={{ fontSize: {sm:'14px !important', xs:'12px !important'}, fontWeight: '400 !important' }}>
              Total number of referred days
            </Typography>
            <Typography sx={{ fontWeight: '700 !important', fontSize: {sm:'14px !important', xs:'12px !important'} }}>
              120 days
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography sx={{ fontSize: {sm:'14px !important', xs:'12px !important'}, fontWeight: '400 !important' }}>
              Used referred days
            </Typography>
            <Typography sx={{ fontWeight: '700 !important', fontSize: {sm:'14px !important', xs:'12px !important'} }}>
              30 days
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography sx={{ fontSize: {sm:'14px !important', xs:'12px !important'}, fontWeight: '400 !important'}}>
              Total number of referrals
            </Typography>
            <Typography sx={{ fontWeight: '700 !important', fontSize: {sm:'14px !important', xs:'12px !important'} }}>
              4 persons
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ height: '30px', borderLeft: { sm: '1px solid #000', xs: 'none' }, pl: { sm: 2, xs: 0 } }}>
            {/* Fixed Headers */}
            <Grid container>
              <Grid item xs={3}>
                <Typography sx={{ fontSize: '18px !important', fontWeight: '500' }}>No</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography sx={{ fontSize: '18px !important', fontWeight: '500' }}>Name</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: '18px !important', fontWeight: '500' }}>Date</Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Scrollable Content */}
          <Box
            sx={{
              position: 'relative',
              height: '160px',
              borderLeft: { sm: '1px solid #000', xs: 'none' },
              pl: { sm: 2, xs: 0 },
              overflow: 'hidden',
            }}
          >
            <Grid
              container
              sx={{
                height: '160px',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
              ref={scrollRef}
            >
              <Grid item xs={3}>
                {referralData.map((data, index) => (
                  <Typography key={index} sx={{ fontSize: '14px !important', fontWeight: '400 !important', mb: 2 }}>
                    {data.no}
                  </Typography>
                ))}
              </Grid>
              <Grid item xs={5}>
                {referralData.map((data, index) => (
                  <Typography key={index} sx={{ fontSize: '14px !important', fontWeight: '400 !important', mb: 2 }}>
                    {data.name}
                  </Typography>
                ))}
              </Grid>
              <Grid item xs={4}>
                {referralData.map((data, index) => (
                  <Typography key={index} sx={{ fontSize: '14px !important', fontWeight: '400 !important', mb: 2 }}>
                    {data.date}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Scroll buttons */}
      {isScrolled ? (
        <IconButton
          sx={{
            position: 'absolute',
            top: { sm: '85%', xs: '92%' },
            right: 10,
            transform: 'translateX(-350%)',
            zIndex: 10,
          }}
          onClick={handleScrollUp}
        >
          <img src="/assets/icons/arrowup.svg" alt="arrowup" />
        </IconButton>
      ) : (
        <IconButton
          sx={{
            position: 'absolute',
            top: { sm: '85%', xs: '92%' },
            right: 10,
            transform: 'translateX(-350%)',
            zIndex: 10,
          }}
          onClick={handleScrollDown}
        >
          <img src="/assets/icons/arrowdown.svg" alt="arrowdown" />
        </IconButton>
      )}
    </Box>
  );
};

export default Referral;
