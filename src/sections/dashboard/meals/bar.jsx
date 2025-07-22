import React, { useState } from 'react';

import { Box, Menu, Button, MenuItem, TextField, Typography, InputAdornment } from '@mui/material';

import Iconify from '../../../components/iconify';

const Bar = () => {
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
    >
      <Typography
        pt={{ xs: '20px', sm: '30px', lg: '40px' }}
        pb={{ xs: '0px', sm: '20px', lg: '15px' }}
        fontWeight="600 !important"
        textAlign="left"
        sx={{ flex: 1, fontSize: { sm: '20px !important', xs: '18px' } }}
      >
        History of my saved meal plans
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        gap={2}
        flexDirection={{ sm: 'row' }}
        mt={{ xs: 1, sm: 0 }}
        pb={{ xs: 2, sm: 0 }}
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
          <MenuItem onClick={() => handleSelect('Most recent meal plans')}>
            Most recent meal plans
          </MenuItem>
          <MenuItem onClick={() => handleSelect('Older meal plans')}>Older meal plans</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Bar;
