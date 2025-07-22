/* eslint-disable no-unused-vars */
import * as Yup from 'yup';
import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';

import {
  Box,
  Grid,
  Button,
  Dialog,
  useTheme,
  TextField,
  Typography,
  useMediaQuery,
  InputAdornment,
} from '@mui/material';

import ChangeMail from './mail-chnage'; // Corrected import path
import NumberChange from './number-change'; // Import the NumberChange component
import ChangePassword from './password-change'; // Import the ChangePassword component

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  phone: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const AccountDetail = () => {
  const [openChangeMailDialog, setOpenChangeMailDialog] = useState(false);
  const [openNumberChangeDialog, setOpenNumberChangeDialog] = useState(false);
  const [openChangePasswordDialog, setOpenChangePasswordDialog] = useState(false);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  const handleOpenChangeMailDialog = () => {
    setOpenChangeMailDialog(true);
  };

  const handleCloseChangeMailDialog = () => {
    setOpenChangeMailDialog(false);
  };

  const handleOpenNumberChangeDialog = () => {
    setOpenNumberChangeDialog(true);
  };

  const handleCloseNumberChangeDialog = () => {
    setOpenNumberChangeDialog(false);
  };

  const handleOpenChangePasswordDialog = () => {
    setOpenChangePasswordDialog(true);
  };

  const handleCloseChangePasswordDialog = () => {
    setOpenChangePasswordDialog(false);
  };

  return (
    <Box
      sx={{
        px: { xs: 1, sm: 2 }, // Padding for xs and sm screens
      }}
    >
      <Typography sx={{ fontSize: '20px !important', fontWeight: '600', pb: '40px', pt: '30px' }}>
        Account details
      </Typography>

      <Formik
        initialValues={{
          username: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <Grid item xs={12} sm={12} mb={2}>
                  <Field
                    as={TextField}
                    name="username"
                    label="Username"
                    fullWidth
                    error={touched.username && !!errors.username}
                    helperText={touched.username && errors.username}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#00000080',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00000080',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00000080',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} mb={2}>
                  <Field
                    as={TextField}
                    name="firstName"
                    label="First Name"
                    fullWidth
                    error={touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#00000080',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00000080',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00000080',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} mb={2}>
                  <Field
                    as={TextField}
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    error={touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#00000080',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00000080',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00000080',
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item md={8} xs={12}>
                <Box sx={{ border: '1px solid #00000080', borderRadius: '10px', p: '20px' }}>
                  <Field
                    as={TextField}
                    name="email"
                    label="Email address associated with the account"
                    fullWidth
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px',
                              minWidth: { xs: '50px', sm: '64px' },
                            }}
                            variant="contained"
                            color="primary"
                            onClick={handleOpenChangeMailDialog}
                          >
                            <img src="/assets/icons/change.svg" alt="change" />
                            <Typography
                              sx={{
                                fontSize: '14px !important',
                                fontWeight: '600 !important',
                                display: { xs: 'none', sm: 'block' },
                              }}
                            >
                              Change
                            </Typography>
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#00000080',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00000080',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00000080',
                        },
                      },
                    }}
                  />
                  <Field
                    as={TextField}
                    name="phone"
                    label="Phone number associated with the account"
                    fullWidth
                    error={touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px',
                              minWidth: { xs: '50px', sm: '64px' },
                            }}
                            variant="contained"
                            color="primary"
                            onClick={handleOpenNumberChangeDialog}
                          >
                            <img src="/assets/icons/change.svg" alt="change" />
                            <Typography
                              sx={{
                                fontSize: '14px !important',
                                fontWeight: '600 !important',
                                display: { xs: 'none', sm: 'block' },
                              }}
                            >
                              Change
                            </Typography>
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#00000080',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00000080',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00000080',
                        },
                      },
                    }}
                  />
                  <Field
                    as={TextField}
                    name="password"
                    type="password"
                    label="Password of the account"
                    fullWidth
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px',
                              minWidth: { xs: '50px', sm: '64px' },
                            }}
                            variant="contained"
                            color="primary"
                            onClick={handleOpenChangePasswordDialog}
                          >
                            <img src="/assets/icons/change.svg" alt="change" />
                            <Typography
                              sx={{
                                fontSize: '14px !important',
                                fontWeight: '600 !important',
                                display: { xs: 'none', sm: 'block' },
                              }}
                            >
                              Change
                            </Typography>
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#00000080',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00000080',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00000080',
                        },
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>

      <Dialog open={openChangeMailDialog} onClose={handleCloseChangeMailDialog}>
        <ChangeMail open={openChangeMailDialog} handleClose={handleCloseChangeMailDialog} />
      </Dialog>

      <Dialog open={openNumberChangeDialog} onClose={handleCloseNumberChangeDialog}>
        <NumberChange
          open={openNumberChangeDialog}
          handleClose={handleCloseNumberChangeDialog}
          onNext={() => console.log('Next Step')}
        />
      </Dialog>

      <ChangePassword
        open={openChangePasswordDialog}
        handleClose={handleCloseChangePasswordDialog}
        onNext={() => console.log('Password changed')}
      />
    </Box>
  );
};

export default AccountDetail;
