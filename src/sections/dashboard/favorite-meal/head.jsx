import React, { useState } from 'react';

import { Box, Menu, Button, MenuItem, TextField, Typography, InputAdornment } from '@mui/material';

import Iconify from '../../../components/iconify';

const Head = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortOrder, setSortOrder] = useState('Sort order');

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

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      pt={{ xs: '10px', sm: '20px'}}
      pb={{ xs: '20px', sm: '20px', lg: '30px' }}
    >
      <Typography
        fontWeight="bold"
        textAlign="left"
        sx={{ flex: 1, fontSize: { sm: '20px !important', xs: '18px' } }}
      >
        My favorite meal plans 
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        gap={2}
        flexDirection={{ sm: 'row' }}
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
              width: { xs: '100%', sm: 'auto' }, // Full width on xs, auto on larger screens
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
            width: { xs: 'auto', sm: 'auto' }, // Full width on xs, auto on larger screens
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

export default Head;
