/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import * as Yup from 'yup';
import { Form, Field, Formik } from 'formik';

import { styled } from '@mui/system';
import { Box, Grid, Button, TextField, Container, Typography } from '@mui/material';

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

const ContactDashboard = () => (
  <Container sx={{  p:'2rem' }}>
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        city: '',
        topic: '',
        object: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, handleChange }) => (
        <Form>
          <Grid container spacing={{ xs: '50px', md: '87px' }}>
            <Grid item xs={12} md={5}>
              {/* <Typography sx={{ fontSize: { sm: '18px !important' }, fontWeight: 700, pb: '19px' }}>
                Contact us{' '}
              </Typography> */}
              <Typography sx={{ pb: '20px', fontSize: '16px !important', textAlign: 'justify' }}>
                Feel free to check out the Frequently Asked Questions (FAQ) section on the website
                for commonly asked questions.
              </Typography>
              <Typography sx={{ pb: '20px', fontSize: '16px !important', textAlign: 'justify' }}>
                If your question hasn't been answered, please contact us directly using the form
                below or at info@planora.ca.
              </Typography>
              <Typography sx={{ pb: '20px', fontSize: '16px !important', textAlign: 'justify' }}>
                Please be advised that Planora will never request payment via email from
                subscribers, and any communication from an address other than the one mentioned
                above should be immediately discontinued and forwarded to us.
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
                    label="Object"
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
                    label="Enter your information here"
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
                <Grid item xs={12} sm={12} md={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  </Container>
);

export default ContactDashboard;
