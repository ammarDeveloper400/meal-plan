/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import plusIcon from '@iconify/icons-ic/twotone-add';

import { Box, Card, Button, CardMedia, Typography, IconButton } from '@mui/material';

import Iconify from 'src/components/iconify';

const levels = ['Easy', 'Medium', 'Hard', 'Expert'];

const RecipeCard = ({ recipe, toggleFavorite }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ cursor: 'pointer' }} onClick={() => navigate('/meal/add-recipe')}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia component="img" height="328px" image={recipe.image} alt={recipe.style} />
        {/* <IconButton
          aria-label="add to favorites"
          onClick={() => toggleFavorite(recipe.id)}
          sx={{
            position: 'absolute',
            top: 10,
            left: 10,
            color: 'white',
            borderRadius: '50%',
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
        </IconButton> */}
        <Box
          sx={{
            display: 'flex',
            gap: '5px',
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
              event.stopPropagation();
              toggleFavorite(recipe.id);
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
          {/* <Box sx={{ pt: '8px' }}>
            <Box
              sx={{
                cursor: 'pointer',
                borderRadius: '10px',
                alignItems: 'center',
                display: 'flex',
                backgroundColor: '#F79256', // Set the background color
                padding: '3px',
                justifyContent: 'center',
                transition: 'background-color 0.3s', // Smooth transition for background color
                '&:hover': {
            backgroundColor: '#FABE9A',
          },
              }}
              onClick={(event) => {
                event.stopPropagation();
                navigate('/meal/modify-meal');
              }}
            >
              <Iconify icon="mdi:plus" style={{ color: '#FFF', fontSize: '24px' }} />
            </Box>
          </Box> */}
          <Box pt={0.5}>
            <Box
              sx={{
                backgroundColor: 'rgba(247, 146, 86, 0.30)',
                borderRadius: '45%',
                p: '6px 6px',
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#F79256',
                  p: '3px 3px',
                  cursor: 'pointer',
                  borderRadius: '10px',
                  alignItems: 'center',
                  display: 'flex',
                  '&:hover': {
                    backgroundColor: '#e27602',
                  },
                }}
                onClick={() => navigate('/meal/modify-meal')}
              >
                {/* <img src="/assets/icons/plussssss.svg" alt="modify" /> */}
                <Iconify
                  sx={{ color: '#000', '&:hover': { color: '#fff' } }}
                  icon="fa6-solid:plus"
                />
              </Box>
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
        <Box
          sx={{
            px: '16px',
            pt: '10px',
            pb: '6px',
            background: 'linear-gradient(180deg, rgba(0, 0, 0,0.50) 0%, #070707 100%)',
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}
          onClick={() => navigate('/meal/add-recipe')}
        >
          <Box sx={{ display: 'flex' }}>
            <Box>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px !important',
                  fontWeight: '500',
                  pb: '8px',
                }}
              >
                Style: {recipe.style}
              </Typography>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '12px !important',
                  fontWeight: '400',
                  pb: '3px',
                }}
              >
                Category: {recipe.category}
              </Typography>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '12px !important',
                  fontWeight: '400',
                  pb: '3px',
                }}
              >
                Proteins: {recipe.proteins}
              </Typography>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '12px !important',
                  fontWeight: '400',
                  pb: '3px',
                }}
              >
                Dietary: {recipe.dietary}
              </Typography>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '12px !important',
                  fontWeight: '400',
                  // pb: '3px',
                }}
              >
                Preparation: {recipe.preparation}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              justifyContent: 'end',
            }}
          >
            <Typography sx={{ color: 'white', fontSize: '14px !important' }}>
              {recipe.level}
            </Typography>
            <Box sx={{ display: 'flex', gap: '4px' }}>
              {levels.map((level, index) => {
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
    </Card>
  );
};

export default RecipeCard;
