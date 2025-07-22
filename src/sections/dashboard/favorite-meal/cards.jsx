import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Card, CardMedia, TextField, Typography, IconButton,Pagination } from '@mui/material';

import Iconify from 'src/components/iconify';

const recipes = [
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
  {
    id: 19,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
  {
    id: 20,
    title: 'Week #34 ',
    description: '2023-03-06 ',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
];

const Cards = () => {
  const navigate = useNavigate();

  const [recipeList, setRecipeList] = useState(recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [tempTitle, setTempTitle] = useState('');
  const recipesPerPage = 4 * 3;

  const toggleFavorite = (id) => {
    setRecipeList(
      recipeList.map((recipe) =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  const paginatedRecipes = recipeList.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  const handleEditClick = (event, id, title) => {
    event.stopPropagation();
    setEditingId(id);
    setTempTitle(title);
  };
  const handleSave = (event, id) => {
    event.stopPropagation();
    setRecipeList((prevList) =>
      prevList.map((recipe) =>
        recipe.id === id ? { ...recipe, title: tempTitle.trim() || recipe.title } : recipe
      )
    );
    setEditingId(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 2,
          width: '100%',
        }}
      >
        {paginatedRecipes.map((recipe) => (
          <Card
            onClick={() => navigate('/meal/meal-history')}
            key={recipe.id}
            sx={{
              cursor: 'pointer',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                sx={{ height: { xs: '260px', sm: '328px' } }}
                image={recipe.image}
                alt={recipe.title}
              />
              <IconButton
                aria-label="add to favorites"
                onClick={(event) => {
                  event.stopPropagation();
                  toggleFavorite(recipe.id);
                }}
                sx={{ position: 'absolute', top: 10, left: 10, zIndex: 10 }}
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
              {/* <Box
                sx={{
                  cursor: 'pointer',
                  padding: '16px',
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, #070707 100%)',
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  textAlign: 'center',
                  zIndex: 1, // Ensure it's above other content
                }}
                onClick={() => navigate('/meal/meal-history')}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: { xs: '14px', sm: '16px' }, // Explicitly set font size with breakpoints
                    fontWeight: '700',
                    whiteSpace: 'nowrap', // Prevent text wrapping in Safari
                    overflow: 'hidden', // Hide overflow to prevent layout shifting
                    textOverflow: 'ellipsis', // Add ellipsis for overflow text
                  }}
                >
                  {recipe.title}
                </Typography>
                <Iconify
                      onClick={(event) => handleEditClick(event, recipe.id, recipe.title)}
                      sx={{ color: 'white', width: '15px', height: '15px'}}
                      icon="mynaui:edit-one"
                    />
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: { xs: '12px', sm: '14px' }, // Explicit font size
                    fontWeight: '400',
                    whiteSpace: 'nowrap', // Prevent text wrapping in Safari
                    overflow: 'hidden', // Handle overflow
                    textOverflow: 'ellipsis', // Add ellipsis
                  }}
                >
                  {recipe.description}
                </Typography>
              </Box> */}
              <Box
                sx={{
                  cursor: 'pointer',
                  padding: '16px',
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, #070707 100%)',
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                {editingId === recipe.id ? (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0, 0, 0, 0.7)',
                      borderRadius: '8px',
                      padding: '4px 8px',
                    }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <TextField
                      value={tempTitle}
                      // onChange={(e) => setTempTitle(e.target.value)}
                      size="small"
                      variant="standard"
                      onChange={(e) => {
                        if (e.target.value.length <= 25) {
                          setTempTitle(e.target.value);
                        }
                      }}
                      sx={{
                        input: {
                          color: 'white',
                          textAlign: 'center',
                          fontSize: '16px',
                          padding: 0,
                          background: 'none',
                        },
                        '.MuiInput-underline:before, .MuiInput-underline:after': {
                          display: 'none',
                        },
                      }}
                      onClick={(event) => event.stopPropagation()}
                    />
                    <IconButton
                      onClick={(event) => handleSave(event, recipe.id)}
                      sx={{ color: 'white', ml: 1 }}
                    >
                      <Iconify icon="mdi:check" />
                    </IconButton>
                  </Box>
                ) : (
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap:"5px" }}>
                    <Typography
                      sx={{ color: 'white', fontSize: '14px !important', fontWeight: '700', }}
                    >
                      {recipe.title}
                    </Typography>
                    {/* <IconButton
                      onClick={(event) => handleEditClick(event, recipe.id, recipe.title)}
                      sx={{ color: 'white', }}
                    >
                      <Iconify icon="typcn:edit" />
                    </IconButton> */}
                    <Iconify
                      onClick={(event) => handleEditClick(event, recipe.id, recipe.title)}
                      sx={{ color: 'white', width: '15px', height: '15px'}}
                      icon="mynaui:edit-one"
                    />
                  </Box>
                )}
                <Typography sx={{ color: 'white', fontSize: '14px !important', fontWeight: '400' }}>
                  {recipe.description}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
      <Pagination
        count={Math.ceil(recipeList.length / recipesPerPage)}
        page={currentPage}
        onChange={handleChangePage}
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
  );
};

export default Cards;
