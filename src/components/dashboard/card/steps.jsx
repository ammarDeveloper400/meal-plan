import React, { useRef } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import Iconify from '../../iconify';

const recipeData = {
  title: 'Lunch',
  subtitle: 'Cucumber boat',
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
  const stepsRef = useRef(null);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '20px !important', fontWeight: '700', pb: '10px' }}>
          {recipeData.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          {/* <Box>
            <Button
              variant="contained"
              sx={{
                fontSize: '16px !important',
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                fontWeight: '400',
              }}
            >
              Modify
              <Iconify sx={{ color: '#fff' }} icon="basil:edit-solid" />
            </Button>
          </Box> */}
          {/* <Box>
            <Button
              variant="contained"
              sx={{
                fontSize: '16px !important',
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                fontWeight: '400',
              }}
            >
              Delete
              <Iconify sx={{ color: '#fff' }} icon="fluent:delete-28-filled" />
            </Button>
          </Box> */}
          {/* <Box>
            <Button
              variant="contained"
              endIcon={<Iconify style={{ color: '#fff' }} icon="ep:arrow-down" />}
              sx={{
                color: '#fff',
                textTransform: 'none',
                borderRadius: '10px',
                px: 3,
                width: { xs: 'auto', sm: 'auto' },
              }}
              onClick={handleClick}
            >
              {sortOrder}
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} sx={{ mt: 1 }}>
              <MenuItem onClick={() => handleSelect('1')}>1</MenuItem>
              <MenuItem onClick={() => handleSelect('2')}>2</MenuItem>
              <MenuItem onClick={() => handleSelect('3')}>3</MenuItem>
              <MenuItem onClick={() => handleSelect('4')}>4</MenuItem>
              <MenuItem onClick={() => handleSelect('5')}>5</MenuItem>
              <MenuItem onClick={() => handleSelect('6')}>6</MenuItem>
              <MenuItem onClick={() => handleSelect('7')}>7</MenuItem>
              <MenuItem onClick={() => handleSelect('8')}>8</MenuItem>
              <MenuItem onClick={() => handleSelect('9')}>9</MenuItem>
              <MenuItem onClick={() => handleSelect('10')}>10</MenuItem>
              <MenuItem onClick={() => handleSelect('11')}>11</MenuItem>
              <MenuItem onClick={() => handleSelect('12')}>12</MenuItem>
            </Menu>
          </Box> */}
        </Box>
      </Box>
      <Typography sx={{ fontSize: '14px !important', fontWeight: '600', pb: '10px' }}>
        {recipeData.subtitle}
      </Typography>
      <Typography sx={{ fontSize: '14px !important', fontWeight: '500', pb: '8px' }}>
        {recipeData.description}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={5.6}>
          <Box
            sx={{
              position: 'relative',
              backgroundColor: '#F79256',
              borderRadius: '12px',
              py: '10px',
              px: '20px',
              height: '305px',
              overflowY: 'scroll',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
            ref={stepsRef}
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
                sx={{ fontSize: '14px !important', fontWeight: '400', color: '#FFF' }}
                key={index}
              >
                {index + 1}: {step}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6.4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Box sx={{ backgroundColor: '#F79256', borderRadius: '12px', py: '10px', px: '20px' }}>
              <Typography
                sx={{
                  fontSize: '16px !important',
                  fontWeight: '600 !important',
                  color: '#FFF',
                  pb: '0px',
                }}
              >
                Ingredients
              </Typography>
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
            <Box sx={{ backgroundColor: '#F79256', borderRadius: '12px', py: '10px', px: '20px' }}>
              <Typography
                sx={{
                  fontSize: '16px !important',
                  fontWeight: '600 !important',
                  color: '#FFF',
                }}
              >
                Comments
              </Typography>
              {recipeData.comments.map((comment, index) => (
                <Typography
                  key={index}
                  sx={{ fontSize: '14px !important', fontWeight: '400', color: '#FFF' }}
                >
                  • {comment}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Steps;
