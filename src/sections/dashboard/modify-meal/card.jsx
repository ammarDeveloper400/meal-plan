/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Card, Button, CardMedia, Typography, IconButton } from '@mui/material';

import Iconify from 'src/components/iconify';

const levels = ['Easy', 'Medium', 'Hard', 'Expert'];

const RecipeCard = ({ recipe, toggleFavorite }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ cursor: 'pointer', height: 1 }} onClick={() => navigate('/meal/recipe-detail')}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia component="img" height="406px" image={recipe.image} alt={recipe.style} />
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            position: 'absolute',
            top: 10,
            left: 10,
            color: 'white',
            borderRadius: '50%',
          }}
        >
          <IconButton
            aria-label="add to favorites"
            onClick={(event) => {
              event.stopPropagation(); // Prevent click from triggering navigation
              toggleFavorite(); // This will now use the function passed from MealPlanning
            }}
          >
            {recipe.favorite ? (
              <Iconify
                sx={{ color: 'white', height: '30px', width: '30px' }}
                icon="twemoji:red-heart"
              />
            ) : (
              <Iconify
                sx={{ color: 'white', height: '30px', width: '30px' }}
                icon="mdi:heart-outline"
              />
            )}
          </IconButton>
          <Box pt={1}>
            <Box
              sx={{
                backgroundColor: '#F79256',
                p: '5px 10px',
                cursor: 'pointer',
                borderRadius: '10px',
                alignItems: 'center',
                display: 'flex',
                zIndex: 999,
                '&:hover': {
                  backgroundColor: '#e27602',
                },
              }}
              onClick={(event) => {
                event.stopPropagation();
                // navigate('/meal/replace-meal');
              }}
            >
              <Iconify
                sx={{
                  color: '#000',
                  transition: 'color 0.3s ease', // Smooth color transition
                  '&:hover': {
                    color: '#FFF !important', // Color on hover
                  },
                }}
                icon="ion:shuffle"
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
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
              borderRadius: '4px',
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
        <Box
          sx={{
            cursor: 'pointer',
            px: '16px',
            pt: '16px',
            pb: '10px',
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, #070707 100%)',
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}
          onClick={() => navigate('/meal/recipe-detail')}
        >
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  alignItems: 'flex-end',
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: 'max-content',
                    color: '#000',
                    padding: '3px 7px',
                    fontSize: '9px !important',
                    fontWeight: '500',
                    borderRadius: '5px',
                  }}
                >
                  Number of servings: 1
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: '#000',
                    minWidth: 'max-content',
                    padding: '3px 7px',
                    fontSize: '9px !important',
                    fontWeight: '500',
                    borderRadius: '5px',
                  }}
                >
                 Calories per serving: 460
                </Button>
                {/* <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Iconify
                    style={{ color: 'white' }}
                    // sx={{ color: 'white', height: '30px', width: '30px' }}
                    icon="il:clock"
                  />
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '12px !important',
                      pl: '3px',
                      fontWeight: '500 !important',
                    }}
                  >
                    10 min
                  </Typography>
                </Box> */}
                {/* <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Iconify
                    style={{ color: 'yellow' }}
                    // sx={{ color: 'white', height: '30px', width: '30px' }}
                    icon="il:clock"
                  />
                  <Typography
                    sx={{
                      color: 'yellow',
                      fontSize: '12px !important',
                      pl: '3px',
                      fontWeight: '500 !important',
                    }}
                  >
                    10 minutes
                  </Typography>
                </Box> */}
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', pb: '10px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Typography sx={{ color: 'white', fontSize: '14px !important' }}>
                    {recipe.level}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: '4px' }}>
                    {levels.map((_, index) => {
                      const activeIndex = levels.indexOf(recipe.level);
                      return (
                        <Box
                          key={index}
                          sx={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: index <= activeIndex ? '#F79256' : '#E0E0E0',
                            borderRadius: '50%',
                          }}
                        />
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default RecipeCard;
