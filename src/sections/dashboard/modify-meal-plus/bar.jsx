import React, { useState } from 'react';

import { Box, Menu, Button, MenuItem, Typography } from '@mui/material';

import Iconify from '../../../components/iconify/iconify';


const Bar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sortOrder, setSortOrder] = useState('Sort 0rder');
  const handleSelect = (order) => {
    setSortOrder(order);
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', py: '50px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #000',
            py: '6px',
            px: '10px',
            borderRadius: '10px',
            width: 'max-content',
            cursor: 'pointer',
          }}
          //   onClick={() => navigate('/meal/favorite-meal')}
        >
          <Typography
            sx={{
              fontSize: { xs: '12px', sm: '14px' },
              fontWeight: '400',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            View my favorite recipes
            <Box
              sx={{
                backgroundColor: '#F79256',
                borderRadius: '5px',
                p: { xs: '1px', sm: '2px' },
                width: { xs: '20px', sm: '30px' },
              }}
            >
              <img style={{ cursor: 'pointer' }} src="/assets/icons/heart.svg" alt="arrow" />
            </Box>
          </Typography>
        </Box>
        <Button
          variant="contained"
          endIcon={<Iconify style={{ color: '#fff' }} icon="ep:arrow-down" />}
          sx={{
            color: '#fff',
            textTransform: 'none',
            borderRadius: '10px',
            height: '40px',
            px: 3,
            width: { xs: 'auto', sm: 'auto' }, // Full width on xs, auto on larger screens
          }}
          onClick={handleClick}
        >
          {sortOrder}
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} sx={{ mt: 1 }}>
          <MenuItem onClick={() => handleSelect('Ascending')}>Ascending</MenuItem>
          <MenuItem onClick={() => handleSelect('Descending')}>Descending</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Bar;
