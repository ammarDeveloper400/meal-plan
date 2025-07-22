/* eslint-disable react/prop-types */
// CancelSubscriptionDialog.js
import React, { useState } from 'react';

import { Box, Dialog, Button, MenuItem, TextField, Typography, DialogContent } from '@mui/material';

const CancelSubscriptionDialog = ({ open, handleClose }) => {
  const [reason, setReason] = useState('');
  const [comment, setComment] = useState('');

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogContent sx={{ p: {sm:'30px', xs: '15px'} }}>
        <Typography sx={{ fontSize: '16px !important', fontWeight: '400' }}>Why do you want to cancel your subscription?</Typography>
        <TextField
          select
          label="Reason, please specify"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          fullWidth
          margin="normal"
          sx={{
            '& .MuiInputBase-root': {
              fontSize: 14,
            },
            '& .MuiInputLabel-root': {
              fontSize: 14,
            },
          }}
        >
          <MenuItem sx={{ fontSize: '14px !important' }} value="Too expensive">
            Price to high
          </MenuItem>
          <MenuItem sx={{ fontSize: '14px !important' }} value="Not using it">
            Website malfonction
          </MenuItem>
          <MenuItem sx={{ fontSize: '14px !important' }} value="Technical issues">
            I do not use it
          </MenuItem>
          <MenuItem sx={{ fontSize: '14px !important' }} value="Other">
            Other
          </MenuItem>
        </TextField>

        <TextField
          label="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          multiline
          rows={4}
          fullWidth
          margin="normal"
          sx={{
            '& .MuiInputBase-root': {
              fontSize: 14,
            },
            '& .MuiInputLabel-root': {
              fontSize: 14,
            },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Submit
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CancelSubscriptionDialog;
