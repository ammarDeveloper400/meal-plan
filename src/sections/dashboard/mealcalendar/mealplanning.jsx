import { Icon } from '@iconify/react';
import React, { useState } from 'react';

import { Box, Grid, Card, Button, Tooltip, CardMedia, Typography, IconButton } from '@mui/material';

import TooltipCard from './tooltipcard';
import MealTable from '../meal-consult/mealtable';
import Iconify from '../../../components/iconify';

// Example recipe data
const initialRecipeList = [
  {
    id: 1,
    title: 'Homemade Lasagna',
    imageUrl: '/assets/images/lasagna.svg', // Replace with your image path
    favorite: false,
    calories: 2200,
  },
  {
    id: 2,
    title: 'Homemade Lasagna',
    imageUrl: '/assets/images/lasagna.svg', // Replace with your image path
    favorite: false,
    calories: 2100,
  },
  {
    id: 3,
    title: 'Homemade Lasagna',
    imageUrl: '/assets/images/lasagna.svg', // Replace with your image path
    favorite: false,
    calories: 2567,
  },
];

const MealPlanning = () => {
  const [recipeList, setRecipeList] = useState(initialRecipeList);
  const [favoriteId, setFavoriteId] = useState(null);

  const handleFavoriteToggle = (id) => {
    setRecipeList((prevList) =>
      prevList.map((recipe) => ({
        ...recipe,
        favorite: recipe.id === id ? recipe.id !== favoriteId : false,
      }))
    );
    setFavoriteId(id === favoriteId ? null : id);
  };

  return (
    <>
      <Box
        sx={{ padding: '20px', borderRadius: '15px', border: '1px solid #000', overflowX: 'auto' }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '20px',
            flexDirection: { sm: 'column', xs: 'column', md: 'row' },
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              alignSelf: { sm: 'flex-start', xs: 'flex-start', md: 'center' },
              mb: { sm: '10px', xs: '10px', md: '0' },
              width: { xs: '100%', sm: '100%', md: 'auto' },
            }}
          >
            <Typography sx={{ fontSize: '20px !important', fontWeight: '600 !important' }}>
              My calendar for the week
            </Typography>
            <Typography sx={{ fontSize: '12px !important', fontWeight: '400 !important' }}>
              Week #34 2023-03-06
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              justifyContent: { xs: 'space-between', sm: 'flex-start' },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            {['Download', 'Print', 'Send by email', 'Send by SMS'].map((label, index) => (
              <Button
                key={index}
                sx={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center',
                  fontSize: '14px !important',
                  fontWeight: '400',
                  backgroundColor: '#272932',
                  ':hover': { backgroundColor: '#272932' },
                  color: '#fff',
                  p: '5px 10px',
                  flex: { xs: '1 0 48%', sm: 'none' },
                }}
              >
                {label}
                <Iconify icon={getIconName(label)} />
              </Button>
            ))}
          </Box>
        </Box>

        <Box sx={{ minWidth: '1000px' }}>
          {/* Days Section */}
          <Grid container spacing={2}>
            <Grid item xs={1} />
            {[
              ['Monday ', 'Tuesday ', 'Wednesday '],
              ['Thursday ', 'Friday '],
              ['Saturday ', 'Sunday '],
            ].map((days, index) => (
              <Grid item xs={index === 0 ? 4.5 : 3.1} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    gap: '10px',
                    border: '1px solid #000',
                    borderRadius: '15px',
                    py: '5px',
                    // px: '30px',
                  }}
                >
                  {days.map((day, i) => (
                    <Typography key={i} sx={{ fontSize: '10px !important', fontWeight: '400' }}>
                      {day}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Meals Section */}
          {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Add on'].map((meal, mealIndex) => (
            <Grid container spacing={2} key={mealIndex} sx={{ pt: '20px' }}>
              <Grid
                item
                xs={1}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ fontSize: '16px !important', fontWeight: '400' }}>
                  {meal}
                </Typography>
              </Grid>
              {recipeList.map((recipe) => (
                <Grid item xs={1.5} key={recipe.id}>
                  <Tooltip
                    componentsProps={{
                      tooltip: {
                        sx: {
                          width: '400px',
                          p: 0,
                          bgcolor: 'transparent',
                        },
                      },
                    }}
                    title={
                      <Box>
                        <TooltipCard />
                      </Box>
                    }
                    arrow
                  >
                    <Card sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={recipe.imageUrl}
                        alt={recipe.title}
                      />
                      <IconButton
                        aria-label="add to favorites"
                        sx={{ position: 'absolute', top: 0, left: 0 }}
                        onClick={() => handleFavoriteToggle(recipe.id)}
                      >
                        <Icon
                          icon={recipe.id === favoriteId ? 'twemoji:red-heart' : 'ph:heart-light'}
                          width={24}
                        />
                      </IconButton>
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          width: '100%',
                          background: 'rgba(0, 0, 0, 0.5)',
                          color: 'white',
                          textAlign: 'center',
                          padding: '5px',
                        }}
                      >
                        <Typography sx={{ fontSize: '10px !important', fontWeight: '400' }}>
                          {recipe.title}
                        </Typography>
                      </Box>
                    </Card>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          ))}

          {/* Calories Section */}
          <Grid container spacing={2} pt={5}>
            <Grid item xs={1.4} />
            {recipeList.map((recipe) => (
              <Grid item xs={1.5} key={recipe.id}>
                <Typography sx={{ fontSize: '12px !important', fontWeight: '400 !important' }}>
                  {recipe.calories} calories
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box>
        <MealTable />
      </Box>
    </>
  );
};

const getIconName = (label) => {
  switch (label) {
    case 'Download':
      return 'oi:cloud-download';
    case 'Print':
      return 'ic:round-print';
    case 'Send by email':
      return 'ic:round-mail';
    case 'Send by SMS':
      return 'ic:round-sms';
    default:
      return '';
  }
};

export default MealPlanning;
