import * as Yup from 'yup';
import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';

import { Box, Grid, Link, Button, Checkbox, TextField, Typography } from '@mui/material';

// Validation Schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(50, 'First name cannot exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'First name can only contain letters')
    .required('First name is required'),
  lastName: Yup.string()
    .max(50, 'Last name cannot exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Last name can only contain letters')
    .required('Last name is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
});

const Step1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  return (
  <Box>
    <Box textAlign="center" mt="51px">
      <Typography sx={{ fontSize: { md: '30px', xs: '20px' }, fontWeight: 700 }}>
        It’s simple!
      </Typography>
    </Box>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        phoneNumber: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        alert('Form Submitted!');
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography sx={{ fontSize: { md: '25px', xs: '20px' }, fontWeight: 600 }}>
                Step 1: Enter your information
              </Typography>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={12} md={6}>
                  <Field
                    as={TextField}
                    name="firstName"
                    placeholder="Armani"
                    size="small"
                    label="First Name"
                    fullWidth
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    as={TextField}
                    name="lastName"
                    placeholder="Last Name"
                    size="small"
                    label="Last Name"
                    fullWidth
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    as={TextField}
                    name="phoneNumber"
                    placeholder="Phone Number"
                    label="Phone Number"
                    size="small"
                    fullWidth
                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                    helperText={touched.phoneNumber && errors.phoneNumber}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    as={TextField}
                    name="email"
                    placeholder="Email Address"
                    label="Email Address"
                    size="small"
                    fullWidth
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3.5} display="flex" justifyContent="center" position="relative">
              <Box
                sx={{
                  position: 'absolute',
                  zIndex: '-1',
                  top: '-210px',
                  right: '-82px',
                  width: 'auto',
                  height: 'auto',
                  display: { xs: 'none', md: 'block' },
                }}
              >
                <img
                  src="/assets/images/laptop.svg"
                  alt="step"
                  style={{ maxWidth: 'none', height: 'auto' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
    <Box>
      <Typography
        sx={{
          mt: { md: '90px', xs: '20px' },
          fontSize: { md: '25px', xs: '20px' },
          fontWeight: 600,
        }}
      >
        Step 2: Select how you want to receive your free meal plan and grocery list
      </Typography>

      <Box
  sx={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    mt: '20px',
    flexWrap: 'wrap',
  }}
>
  {['SMS', 'Email', 'Print', 'Download'].map((option) => {
    let svgIcon;
    if (option === 'SMS') {
      svgIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3.9987 11.9999L2.46537 13.5333C2.25425 13.7444 2.01248 13.7917 1.74003 13.6753C1.46759 13.5588 1.33159 13.3504 1.33203 13.0499V2.66659C1.33203 2.29992 1.4627 1.98614 1.72403 1.72525C1.98537 1.46436 2.29914 1.3337 2.66537 1.33325H13.332C13.6987 1.33325 14.0127 1.46392 14.274 1.72525C14.5354 1.98659 14.6658 2.30036 14.6654 2.66659V10.6666C14.6654 11.0333 14.5349 11.3473 14.274 11.6086C14.0131 11.8699 13.6991 12.0004 13.332 11.9999H3.9987ZM5.33203 7.33325C5.52092 7.33325 5.67937 7.26925 5.80737 7.14125C5.93537 7.01325 5.99914 6.85503 5.9987 6.66659C5.99825 6.47814 5.93425 6.31992 5.8067 6.19192C5.67914 6.06392 5.52092 5.99992 5.33203 5.99992C5.14314 5.99992 4.98492 6.06392 4.85737 6.19192C4.72981 6.31992 4.66581 6.47814 4.66537 6.66659C4.66492 6.85503 4.72892 7.01347 4.85737 7.14192C4.98581 7.27036 5.14403 7.33414 5.33203 7.33325ZM7.9987 7.33325C8.18759 7.33325 8.34603 7.26925 8.47403 7.14125C8.60203 7.01325 8.66581 6.85503 8.66537 6.66659C8.66492 6.47814 8.60092 6.31992 8.47337 6.19192C8.34581 6.06392 8.18759 5.99992 7.9987 5.99992C7.80981 5.99992 7.65159 6.06392 7.52403 6.19192C7.39648 6.31992 7.33248 6.47814 7.33203 6.66659C7.33159 6.85503 7.39559 7.01347 7.52403 7.14192C7.65248 7.27036 7.8107 7.33414 7.9987 7.33325ZM10.6654 7.33325C10.8543 7.33325 11.0127 7.26925 11.1407 7.14125C11.2687 7.01325 11.3325 6.85503 11.332 6.66659C11.3316 6.47814 11.2676 6.31992 11.14 6.19192C11.0125 6.06392 10.8543 5.99992 10.6654 5.99992C10.4765 5.99992 10.3183 6.06392 10.1907 6.19192C10.0631 6.31992 9.99914 6.47814 9.9987 6.66659C9.99825 6.85503 10.0623 7.01347 10.1907 7.14192C10.3191 7.27036 10.4774 7.33414 10.6654 7.33325Z"
            fill="black"
          />
        </svg>
      );
    } else if (option === 'Email') {
      svgIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13.332 5.33341L7.9987 8.66675L2.66536 5.33341V4.00008L7.9987 7.33342L13.332 4.00008M13.332 2.66675H2.66536C1.92536 2.66675 1.33203 3.26008 1.33203 4.00008V12.0001C1.33203 12.3537 1.47251 12.6928 1.72256 12.9429C1.9726 13.1929 2.31174 13.3334 2.66536 13.3334H13.332C13.6857 13.3334 14.0248 13.1929 14.2748 12.9429C14.5249 12.6928 14.6654 12.3537 14.6654 12.0001V4.00008C14.6654 3.64646 14.5249 3.30732 14.2748 3.05727C14.0248 2.80722 13.6857 2.66675 13.332 2.66675Z" fill="black"/>
      </svg>
      );
    } else if (option === 'Print') {
      svgIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M11.9987 4.66667H3.9987V2H11.9987V4.66667ZM11.9987 8.33333C12.1876 8.33333 12.346 8.26933 12.474 8.14133C12.602 8.01333 12.6658 7.85511 12.6654 7.66667C12.6649 7.47822 12.6009 7.32 12.4734 7.192C12.3458 7.064 12.1876 7 11.9987 7C11.8098 7 11.6516 7.064 11.524 7.192C11.3965 7.32 11.3325 7.47822 11.332 7.66667C11.3316 7.85511 11.3956 8.01356 11.524 8.142C11.6525 8.27044 11.8107 8.33422 11.9987 8.33333ZM10.6654 12.6667V10H5.33203V12.6667H10.6654ZM11.9987 14H3.9987V11.3333H1.33203V7.33333C1.33203 6.76667 1.52648 6.29178 1.91536 5.90867C2.30425 5.52556 2.77648 5.33378 3.33203 5.33333H12.6654C13.232 5.33333 13.7071 5.52511 14.0907 5.90867C14.4743 6.29222 14.6658 6.76711 14.6654 7.33333V11.3333H11.9987V14Z" fill="black"/>
      </svg>
      );
    } else if (option === 'Download') {
      svgIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2.66663H9.33333V6.66663H11L8 9.66663M8 2.66663H6.66667V6.66663H5L8 9.66663" fill="black"/>
        <path d="M8 2.66663H9.33333V6.66663H11L8 9.66663L5 6.66663H6.66667V2.66663H8Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 12.6666H12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      );
    }

    return (
      <Box
        key={option}
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#FDE9DD',
          borderRadius: '5px',
          padding: '5px 10px',
          gap: '5px',
        }}
      >
        <Checkbox
          disableRipple
          disableFocusRipple
          checked={selectedOption === option}
          onChange={() => handleCheckboxChange(option)}
        />
        {svgIcon}
        <Typography sx={{ fontSize: '16px !important', fontWeight: '500 !important' }}>
          {option}
        </Typography>
      </Box>
    );
  })}
</Box>


      <Box>
        <Typography
          sx={{ fontSize: { md: '16px', xs: '12px' }, fontWeight: '300 !important', mt: '13px' }}
        >
          *We highly suggest trying SMS to get the most out of Planoras features!
        </Typography>
      </Box>
    </Box>
    <Box>
      <Box>
        <Typography
          sx={{ fontSize: { md: '25px', xs: '20px' }, fontWeight: '600 !important', mt: '78px' }}
        >
          Step 3: Personalize your meals and your grocery list will update automatically
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: { md: '20px', xs: '16px' },
            fontWeight: '600 !important',
            mt: '38px',
            textDecoration: 'underline',
          }}
        >
          Meal plan
        </Typography>
      </Box>
      <Box>
        <Typography>
          -Switch between the 2 visuals (Detailed vs calendar version) <br />
          -Replace the meal plan’s name “Week #34” to something else <br />
          -Switch between the different days that are grouped together <br />
          -Adjust the portion sizes to better suit the number of people in your family
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: { md: '20px', xs: '16px' },
            fontWeight: '600 !important',
            mt: '14px',
            textDecoration: 'underline',
          }}
        >
          Grocery list
        </Typography>
      </Box>
      <Box>
        <Typography>
          -Delete ingredients you don’t need <br />
          -Add items manually (Ex: Toilet paper, Milk)
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: { md: '15px', xs: '12px' }, fontWeight: '400 !important', mt: '24px' }}
        >
          <span style={{ color: '#F79256' }}>Some features like: </span> Changing the days that are
          grouped together, Add/Delete/Modify meals, Generate random and Add recent items (grocery list)
          <br /> are not available in the free trial.
        </Typography>
      </Box>
    </Box>
    <Box>
      <Typography
        sx={{ fontSize: { md: '24px', xs: '18px' }, fontWeight: '600 !important', mt: '64px' }}
      >
        <span style={{ fontSize: '35px', fontWeight: 600 }}>
          Like what you see? <Link href="/subscription" style={{ color: '#F79256', textDecoration: 'none' }}>Subscribe</Link> to unlock Planora’s
          full potential.
        </span>
        <br />
        You can even use it for free.{' '}
        <Link href="/referral" style={{ color: '#F79256', textDecoration: 'none' }}>Learn more about the Referral Program!</Link>
      </Typography>
    </Box>
    <Box sx={{ mt: '16px', mb: '46px' }}>
      <Button
        fullWidth
        variant="contained"
        sx={{
          fontSize: { md: '40px !important', xs: '20px !important' },
          fontWeight: 700,
          borderRadius: '15px',
          ':hover': { backgroundColor: '#F79256 !important' },
          textAlign: 'center',
        }}
      >
        Ready? Click here to claim your free meal plan
      </Button>
    </Box>
  </Box>
);
};
export default Step1;
