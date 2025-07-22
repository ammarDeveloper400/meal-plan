/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import React, { useRef, useState } from 'react';

import { Box, Card, CardMedia, Typography, IconButton } from '@mui/material';

import Iconify from 'src/components/iconify';

const recipes = [
  {
    id: 1,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dish1.svg',
    favorite: false,
  },
  {
    id: 2,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist2acc.svg',
    favorite: false,
  },
  {
    id: 3,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist3acc.svg',
    favorite: false,
  },
  {
    id: 4,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist4acc.svg',
    favorite: false,
  },
  {
    id: 5,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 6,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist2acc.svg',
    favorite: false,
  },
  {
    id: 7,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dish1.svg',
    favorite: false,
  },
  {
    id: 8,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist2acc.svg',
    favorite: false,
  },
  {
    id: 9,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist3acc.svg',
    favorite: false,
  },
  {
    id: 10,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist4acc.svg',
    favorite: false,
  },
  {
    id: 11,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 12,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist2acc.svg',
    favorite: false,
  },
  {
    id: 13,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist2acc.svg',
    favorite: false,
  },
  {
    id: 14,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist2acc.svg',
    favorite: false,
  },
  {
    id: 15,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist2acc.svg',
    favorite: false,
  },
  {
    id: 16,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist2acc.svg',
    favorite: false,
  },
  {
    id: 17,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist2acc.svg',
    favorite: false,
  },
  {
    id: 18,
    title: 'Greek Salad',
    description:
      'This Greek salad is perfect for our cold winter. This information will be updated',
    image: '/assets/images/dist2acc.svg',
    favorite: false,
  },
];

const RecipeCard = () => {
  const [recipeList, setRecipeList] = useState(recipes);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate

  const toggleFavorite = (id) => {
    setRecipeList(
      recipeList.map((recipe) =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -224, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 224, behavior: 'smooth' });
    }
  };

  const truncateDescription = (description) => {
    const maxLength = 74;
    return description.length > maxLength ? `${description.slice(0, maxLength)}....` : description;
  };

  const handleCardClick = (id) => {
    navigate(`/account/card-detail`); // Navigate to card detail page with the card ID
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Box
        ref={scrollContainerRef}
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'nowrap',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {recipeList.map((recipe) => (
          <Card
            key={recipe.id}
            sx={{
              minWidth: '224px',
              maxWidth: '224px',
              mt: 1,
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer', // Add cursor pointer on hover
            }}
            onClick={() => handleCardClick(recipe.id)} // Navigate on card click
          >
            <Box sx={{ position: 'relative' }}>
              <CardMedia component="img" height="328px" image={recipe.image} alt={recipe.title} />
              <IconButton
                aria-label="add to favorites"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click event when clicking favorite icon
                  toggleFavorite(recipe.id);
                }}
                sx={{ position: 'absolute', top: 10, left: 10 }}
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
              <Box
                sx={{
                  padding: '16px',
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, #070707 100%)',
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                }}
              >
                <Typography sx={{ color: 'white', fontSize: '16px !important', fontWeight: '700' }}>
                  {recipe.title}
                </Typography>
                <Typography sx={{ color: 'white', fontSize: '14px !important', fontWeight: '400' }}>
                  {truncateDescription(recipe.description)}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: '-60px',
          transform: 'translateX(-50%)',
          gap: '20px',
          display: 'flex',
        }}
      >
        <IconButton onClick={scrollLeft} sx={{ border: '1px solid #E5E5E5', borderRadius: '50%' }}>
          <img src="/assets/icons/arrowleftblack.svg" alt="arrow" />
        </IconButton>
        <IconButton onClick={scrollRight} sx={{ border: '1px solid #E5E5E5', borderRadius: '50%' }}>
          <img src="/assets/icons/arrowrightblack.svg" alt="arrow" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default RecipeCard;
