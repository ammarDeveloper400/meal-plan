import React from 'react';
import PropTypes from 'prop-types';

import {
  Dialog,
  Button,
  IconButton,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import Iconify from '../iconify/iconify';

const EraseCardDialog = ({ open, onClose, onDelete }) => (
  <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
    <DialogTitle
      sx={{
        backgroundColor: '#FABE9A',
        position: 'relative', // Make the title position relative
        p: 2, // Add padding to DialogTitle
        '& .MuiIconButton-root': {
          position: 'absolute', // Position the icon button absolutely
          top: 8,
          right: 8,
          backgroundColor: '#F79256',
          ':hover': { backgroundColor: '#F79256' },
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={onClose} // Close dialog on cross icon click
      >
        <Iconify sx={{ color: '#fff' }} icon="charm:cross" />
      </IconButton>
    </DialogTitle>
    <DialogContent sx={{ backgroundColor: '#FABE9A', color: '#000' }}>
      <Typography
        textAlign="center"
        sx={{ fontSize: '24px', fontWeight: '700', color: '#FFF', pt:"20px" }}
      >
        Are you sure you want to delete this payment method?
      </Typography>
    </DialogContent>
    <DialogActions sx={{ justifyContent: 'center', backgroundColor: '#FABE9A', pb: '20px' }}>
      <Button
        disableRipple
        onClick={onClose} // Close dialog on cancel click
        sx={{ color: '#000', fontWeight: '400', fontSize: '16px', mx: 1 }}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        disableRipple
        onClick={() => {
          onDelete(); // Call onDelete handler when delete is confirmed
          onClose(); // Close dialog after delete action
        }}
        sx={{ fontWeight: '700', fontSize: '16px', mx: 1, ":hover": { backgroundColor: '#F79256' } }}
      >
        Delete
      </Button>
    </DialogActions>
  </Dialog>
);

EraseCardDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EraseCardDialog;
