// import React from 'react';

// import { Box, Container } from '@mui/material';

// // import Bar from './bar';
// import Head from './head';
// import RecipeCard from './card';

// const ModifyMealPlus = () => (
//   <Box>
//     <Container maxWidth="2xl">
//       <Head />
//       {/* <Bar /> */}
//       <RecipeCard />
//     </Container>
//   </Box>
// );

// export default ModifyMealPlus;

/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Box, Grid, Pagination } from '@mui/material';

import Head from './head';
import RecipeCard from './card';

const ModifyMealPlus = () => {
  const recipes = [
    {
      id: 1,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Pork',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Medium',
    },
    {
      id: 2,
      style: 'Comfort Meal',
      category: 'Lunch',
      proteins: 'Chicken',
      dietary: 'Keto',
      preparation: 'Grill',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Easy',
    },
    {
      id: 3,
      style: 'Comfort Meal',
      category: 'Dinner',
      proteins: 'Fish',
      dietary: 'Vegan',
      preparation: 'Pan',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Hard',
    },
    {
      id: 4,
      style: 'Comfort Meal',
      category: 'Snack',
      proteins: 'Tofu',
      dietary: 'Vegetarian',
      preparation: 'Steam',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Expert',
    },
    {
      id: 5,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Pork',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Medium',
    },
    {
      id: 6,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Pork',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Medium',
    },
    {
      id: 7,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Pork',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Medium',
    },
    {
      id: 8,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Pork',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Medium',
    },
    {
      id: 9,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Pork',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Medium',
    },
    {
      id: 10,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Pork',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Medium',
    },
    {
      id: 11,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Pork',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Medium',
    },
    {
      id: 12,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Pork',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Medium',
    },
    {
      id: 13,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Pork',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Medium',
    },
    {
      id: 14,
      style: 'Comfort Meal',
      category: 'Breakfast',
      proteins: 'Beef and Pork',
      dietary: 'Gluten-free',
      preparation: 'Oven',
      image: '/assets/images/dish1.svg',
      favorite: false,
      level: 'Medium',
    },
  ];

  const recipesPerPage = 12; 
  const [recipeList, setRecipeList] = useState(recipes);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(recipeList.length / recipesPerPage);

  const toggleFavorite = (id) => {
    setRecipeList(
      recipeList.map((recipe) =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  // Get the recipes for the current page
  const startIndex = (currentPage - 1) * recipesPerPage;
  const selectedRecipes = recipeList.slice(startIndex, startIndex + recipesPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box p={2}>
      <Head/>
      <Grid container spacing={2}>
        {selectedRecipes?.map((recipe) => (
          <Grid item xs={12} sm={6} md={3} key={recipe.id}>
            <RecipeCard recipe={recipe} toggleFavorite={toggleFavorite} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            marginTop: 5,
            '& .MuiPaginationItem-root': {
              color: 'black',
            },
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: '#F79256',
              color: 'white',
              borderRadius: '50%',
            },
            '& .MuiPaginationItem-previousNext': {
              color: 'black',
            },
            '& .MuiPaginationItem-previousNext.Mui-selected': {
              backgroundColor: '#F79256',
              ':hover': {
                backgroundColor: '#F79256',
              },
              color: 'white',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ModifyMealPlus;
