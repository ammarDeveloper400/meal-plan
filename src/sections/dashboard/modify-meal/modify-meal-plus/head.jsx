import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Grid,
  Menu,
  Button,
  Tooltip,
  Checkbox,
  MenuItem,
  TextField,
  FormGroup,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';

import Iconify from 'src/components/iconify';

const Head = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortOrder, setSortOrder] = useState('Sort order');

  const navigate = useNavigate();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // State to manage form data with arrays
  const [formState, setFormState] = useState({
    mealStyle: [],
    mealCategory: [],
    proteinType: [],
    levelOfComplexity: [],
    dietaryRestriction: [],
    preparationType: [],
    maxCalories: '',
    cookingtime: [],
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (order) => {
    setSortOrder(order);
    handleClose();
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Handle checkbox change and update the array
  const handleCheckboxChange = (section, name) => (event) => {
    const isChecked = event.target.checked;
    setFormState((prevState) => ({
      ...prevState,
      [section]: isChecked
        ? [...prevState[section], name]
        : prevState[section].filter((item) => item !== name),
    }));
  };

  const handleClearFilters = () => {
    setFormState({
      mealStyle: [],
      mealCategory: [],
      proteinType: [],
      levelOfComplexity: [],
      dietaryRestriction: [],
      preparationType: [],
      maxCalories: '',
    });
  };

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const renderCheckboxWithLabel = (label, section, name) => (
    <Grid container alignItems="center">
      <Grid item xs={7}>
        <Typography sx={{ fontSize: '12px !important', fontWeight: '400 !important' }}>
          {label}
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Checkbox
          checked={formState[section].includes(name)}
          onChange={handleCheckboxChange(section, name)}
        />
      </Grid>
    </Grid>
  );

  return (
    <Box>
      {/* ----------- Buttons ----------- */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: '20px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Button
          variant="contained"
          sx={{
            fontSize: '16px !important',
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            fontWeight: '400',
          }}
          onClick={() => window.history.back()}
        >
          Return to the previous section
          <Iconify sx={{ color: '#fff' }} icon="lets-icons:refund-back" />
        </Button>

        <Button
          onClick={() => navigate('/meal')}
          variant="contained"
          sx={{ fontSize: '16px !important', fontWeight: '400 !important' }}
        >
          Main menu
        </Button>
      </Box>

      {/* ----------- Search ----------- */}
      <Grid container spacing={2} alignItems="center" py={{ sm: 6, xs: 4 }}>
        <Grid item xs={12} md={6}>
          {/* <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            name="search"
            size="medium"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Iconify icon="eva:search-fill" style={{ color: '#F57C00' }} />
                </InputAdornment>
              ),
              style: {
                borderRadius: '10px',
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                fontSize: '14px',
              },
              '& .MuiFormLabel-root': {
                fontSize: '14px',
              },
            }}
          /> */}
            <TextField
              fullWidth
              autoComplete='off'
              variant="outlined"
              placeholder="Search a recipe..."
              name="search"
              sx={{
                '& .MuiOutlinedInput-root': {
                  padding: '0px',
                  fontSize: '14px',
                  background: '#E8F0FE',
                  height: '44px',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: 'none', // Remove border on hover
                  },
                },
                '& .MuiFormLabel-root': {
                  fontSize: '14px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none', // Optional: Removes border by default
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton sx={{ padding: '0px' }} disableRipple>
                      <Button
                        sx={{
                          padding: '9px',
                          border: '1px solid grey',
                          color: '#000',
                          background: '#fff !important',
                        }}
                        disableRipple
                        variant="outlined"
                      >
                        Search <Iconify ml={1} icon="eva:search-fill" color="#F57C00" />
                      </Button>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
        </Grid>

        <Grid item xs={12} md={1} sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            style={{
              color: '#fff',
              borderRadius: '10px',
              padding: '10px 20px',
            }}
            startIcon={<Iconify sx={{ color: '#fff' }} icon="mi:filter" />}
            onClick={toggleFilter}
          >
            Filters
          </Button>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'end' }, // Center on xs, right-align on sm and above
          pb: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '15px', sm: '10px' }, // Smaller gap on xs, larger on sm and above
            flexDirection: { xs: 'column', sm: 'row' }, // Stack items vertically on xs, horizontally on sm and above
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #000',
              py: '6px',
              px: '10px',
              borderRadius: '10px',
              width: { xs: '100%', sm: 'max-content' }, // Full width on xs, max-content on sm and above
              cursor: 'pointer',
              justifyContent: 'center', // Center the content on small screens
            }}
            // onClick={() => navigate('/meal/favorite-meal')}
          >
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '14px' },
                fontWeight: '400',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              View my favorite recipes
              <Box
                sx={{
                  backgroundColor: '#F79256',
                  borderRadius: '5px',
                  p: { xs: '1px', sm: '2px' },
                  width: { xs: '20px', sm: '30px' },
                  display: 'flex',
                  justifyContent: 'center', // Center the heart icon
                  alignItems: 'center',
                }}
              >
                <img style={{ cursor: 'pointer' }} src="/assets/icons/heart.svg" alt="arrow" />
              </Box>
            </Typography>
          </Box>

          <Button
            variant="contained"
            endIcon={<Iconify style={{ color: '#fff' }} icon="ep:arrow-down" />}
            sx={{
              color: '#fff',
              textTransform: 'none',
              borderRadius: '10px',
              height: '40px',
              px: 3,
              width: { xs: '100%', sm: 'auto' }, // Full width on xs, auto on larger screens
            }}
            onClick={handleClick}
          >
            {sortOrder}
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} sx={{ mt: 1 }}>
            <MenuItem onClick={() => handleSelect('Meals I liked')}>Meals I liked</MenuItem>
            <MenuItem onClick={() => handleSelect('Most liked')}>Most liked</MenuItem>
            <MenuItem onClick={() => handleSelect('Most downloaded')}>Most downloaded</MenuItem>
            <MenuItem onClick={() => handleSelect('Recently added')}>Recently added</MenuItem>
            <MenuItem onClick={() => handleSelect('Total time needed')}>Total time needed</MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* Filter section */}
      {isFilterOpen && (
        <Box sx={{ border: '1px solid #000', borderRadius: '10px', padding: '20px', mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2.25}>
              <Typography sx={{ fontSize: '16px !important', fontWeight: '600 !important' }}>
                Meal style:
              </Typography>
              <FormGroup>
                {renderCheckboxWithLabel('Comfort meals', 'mealStyle', 'Comfortmeals')}
                {renderCheckboxWithLabel('Sautéed dishes', 'mealStyle', 'Sautéeddishes')}
                {renderCheckboxWithLabel('Raw', 'mealStyle', 'Raw')}
                {renderCheckboxWithLabel('Salads', 'mealStyle', 'Salads')}
                {renderCheckboxWithLabel('Pasta', 'mealStyle', 'Pasta')}
                {renderCheckboxWithLabel('Pizzas', 'mealStyle', 'Pizzas')}
                {renderCheckboxWithLabel('Breads', 'mealStyle', 'Breads')}
                {renderCheckboxWithLabel('Stews', 'mealStyle', 'Stews')}
                {renderCheckboxWithLabel('Sandwiches', 'mealStyle', 'Sandwiches')}
                {renderCheckboxWithLabel('Soups', 'mealStyle', 'Soups')}
                {renderCheckboxWithLabel('Burgers', 'mealStyle', 'Burgers')}
                {renderCheckboxWithLabel('To share', 'mealStyle', 'toShare')}
                {renderCheckboxWithLabel('Cocktails', 'mealStyle', 'Cocktails')}
                {renderCheckboxWithLabel('Mocktails', 'mealStyle', 'Mocktails')}
                {renderCheckboxWithLabel('Smoothie bar', 'mealStyle', 'Smoothiebar')}
                {renderCheckboxWithLabel('Coffee & teas', 'mealStyle', 'Coffeeteas')}
                {renderCheckboxWithLabel('Sweets', 'mealStyle', 'Sweets')}
                {renderCheckboxWithLabel('Tacos', 'mealStyle', 'Tacos')}
                {/* Add more options similarly */}
              </FormGroup>
            </Grid>

            {/* Meal Categories and Protein Type */}
            <Grid item xs={6} md={2.25}>
              <Box>
                <Typography sx={{ fontSize: '16px !important', fontWeight: '600 !important' }}>
                  Meal categories:
                </Typography>
                <FormGroup>
                  {renderCheckboxWithLabel('Breakfast', 'mealCategory', 'Breakfast')}
                  {renderCheckboxWithLabel('Snacks', 'mealCategory', 'Snacks')}
                  {renderCheckboxWithLabel('Beverages', 'mealCategory', 'Beverages')}
                  {renderCheckboxWithLabel('Appetizers', 'mealCategory', 'Appetizers')}
                  {renderCheckboxWithLabel('Main dishes', 'mealCategory', 'Main dishes')}
                  {renderCheckboxWithLabel('Dessert', 'mealCategory', 'Dessert')}
                  {renderCheckboxWithLabel('Sides', 'mealCategory', 'Sides')}
                </FormGroup>
              </Box>

              <Box mt={2}>
                <Typography sx={{ fontSize: '16px !important', fontWeight: '600 !important' }}>
                  Protein type:
                </Typography>
                <FormGroup>
                  {renderCheckboxWithLabel('Chicken', 'proteinType', 'Chicken')}
                  {renderCheckboxWithLabel('Beef', 'proteinType', 'Beef')}
                  {renderCheckboxWithLabel('Pork', 'proteinType', 'Pork')}
                  {renderCheckboxWithLabel('Turkey', 'proteinType', 'Turkey')}
                  {renderCheckboxWithLabel('Lamb', 'proteinType', 'Lamb')}
                  {renderCheckboxWithLabel('Rabbit', 'proteinType', 'Rabbit')}
                  {renderCheckboxWithLabel('Tofu', 'proteinType', 'Tofu')}
                  {renderCheckboxWithLabel('Fish', 'proteinType', 'Fish')}
                  {renderCheckboxWithLabel('Seafood', 'proteinType', 'Seafood')}

                  {/* Add more options similarly */}
                </FormGroup>
              </Box>
            </Grid>

            {/* Dietary Restrictions */}
            <Grid item xs={6} md={2.25}>
              <Box sx={{ height: { md: '43%' } }}>
                <Typography sx={{ fontSize: '16px !important', fontWeight: '600 !important' }}>
                  Dietary restrictions:
                </Typography>
                <FormGroup>
                  {renderCheckboxWithLabel('Vegan', 'dietaryRestriction', 'Vegan')}
                  {renderCheckboxWithLabel('Vegetarian', 'dietaryRestriction', 'Vegetarian')}
                  {renderCheckboxWithLabel('Pescatarian', 'dietaryRestriction', 'Pescatarian')}
                  {renderCheckboxWithLabel('Gluten-free', 'dietaryRestriction', 'Gluten-free')}
                  {renderCheckboxWithLabel('Egg-free', 'dietaryRestriction', 'Egg-free')}
                  {renderCheckboxWithLabel('Nut-free', 'dietaryRestriction', 'Nut-free')}
                  {/* Add more options similarly */}
                </FormGroup>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '16px !important', fontWeight: '600 !important' }}>
                  Preparation type:
                </Typography>
                <FormGroup>
                  {renderCheckboxWithLabel('Air Fryer', 'preparationType', 'Air Fryer')}
                  {renderCheckboxWithLabel('Oven', 'preparationType', 'Oven')}
                  {renderCheckboxWithLabel('BBQ', 'preparationType', 'BBQ')}
                  {renderCheckboxWithLabel('Microwave', 'preparationType', 'Microwave')}
                  {renderCheckboxWithLabel('Crockpot', 'preparationType', 'Crockpot')}
                  {renderCheckboxWithLabel('Sheet Pan', 'preparationType', 'Sheet Pan')}
                  {renderCheckboxWithLabel('Skillet', 'preparationType', 'Skillet')}
                  {/* Add more options similarly */}
                </FormGroup>
              </Box>
            </Grid>

            {/* Preparation Type and Calories */}

            {/* Level of Complexity */}
            <Grid item xs={6} md={2.25}>
              <Box height="43%">
                <Typography
                  sx={{
                    position: 'relative',
                    fontSize: '16px !important',
                    fontWeight: '600 !important',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Level of complexity:
                  <Tooltip
                    title="Select desired complexity level: Easy = Less than 30 minutes or 5 ingredients or fewer, Medium = Between 30 minutes and 1 hour OR between 5 and 10 ingredients, Hard = More than 1 hour OR more than 10 ingredients."
                    arrow
                  >
                    <Box
                      size="small"
                      disableRipple
                      sx={{
                        ':hover': { backgroundColor: 'transparent' },
                        // position: 'absolute',
                        p: 0,
                        right: '0',
                      }}
                    >
                      <Iconify
                        sx={{ color: '#000', width: '14px', height: '14px', ml: 1 }}
                        icon="mdi:question-mark-circle-outline"
                      />
                    </Box>
                  </Tooltip>
                </Typography>
                <FormGroup>
                  {renderCheckboxWithLabel('Easy', 'levelOfComplexity', 'Easy')}
                  {renderCheckboxWithLabel('Medium', 'levelOfComplexity', 'Medium')}
                  {renderCheckboxWithLabel('Hard', 'levelOfComplexity', 'Hard')}
                  {renderCheckboxWithLabel('Expert', 'levelOfComplexity', 'Expert')}

                  {/* Add more options similarly */}
                </FormGroup>
              </Box>
              <Box
                position="absolute"
                sx={{ width: { md: '20%', xs: '50%', sm: '50%' }, mt: { md: '0px', xs: '20px' } }}
              >
                <Typography
                  sx={{
                    fontSize: '16px !important',
                    fontWeight: '600 !important',
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  Total time needed:
                  <Tooltip
                    title="Amount of time needed based on the recommended number of servings."
                    arrow
                  >
                    <Box
                      size="small"
                      disableRipple
                      sx={{
                        ':hover': { backgroundColor: 'transparent' },
                        p: 0,
                        ml: 1, // Adds some spacing to the left of the icon
                      }}
                    >
                      <Iconify
                        sx={{ color: '#000', width: '14px', height: '14px' }}
                        icon="mdi:question-mark-circle-outline"
                      />
                    </Box>
                  </Tooltip>
                </Typography>
                <FormGroup>
                  {renderCheckboxWithLabel(
                    '15 minutes or less',
                    'cookingtime',
                    '15 minutes or less'
                  )}
                  {renderCheckboxWithLabel('15 to 30 minutes', 'cookingtime', '15 to 30 minutes')}
                  {renderCheckboxWithLabel('30 to 60 minutes', 'cookingtime', '30 to 60 minutes')}
                  {renderCheckboxWithLabel('Over 1 hour', 'cookingtime', 'Over 1 hour')}
                </FormGroup>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <Typography
                  sx={{ fontSize: '16px !important', fontWeight: '600 !important', mb: 1 }}
                >
                  Maximum calories:
                  <Tooltip
                    title="The maximum number of calories not to exceed per day (per person)."
                    arrow
                  >
                    <Button disableRipple sx={{ ':hover': { backgroundColor: 'transparent' } }}>
                      <Iconify
                        sx={{ color: '#000', width: '14px', height: '14px' }}
                        icon="mdi:question-mark-circle-outline"
                      />
                    </Button>
                  </Tooltip>
                </Typography>
                <TextField
                  placeholder="Enter a maximum number of calories"
                  variant="outlined"
                  fullWidth
                  name="maxCalories"
                  value={formState.maxCalories}
                  onChange={handleInputChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      fontSize: '14px',
                    },
                    '& .MuiFormLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  // mt: 2,
                }}
              >
                <Button
                  variant="outlined"
                  onClick={handleClearFilters}
                  sx={{
                    color: '#f57c00',
                    borderColor: '#f57c00',
                    textTransform: 'none',
                    borderRadius: '10px',
                    px: 4,
                  }}
                >
                  Clear all filters
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Head;
