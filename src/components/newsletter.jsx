/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';

import { styled } from '@mui/system';
import {
  Box,
  Dialog,
  Button,
  TextField,
  IconButton,
  Typography,
  DialogContent,
  InputAdornment,
} from '@mui/material';

import Iconify from './iconify';

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

const NewsletterPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          backgroundColor: '#FABE9A',
          borderRadius: '15px',
          textAlign: 'center',
          padding: '10px',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={handleClose} size="small">
          <Iconify
            style={{
              color: '#fff',
              backgroundColor: '#F79256',
              borderRadius: '50%',
              padding: '5px',
              width: '30px',
              height: '30px',
            }}
            icon="eva:close-fill"
          />
        </IconButton>
      </Box>
      <DialogContent sx={{  }}> 
        <Typography sx={{ fontSize: '50px !important', fontWeight: '700', color: '#fff', pb: "18px" }}>
          Get 20% Off
        </Typography>
        <Typography sx={{ fontSize: '16px !important', fontWeight: '600', color: '#fff', pb: "20px" }}>
          On your first purchase if you subscribe to our newsletter
        </Typography>
        <Box sx={{ marginTop: 3 }}>
          <Typography sx={{ fontSize: '20px !important', fontWeight: '600', color: '#fff' }}>
            Get started here!
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2, pb: 3 }}>
          <TextField
            placeholder="Email"
            variant="outlined"
            fullWidth
            sx={{
              width: {xs:'100%', sm:'60%'},
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fff',
                borderRadius: '50px 50px  50px 50px',
                paddingRight: 1,
              },
              '& .MuiInputBase-input': {
                padding: '20px 20px',
                color: '#000',
                fontSize: '16px !important',
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SubmitButton>
                    Submit
                  </SubmitButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
