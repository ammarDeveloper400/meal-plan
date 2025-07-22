/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Box, Menu, Button, MenuItem, TextField, Typography, InputAdornment } from '@mui/material';

import Iconify from '../../../components/iconify';

const Bar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortOrder, setSortOrder] = useState('Sort order');
  const [isLiked, setIsLiked] = useState(true);  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (order) => {
    setSortOrder(order);
    handleClose();
  };

  // const handleLikeClick = () => {
  //   setIsLiked(!isLiked);
  // };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      pt={{ xs: '16px', sm: '24px', md: '30px', lg: '40px' }}
      pb={{ xs: '16px', sm: '20px', md: '24px', lg: '30px' }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexDirection:{ xs: 'column', sm: 'row'} }}>
        <Typography
          fontWeight="bold"
          textAlign="left"
          sx={{ flex: 1, fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '22px' } }}
        >
          History of my saved meal plans
        </Typography>
        <Box
          sx={{
            border: '1px solid #F79256',
            borderRadius: '10px',
            px: { xs: 1, sm: 2 },
            py: { xs: 0.5, sm: 1 },
          }}
        >
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: { xs: '12px', sm: '14px', md: '16px' },
              fontWeight: '400',
              cursor: 'pointer',
            }}
            // onClick={handleLikeClick}
          >
            View my favorite meal plans{' '}
            <Iconify icon={isLiked ? 'twemoji:red-heart' : 'ph:heart-light'} />
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        gap={2}
        flexDirection={{ xs: 'column', sm: 'row' }}
        mt={{ xs: 1, sm: 0 }}
      >
        <TextField
          variant="outlined"
          placeholder="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Iconify style={{ color: '#F79256' }} icon="octicon:search-24" />
              </InputAdornment>
            ),
            sx: {
              borderRadius: '10px',
              height: '40px',
              width: { xs: '100%', sm: 'auto' },
            },
          }}
        />
        <Button
          variant="contained"
          endIcon={<Iconify style={{ color: '#fff' }} icon="ep:arrow-down" />}
          sx={{
            color: '#fff',
            textTransform: 'none',
            borderRadius: '10px',
            height: '40px',
            px: 3,
            width: { xs: '100%', sm: 'auto' },
          }}
          onClick={handleClick}
        >
          {sortOrder}
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} sx={{ mt: 1 }}>
          <MenuItem onClick={() => handleSelect('Most recent meal plans')}>Most recent meal plans</MenuItem>
          <MenuItem onClick={() => handleSelect('Older meal plans')}>Older meal plans</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Bar;
