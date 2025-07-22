import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  Box,
  Grid,
  Radio,
  Stack,
  Dialog,
  Button,
  Checkbox,
  FormGroup,
  TextField,
  RadioGroup,
  Typography,
  DialogContent,
  FormControlLabel,
} from '@mui/material';

const PreferencesDialog = ({ open, onClose }) => {
  // States for handling form values
  const [peopleCount, setPeopleCount] = useState(7);
  const [restrictions, setRestrictions] = useState({
    easy: false,
    medium: false,
    complex: false,
    expert: false,
    meals: false,
    most: false,
    downloaded: false,
    recently: false,
  });

  const [maxCalories, setMaxCalories] = useState('');

  // Handle changes
  const handlePeopleCountChange = (event) => {
    setPeopleCount(event.target.value);
  };

  const handleRestrictionChange = (event) => {
    setRestrictions({
      ...restrictions,
      [event.target.name]: event.target.checked,
    });
  };

  const handleComplexityChange = (event) => {
    const selectedComplexity = event.target.name;
    setRestrictions((prevRestrictions) => ({
      ...prevRestrictions,
      easy: selectedComplexity === 'easy',
      medium: selectedComplexity === 'medium',
      complex: selectedComplexity === 'complex',
      expert: selectedComplexity === 'expert',
    }));
  };

  const handlePrioritizeChange = (event) => {
    const { name, checked } = event.target;

    // If the checkbox is checked, set all others to unchecked
    if (checked) {
      setRestrictions((prevRestrictions) => {
        const newRestrictions = {
          ...prevRestrictions,
          meals: false,
          most: false,
          downloaded: false,
          recently: false,
        };
        newRestrictions[name] = true; // Set the selected one to true
        return newRestrictions;
      });
    } else {
      // If the checkbox is unchecked, just set it to false
      setRestrictions((prevRestrictions) => ({
        ...prevRestrictions,
        [name]: false,
      }));
    }
  };

  const handleCaloriesChange = (event) => {
    setMaxCalories(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogContent>
        <FormGroup>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography sx={{ fontSize: '18px !important', fontWeight: '700' }}>
                How many people are you planning this meal for?
              </Typography>
              <RadioGroup value={peopleCount} onChange={handlePeopleCountChange}>
                <Grid container>
                  <Grid xs={6} container direction="column">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <FormControlLabel
                        key={num}
                        value={num}
                        control={<Radio />}
                        label={num}
                        sx={{ '& .MuiFormControlLabel-label': { fontSize: '16px' } }}
                      />
                    ))}
                  </Grid>
                  <Grid xs={6} container direction="column">
                    {[7, 8, 9, 10, 11, 12].map((num) => (
                      <FormControlLabel
                        key={num}
                        value={num}
                        control={<Radio />}
                        label={num}
                        sx={{ '& .MuiFormControlLabel-label': { fontSize: '16px' } }}
                      />
                    ))}
                  </Grid>
                </Grid>
              </RadioGroup>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography sx={{ fontSize: '18px !important', fontWeight: '700' }}>
                Do you have any dietary restrictions?
              </Typography>
              <FormGroup>
                <Stack spacing={1}>
                  {[
                    { label: 'Vegan', name: 'vegan' },
                    { label: 'Vegetarian', name: 'vegetarian' },
                    { label: 'Pescatarian', name: 'pescatarian' },
                    { label: 'Gluten-free', name: 'glutenFree' },
                    { label: 'Egg-free', name: 'eggFree' },
                    { label: 'Nut-free', name: 'nutFree' },
                  ].map((restriction) => (
                    <Box
                      key={restriction.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 1,
                      }}
                    >
                      <Typography sx={{ marginRight: 2, fontSize: '16px !important' }}>
                        {restriction.label}
                      </Typography>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={restrictions[restriction.name]}
                            onChange={handleRestrictionChange}
                            name={restriction.name}
                          />
                        }
                        label=""
                      />
                    </Box>
                  ))}
                </Stack>
              </FormGroup>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography sx={{ fontSize: '18px !important', fontWeight: '700' }}>
                Level of complexity
              </Typography>
              <Stack>
                {[
                  { label: 'Easy', name: 'easy' },
                  { label: 'Medium', name: 'medium' },
                  { label: 'Complex', name: 'complex' },
                  { label: 'Expert', name: 'expert' },
                ].map((complexity) => (
                  <Box
                    key={complexity.name}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      px: 1,
                    }}
                  >
                    <Typography sx={{ marginRight: 2, fontSize: '16px !important' }}>
                      {complexity.label}
                    </Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={restrictions[complexity.name]}
                          onChange={handleComplexityChange}
                          name={complexity.name}
                        />
                      }
                      label=""
                    />
                  </Box>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography sx={{ fontSize: '18px !important', fontWeight: '700' }}>
                To prioritize
              </Typography>
              <Stack>
                {[
                  { label: 'Meals I have liked', name: 'meals' },
                  { label: 'Most liked', name: 'most' },
                  { label: 'Most downloaded', name: 'downloaded' },
                  { label: 'Recently added', name: 'recently' },
                ].map((prioritize) => (
                  <Box
                    key={prioritize.name}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      px: 1,
                    }}
                  >
                    <Typography sx={{ marginRight: 2, fontSize: '16px !important' }}>
                      {prioritize.label}
                    </Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={restrictions[prioritize.name]}
                          onChange={handlePrioritizeChange}
                          name={prioritize.name}
                        />
                      }
                      label=""
                    />
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </FormGroup>
        <Typography sx={{ fontSize: '14px !important', fontWeight: '600', pt: '20px', pb: '10px' }}>
          Maximum calories:
        </Typography>
        <Box
          sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}
        >
          <TextField
            label="Enter a maximum number of calories per day"
            value={maxCalories}
            onChange={handleCaloriesChange}
            type="number"
            size="small"
            InputLabelProps={{
              style: { fontSize: '14px' },
            }}
            InputProps={{
              style: { fontSize: '14px' },
            }}
            sx={{
              width: { xs: '100%', sm: '30%' },
              '& .MuiOutlinedInput-root': {
                fontSize: '14px',
              },
              '& .MuiFormLabel-root': {
                fontSize: '14px',
              },
            }}
          />
          <Button
            onClick={onClose}
            variant="contained"
            sx={{
              fontSize: '14px !important',
              marginLeft: { xs: 0, sm: '10px' },
              marginTop: { xs: '10px', sm: 0 },
            }}
          >
            Save my preferences
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

// Adding PropTypes validation
PreferencesDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PreferencesDialog;
