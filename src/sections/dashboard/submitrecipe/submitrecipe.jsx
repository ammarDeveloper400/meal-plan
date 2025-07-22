/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import * as Yup from 'yup';
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';

import { styled } from '@mui/system';
import { Box, Grid, Input, Button, TextField, Container, Typography } from '@mui/material';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#F79256',
    },
  },
  '& .MuiInputLabel-root': {
    '&.Mui-focused': {
      color: '#F79256',
    },
  },
}));

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  city: Yup.string().required('City is required'),
  topic: Yup.string().required('Country selection is required'),
  object: Yup.string().required('Object is required'),
  message: Yup.string().required('Message is required'),
});

const SubmitRecipe = () => {
  const [file, setFile] = useState(null); // State to store the selected file
  const [filePreview, setFilePreview] = useState(null); // State to store the file preview

  return (
    <Container sx={{ p: '2rem', pb: { sm: '146px', xs: '40px' } }}>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          city: '',
          topic: '',
          object: '',
          message: '',
          file: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange, setFieldValue }) => (
          <Form>
            <Grid container spacing={{ xs: '50px', md: '87px' }}>
              <Grid item xs={12} md={5}>
                <Typography sx={{ pb: '20px', fontSize: '16px !important', textAlign: 'justify' }}>
                  We invite you to share your favorite recipes with us if you would like them to be
                  featured on our platform. You will receive full credit if your recipe is selected.
                  Sharing the love of cooking!
                </Typography>
              </Grid>
              <Grid item xs={12} md={7}>
                <Grid container spacing={2} pb={{ md: '0', xs: '40px' }}>
                  {/* <Grid item xs={6}>
                    <Field
                      as={CustomTextField}
                      fullWidth
                      name="fullName"
                      label="Full name"
                      helperText={touched.fullName ? errors.fullName : ''}
                      error={touched.fullName && Boolean(errors.fullName)}
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
                  </Grid> */}
                  {/* <Grid item xs={6}>
                    <Field
                      as={CustomTextField}
                      fullWidth
                      name="city"
                      label="City"
                      helperText={touched.city ? errors.city : ''}
                      error={touched.city && Boolean(errors.city)}
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
                  </Grid> */}
                  {/* <Grid item xs={6}>
                    <Field
                      as={CustomTextField}
                      fullWidth
                      name="email"
                      label="Email address"
                      helperText={touched.email ? errors.email : ''}
                      error={touched.email && Boolean(errors.email)}
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
                  </Grid> */}

                  {/* <Grid item xs={6}>
                    <Field
                      as={CustomTextField}
                      fullWidth
                      select
                      name="topic"
                      label="Select country"
                      helperText={touched.topic ? errors.topic : ''}
                      error={touched.topic && Boolean(errors.topic)}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          fontSize: '14px',
                        },
                        '& .MuiFormLabel-root': {
                          fontSize: '14px',
                        },
                      }}
                    >
                      <MenuItem value="Canada">Canada</MenuItem>
                      <MenuItem value="United States">United States</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Field>
                  </Grid> */}
                  <Grid item xs={12}>
                    <Field
                      as={CustomTextField}
                      fullWidth
                      name="object"
                      label="Name of your recipe"
                      helperText={touched.object ? errors.object : ''}
                      error={touched.object && Boolean(errors.object)}
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
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={CustomTextField}
                      fullWidth
                      name="message"
                      label="Description of the recipe"
                      multiline
                      rows={8}
                      helperText={touched.message ? errors.message : ''}
                      error={touched.message && Boolean(errors.message)}
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
                  </Grid>

                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                      <Box>
                        <label htmlFor="file-upload">
                          <Input
                            id="file-upload"
                            type="file"
                            accept=".pdf, .docx" // Restrict file types to PDF and Word documents
                            onChange={(event) => {
                              const selectedFile = event.currentTarget.files[0];
                              setFieldValue('file', selectedFile);
                              setFile(selectedFile);

                              // Generate a preview only for PDF and DOCX file names
                              if (selectedFile) {
                                setFilePreview(selectedFile.name);
                              }
                            }}
                            sx={{ display: 'none' }}
                          />
                          <Button
                            variant="contained"
                            component="span"
                            sx={{ fontSize: '16px', py: { md: '8px', xs: '1px' }, gap: '10px' }}
                          >
                            <img src="/assets/icons/attachicon.svg" alt="attach" />
                            Attach File
                          </Button>
                        </label>

                        {file && (
                          <Box mt={2}>
                            <Typography>{filePreview}</Typography>
                          </Box>
                        )}
                      </Box>
                      <Box>
                        <Button
                          color="primary"
                          variant="contained"
                          type="submit"
                          sx={{ fontSize: '16px', py: { md: '8px', xs: '1px' }, display: 'flex' }}
                        >
                          Submit
                          <img
                            src="/assets/icons/send.svg"
                            alt="Send"
                            style={{ paddingLeft: '12px' }}
                          />
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SubmitRecipe;
