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

const ImportantDialog = ({ open, onClose, onSkip }) => (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          backgroundColor: '#FABE9A',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ backgroundColor: '#F79256', ":hover": { backgroundColor: '#F79256' } }}
        >
          <img src="/assets/icons/closeicon.svg" alt="close" />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: '#FABE9A', color: '#000' }}>
        <Typography
          textAlign="center"
          sx={{ fontSize: '40px!important', fontWeight: '700', pb: '17px' }}
        >
          IMPORTANT
        </Typography>
        <Typography variant="body2">
          We strongly recommend that you provide a cell phone number if you have one. If you skip this
          step, you will miss out on a key feature that allows you to send your recipe, personalized
          meal plan, and grocery list directly to your phone.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ textAlign: 'right', backgroundColor: '#FABE9A' }}>
        <Button
          disableRipple
          onClick={() => {
            onSkip(); // Call onSkip handler when skip is clicked
          }}
          sx={{ color: '#000', fontWeight: '400', fontSize: '20px' }}
        >
          Skip anyway
        </Button>
      </DialogActions>
    </Dialog>
  );

ImportantDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
};

export default ImportantDialog;
