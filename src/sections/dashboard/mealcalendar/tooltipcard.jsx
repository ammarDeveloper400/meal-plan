import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Card, Stack, Button, CardMedia, Typography, IconButton } from '@mui/material';

import Iconify from 'src/components/iconify';

const recipes = [
  {
    id: 1,
    title: 'Greek salad',
    style: 'Comfort Meal',
    category: 'Breakfast',
    proteins: 'Beef and Pork',
    dietary: 'Gluten-free',
    preparation: 'Oven',
    image: '/assets/images/dish1.svg',
    favorite: true,
    level: 'Medium',
  },
];

const levels = ['Easy', 'Medium', 'Hard', 'Expert'];
const colors = ['#F79256', '#E0E0E0']; // Active (orange) and inactive (grey) colors

const TooltipCard = () => {
  const [recipeList, setRecipeList] = useState(recipes);
  const navigate = useNavigate();

  const toggleFavorite = (id) => {
    setRecipeList(
      recipeList.map((recipe) =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  return (
    <Box>
      {recipeList.map((recipe) => {
        const activeIndex = levels.indexOf(recipe.level) + 1;

        return (
          <Card key={recipe.id} sx={{ maxWidth: 400, position: 'relative', mb: 4 }}>
            <CardMedia component="img" image={recipe.image} alt={recipe.style} />
            <Box sx={{ position: 'absolute', top: 10, left: 10, color: 'white' }}>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleFavorite(recipe.id);
                    }}
                  >
                    {recipe.favorite ? (
                      <Iconify
                        sx={{ color: 'white', height: 20, width: 20 }}
                        icon="twemoji:red-heart"
                      />
                    ) : (
                      <Iconify
                        sx={{ color: 'white', height: 20, width: 20 }}
                        icon="mdi:heart-outline"
                      />
                    )}
                  </IconButton>

                  <Typography
                    sx={{
                      fontSize: '12px !important',
                      fontWeight: '400',
                      display: 'flex',
                      gap: 1,
                      alignItems: 'center',
                    }}
                  >
                    {' '}
                    See the recipe in detail
                    <Box
                      sx={{
                        border: '1px solid #CFCECE',
                        background: 'white',
                        borderRadius: '50px',
                        p: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <Iconify
                        onClick={() => navigate('/meal/recipe-detail')}
                        sx={{ color: '#000', width: '15px', height: '15px' }}
                        icon="basil:arrow-right-outline"
                      />
                    </Box>
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: '6px',
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        color: '#000',
                        padding: '2px 8px',
                        fontSize: '11px !important',
                        borderRadius: '5px',
                        fontWeight: '500',
                        minWidth: '50px',
                      }}
                    >
                      20 Likes
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        color: '#000',
                        padding: '2px 8px',
                        fontSize: '11px !important',
                        borderRadius: '5px',
                        fontWeight: '500',
                        minWidth: '50px',
                      }}
                    >
                      20 Downloads
                    </Button>
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                padding: 2,
                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, #070707 100%)',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                color: 'white',
              }}
            >
              <Box>
                {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ fontSize: '16px !important', fontWeight: '700' }}>
                    {recipe.title}
                  </Typography>
                  <Typography sx={{ fontSize: '14px !important', fontWeight: '500' }}>
                    Style: {recipe.style}
                  </Typography>
                  <Typography sx={{ fontSize: '12px !important', fontWeight: '500' }}>
                    Category: {recipe.category}
                  </Typography>
                  <Typography sx={{ fontSize: '12px !important', fontWeight: '500' }}>
                    Proteins: {recipe.proteins}
                  </Typography>
                  <Typography sx={{ fontSize: '12px !important', fontWeight: '500' }}>
                    Dietary: {recipe.dietary}
                  </Typography>
                  <Typography sx={{ fontSize: '12px !important', fontWeight: '500' }}>
                    Preparation: {recipe.preparation}
                  </Typography>
                </Box> */}

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: '14px !important',
                        fontWeight: '500',
                        pb: '15px',
                      }}
                    >
                      Style: {recipe.style}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: '12px !important',
                        fontWeight: '400',
                        pb: '9px',
                      }}
                    >
                      Category: {recipe.category}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: '12px !important',
                        fontWeight: '400',
                        pb: '9px',
                      }}
                    >
                      Proteins: {recipe.proteins}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: '12px !important',
                        fontWeight: '400',
                        pb: '9px',
                      }}
                    >
                      Dietary: {recipe.dietary}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: '12px !important',
                        fontWeight: '400',
                        pb: '9px',
                      }}
                    >
                      Preparation: {recipe.preparation}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      fontSize: '12px !important',
                      fontWeight: '500',
                    }}
                  >
                    Portion: 3
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                  <Typography sx={{ fontSize: '12px !important', fontWeight: '500' }}>
                    {recipe.level}
                  </Typography>
                  <Box sx={{ display: 'flex', ml: 1, gap: 0.5 }}>
                    {levels.map((_, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: 12,
                          height: 12,
                          backgroundColor: index < activeIndex ? colors[0] : colors[1],
                          borderRadius: '50%',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};

export default TooltipCard;
