import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  Box,
  Grid,
  Button,
  Dialog,
  TextField,
  Typography,
  IconButton,
  DialogActions,
  DialogContent,
  InputAdornment,
} from '@mui/material';

const ChangePassword = ({ onNext, open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log(values);
      // Call onNext to go to the next step
      onNext();
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleClickShowOldPassword = () => {
    setShowOldPassword((prev) => !prev);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <Typography variant="h2" component="h2" align="center" gutterBottom mb="25px">
              Update your password
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="oldPassword"
                  name="oldPassword"
                  label="Old Password"
                  type={showOldPassword ? 'text' : 'password'}
                  value={formik.values.oldPassword}
                  onChange={formik.handleChange}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          disableRipple
                          edge="end"
                          onClick={handleClickShowOldPassword}
                          aria-label="toggle old password visibility"
                          size="small"
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          <img
                            src={
                              showOldPassword
                                ? '/assets/icons/eye.svg'
                                : '/assets/icons/hideeye.svg'
                            }
                            alt="eye"
                            style={{ marginRight: 8 }}
                          />
                          <Typography variant="body2" mr="10px">
                            {showOldPassword ? 'Hide' : 'Show'}
                          </Typography>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '14px',
                    },
                    '& .MuiFormLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="New Password"
                  type={showPassword ? 'text' : 'password'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          disableRipple
                          edge="end"
                          onClick={handleClickShowPassword}
                          aria-label="toggle new password visibility"
                          size="small"
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          <img
                            src={
                              showPassword ? '/assets/icons/eye.svg' : '/assets/icons/hideeye.svg'
                            }
                            alt="eye"
                            style={{ marginRight: 8 }}
                          />
                          <Typography variant="body2" mr="10px">
                            {showPassword ? 'Hide' : 'Show'}
                          </Typography>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '14px',
                    },
                    '& .MuiFormLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm New Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          disableRipple
                          edge="end"
                          onClick={handleClickShowConfirmPassword}
                          aria-label="toggle confirm new password visibility"
                          size="small"
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          <img
                            src={
                              showConfirmPassword
                                ? '/assets/icons/eye.svg'
                                : '/assets/icons/hideeye.svg'
                            }
                            alt="eye"
                            style={{ marginRight: 8 }}
                          />
                          <Typography variant="body2" mr="10px">
                            {showConfirmPassword ? 'Hide' : 'Show'}
                          </Typography>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '14px',
                    },
                    '& .MuiFormLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: '30px' }}>
        <Button
          sx={{
            fontSize: { sm: '20px !important', xs: '16px !important' },
            fontWeight: '400 !important',
          }}
          variant="contained"
          onClick={handleClose}
        >
          Change Password
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Add prop types validation
ChangePassword.propTypes = {
  onNext: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ChangePassword;
