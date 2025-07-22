/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react';

import { Box, Grid, Typography, IconButton } from '@mui/material';

import Iconify from '../../../../components/iconify';

const recipeData = {
  title: 'Lunch',
  subtitle: 'Cucumber boat',
  // subtitle2: 'Important information',
  description2: 'This section should only appear if the admin add something-optional field',
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
};

const Steps = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const stepsRef = useRef(null);
  const preparationRef = useRef(null);
  const ingredientsRef = useRef(null);
  const commentsRef = useRef(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const [sortOrder, setSortOrder] = useState('Portion');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  const [preparationScrolled, setPreparationScrolled] = useState(false);
  const [ingredientsScrolled, setIngredientsScrolled] = useState(false);
  const [commentsScrolled, setCommentsScrolled] = useState(false);

  const handleClose = () => setAnchorEl(null);
  const handleSelect = (order) => {
    setSortOrder(order);
    handleClose();
  };
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleDeleteClick = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);
  const handleConfirmDelete = () => {
    setDeleteConfirmed(true);
    setDialogOpen(false);
    // Add your delete logic here
  };

  const handleScroll = (ref, setScrolled) => {
    if (ref.current?.scrollTop > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const handlePreparationScroll = () => handleScroll(preparationRef, setPreparationScrolled);
    const handleIngredientsScroll = () => handleScroll(ingredientsRef, setIngredientsScrolled);
    const handleCommentsScroll = () => handleScroll(commentsRef, setCommentsScrolled);

    const preparationElement = preparationRef.current;
    const ingredientsElement = ingredientsRef.current;
    const commentsElement = commentsRef.current;

    if (preparationElement) preparationElement.addEventListener('scroll', handlePreparationScroll);
    if (ingredientsElement) ingredientsElement.addEventListener('scroll', handleIngredientsScroll);
    if (commentsElement) commentsElement.addEventListener('scroll', handleCommentsScroll);

    return () => {
      if (preparationElement)
        preparationElement.removeEventListener('scroll', handlePreparationScroll);
      if (ingredientsElement)
        ingredientsElement.removeEventListener('scroll', handleIngredientsScroll);
      if (commentsElement) commentsElement.removeEventListener('scroll', handleCommentsScroll);
    };
  }, []);

  const handleScrollDown = (ref) => ref.current?.scrollBy({ top: 100, behavior: 'smooth' });
  const handleScrollUp = (ref) => ref.current?.scrollBy({ top: -100, behavior: 'smooth' });

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Typography sx={{ fontSize: '20px !important', fontWeight: '700', pb: { xl:'6px', lg:'0px' } }}>
          {recipeData.title}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: '14px !important',
            fontWeight: '600',
            pb: {lg:'0px', xl:'5px'},
            pt: { xs: '15px', sm: '0px' },
          }}
        >
          {recipeData.subtitle}
        </Typography>
        <Typography sx={{ fontSize: '14px !important', fontWeight: '500', pb: {lg:'0px', xl:'10px'} }}>
          {recipeData.description}
        </Typography>
        {/* <Typography sx={{ fontSize: '14px !important', fontWeight: '600', pb: '8px' }}>
          {recipeData.subtitle2}
        </Typography> */}
        <Typography sx={{ fontSize: '14px !important', fontWeight: '500', pb: '8px' }}>
          {recipeData.description2}
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={5.6}>
          <Box
            sx={{
              position: 'relative',
              backgroundColor: '#F79256',
              borderRadius: '12px',
              py: '10px',
              px: '20px',
            }}
          >
            <Box
              sx={{
                height: '282px',
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
              }}
              ref={preparationRef}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'sticky',
                  top: 0,
                  backgroundColor: '#F79256',
                  zIndex: 1,
                  padding: '0px 0',
                }}
              >
                <Typography
                  sx={{ fontSize: '16px !important', fontWeight: '600', pb: '0px', color: '#FFF' }}
                >
                  Preparation steps
                </Typography>

                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    color: 'white',
                    fontSize: '12px !important',
                    pl: '3px',
                    fontWeight: '500 !important',
                  }}
                >
                  <Iconify style={{ color: 'white' }} icon="il:clock" />
                  10 min
                </Typography>
              </Box>
              {recipeData.preparationSteps.map((step, index) => (
                <Typography
                  key={index}
                  sx={{ fontSize: '14px !important', fontWeight: '400', color: '#FFF' }}
                >
                  {index + 1}: {step}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // marginTop: 1,
                height: '10px',
              }}
            >
              {preparationScrolled ? (
                <IconButton disableRipple onClick={() => handleScrollUp(preparationRef)}>
                  <img src="/assets/icons/arrowup.svg" alt="arrowup" />
                </IconButton>
              ) : (
                <IconButton disableRipple onClick={() => handleScrollDown(preparationRef)}>
                  <img src="/assets/icons/arrowdown.svg" alt="arrowdown" />
                </IconButton>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6.4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Box sx={{ backgroundColor: '#F79256', borderRadius: '12px', py: '10px', px: '20px' }}>
              <Box
                sx={{
                  height: '132px',
                  overflowY: 'scroll',
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
                ref={ingredientsRef}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ position: 'sticky', top: 0, backgroundColor: '#F79256' }}
                >
                  <Typography
                    sx={{
                      fontSize: '16px !important',
                      fontWeight: '600',
                      color: '#FFF',
                      // pb: '8px',
                    }}
                  >
                    Ingredients
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '16px !important',
                      fontWeight: '600',
                      color: '#FFF',
                      // pb: '8px',
                    }}
                  >
                    Qty
                  </Typography>
                </Box>
                {recipeData.ingredients.map((ingredient, index) => (
                  <Box key={index} display="flex" justifyContent="space-between">
                    <Typography
                      sx={{ fontSize: '14px !important', fontWeight: '400', color: '#FFF' }}
                    >
                      • {ingredient.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: '14px !important', fontWeight: '400', color: '#FFF' }}
                    >
                      {ingredient.quantity}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '10px',
                }}
              >
                {ingredientsScrolled ? (
                  <IconButton disableRipple onClick={() => handleScrollUp(ingredientsRef)}>
                    <img src="/assets/icons/arrowup.svg" alt="arrowup" />
                  </IconButton>
                ) : (
                  <IconButton disableRipple onClick={() => handleScrollDown(ingredientsRef)}>
                    <img src="/assets/icons/arrowdown.svg" alt="arrowdown" />
                  </IconButton>
                )}
              </Box>
            </Box>
            <Box sx={{ backgroundColor: '#F79256', borderRadius: '12px', py: '10px', px: '20px' }}>
              <Box
                sx={{
                  height: '108px',
                  overflowY: 'scroll',
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                  top: 0,
                  backgroundColor: '#F79256',
                }}
                ref={commentsRef}
              >
                <Box sx={{ position: 'sticky', top: 0, backgroundColor: '#F79256' }}>
                  <Typography
                    sx={{
                      fontSize: '16px !important',
                      fontWeight: '600',
                      color: '#FFF',
                      pb: '0px',
                    }}
                  >
                    Comments
                  </Typography>
                </Box>
                {recipeData.comments.map((comment, index) => (
                  <Typography
                    key={index}
                    sx={{ fontSize: '14px !important', fontWeight: '400', color: '#FFF' }}
                  >
                    • {comment}
                  </Typography>
                ))}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '10px',
                }}
              >
                {commentsScrolled ? (
                  <IconButton disableRipple onClick={() => handleScrollUp(commentsRef)}>
                    <img src="/assets/icons/arrowup.svg" alt="arrowup" />
                  </IconButton>
                ) : (
                  <IconButton disableRipple onClick={() => handleScrollDown(commentsRef)}>
                    <img src="/assets/icons/arrowdown.svg" alt="arrowdown" />
                  </IconButton>
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Steps;
