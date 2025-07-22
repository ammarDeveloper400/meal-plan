/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import * as Yup from 'yup';
import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/system';
import { Box, Grid, Button, MenuItem, TextField, Container, Typography } from '@mui/material';

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
  otherCountry: Yup.string().when('topic', {
    is: 'Other',
    then: Yup.string().required('Please specify your country'),
  }),
  object: Yup.string().required('Object is required'),
  message: Yup.string().required('Message is required'),
});

const ContactUs = () => {
  const navigate = useNavigate();
  const [isOtherSelected, setIsOtherSelected] = useState(false);

  const handleCountryChange = (event, handleChange) => {
    handleChange(event);
    setIsOtherSelected(event.target.value === 'Other');
  };

  return (
    <Container sx={{ pt: { md: '80px', xs: '25px' }, pb: { sm: '146px', xs: '25px' } }}>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          city: '',
          topic: '',
          otherCountry: '',
          object: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <Grid container spacing={{ xs: '50px', md: '87px' }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h1" sx={{ fontSize: {md:'40px !important',xs:'30px !important'}, fontWeight: 700, pb: '19px' }}>
                  Contact us
                </Typography>
                <Typography variant="body1" sx={{ pb: '20px', fontSize: '16px !important' }}>
                  Feel free to check out the Frequently Asked Questions{' '}
                  <Button
                    onClick={() => navigate('/faq')}
                    style={{
                      color: '#F79256',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      font: 'inherit',
                      textDecoration: 'underline',
                      fontSize: '16px !important',
                    }}
                  >
                    (FAQ)
                  </Button>{' '}
                  section on the website for commonly asked questions.
                </Typography>
                <Typography sx={{ pb: '20px', fontSize: '16px !important' }}>
                  If your question has not been answered, please contact us directly using the form
                  below or at info@planora.ca.
                </Typography>
                <Typography sx={{ fontSize: '16px !important' }}>
                  Please be advised that Planora will never request payment via email from
                  subscribers, and any communication from an address other than the one mentioned
                  above should be immediately discontinued and forwarded to us.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2} pb={{ md: '0', xs: '40px' }}>
                  <Grid item xs={6}>
                    <Field
                      as={CustomTextField}
                      fullWidth
                      name="fullName"
                      label="Full name"
                      size="medium"
                      helperText={touched.fullName ? errors.fullName : ''}
                      error={touched.fullName && Boolean(errors.fullName)}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                  <Grid item xs={6}>
                    <Field
                      as={CustomTextField}
                      fullWidth
                      name="email"
                      label="Email address"
                      size="medium"
                      helperText={touched.email ? errors.email : ''}
                      error={touched.email && Boolean(errors.email)}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                  <Grid item xs={6}>
                    <Field
                      as={CustomTextField}
                      fullWidth
                      name="city"
                      label="City"
                      size="medium"
                      helperText={touched.city ? errors.city : ''}
                      error={touched.city && Boolean(errors.city)}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                  <Grid item xs={6}>
                    {values.topic !== 'Other' ? (
                      <Field
                        as={CustomTextField}
                        fullWidth
                        select
                        name="topic"
                        label="Select country"
                        size="medium"
                        helperText={touched.topic ? errors.topic : ''}
                        error={touched.topic && Boolean(errors.topic)}
                        onChange={(e) => handleCountryChange(e, handleChange)}
                        onBlur={handleBlur}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            fontSize: '14px',
                          },
                          '& .MuiFormLabel-root': {
                            fontSize: '14px',
                          },
                        }}
                        value={values.topic}
                      >
                        <MenuItem value="Canada">Canada</MenuItem>
                        <MenuItem value="United States">United States</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Field>
                    ) : (
                      <TextField
                        fullWidth
                        id="otherCountry"
                        name="otherCountry"
                        label="Please specify your country"
                        size="medium"
                        value={values.otherCountry}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.otherCountry && Boolean(errors.otherCountry)}
                        helperText={touched.otherCountry && errors.otherCountry}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root, & .MuiFormLabel-root': {
                            fontSize: '14px',
                          },
                        }}
                      />
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={CustomTextField}
                      fullWidth
                      name="object"
                      label="Object"
                      size="medium"
                      helperText={touched.object ? errors.object : ''}
                      error={touched.object && Boolean(errors.object)}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      label="Message"
                      multiline
                      size="medium"
                      rows={4}
                      helperText={touched.message ? errors.message : ''}
                      error={touched.message && Boolean(errors.message)}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        sx={{ fontSize: '16px', py: { md: '12px', xs: '1px' } }}
                      >
                        Send
                        <img
                          src="/assets/icons/send.svg"
                          alt="Send"
                          style={{ paddingLeft: '12px' }}
                        />
                      </Button>
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

export default ContactUs;
