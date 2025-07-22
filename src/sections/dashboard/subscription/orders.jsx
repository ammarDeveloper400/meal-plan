import React, { useRef, useState, useEffect } from 'react';

import { Box, Grid, Typography, IconButton } from '@mui/material';

const Orders = () => {
  const orders = [
    { order: '#8763', date: '2024-01-12', paymentMethod: 'Credit card *******', total: '35,91$' },
    { order: '#8763', date: '2024-01-12', paymentMethod: 'Credit card *******', total: '35,91$' },
    { order: '#8763', date: '2024-01-12', paymentMethod: 'Credit card *******', total: '35,91$' },
    { order: '#8763', date: '2024-01-12', paymentMethod: 'Credit card *******', total: '35,91$' },
    { order: '#8763', date: '2024-01-12', paymentMethod: 'Credit card *******', total: '35,91$' },
    { order: '#8763', date: '2024-01-12', paymentMethod: 'Credit card *******', total: '35,91$' },
    { order: '#8763', date: '2024-01-12', paymentMethod: 'Credit card *******', total: '35,91$' },
    { order: '#8763', date: '2024-01-12', paymentMethod: 'Credit card *******', total: '35,91$' },
    { order: '#8763', date: '2024-01-12', paymentMethod: 'Credit card *******', total: '35,91$' },
    // Add more orders here...
  ];

  const scrollRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to scroll down
  const handleScrollDown = () => {
    scrollRef.current.scrollBy({ top: 100, behavior: 'smooth' });
  };

  // Function to scroll up
  const handleScrollUp = () => {
    scrollRef.current.scrollBy({ top: -100, behavior: 'smooth' });
  };

  // Check if the user has scrolled and update the arrow state
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current.scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const ref = scrollRef.current;
    ref.addEventListener('scroll', handleScroll);
    return () => ref.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#F9A878',
        padding: 2,
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      {/* Fixed Header Row */}
      <Grid container spacing={2} sx={{ borderBottom: '1px solid #ddd', paddingBottom: 1 }}>
        <Grid item xs={3}>
          <Typography sx={{ fontWeight: '500 !important', fontSize: '18px !important' }}>
            Orders
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{ fontWeight: '500 !important', fontSize: '18px !important' }}>
            Dates
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ fontWeight: '500 !important', fontSize: '18px !important' }}>
            Payment method
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ fontWeight: '500 !important', fontSize: '18px !important' }}>
            Total
          </Typography>
        </Grid>
      </Grid>

      {/* Scrollable Data Rows */}
      <Box
        sx={{
          height: { lg: '160px',md:'225px', xs:'200px' }, // Fixed height for scrolling
          overflowY: 'auto',
          scrollbarWidth: 'none', // for Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // for Chrome, Safari, and Opera
          },
        }}
        ref={scrollRef}
      >
        {orders.map((order, index) => (
          <Grid container spacing={2} key={index} sx={{ padding: 1 }}>
            <Grid item xs={3}>
              <Typography sx={{ fontWeight: '400 !important', fontSize: '14px !important' }}>
                {order.order}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography sx={{ fontWeight: '400 !important', fontSize: '14px !important' }}>
                {order.date}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: '400 !important', fontSize: '14px !important' }}>
                {order.paymentMethod}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography sx={{ fontWeight: '400 !important', fontSize: '14px !important' }}>
                {order.total}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>

      {/* Scroll buttons in a separate box below the table */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 1,
          height: '10px', // Adjust as needed
        }}
      >
        {isScrolled ? (
          <IconButton onClick={handleScrollUp}>
            <img src="/assets/icons/arrowup.svg" alt="arrowup" />
          </IconButton>
        ) : (
          <IconButton onClick={handleScrollDown}>
            <img src="/assets/icons/arrowdown.svg" alt="arrowdown" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Orders;
