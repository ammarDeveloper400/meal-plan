import React, { useState } from 'react';

import { Box, Tab, Grid, Tabs, TextField, Typography, IconButton } from '@mui/material';

import Steps from './steps';
import RecipeCard from './card';
import Iconify from '../../../components/iconify';

const mealPlanData = [
  {
    id: 1,
    recipe: {
      likes: 20,
      downloads: 10,
      servingsCount: 2,
      caloriesCount: 300,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Pork',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      level: 'Hard',
      favorite: false,
      image: '/assets/images/dish1.svg',
    },
    steps: {
      title: 'Breakfast',
      subtitle: 'Cucumber boat',
      description:
        'This lasagna is perfect for our cold winter. This information will be uploaded with all the recipe information.',
      preparationSteps: [
        'Preheat the oven to 350 degrees Fahrenheit.',
        'Cook the ground beef in a skillet for about 10 minutes or until fully cooked.',
        'Season the beef with salt and pepper.',
        'Layer the lasagna noodles at the bottom and add the sauce.',
        'Dice the broccoli and bell peppers and add them to the dish.',
        'Sprinkle with 1/2 cup of Swiss cheese.',
        'Bake in the oven for 15 minutes.',
        'Bake in the oven for 15 minutes.',
        'Bake in the oven for 15 minutes.',
        'Enjoy!',
      ],
      ingredients: [
        { name: 'Ground beef', quantity: '1/2 pound' },
        { name: 'Bell peppers', quantity: '2' },
        { name: 'Lasagna noodles', quantity: '500g' },
        { name: 'Tomato sauce', quantity: '880ml' },
        { name: 'Swiss cheese', quantity: '1/2 cup' },
        { name: 'Broccoli', quantity: '4 cups' },
      ],
      comments: [
        'Take lean if available.',
        'Choose a well-known brand as it impacts the taste.',
        'Brand X is better.',
      ],
    },
  },
  {
    id: 2,
    recipe: {
      likes: 20,
      downloads: 10,
      servingsCount: 2,
      caloriesCount: 300,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Porksss',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      level: 'Easy',
      favorite: false,
      image: '/assets/images/dish1.svg',
    },
    steps: {
      title: 'Lunch',
      subtitle: 'Cucumber boat',
      description:
        'This lasagna is perfect for our cold winter. This information will be uploaded with all the recipe information.',
      preparationSteps: [
        'Preheat the oven to 350 degrees Fahrenheit.',
        'Cook the ground beef in a skillet for about 10 minutes or until fully cooked.',
        'Season the beef with salt and pepper.',
        'Layer the lasagna noodles at the bottom and add the sauce.',
        'Dice the broccoli and bell peppers and add them to the dish.',
        'Sprinkle with 1/2 cup of Swiss cheese.',
        'Bake in the oven for 15 minutes.',
        'Enjoy!',
      ],
      ingredients: [
        { name: 'Ground beef', quantity: '1/2 pound' },
        { name: 'Bell peppers', quantity: '2' },
        { name: 'Lasagna noodles', quantity: '500g' },
        { name: 'Tomato sauce', quantity: '880ml' },
        { name: 'Swiss cheese', quantity: '1/2 cup' },
        { name: 'Broccoli', quantity: '4 cups' },
      ],
      comments: [
        'Take lean if available.',
        'Choose a well-known brand as it impacts the taste.',
        'Brand X is better.',
      ],
    },
  },
  {
    id: 3,
    recipe: {
      likes: 20,
      downloads: 10,
      servingsCount: 2,
      caloriesCount: 300,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Porksss',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      level: 'Medium',
      favorite: false,
      image: '/assets/images/dish1.svg',
    },
    steps: {
      title: 'Dinner',
      subtitle: 'Cucumber boat',
      description:
        'This lasagna is perfect for our cold winter. This information will be uploaded with all the recipe information.',
      preparationSteps: [
        'Preheat the oven to 350 degrees Fahrenheit.',
        'Cook the ground beef in a skillet for about 10 minutes or until fully cooked.',
        'Season the beef with salt and pepper.',
        'Layer the lasagna noodles at the bottom and add the sauce.',
        'Dice the broccoli and bell peppers and add them to the dish.',
        'Sprinkle with 1/2 cup of Swiss cheese.',
        'Bake in the oven for 15 minutes.',
        'Enjoy!',
      ],
      ingredients: [
        { name: 'Ground beef', quantity: '1/2 pound' },
        { name: 'Bell peppers', quantity: '2' },
        { name: 'Lasagna noodles', quantity: '500g' },
        { name: 'Tomato sauce', quantity: '880ml' },
        { name: 'Swiss cheese', quantity: '1/2 cup' },
        { name: 'Broccoli', quantity: '4 cups' },
      ],
      comments: [
        'Take lean if available.',
        'Choose a well-known brand as it impacts the taste.',
        'Brand X is better.',
      ],
    },
  },
  {
    id: 4,
    recipe: {
      likes: 20,
      downloads: 10,
      servingsCount: 2,
      caloriesCount: 300,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Porksss',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      level: 'Medium',
      favorite: false,
      image: '/assets/images/dish1.svg',
    },
    steps: {
      title: 'Dessert',
      subtitle: 'Cucumber boat',
      description:
        'This lasagna is perfect for our cold winter. This information will be uploaded with all the recipe information.',
      preparationSteps: [
        'Preheat the oven to 350 degrees Fahrenheit.',
        'Cook the ground beef in a skillet for about 10 minutes or until fully cooked.',
        'Season the beef with salt and pepper.',
        'Layer the lasagna noodles at the bottom and add the sauce.',
        'Dice the broccoli and bell peppers and add them to the dish.',
        'Sprinkle with 1/2 cup of Swiss cheese.',
        'Bake in the oven for 15 minutes.',
        'Enjoy!',
      ],
      ingredients: [
        { name: 'Ground beef', quantity: '1/2 pound' },
        { name: 'Bell peppers', quantity: '2' },
        { name: 'Lasagna noodles', quantity: '500g' },
        { name: 'Tomato sauce', quantity: '880ml' },
        { name: 'Swiss cheese', quantity: '1/2 cup' },
        { name: 'Broccoli', quantity: '4 cups' },
      ],
      comments: [
        'Take lean if available.',
        'Choose a well-known brand as it impacts the taste.',
        'Brand X is better.',
      ],
    },
  },
  {
    id: 5,
    recipe: {
      likes: 20,
      downloads: 10,
      servingsCount: 2,
      caloriesCount: 300,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Porksss',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      level: 'Expert',
      favorite: false,
      image: '/assets/images/dish1.svg',
    },
    steps: {
      title: 'Snack',
      subtitle: 'Cucumber boat',
      description:
        'This lasagna is perfect for our cold winter. This information will be uploaded with all the recipe information.',
      preparationSteps: [
        'Preheat the oven to 350 degrees Fahrenheit.',
        'Cook the ground beef in a skillet for about 10 minutes or until fully cooked.',
        'Season the beef with salt and pepper.',
        'Layer the lasagna noodles at the bottom and add the sauce.',
        'Dice the broccoli and bell peppers and add them to the dish.',
        'Sprinkle with 1/2 cup of Swiss cheese.',
        'Bake in the oven for 15 minutes.',
        'Enjoy!',
      ],
      ingredients: [
        { name: 'Ground beef', quantity: '1/2 pound' },
        { name: 'Bell peppers', quantity: '2' },
        { name: 'Lasagna noodles', quantity: '500g' },
        { name: 'Tomato sauce', quantity: '880ml' },
        { name: 'Swiss cheese', quantity: '1/2 cup' },
        { name: 'Broccoli', quantity: '4 cups' },
      ],
      comments: [
        'Take lean if available.',
        'Choose a well-known brand as it impacts the taste.',
        'Brand X is better.',
      ],
    },
  },
  {
    id: 6,
    recipe: {
      likes: 20,
      downloads: 10,
      servingsCount: 2,
      caloriesCount: 300,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Porksss',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      level: 'Expert',
      favorite: false,
      image: '/assets/images/dish1.svg',
    },
    steps: {
      title: 'Add on',
      subtitle: 'Cucumber boat',
      description:
        'This lasagna is perfect for our cold winter. This information will be uploaded with all the recipe information.',
      preparationSteps: [
        'Preheat the oven to 350 degrees Fahrenheit.',
        'Cook the ground beef in a skillet for about 10 minutes or until fully cooked.',
        'Season the beef with salt and pepper.',
        'Layer the lasagna noodles at the bottom and add the sauce.',
        'Dice the broccoli and bell peppers and add them to the dish.',
        'Sprinkle with 1/2 cup of Swiss cheese.',
        'Bake in the oven for 15 minutes.',
        'Enjoy!',
      ],
      ingredients: [
        { name: 'Ground beef', quantity: '1/2 pound' },
        { name: 'Bell peppers', quantity: '2' },
        { name: 'Lasagna noodles', quantity: '500g' },
        { name: 'Tomato sauce', quantity: '880ml' },
        { name: 'Swiss cheese', quantity: '1/2 cup' },
        { name: 'Broccoli', quantity: '4 cups' },
      ],
      comments: [
        'Take lean if available.',
        'Choose a well-known brand as it impacts the taste.',
        'Brand X is better.',
      ],
    },
  },
];

const MealPlanning = () => {
  const [recipeList, setRecipeList] = useState(mealPlanData);
  const [activeTab, setActiveTab] = useState(0);
  const [text, setText] = useState('Week #34');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (event) => {
    if (event.target.value.length <= 25) {
      setText(event.target.value);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };
  const toggleFavorite = (id) => {
    setRecipeList(
      recipeList.map((recipe) =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box pt="35px">
      <Box sx={{ pb: '5px' }}>
      <Typography
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { sm: '10px', xs: '0px' },
            fontSize: '20px !important',
            fontWeight: '600 !important',
            alignItems: 'center',
          }}
        >
          {/* My actual meal plan:{' '} */}
          <Box display="flex" alignItems="center">
            {isEditing ? (
              <TextField
                value={text}
                onChange={handleTextChange}
                onBlur={handleBlur}
                autoFocus
                variant="standard"
                inputProps={{ maxLength: 25 }}
              />
            ) : (
              <Typography sx={{ fontSize: '20px !important', fontWeight: '600 !important' }}>
                {text}
              </Typography>
            )}
            <IconButton sx={{ color: 'black' }} onClick={handleEditClick}>
              <Iconify icon="mynaui:edit-one" />
            </IconButton>
          </Box>
        </Typography>
      </Box>
      <Box sx={{ border: '1px solid #000', borderRadius: '10px', p: '20px', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'space-between' },
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: '15px', sm: '10px' },
            pb: '10px',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '20px !important',
                fontWeight: '600 !important',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              My plan for the week 
            </Typography>
            <Typography
              sx={{
                fontSize: '12px !important',
                fontWeight: '400 !important',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
             Week #34 2023-03-06

            </Typography>
            <Typography
              sx={{
                fontSize: '12px !important',
                fontWeight: '600 !important',
                textAlign: { xs: 'center', sm: 'left' },
                mt:"20px",
                mb:'10px'
                // pb: { xs: '10px', sm: '0px' },
              }}
            >
              {/* 4270 calories */}
              Daily calories: 4270 (per person) 
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
          <Tabs
  value={activeTab}
  onChange={handleTabChange}
  textColor="primary"
  variant="scrollable"
  scrollButtons="auto"
  allowScrollButtonsMobile
  sx={{
    '& .MuiTabs-indicator': {
      display: 'none', // Hide the indicator line completely
    },
    '& .MuiTabs-scrollButtons': {
      color: '#000000', // Optional: Customize scroll buttons color
    },
  }}
>
  <Tab
    label="Monday-Tuesday-Wednesday"
    sx={{
      '&.Mui-selected': {
        color: '#000000', // Set active tab color to black
      },
      fontSize: { xs: '0.8rem', sm: '1rem' }, // Adjust font size for small screens
    }}
  />
  <Tab
    label="Thursday-Friday"
    sx={{
      '&.Mui-selected': {
        color: '#000000', // Set active tab color to black
      },
      fontSize: { xs: '0.8rem', sm: '1rem' }, // Adjust font size for small screens
    }}
  />
  <Tab
    label="Saturday-Sunday"
    sx={{
      '&.Mui-selected': {
        color: '#000000', // Set active tab color to black
      },
      fontSize: { xs: '0.8rem', sm: '1rem' }, // Adjust font size for small screens
    }}
  />
</Tabs>

          </Box>
        </Box>

        <Grid container>
          {mealPlanData.map((meal, index) => (
            <Box width={1} key={meal.id} sx={{ pb: '30px' }}>
              {' '}
              {/* Adjust padding as needed */}
              <Grid container spacing={2} alignItems="end">
                <Grid item xs={12} md={4}>
                  <RecipeCard recipe={meal.recipe} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Steps data={meal.steps} toggleFavorite={toggleFavorite} />
                </Grid>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MealPlanning;
