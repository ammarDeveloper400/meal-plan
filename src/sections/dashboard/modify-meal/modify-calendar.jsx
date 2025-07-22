import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Grid,
  Card,
  Button,
  Tooltip,
  CardMedia,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';

import Iconify from '../../../components/iconify';
import GroupDaysDialog from '../../../components/groupdaysdialog/groupdaysdialog'; // Import the dialog component
import MealTable from './mealtable';
import TooltipCard from './tooltipcard';
import GlobalDialog from '../../../components/category';
import DeleteConfirmationDialog from '../../../components/delete-meal/delete-meal';

// Example recipe data
const initialRecipeList = [
  {
    id: 1,
    title: 'Homemade Lasagna',
    imageUrl: '/assets/images/lasagna.svg',
    favorite: true,
    calories: 2200,
  },
  {
    id: 2,
    title: 'Homemade Lasagna',
    imageUrl: '/assets/images/lasagna.svg',
    favorite: true,
    calories: 2100,
  },
  {
    id: 3,
    title: 'Homemade Lasagna',
    imageUrl: '/assets/images/lasagna.svg',
    favorite: true,
    calories: 2567,
  },
];

// Initial grouping for the dialog
const initialGroups = [
  ['Monday', 'Tuesday', 'Wednesday'],
  ['Tuesday', 'Thursday'],
  ['Wednesday', 'Friday'],
  ['Thursday', 'Friday'],
  ['Friday', 'Saturday'],
  ['Saturday'],
  ['Sunday'],
];

const Calendar = () => {
  const [openGlobalDialog, setOpenGlobalDialog] = useState(false);

  const [recipeList, setRecipeList] = useState(initialRecipeList); // Correctly define both recipeList and setRecipeList

  const [openDialog, setOpenDialog] = useState(false);
  const [groups, setGroups] = useState(initialGroups);

  const [openDeleteMealDialog, setOpenDeleteMealDialog] = useState(false);
  const [text, setText] = useState('Week #34');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (event) => {
    if (event.target.value.length <= 25) {
      setText(event.target.value);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);
  const navigate = useNavigate();

  const [groupDays, setGroupDays] = useState([]);

  const handleOpenGlobalDialog = () => setOpenGlobalDialog(true); // Open GlobalDialog
  const handleCloseGlobalDialog = () => setOpenGlobalDialog(false);

  const handleGlobalDialogSubmit = (selectedOption) => {
    console.log('Selected meal:', selectedOption);
    // Handle the selected meal option here (e.g., add it to the meal plan)
    setOpenGlobalDialog(false); // Close the dialog after submission
  };
  // Function to toggle favorite status
  const handleFavoriteToggle = (id) => {
    setRecipeList((prevList) =>
      prevList.map((recipe) =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  console.log('groupDays', groupDays);

  return (
    <>
      <Box sx={{ pb: '3px', pt: '35px' }}>
        <Typography
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { sm: '10px', xs: '0px' },
            fontSize: '20px !important',
            fontWeight: '600 !important',
            alignItems: 'center',
          }}
        >
          My actual meal plan:{' '}
          <Box display="flex" alignItems="center">
            {isEditing ? (
              <TextField
                value={text}
                onChange={handleTextChange}
                onBlur={handleBlur}
                autoFocus
                variant="standard"
                inputProps={{ maxLength: 25 }}
              />
              
            ) : (
              <Typography sx={{ fontSize: '20px !important', fontWeight: '600 !important' }}>
                {text}
              </Typography>
            )}
            <IconButton sx={{ color: 'black' }} onClick={handleEditClick}>
              <Iconify icon="mynaui:edit-one" />
            </IconButton>
          </Box>
        </Typography>
      </Box>
      <Box
        sx={{ padding: '10px', borderRadius: '10px', border: '1px solid #000', overflowX: 'auto' }}
      >
        {/* Header Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '20px',
            flexDirection: { sm: 'column', xs: 'column', md: 'row' },
            flexWrap: 'wrap', // Ensures wrapping to avoid overflow
          }}
        >
          <Box
            sx={{
              alignSelf: { sm: 'flex-start', xs: 'flex-start', md: 'center' },
              mb: { sm: '10px', xs: '10px', md: '0' },
              width: { xs: '100%', sm: '100%', md: 'auto' }, // Full width on smaller screens
            }}
          >
            <Typography sx={{ fontSize: '20px !important', fontWeight: '600 !important', textAlign:{md:'left', xs:'center'} }}>
              My calendar for the week
            </Typography>
            <Typography sx={{ fontSize: '12px !important', fontWeight: '400 !important',textAlign:{md:'left', xs:'center'} }}>
              Week #34 2023-03-06
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{ fontSize: '14px !important', fontWeight: '600 !important', p: '5px 10px' }}
              variant="contained"
              onClick={handleOpenDialog}
            >
              Change the grouping of days
              <Iconify icon="basil:edit-solid" sx={{ ml: '8px' }} />
            </Button>
          </Box>
        </Box>

        <Box sx={{ minWidth: '1000px' }}>
          {/* Days Section */}
          <Box width="91%" display="flex" gap={2} justifyContent="center" ml="auto">
            {Object.keys(groupDays).map((groupKey) => {
              const days = groupDays[groupKey];
              const activeDays = Object.keys(days).filter((day) => days[day]);

              // Only render the group if it has at least one active day
              if (activeDays.length === 0) {
                return null;
              }

              return (
                <Box
                  key={groupKey}
                  border="1px solid #000"
                  borderRadius={15}
                  width={1}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={0.5}
                >
                  {activeDays.map((day, index) => (
                    <Box key={index} display="flex" justifyContent="center" width="100%">
                      <Typography
                        sx={{ fontSize: '12px !important', fontWeight: '400 !important' }}
                      >
                        {day}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              );
            })}
          </Box>

          <Grid container spacing={2}>
            <Grid xs={1} />

            <Grid item xs={4.5}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  gap: '10px',
                  border: '1px solid #000',
                  borderRadius: '15px',
                  py: '5px',
                  // px: {md:'15px', lg:'20px',xl:'40px',sm:'15px', xs:"15px"},
                  // ml: { xs: '70px', sm: '80px', md: '90px', lg: '100px' },
                }}
              >
                <Typography sx={{ fontSize: '10px !important', fontWeight: '400' }}>
                  Monday
                </Typography>
                <Typography sx={{ fontSize: '10px !important', fontWeight: '400' }}>
                  Tuesday
                </Typography>
                <Typography sx={{ fontSize: '10px !important', fontWeight: '400' }}>
                  Wednesday
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3.1} md={3.1} sm={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  gap: '10px',
                  border: '1px solid #000',
                  borderRadius: '15px',
                  py: '5px',
                  // px: '15px',
                }}
              >
                <Typography sx={{ fontSize: '10px !important', fontWeight: '400' }}>
                  Thursday
                </Typography>
                <Typography sx={{ fontSize: '10px !important', fontWeight: '400' }}>
                  Friday
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3.1} md={3.1} sm={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  gap: '10px',
                  border: '1px solid #000',
                  borderRadius: '15px',
                  py: '5px',
                  // px: '15px',
                }}
              >
                <Typography sx={{ fontSize: '10px !important', fontWeight: '400' }}>
                  Saturday
                </Typography>
                <Typography sx={{ fontSize: '10px !important', fontWeight: '400' }}>
                  Sunday
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Meals Section */}
          {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Add on'].map((meal, mealIndex) => (
            <Grid container spacing={2} key={mealIndex} sx={{ pt: '20px' }}>
              <Grid
                item
                xs={1}
                sx={{
                  display: 'flex',
                  alignItems: 'center', // Vertically center the meal names
                  justifyContent: 'center', // Center horizontally
                }}
              >
                <Typography sx={{ fontSize: '16px !important', fontWeight: '400' }}>
                  {meal}
                </Typography>
              </Grid>
              {recipeList.map((recipe, index) => (
                <Grid item xs={1.5} key={index}>
                  <Tooltip
                    componentsProps={{
                      tooltip: {
                        sx: {
                          width: '400px',
                          p: 0,
                          bgcolor: 'transparent',
                        },
                      },
                    }}
                    title={
                      <Box sx={{ zIndex: 1 }}>
                        <TooltipCard setOpenDeleteMealDialog={setOpenDeleteMealDialog} />
                      </Box>
                    }
                    placement="top"
                    arrow
                    disableFocusListener
                    // disableHoverListener
                    disableTouchListener
                  >
                    <Card>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={recipe.imageUrl}
                        alt={recipe.title}
                      />

                      <IconButton
                        aria-label="add to favorites"
                        onClick={() => handleFavoriteToggle(recipe.id)} // Toggle favorite on click
                        sx={{ position: 'absolute', top: 0, left: 0 }}
                      >
                        {recipe.favorite ? (
                          <Iconify icon="twemoji:red-heart" width={24} />
                        ) : (
                          <Iconify icon="ph:heart-light" width={24} />
                        )}
                      </IconButton>

                      <Box
                        sx={{
                          position: 'absolute',
                          top: 5,
                          right: 5,
                          backgroundColor: '#F79256',
                          '&:hover': {
                            backgroundColor: '#e27602',
                          },
                          p: '5px 8px',
                          cursor: 'pointer',
                          borderRadius: '10px',
                          alignItems: 'center',
                          display: 'flex',
                        }}
                      >
                        {/* <Iconify
                      // onClick={() => navigate('/meal/my-meal-plan')}
                      sx={{ color: '#000', width: '15px', height: '15px' }}
                      icon="ion:shuffle"
                    /> */}
                        <Iconify
                          sx={{
                            width: '15px',
                            height: '15px',
                            color: '#000',
                            transition: 'color 0.3s ease', // Smooth color transition
                            '&:hover': {
                              color: '#FFF !important', // Color on hover
                            },
                          }}
                          icon="ion:shuffle"
                        />
                      </Box>

                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          width: '100%',
                          background: 'rgba(0, 0, 0, 0.5)',
                          color: 'white',
                          textAlign: 'center',
                          padding: '5px',
                        }}
                      >
                        <Typography sx={{ fontSize: '10px !important', fontWeight: '400' }}>
                          {recipe.title}
                        </Typography>
                      </Box>
                    </Card>
                  </Tooltip>
                </Grid>
              ))}

              <Grid xs={1.5}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
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
                    onClick={() => navigate('/meal/add-meal')}
                  >
                    {/* <img src="/assets/icons/plussssss.svg" alt="modify" /> */}
                    <Iconify
                      sx={{ color: '#fff', '&:hover': { color: '#fff' } }}
                      icon="fa6-solid:plus"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid xs={2}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
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
                    onClick={() => navigate('/meal/add-meal')}
                  >
                    {/* <img src="/assets/icons/plussssss.svg" alt="modify" /> */}
                    <Iconify
                      sx={{ color: '#fff', '&:hover': { color: '#fff' } }}
                      icon="fa6-solid:plus"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid xs={1}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
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
                    onClick={() => navigate('/meal/add-meal')}
                  >
                    {/* <img src="/assets/icons/plussssss.svg" alt="modify" /> */}
                    <Iconify
                      sx={{ color: '#fff', '&:hover': { color: '#fff' } }}
                      icon="fa6-solid:plus"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid xs={2}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
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
                    onClick={() => navigate('/meal/add-meal')}
                  >
                    {/* <img src="/assets/icons/plussssss.svg" alt="modify" /> */}
                    <Iconify
                      sx={{ color: '#fff', '&:hover': { color: '#fff' } }}
                      icon="fa6-solid:plus"
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ))}
          <Grid container spacing={2} pt={5}>
            <Grid xs={1.3} />
            <Grid xs={4} mr={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  // onClick={() => navigate('/meal/add-meal')}
                  onClick={handleOpenGlobalDialog}
                  sx={{
                    width: '100%',
                    fontWeight: '700 !important',
                    fontSize: '20px !important',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                  variant="contained"
                >
                  <Iconify icon="ph:plus-fill" width={20} /> Add a meal
                </Button>
              </Box>
            </Grid>
            <Grid xs={2.8} mr={2} ml={1}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  // onClick={() => navigate('/meal/add-meal')}
                  onClick={handleOpenGlobalDialog}
                  sx={{
                    width: '100%',
                    fontWeight: '700 !important',
                    fontSize: '20px !important',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                  variant="contained"
                >
                  <Iconify icon="ph:plus-fill" width={20} /> Add a meal
                </Button>
              </Box>
            </Grid>
            <Grid xs={2.8} ml={2}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  // onClick={() => navigate('/meal/add-meal')}
                  onClick={handleOpenGlobalDialog}
                  sx={{
                    width: '100%',
                    fontWeight: '700 !important',
                    fontSize: '20px !important',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                  variant="contained"
                >
                  <Iconify icon="ph:plus-fill" width={20} /> Add a meal
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} pt={5}>
            <Grid xs={1.4} />
            <Grid xs={1.5}>
              <Typography sx={{ fontSize: '12px !important', fontWeight: '400 !important' }}>
                2200 calories
              </Typography>
            </Grid>
            <Grid xs={1.5}>
              <Typography sx={{ fontSize: '12px !important', fontWeight: '400 !important' }}>
                2100 calories
              </Typography>
            </Grid>
            <Grid xs={2}>
              <Typography sx={{ fontSize: '12px !important', fontWeight: '400 !important' }}>
                2567 calories
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Group Days Dialog */}
        <GroupDaysDialog
          open={openDialog}
          onClose={handleCloseDialog}
          groups={groups}
          onGroupChange={setGroups}
          setGroupDays={setGroupDays}
        />

        <DeleteConfirmationDialog
          open={openDeleteMealDialog}
          onClose={() => setOpenDeleteMealDialog(false)}
          onConfirm={() => setOpenDeleteMealDialog(false)}
        />
      </Box>
      <Box>
        <MealTable />
      </Box>
      <GlobalDialog
        open={openGlobalDialog}
        onClose={handleCloseGlobalDialog}
        onSubmit={handleGlobalDialogSubmit}
      />
    </>
  );
};

export default Calendar;

// import React, { useState } from 'react';

// import { Box, Button, Typography } from '@mui/material';

// import Iconify from '../../../components/iconify';
// import GroupDaysDialog from '../../../components/groupdaysdialog/groupdaysdialog';

// const Calendar = () => {
//   const handleCloseDialog = () => setOpenDialog(false);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [groupDays, setGroupDays] = useState([]);

//   return (
//     <Box sx={{ border: '1px solid #000', borderRadius: '15px', p: '20px', width: '100%' }}>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Typography>The calendar firm the week of April 29th</Typography>
//         <Button variant="contained" onClick={() => setOpenDialog(true)}>
//           Change the grouping of days <Iconify icon="basil:edit-solid" />
//         </Button>
//       </Box>
//       <Box sx={{ width: '90%', mt: '20px', ml: 'auto' }}>
//         <Box width={1} display="flex" gap={2} justifyContent="center">
//           {Object.keys(groupDays)?.map((groupKey) => {
//             const days = groupDays[groupKey];
//             const activeDays = Object.keys(days).filter((day) => days[day]);

//             // Only render the group if it has at least one active day
//             if (activeDays.length === 0) {
//               return null;
//             }

//             return (
//               <Box
//                 key={groupKey}
//                 border="1px solid #000"
//                 borderRadius={15}
//                 width={1}
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 p={0.5}
//               >
//                 {activeDays.map((day, index) => (
//                   <Box key={index} display="flex" justifyContent="center" width="100%">
//                     <Typography sx={{ fontSize: '12px !important', fontWeight: '400 !important' }}>
//                       {day}
//                     </Typography>
//                   </Box>
//                 ))}
//               </Box>
//             );
//           })}
//         </Box>
//       </Box>
//       <GroupDaysDialog open={openDialog} onClose={handleCloseDialog} setGroupDays={setGroupDays} />
//     </Box>
//   );
// };

// export default Calendar;
