import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

import { Box, Card, CardMedia, IconButton, Typography } from '@mui/material';

const RecipeCard = ({ recipe, toggleFavorite }) => (
    <Card
      sx={{
        width: '303px',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          objectFit="cover"
          height="174px"
          image={recipe.imageUrl}
          alt={recipe.title}
        />
        <IconButton
          aria-label="add to favorites"
          onClick={() => toggleFavorite(recipe.id)}
          sx={{ position: 'absolute', top: 10, left: 10 }}
        >
          {recipe.favorite ? (
            <Icon icon="twemoji:red-heart" width={24} />
          ) : (
            <Icon icon="ph:heart-light" width={24} />
          )}
        </IconButton>
        <Box
          sx={{
            padding: '16px',
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, #070707 100%)',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{ color: 'white', fontSize: '16px !important', fontWeight: '700' }}
          >
            {recipe.title}
          </Typography>
          <Typography
            sx={{ color: 'white', fontSize: '14px !important', fontWeight: '400' }}
          >
            {recipe.description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );

// Adding PropTypes validation
RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
  }).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default RecipeCard;
