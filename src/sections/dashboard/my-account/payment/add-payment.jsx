/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  Grid,
  Dialog,
  Button,
  TextField,
  Typography,
  DialogActions,
  DialogContent,
} from '@mui/material';

const PaymentMethodForm = ({ open, handleClose }) => {
  const formatCardNumber = (value) =>
    value
      .replace(/\s+/g, '') // Remove any spaces
      .replace(/[^0-9]/gi, '') // Remove any non-numeric characters
      .replace(/(\d{4})(?=\d)/g, '$1-'); // Add hyphens after every 4 digits
  const formik = useFormik({
    initialValues: {
      name: '',
      cardNumber: '',
      expiryDate: null,
      cvc: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      cardNumber: Yup.string()
        .matches(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/, 'Card number is not valid')
        .required('Card number is required'),
      expiryDate: Yup.date().required('Expiry date is required'),
      cvc: Yup.string()
        .matches(/^\d{3}$/, 'CVC/CVV must be 3 digits')
        .required('CVC/CVV is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleClose();
    },
  });

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Typography
            sx={{
              fontSize: { sm: '35px !important', xs: '25px !important' },
              fontWeight: '400',
              textAlign: 'center',
              mb: '20px',
            }}
          >
            Add payment method
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                variant="outlined"
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
              <TextField
                fullWidth
                id="cardNumber"
                name="cardNumber"
                label="Card number"
                value={formik.values.cardNumber}
                onChange={(e) => {
                  const formattedValue = formatCardNumber(e.target.value);
                  formik.setFieldValue('cardNumber', formattedValue);
                }}
                error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                inputProps={{ maxLength: 19 }} // Limit input length to 19 (16 digits + 3 hyphens)
                placeholder="0000-0000-0000-0000"
                variant="outlined"
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
              <DatePicker
                placeholderText="Expiry date"
                selected={formik.values.expiryDate}
                onChange={(date) => formik.setFieldValue('expiryDate', date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                customInput={<TextField fullWidth label="Expiry date" />}
              />
              {formik.touched.expiryDate && formik.errors.expiryDate && (
                <div style={{ color: 'red', marginTop: 4 }}>{formik.errors.expiryDate}</div>
              )}
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="CVC/CVV"
                type="password"
                fullWidth
                value={formik.values.cvc}
                onChange={(e) => {
                  const { value } = e.target;
                  if (/^\d{0,3}$/.test(value)) {
                    formik.setFieldValue('cvc', value);
                  }
                }}
                inputProps={{ maxLength: 3 }}
              />
              {formik.touched.cvc && formik.errors.cvc && (
                <div style={{ color: 'red', marginTop: 4 }}>{formik.errors.cvc}</div>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ pr: '24px', pb: '24px' }}>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

PaymentMethodForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PaymentMethodForm;
