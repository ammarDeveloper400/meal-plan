import React, { useState } from 'react';

import { Box, Grid, Pagination } from '@mui/material';

import Bar from './bar';
import Head from './head';
import MealCard from './crads'; // Ensure this is the correct path

const initialRecipes = [
  {
    id: 1,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 2,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 3,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 4,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 5,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 6,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 7,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 8,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 9,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 10,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 11,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 12,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 13,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 14,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 15,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 16,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 17,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 18,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
];

const MealPlanReplace = () => {
  const [recipeList, setRecipeList] = useState(initialRecipes);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(12); // Total items per page

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const toggleFavorite = (id) => {
    setRecipeList(
      recipeList.map((recipe) =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  const currentItems = recipeList.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Box p={2}>
      <Box>
        <Head />
        <Bar />
        <Grid container spacing={2}>
          {currentItems.map((recipe) => (
            <Grid item xs={6} sm={4} md={3} key={recipe.id}>
              <MealCard recipe={recipe} toggleFavorite={toggleFavorite} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
          <Pagination
            count={Math.ceil(recipeList.length / itemsPerPage)}
            page={page}
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
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MealPlanReplace;
