/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import {
  Box,
  Grid,
  Radio,
  Button,
  MenuItem,
  TextField,
  RadioGroup,
  Typography,
  FormControlLabel,
} from '@mui/material';

const Step1 = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      dateofbirth: '',
      city: '',
      country: '',
      gender: '',
      language: '',
      hearAboutUs: '',
      lookingfor: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .matches(/^[A-Za-z]+$/, 'First name must only contain alphabets')
        .required('First name is required'),
      lastname: Yup.string()
        .matches(/^[A-Za-z]+$/, 'Last name must only contain alphabets')
        .required('Last name is required'),
      username: Yup.string()
        // .matches(
        //   /^[a-z][a-z0-9_]*$/,
        //   'Username must start with a lowercase letter and can only contain alphanumeric characters and underscores'
        // )
        .required('Username is required'),
      dateofbirth: Yup.date().required('Date of birth is required'),
      city: Yup.string()
        .matches(/^[A-Za-z\s]*$/, 'City must only contain alphabets')
        .required('City is required'),
      country: Yup.string().required('Country is required'),
      gender: Yup.string().required('Please select your gender'),
      language: Yup.string().required('Please select your language'),
      hearAboutUs: Yup.string().required('Please select how you heard about us?'),
      lookingfor: Yup.string().required('Please specify what you are looking for?'),
    }),
    onSubmit: (values) => {
      console.log(values);
      onNext();
    },
  });

  const handleChange = (field, regex) => (e) => {
    const { value } = e.target;
    if (regex.test(value)) {
      formik.setFieldValue(field, value);
    }
  };

  return (
    <Box sx={{ maxWidth: 850, margin: 'auto', py: '60px', px: { xs: '20px', sm: '30px' } }}>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h1" align="center" gutterBottom mb="15px">
          Account creation form
        </Typography>
        <Typography variant="subtitle1" align="center" color="primary" gutterBottom>
          Step 1 of 7
        </Typography>
        <Typography variant="h2" align="center" gutterBottom mb="35px">
          Personal information
        </Typography>

        <Grid container spacing={3}>
          {/* First Name Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="firstname"
              name="firstname"
              label="First name"
              size="medium"
              value={formik.values.firstname}
              onChange={handleChange('firstname', /^[a-zA-Z]*$/)}
              onBlur={formik.handleBlur}
              error={formik.touched.firstname && Boolean(formik.errors.firstname)}
              helperText={formik.touched.firstname && formik.errors.firstname}
              variant="outlined"
              inputProps={{ maxLength: 26 }} // Limit input to 26 characters
              sx={{ '& .MuiOutlinedInput-root, & .MuiFormLabel-root': { fontSize: '14px' } }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastname"
              name="lastname"
              label="Last name"
              size="medium"
              value={formik.values.lastname}
              onChange={handleChange('lastname', /^[a-zA-Z]*$/)}
              onBlur={formik.handleBlur}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
              variant="outlined"
              inputProps={{ maxLength: 26 }} // Limit input to 26 characters
              sx={{ '& .MuiOutlinedInput-root, & .MuiFormLabel-root': { fontSize: '14px' } }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Username"
              size="medium"
              value={formik.values.username}
              onChange={handleChange('username', /^[a-zA-Z0-9_.]*$/)}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              variant="outlined"
              inputProps={{ maxLength: 26 }} // Limit input to 26 characters
              sx={{ '& .MuiOutlinedInput-root, & .MuiFormLabel-root': { fontSize: '14px' } }}
            />
          </Grid>

          {/* Date of Birth Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date of birth"
              placeholder="dd/mm/yyyy" // This will show as the initial placeholder format
              id="dateofbirth"
              name="dateofbirth"
              type="date"
              value={formik.values.dateofbirth}
              onChange={(e) => {
                const { value } = e.target;
                const year = value.split('-')[0];
                if (year.length <= 4) {
                  formik.handleChange(e);
                }
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.dateofbirth && Boolean(formik.errors.dateofbirth)}
              helperText={formik.touched.dateofbirth && formik.errors.dateofbirth}
              variant="outlined"
              InputLabelProps={{
                shrink: true, // This keeps the label above once focused or populated
              }}
              sx={{ '& .MuiOutlinedInput-root, & .MuiFormLabel-root': { fontSize: '14px' } }}
            />
          </Grid>

          {/* City Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="city"
              name="city"
              label="City"
              size="medium"
              value={formik.values.city}
              onChange={handleChange('city', /^[a-zA-Z\s]*$/)}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              inputProps={{ maxLength: 26 }} // Limit input to 26 characters
              variant="outlined"
              sx={{ '& .MuiOutlinedInput-root, & .MuiFormLabel-root': { fontSize: '14px' } }}
            />
          </Grid>

          {/* Country Field */}
          {/* <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="country"
              name="country"
              label="Country"
              size="medium"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
              variant="outlined"
              select
              sx={{ '& .MuiOutlinedInput-root, & .MuiFormLabel-root': { fontSize: '14px' } }}
            >
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="UK">Other</MenuItem>
            </TextField>
          </Grid> */}

          {/* Country Field */}
          <Grid item xs={12} sm={6}>
            {formik.values.country !== 'Other' ? (
              <TextField
                fullWidth
                id="country"
                name="country"
                label="Country"
                size="medium"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
                variant="outlined"
                select
                sx={{ '& .MuiOutlinedInput-root, & .MuiFormLabel-root': { fontSize: '14px' } }}
              >
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                {/* <MenuItem value="UK">UK</MenuItem> */}
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            ) : (
              <TextField
                fullWidth
                id="otherCountry"
                name="otherCountry"
                label="Please specify your country"
                size="medium"
                value={formik.values.otherCountry}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.otherCountry && Boolean(formik.errors.otherCountry)}
                helperText={formik.touched.otherCountry && formik.errors.otherCountry}
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root, & .MuiFormLabel-root': { fontSize: '14px' } }}
              />
            )}
          </Grid>

          {/* Language Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="language"
              name="language"
              label="Language"
              size="medium"
              value={formik.values.language}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.language && Boolean(formik.errors.language)}
              helperText={formik.touched.language && formik.errors.language}
              variant="outlined"
              select
              sx={{ '& .MuiOutlinedInput-root, & .MuiFormLabel-root': { fontSize: '14px' } }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Francais">Francais</MenuItem>
            </TextField>
          </Grid>

          {/* How did you hear about us Field */}
          <Grid item xs={12} sm={6}>
            {formik.values.hearAboutUs !== 'Other' ? (
              <TextField
                fullWidth
                id="hearAboutUs"
                name="hearAboutUs"
                label="How did you hear about us?"
                size="medium"
                value={formik.values.hearAboutUs}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.hearAboutUs && Boolean(formik.errors.hearAboutUs)}
                helperText={formik.touched.hearAboutUs && formik.errors.hearAboutUs}
                variant="outlined"
                select
                sx={{ '& .MuiOutlinedInput-root, & .MuiFormLabel-root': { fontSize: '14px' } }}
              >
                <MenuItem value="Facebook">Facebook</MenuItem>
                <MenuItem value="Instagram">Instagram</MenuItem>
                <MenuItem value="Friend referral">Friend referral</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            ) : (
              <TextField
                fullWidth
                id="otherHearAboutUs"
                name="otherHearAboutUs"
                label="Please specify how you heard about us"
                size="medium"
                value={formik.values.otherHearAboutUs}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.otherHearAboutUs && Boolean(formik.errors.otherHearAboutUs)}
                helperText={formik.touched.otherHearAboutUs && formik.errors.otherHearAboutUs}
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root, & .MuiFormLabel-root': { fontSize: '14px' } }}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            {formik.values.lookingfor !== 'Other' ? (
              <TextField
                fullWidth
                id="lookingfor"
                name="lookingfor"
                label="What are you looking for?"
                size="medium"
                value={formik.values.lookingfor}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lookingfor && Boolean(formik.errors.lookingfor)}
                helperText={formik.touched.lookingfor && formik.errors.lookingfor}
                variant="outlined"
                select
                sx={{ '& .MuiOutlinedInput-root, & .MuiFormLabel-root': { fontSize: '14px' } }}
              >
                <MenuItem value="Facebook">Recipe ideas</MenuItem>
                <MenuItem value="Instagram">Meal planning & Grocery list</MenuItem>
                <MenuItem value="Friend referral">Weight loss / Healthy eating</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            ) : (
              <TextField
                fullWidth
                id="otherlookingfor"
                name="otherlookingfor"
                label="Please specify what are you looking for?"
                size="medium"
                value={formik.values.otherlookingfor}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.otherlookingfor && Boolean(formik.errors.otherlookingfor)}
                helperText={formik.touched.otherlookingfor && formik.errors.otherlookingfor}
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root, & .MuiFormLabel-root': { fontSize: '14px' } }}
              />
            )}
          </Grid>

          <Grid item xs={12} container alignItems="center">
            <Typography sx={{ mr: 2, fontSize: '18px', fontWeight: '500' }}>Gender</Typography>
            <RadioGroup
              row
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                sx={{ '& .MuiTypography-root': { fontSize: '18px' } }}
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                sx={{ '& .MuiTypography-root': { fontSize: '18px' } }}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
                sx={{ '& .MuiTypography-root': { fontSize: '18px' } }}
              />
            </RadioGroup>
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box mt={3} textAlign="center">
          <Button type="submit" variant="contained" color="primary" size="large">
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
};

Step1.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Step1;
