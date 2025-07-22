/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

// import CloseIcon from '@mui/icons-material/Close';
import { Box, Grid, Dialog, Divider, Typography, IconButton, DialogContent } from '@mui/material';

import Iconify from '../../../components/iconify';

const ReferralPopup = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog  fullWidth maxWidth="md" open={open} onClose={handleClose}>
      <Box pt={3} textAlign="center" sx={{ backgroundColor: '#FABE9A', px: {sm:3} }}>
        <DialogContent sx={{px: {sm:3}, pb: 0}}>
          <Typography
            sx={{ color: '#FFF', fontSize: {sm:'30px !important', xs:'20px !important'}, fontWeight: '600 !important' }}
          >
            Referral can be rewarding. Spread the word about us to your friends!
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <Iconify icon="eva:close-fill" />
          </IconButton>
          <Grid container spacing={2} pt={6}>
            {/* First Grid - 30 free days */}
            <Grid item sm={5} xs={12} sx={{ position: 'relative' }}>
              <Typography
                gutterBottom
                sx={{ fontSize: {sm:'50px !important', xs:"30px !important"}, fontWeight: '600 !important', color: '#FFF' }}
              >
                30 free days
              </Typography>
              <Typography
                gutterBottom
                sx={{ fontSize: '25px !important', fontWeight: '400 !important', color: '#000' }}
              >
                For each person referred
              </Typography>
              <Box>
                <img src="/assets/images/dialogimg.svg" alt="dialog" />
              </Box>
            </Grid>

            {/* Vertical Divider */}
            <Grid item sm={1} xs={0}>
              <Divider orientation="vertical" sx={{ height: '80%', borderColor: '#272932' }} />
            </Grid>

            {/* Second Grid - Referral details */}
            <Grid item sm={6} xs={12}>
              <Typography
                gutterBottom
                sx={{ fontSize: '14px !important', fontWeight: '400 !important', color: '#000', textAlign: 'justify', px: '20px' }}
              >
                New subscribers must enter your name, phone number, or email address in the
                "Referral" section when creating their account.
                <Typography sx={{ fontSize: '14px !important', fontWeight: '400 !important', color: '#000', pt:'25px' }}>
                  The free days accumulate in your account and are used at the end of your current
                  subscription.
                </Typography>
                <Typography sx={{ fontSize: '14px !important', fontWeight: '400 !important', color: '#000', pt:'25px' }}>
                  30 additional days will be added for each person who subscribes because of you,
                  without any limit.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default ReferralPopup;
