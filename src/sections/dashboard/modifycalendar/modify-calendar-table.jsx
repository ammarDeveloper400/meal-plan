// import React from 'react';

// import {
//   Box,
//   Grid,
//   Button,
//   Checkbox,
//   FormGroup,
//   Typography,
//   FormControl,
//   FormControlLabel,
// } from '@mui/material';

// import Iconify from '../../../components/iconify';

// // Dummy Data
// const dummyData = {
//   'Fruits and vegetables': [
//     'Almond milk, unsweetened, 2 cups',
//     'Avocado oil (Tbsp), 6 Tbsp',
//     'Basil, dried, 1 tsp',
//     'Broth, chicken or beef (cups), 8 cups',
//     'Dijon mustard, 2 Tbsp',
//     'Garlic salt, ½ tsp',
//     'Italian seasoning, ½ tsp',
//     'Nuts, ½ cup',
//     'Olive oil (Tbsp), 4 Tbsp',
//     'Oregano, 1 tsp',
//     'Pasta, cooked, 2 cups',
//     'Peanut butter, unsweetened (Tbsp), 2 Tbsp',
//     'Pepper, ground, ¼ tsp',
//     'Protein powder, 2',
//     'Salt, 1 tsp',
//     'Tomatoes, canned, crushed, 3 cups',
//   ],
//   'Meats, tofu and fish': [
//     'Onion, yellow, large, 3',
//     'Parsley, fresh, 6 Tbsp',
//     'Potato, Russet, small, 6',
//     'Strawberries, fresh, 2 cups',
//     'Zoodles (zucchini noodles), raw or frozen, 8 cups',
//   ],
//   'Pasta, rice and canned goods': [
//     'Onion, yellow, large, 3',
//     'Parsley, fresh, 6 Tbsp',
//     'Potato, Russet, small, 6',
//     'Strawberries, fresh, 2 cups',
//     'Zoodles (zucchini noodles), raw or frozen, 8 cups',
//   ],
//   'Dairy products': [
//     'Milk, 2 cups',
//     'Cheese, shredded, 1 cup',
//     'Yogurt, Greek, 1 cup',
//   ],
//   'Frozen and other items': ['Frozen berries, 2 cups', 'Frozen peas, 1 cup'],
//   'Perhaps already at home': ['Salt, 1 tsp', 'Pepper, ground, ½ tsp', 'Olive oil, 4 Tbsp'],
// };

// const MealTable = () => (
//   <Box pt={4}>
//     <Box sx={{ border: '1px solid #000', padding: '20px', borderRadius: '15px' }}>
//       <Box
//         sx={{
//           textAlign: 'left',
//           mb: { xs: '10px', sm: '20px' },
//           alignSelf: { sm: 'flex-start', xs: 'flex-start', md: 'center' },
//         }}
//       >
//         <Typography sx={{ fontSize: '20px !important', fontWeight: '600' }}>My grocery list</Typography>
//         <Typography sx={{ fontSize: '12px !important', fontWeight: '400' }}>
//           Week #34 2023-03-06
//         </Typography>
//       </Box>
//       <Grid container spacing={4}>
//         {Object.keys(dummyData).map((category) => {
//           const Remanings  = ['Dairy products', 'Perhaps already at home', 'Frozen and other items'].includes(category);
//           return (
//             <Grid item xs={12} key={category}>
//               <Typography sx={{ fontSize: '18px !important', fontWeight: '600', mb: '20px' }}>
//                 {category}
//               </Typography>

//               {/* Conditional rendering for the different layout */}
//               <FormControl component="fieldset" fullWidth>
//                 <Grid container spacing={2}>
//                   {dummyData[category].map((item, index) => (
//                     <Grid
//                       item
//                       xs={12}
//                       sm={Remanings  ? 12 : 6} // Full width for unique categories
//                       md={Remanings  ? 12 : 4}
//                       lg={Remanings  ? 12 : 3}
//                       key={index}
//                     >
//                       <FormGroup>
//                         <FormControlLabel
//                           control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }} />}
//                           label={<Typography sx={{ fontSize: '14px !important', fontWeight: '400' }}>{item}</Typography>}
//                         />
//                       </FormGroup>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </FormControl>
//             </Grid>
//           );
//         })}
//       </Grid>

//       {/* Manual addition section */}
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px' }}>
//         <Box>
//           <Typography
//             sx={{
//               fontSize: '20px',
//               fontWeight: '700',
//               mt: '20px',
//               textAlign: 'center',
//               pb: '10px',
//             }}
//           >
//             Manual addition
//           </Typography>
//           <Button
//             variant="contained"
//             sx={{ display: 'flex', alignItems: 'center', fontSize: '20px', gap: '10px' }}
//           >
//             <Iconify icon="ph:plus-fill" sx={{ ml: '8px' }} />
//             Click here to add something
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   </Box>
// );

// export default MealTable;
