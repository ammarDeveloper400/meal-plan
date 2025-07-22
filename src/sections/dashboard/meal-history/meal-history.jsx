import React, { useState } from 'react';

import { Box, Tab, Grid, Tabs, Button, TextField, Typography, IconButton } from '@mui/material';

import Steps from '../meal-consult/steps';
import RecipeCard from '../meal-consult/card';
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

const MealPlanHistory = () => {
  const [recipeList, setRecipeList] = useState(mealPlanData);
  const [text, setText] = useState('Week#34');
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
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
      recipeList.map((meal) =>
        meal.id === id
          ? { ...meal, recipe: { ...meal.recipe, favorite: !meal.recipe.favorite } }
          : meal
      )
    );
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
      <Box sx={{ border: '1px solid #000', borderRadius: '10px', px: '20px', pt:'20px', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'space-between' },
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: '15px', sm: '10px' },
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
                display: { xs: 'block', md: 'none' }, // Hide on small screens, show on medium and larger
              }}
            >
              {/* 4270 calories */}
              Daily calories: 4270 (per person)
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: '5px', sm: '10px' },
              alignItems: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              justifyContent: { xs: 'flex-end' },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <Button
              sx={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                fontSize: { xs: '12px', sm: '14px' },
                fontWeight: '400',
                backgroundColor: '#272932',
                ':hover': { backgroundColor: '#272932' },
                color: '#fff',
                p: '5px 10px',
                flex: { xs: '1 0 48%', sm: 'none' },
              }}
            >
              Download <Iconify icon="oi:cloud-download" />
            </Button>
            <Button
              sx={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                fontSize: { xs: '12px', sm: '14px' },
                fontWeight: '400',
                backgroundColor: '#272932',
                ':hover': { backgroundColor: '#272932' },
                color: '#fff',
                p: '5px 10px',
                flex: { xs: '1 0 48%', sm: 'none' },
              }}
            >
              Print <Iconify icon="ic:round-print" />
            </Button>
            <Button
              sx={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                fontSize: { xs: '12px', sm: '14px' },
                fontWeight: '400',
                backgroundColor: '#272932',
                ':hover': { backgroundColor: '#272932' },
                color: '#fff',
                p: '5px 10px',
                flex: { xs: '1 0 48%', sm: 'none' },
              }}
            >
              Send by email <Iconify icon="ic:round-mail" />
            </Button>
            <Button
              sx={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                fontSize: { xs: '12px', sm: '14px' },
                fontWeight: '400',
                backgroundColor: '#272932',
                ':hover': { backgroundColor: '#272932' },
                color: '#fff',
                p: '5px 10px',
                flex: { xs: '1 0 48%', sm: 'none' },
              }}
            >
              Send by SMS <Iconify icon="ic:round-sms" />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            py: '20px',
            display: 'flex',
            // gap: '20px',
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'end', md: 'space-between' },
            flexWrap: { xs: 'wrap', sm: 'nowrap' },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '12px !important',
                fontWeight: '600 !important',
                textAlign: { xs: 'center', sm: 'left' },
                display: { xs: 'none', md: 'block' }, // Hide on small screens, show on medium and larger
              }}
            >
              {/* 4270 calories */}
              Daily calories: 4270 (per person)
            </Typography>
          </Box>

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

        <Grid container>
          {recipeList.map((meal) => (
            <Box width={1} key={meal.id} sx={{ pb: '30px' }}>
              <Grid container spacing={2} alignItems="end">
                <Grid item xs={12} md={4}>
                  {/* Pass the toggleFavorite function as a prop */}
                  <RecipeCard recipe={meal.recipe} toggleFavorite={() => toggleFavorite(meal.id)} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Steps data={meal.steps} />
                </Grid>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MealPlanHistory;
