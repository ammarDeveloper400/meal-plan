import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form, Field, Formik } from 'formik';
import React, { useRef, useState } from 'react';

import {
  Box,
  Grid,
  Dialog,
  Button,
  MenuItem,
  TextField,
  Typography,
  DialogContent,
} from '@mui/material';

// Validation schema
const RecipeSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  city: Yup.string().required('City is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  country: Yup.string().required('Country is required'),
  recipeName: Yup.string().required('Recipe name is required'),
  description: Yup.string().required('Description is required'),
});

const RecipeDialog = ({ open, handleClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isOtherCountry, setIsOtherCountry] = useState(false); // Track when 'Other' is selected
  const fileInputRef = useRef(null);
  const countries = ['United States', 'Canada', 'Other']; // Add more countries as needed

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAttachFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <Formik
        initialValues={{
          fullName: '',
          city: '',
          email: '',
          country: '',
          otherCountry: '', // New field for manual country input
          recipeName: '',
          description: '',
        }}
        validationSchema={RecipeSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const formData = {
              ...values,
              country: isOtherCountry ? values.otherCountry : values.country, // Use the manual country if "Other" is selected
              file: selectedFile,
            };
            alert(JSON.stringify(formData, null, 2));
            setSubmitting(false);
            handleClose();
          }, 400);
        }}
      >
        {({ isSubmitting, errors, touched, values, handleChange, handleBlur }) => (
          <Form>
            <DialogContent sx={{ pt: '30px !important', pb: '40px !important' }}>
              <Box sx={{ fontSize: '30px !important', fontWeight: '400 !important', pb: '2px' }}>
                Submit a recipe idea
                <Typography
                  sx={{ fontSize: '11px !important', fontWeight: '400 !important', pt: '12px' }}
                >
                  We invite you to share your favorite recipes with us if you would like them
                  featured on our platform. You will receive full credit if your recipe is selected.
                  The love of cooking is meant to be shared!
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Field
                    name="fullName"
                    as={TextField}
                    label="Full name"
                    fullWidth
                    margin="dense"
                    size="medium"
                    error={touched.fullName && !!errors.fullName}
                    helperText={touched.fullName && errors.fullName}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        fontSize: '14px',
                      },
                      '& .MuiFormLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                  />

                  <Field
                    name="city"
                    as={TextField}
                    label="City"
                    fullWidth
                    margin="dense"
                    size="medium"
                    error={touched.city && !!errors.city}
                    helperText={touched.city && errors.city}
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
                <Grid item xs={12} md={6}>
                  <Field
                    name="email"
                    as={TextField}
                    label="Email address"
                    type="email"
                    fullWidth
                    margin="dense"
                    size="medium"
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        fontSize: '14px',
                      },
                      '& .MuiFormLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                  />

                  {/* Country Dropdown or Manual Text Input */}
                  {!isOtherCountry ? (
                    <Field
                      name="country"
                      as={TextField}
                      select
                      label="Country"
                      fullWidth
                      margin="dense"
                      size="medium"
                      error={touched.country && !!errors.country}
                      helperText={touched.country && errors.country}
                      onChange={(event) => {
                        const selectedCountry = event.target.value;
                        setIsOtherCountry(selectedCountry === 'Other');
                        handleChange(event);
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          fontSize: '14px',
                        },
                        '& .MuiFormLabel-root': {
                          fontSize: '14px',
                        },
                      }}
                    >
                      {countries.map((country) => (
                        <MenuItem key={country} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </Field>
                  ) : (
                    <Field
                      name="otherCountry"
                      as={TextField}
                      label="Please specify your country"
                      fullWidth
                      margin="dense"
                      size="medium"
                      error={touched.otherCountry && !!errors.otherCountry}
                      helperText={touched.otherCountry && errors.otherCountry}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          fontSize: '14px',
                        },
                        '& .MuiFormLabel-root': {
                          fontSize: '14px',
                        },
                      }}
                    />
                  )}
                </Grid>
              </Grid>

              <Field
                name="recipeName"
                as={TextField}
                label="Name of your recipe"
                fullWidth
                margin="dense"
                size="medium"
                error={touched.recipeName && !!errors.recipeName}
                helperText={touched.recipeName && errors.recipeName}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    fontSize: '14px',
                  },
                  '& .MuiFormLabel-root': {
                    fontSize: '14px',
                  },
                }}
              />

              <Field
                name="description"
                as={TextField}
                label="Description about recipe"
                fullWidth
                margin="dense"
                multiline
                rows={4}
                size="medium"
                error={touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    fontSize: '14px',
                  },
                  '& .MuiFormLabel-root': {
                    fontSize: '14px',
                  },
                }}
              />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '20px' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    border: '2px solid #F79256',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '16px !important',
                    pr: '20px',
                  }}
                  onClick={handleAttachFileClick}
                >
                  <Box sx={{ backgroundColor: '#F79256', padding: '10px', borderRadius: '8px' }}>
                    <img src="/assets/icons/attachfile.svg" alt="Attach File" />
                  </Box>
                  {selectedFile ? selectedFile.name : 'Attach File'}
                </Box>
                <Box sx={{ display:'flex', gap: '10px' }}>
                  <Button
                    sx={{ p: '10px 31px', fontSize: '16px' }}
                    variant="outlined"
                    type="close"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    sx={{ p: '10px 31px', fontSize: '16px' }}
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </DialogContent>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

RecipeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default RecipeDialog;
