/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { Box, Card, CardMedia, Typography, IconButton } from '@mui/material';

// import Iconify from 'src/components/iconify';

// const recipes = [
//   {
//     id: 1,
//     title: 'Week #34 ',
//     description: '2023-03-06 ',
//     image: '/assets/images/dist5acc.svg',
//     favorite: false,
//   },
// ];

// const MealCard = () => {
//   const [recipeList, setRecipeList] = useState(recipes);
//   const navigate = useNavigate();

//   const toggleFavorite = (id) => {
//     setRecipeList(
//       recipeList.map((recipe) =>
//         recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
//       )
//     );
//   };

//   const recipe = recipeList[0];

//   return (
//     <Box>
//       <Card>
//         <Box sx={{ position: 'relative' }}>
//           <CardMedia
//             component="img"
//             sx={{ height: { xs: '260px', sm: '328px' } }}
//             image={recipe.image}
//             alt={recipe.title}
//           />
//           <Box
//             sx={{
//               display: 'flex',
//               gap: '10px',
//               position: 'absolute',
//               top: 10,
//               left: 10,
//               color: 'white',
//               borderRadius: '50%',
//             }}
//           >
//             <IconButton aria-label="add to favorites" onClick={() => toggleFavorite(recipe.id)}>
//               {recipe.favorite ? (
//                 <Iconify icon="twemoji:red-heart" />
//               ) : (
//                 <Iconify icon="ph:heart-light" />
//               )}
//             </IconButton>
//             <Box>
//               <Box
//                 sx={{
//                   backgroundColor: '#F79256',
//                   p: '5px 10px',
//                   cursor: 'pointer',
//                   borderRadius: '10px',
//                   alignItems: 'center',
//                   display: 'flex',
//                 }}
//                 onClick={() => navigate('/meal/replace-meal-verification')}
//               >
//                 <Iconify sx={{ color: '#000' }} icon="mage:exchange-b" />
//               </Box>
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               cursor: 'pointer',
//               padding: '16px',
//               background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, #070707 100%)',
//               position: 'absolute',
//               bottom: 0,
//               width: '100%',
//               textAlign: 'center',
//             }}
//             onClick={() => navigate('/meal/replace-meal-verification')}
//           >
//             <Typography sx={{ color: 'white', fontSize: '16px !important', fontWeight: '700' }}>
//               {recipe.title}
//             </Typography>
//             <Typography sx={{ color: 'white', fontSize: '14px !important', fontWeight: '400' }}>
//               {recipe.description}
//             </Typography>
//           </Box>
//         </Box>
//       </Card>
//     </Box>
//   );
// };

// export default MealCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Card, CardMedia, Typography, IconButton } from '@mui/material';

import Iconify from 'src/components/iconify';

const MealCard = ({ recipe, toggleFavorite }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ cursor: 'pointer' }} onClick={() => navigate('/meal/replace-meal-verification')}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          sx={{ height: { xs: '260px', sm: '328px' } }}
          image={recipe.image}
          alt={recipe.title}
        />
        <Box
          sx={{
            display: 'flex',
            // gap: '10px',
            position: 'absolute',
            top: 10,
            left: 10,
            color: 'white',
            borderRadius: '50%',
          }}
        >
          <IconButton
            disableRipple
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
          <Box pt={1}>
            <Box
              sx={{
                backgroundColor: '#F79256',
                p: '5px 10px',
                cursor: 'pointer',
                borderRadius: '5px',
                alignItems: 'center',
                display: 'flex',
                '&:hover': {
                  backgroundColor: '#e27602',
                },
              }}
              onClick={(event) => {
                event.stopPropagation();
                navigate('/meal/modify-meal'); // Add navigation here
              }}
            >
              <Iconify
                sx={{
                  color: '#000',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#FFF !important',
                  },
                }}
                icon="oi:loop"
              />
            </Box>
          </Box>
        </Box>
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
          onClick={() => navigate('/meal/replace-meal-verification')}
        >
          <Typography sx={{ color: 'white', fontSize: '16px !important', fontWeight: '700' }}>
            {recipe.title}
          </Typography>
          <Typography sx={{ color: 'white', fontSize: '14px !important', fontWeight: '400' }}>
            {recipe.description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default MealCard;
