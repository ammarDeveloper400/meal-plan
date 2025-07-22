import React from 'react';

import { Box, TextField, IconButton, Typography, InputAdornment } from '@mui/material';

import Iconify from '../../../../components/iconify/iconify';

const PromoCodeInput = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#FF8C42',
      borderRadius: '15px',
      py: { xs: '10px', sm: '15px' }, // Adjust padding for different screen sizes
      px: { xs: '10px', sm: '20px' }, // Adjust padding for different screen sizes
      width: { xs: '100%', sm: '530px' }, // Full width on xs, auto width on sm and up
    }}
  >
    <Typography
      sx={{
        color: 'white',
        marginRight: { xs: '5px', sm: '10px' },
        fontSize: { xs: '14px', sm: '16px' },
      }} // Adjust margin and font size
    >
      Promo code
    </Typography>
    <TextField
      variant="outlined"
      sx={{ flexGrow: 1, maxWidth: { xs: '100%', sm: '390px' }, width: { xs: '100%', sm: 'auto' } }} // Full width on xs, max width on sm and up
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disableRipple
              sx={{ backgroundColor: '#FF8C42', ":hover": { backgroundColor: '#FF8C42' }, height: '30px', width: '30px' }}
              edge="end"
            >
              <Iconify icon="eva:checkmark-fill" sx={{ color: '#fff' }} />
            </IconButton>
          </InputAdornment>
        ),
        sx: {
          borderRadius: '15px',
          backgroundColor: '#fff',
          color: '#000',
          paddingLeft: '15px',
          height: '40px',
          pr: '25px',
        },
      }}
      InputLabelProps={{
        sx: { color: 'white' },
      }}
    />
  </Box>
);

export default PromoCodeInput;
