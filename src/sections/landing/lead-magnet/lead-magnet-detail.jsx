import React, { useState } from 'react';

import { Box, Tab, Grid, Tabs, Button, TextField, Typography, IconButton } from '@mui/material';

// import Steps from './steps';
import Steps from './steps';
// import RecipeCard from '../../dashboard/modify-meal/card';
import MealTable from './mealtable';
// import RecipeCard from './card';
import RecipeCard from './recipe-card';
// import MealTable from './mealtable';
import Iconify from '../../../components/iconify';
// import Steps from '../../dashboard/modify-meal/steps';
import SubscriptionDialog from './subscriptionDialog';
import GlobalDialog from '../../../components/category';
// import MealTable from '../../dashboard/modify-meal/mealtable';
import GroupDaysDialog from '../../../components/groupdaysdialog/groupdaysdialog';

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
      proteins: 'Beef and Porksss',
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
      level: 'Easy',
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
const initialGroups = [
  ['Monday', 'Tuesday', 'Wednesday'],
  ['Tuesday', 'Thursday'],
  ['Wednesday', 'Friday'],
  ['Thursday', 'Friday'],
  ['Friday', 'Saturday'],
  ['Saturday'],
  ['Sunday'],
];
const LeadMagnetDetail = () => {
  const [openGlobalDialog, setOpenGlobalDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [groups, setGroups] = useState(initialGroups);
  //   const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);
  const [recipeList, setRecipeList] = useState(mealPlanData);
  const [activeTab, setActiveTab] = useState(0);
  const [text, setText] = useState('Week #34');
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

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
//   const handleOpenGlobalDialog = () => setOpenGlobalDialog(true); // Open GlobalDialog
  const handleCloseGlobalDialog = () => setOpenGlobalDialog(false);

  const handleGlobalDialogSubmit = (selectedOption) => {
    console.log('Selected meal:', selectedOption);
    // Handle the selected meal option here (e.g., add it to the meal plan)
    setOpenGlobalDialog(false); // Close the dialog after submission
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

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  // const navigate = useNavigate();

  return (
    <>
      <Box pt="35px">
        <Box sx={{ pb: '3px' }}>
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
            My actual meal plan:{' '}
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
        <Box
          sx={{
            border: '1px solid #000',
            borderRadius: '10px',
            px: '20px',
            pt: '10px',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: { sm: 'space-between', xs: 'center' },
              alignItems: 'center',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Box mt={{ md: '-20px' }}>
              <Typography sx={{ fontSize: '20px !important', fontWeight: '600 !important' }}>
                My plan for the week
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px !important',
                  fontWeight: '400 !important',
                  // pb: { xs: '15px', sm: '0' },
                }}
              >
                {/* 4270 calories */}
                Week #34 2023-03-06
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px !important',
                  fontWeight: '600 !important',
                  mt: '20px',
                  mb: '10px',
                  // pb: { xs: '15px', sm: '0' },
                }}
              >
                {/* 4270 calories */}
                Daily calories: 4270 (per person)
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ sm: 'flex-end', xs: 'center' }}
            >
              <Button
                //   onClick={handleOpenDialog}
                onClick={() => setOpen(true)}
                variant="contained"
                sx={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center',
                  fontSize: '14px !important',
                  fontweight: '600 !important',
                  mt: '10px',
                  p: '5px 10px',
                }}
              >
                Change the grouping of days <Iconify icon="basil:edit-solid" />
              </Button>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'end',
                  mt: '27px',
                  mb: '10px',
                  px: { xs: '30px' },
                }}
              >
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
          </Box>

          <Grid container>
            {recipeList.map((meal, index) => (
              <Box width={1} key={meal.id} sx={{ pb: '30px' }}>
                <Grid container spacing={2} alignItems="end">
                  <Grid item xs={12} md={4}>
                    <RecipeCard
                      recipe={meal.recipe}
                      toggleFavorite={() => toggleFavorite(meal.id)}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Steps data={meal.steps} />
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              // onClick={() => navigate('/meal/add-meal')}
            //   onClick={handleOpenGlobalDialog}
            onClick={() => setOpen(true)}
              variant="contained"
              sx={{
                display: 'flex',
                gap: '8px',
                mb: '15px',
                alignItems: 'center',
                fontSize: '20px !important',
                fontweight: '400 !important',
                p: '5px 10px',
                borderRadius: '10px',
              }}
            >
              <Iconify icon="ph:plus-fill" /> Add a meal{' '}
            </Button>
          </Box>
        </Box>

        {/* Group Days Dialog */}
        <GroupDaysDialog
          open={openDialog}
          onClose={handleCloseDialog}
          groups={groups}
          onGroupChange={setGroups}
        />
        <GlobalDialog
          open={openGlobalDialog}
          onClose={handleCloseGlobalDialog}
          onSubmit={handleGlobalDialogSubmit}
        />
      </Box>
      <SubscriptionDialog open={open} onClose={() => setOpen(false)} />
      <Box>
        <MealTable />
      </Box>
    </>
  );
};

export default LeadMagnetDetail;
