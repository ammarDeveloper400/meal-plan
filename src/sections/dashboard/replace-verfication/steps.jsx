/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from 'react';

import { Box, Grid, Button, IconButton, Typography } from '@mui/material';

import Iconify from '../../../components/iconify';

const Steps = ({ data }) => {
  // const [anchorEl, setAnchorEl] = useState(null);

  // const [sortOrder, setSortOrder] = useState('Portion');
  // const handleClick = (event) => setAnchorEl(event.currentTarget);
  // const handleClose = () => setAnchorEl(null);
  const preparationRef = useRef(null);
  const ingredientsRef = useRef(null);
  const commentsRef = useRef(null);
  // const handleSelect = (order) => {
  //   setSortOrder(order);
  //   handleClose();
  // };

  const [preparationScrolled, setPreparationScrolled] = useState(false);
  const [ingredientsScrolled, setIngredientsScrolled] = useState(false);
  const [commentsScrolled, setCommentsScrolled] = useState(false);

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

    if (preparationRef.current) {
      preparationRef.current.addEventListener('scroll', handlePreparationScroll);
    }
    if (ingredientsRef.current) {
      ingredientsRef.current.addEventListener('scroll', handleIngredientsScroll);
    }
    if (commentsRef.current) {
      commentsRef.current.addEventListener('scroll', handleCommentsScroll);
    }

    return () => {
      if (preparationRef.current) {
        preparationRef.current.removeEventListener('scroll', handlePreparationScroll);
      }
      if (ingredientsRef.current) {
        ingredientsRef.current.removeEventListener('scroll', handleIngredientsScroll);
      }
      if (commentsRef.current) {
        commentsRef.current.removeEventListener('scroll', handleCommentsScroll);
      }
    };
  }, []);

  const handleScrollDown = (ref) => {
    ref.current?.scrollBy({ top: 100, behavior: 'smooth' });
  };

  const handleScrollUp = (ref) => {
    ref.current?.scrollBy({ top: -100, behavior: 'smooth' });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography
            sx={{ fontSize: '20px !important', fontWeight: '600 !important', pb: '10px' }}
          >
            {data.title}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '5px',
            // flex: { xs: '1 1 auto', sm: 'none' },
          }}
        >
          <Button
           disableRipple
           variant="contained"
           disabled
           sx={{
             fontSize: '14px !important',
             fontWeight: '600 !important',
             color: '#fff',
             textTransform: 'none',
             borderRadius: '10px',
             // cursor: 'not-allowed',
             backgroundColor: '#F79256 !important', 
             '&.Mui-disabled': {
               backgroundColor: '#F79256', 
               color: '#fff',
             },
             '&:hover': {
               backgroundColor: '#F79256',
             },
           }}
            // onClick={handleClick}
          >
            Portion: 3{/* {sortOrder} */}
          </Button>
          {/* <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              mt: 1,
              '&::-webkit-scrollbar': { width: '6px' },
              '&::-webkit-scrollbar-track': { backgroundColor: '#F79256' },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#F79256',
                borderRadius: '10px',
                border: '2px solid transparent',
              },
              '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#ff9f76' },
              scrollbarWidth: 'thin',
            }}
            PaperProps={{ style: { maxHeight: 48 * 4.5 } }}
          >
            {[...Array(10).keys()].map((index) => (
              <MenuItem
                key={index}
                onClick={() => handleSelect(`Portion  ${index + 1}`)}
                sx={{ '&:hover': { backgroundColor: '#F79256', color: '#fff' } }}
              >
                Portion: {index + 1}
              </MenuItem>
            ))}
          </Menu> */}
        </Box>
      </Box>

      <Typography sx={{ fontSize: '14px !important', fontWeight: '600', pb: '10px' }}>
        {data.subtitle}
      </Typography>
      <Typography sx={{ fontSize: '14px !important', fontWeight: '500', pb: '8px' }}>
        {data.description}
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
            }}
          >
            <Box
              sx={{
                height: '262px',
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
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

              {data.preparationSteps.map((step, index) => (
                <Typography
                  sx={{ fontSize: '14px !important', fontWeight: '400', color: '#FFF' }}
                  key={index}
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
                marginTop: 1,
                height: '10px', // Adjust as needed
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
            <Box
              sx={{
                backgroundColor: '#F79256',
                borderRadius: '12px',
                py: '10px',
                px: '20px',
              }}
            >
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
                      pb: '0px',
                      position: 'sticky',
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

                {data.ingredients.map((ingredient, index) => (
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
                  height: '10px', // Adjust as needed
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
            <Box
              sx={{
                backgroundColor: '#F79256',
                borderRadius: '12px',
                py: '10px',
                px: '20px',
              }}
            >
              <Box
                sx={{
                  height: '95px',
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
                {data.comments.map((comment, index) => (
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
                  height: '10px', // Adjust as needed
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
