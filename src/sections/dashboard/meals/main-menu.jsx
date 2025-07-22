import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { Box, Card, CardMedia, TextField, Typography, IconButton } from '@mui/material';

import Iconify from 'src/components/iconify';

const initialRecipes = [
  {
    id: 1,
    title: 'Week #34',
    description: '2023-03-06',
    image: '/assets/images/dist5acc.svg',
    favorite: false,
  },
];

const MainMenu = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [tempTitle, setTempTitle] = useState('');

  useEffect(() => {
    // Load recipes from localStorage or use default
    const savedRecipes = JSON.parse(localStorage.getItem('recipes'));
    if (savedRecipes) {
      setRecipeList(savedRecipes);
    } else {
      setRecipeList(initialRecipes);
    }
  }, []);

  const updateLocalStorage = (updatedRecipes) => {
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  const toggleFavorite = (id) => {
    const updatedRecipes = recipeList.map((recipe) =>
      recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
    );
    setRecipeList(updatedRecipes);
    updateLocalStorage(updatedRecipes);
  };

  const handleEditClick = (event, id, title) => {
    event.stopPropagation();
    setEditingId(id);
    setTempTitle(title);
  };

  const handleSave = (event, id) => {
    event.stopPropagation();
    const updatedRecipes = recipeList.map((recipe) =>
      recipe.id === id
        ? { ...recipe, title: tempTitle.trim() || recipe.title } // Reset to last title if empty
        : recipe
    );
    setRecipeList(updatedRecipes);
    updateLocalStorage(updatedRecipes);
    setEditingId(null);
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {recipeList.map((recipe) => (
          <Card
            onClick={() => navigate('/meal/suggested-meal')}
            key={recipe.id}
            sx={{
              cursor: 'pointer',
              width: { xs: '320px', sm: '250px' },
              margin: 1,
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <CardMedia component="img" height="274px" image={recipe.image} alt={recipe.title} />
              <IconButton
                aria-label="add to favorites"
                onClick={(event) => {
                  event.stopPropagation();
                  toggleFavorite(recipe.id);
                }}
                sx={{ position: 'absolute', top: 10, left: 10, zIndex: 999 }}
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
                  cursor: 'pointer',
                  padding: '12px',
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
                      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, #070707 100%)',
                      borderRadius: '8px',
                      padding: '4px 8px',
                    }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <TextField
                      value={tempTitle}
                      onChange={(e) => {
                        if (e.target.value.length <= 25) {
                          setTempTitle(e.target.value);
                        }
                      }}
                      size="small"
                      variant="standard"
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
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap:'5px' }}>
                    <Typography
                      sx={{ color: 'white', fontSize: '14px !important', fontWeight: '700' }}
                    >
                      {recipe.title}
                    </Typography>
                    {/* <IconButton
                      onClick={(event) => handleEditClick(event, recipe.id, recipe.title)}
                      sx={{ color: 'white', ml: 0, }}
                    > */}
                    <Iconify
                      onClick={(event) => handleEditClick(event, recipe.id, recipe.title)}
                      sx={{ color: 'white', width: '15px', height: '15px' }}
                      icon="mynaui:edit-one"
                    />
                    {/* </IconButton> */}
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '12px', sm: '16px', md: '18px' },
          pl: { xs: '0px', sm: '15px', md: '20px' },
          pt: '16px',
          flex: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: '14px', sm: '16px' }, fontWeight: '600' }}>
          My current meal plan
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #000',
            py: '6px',
            px: '10px',
            borderRadius: '10px',
            width: 'max-content',
          }}
          onClick={() => navigate('/meal/suggested-meal')}
        >
          <Typography
            sx={{
              fontSize: { xs: '10.5px', sm: '14px' },
              fontWeight: '400',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
            }}
          >
            Consult or modify the suggested meal plan for this week
            <Box
              sx={{
                backgroundColor: '#F79256',
                borderRadius: '5px',
                p: { xs: '1px', sm: '2px' },
                width: { xs: '20px', sm: '30px' },
              }}
            >
              <img style={{ cursor: 'pointer' }} src="/assets/icons/change.svg" alt="arrow" />
            </Box>
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #000',
            py: '6px',
            px: '10px',
            borderRadius: '10px',
            width: 'max-content',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/meal/favorite-meal')}
        >
          <Typography
            sx={{
              fontSize: { xs: '12px', sm: '14px' },
              fontWeight: '400',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            View my favorite meal plans
            <Box
              sx={{
                backgroundColor: '#F79256',
                borderRadius: '5px',
                p: { xs: '1px', sm: '2px' },
                width: { xs: '20px', sm: '30px' },
              }}
            >
              <img style={{ cursor: 'pointer' }} src="/assets/icons/heart.svg" alt="arrow" />
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MainMenu;
