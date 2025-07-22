// import React from 'react';

// import { Box, Button, Typography } from '@mui/material';

// import GlobalTable from 'src/components/globaltable/table';

// import Iconify from '../../../../components/iconify';


// const MealTable = () => {
//   const columns = [
//     { id: 'item', label: 'Item' },
//     { id: 'quantity', label: 'Qty' },
//     { id: 'note', label: 'Note' },
//   ];

//   const categories = [
//     { label: 'Fruits and vegetables' },
//     { label: 'Meats, tofu, and fish' },
//     { label: 'Pasta, rice, and canned goods' },
//     { label: 'Dairy products' },
//   ];

//   const data = [
//     { category: 'Fruits and vegetables', item: 'Cucumber', quantity: 3, note: 'Take cucumber' },
//     {
//       category: 'Fruits and vegetables',
//       item: 'Bell peppers',
//       quantity: 2,
//       note: 'Take beefsteak tomatoes',
//     },
//     {
//       category: 'Fruits and vegetables',
//       item: 'Tomatoes',
//       quantity: 6,
//       note: 'Take Canadian bacon',
//     },
//     { category: 'Fruits and vegetables', item: 'Bananas', quantity: 6, note: '' },
//     { category: 'Fruits and vegetables', item: 'Broccoli', quantity: '6 Cup', note: '' },
//     { category: 'Fruits and vegetables', item: 'Citryselle', quantity: 1, note: '' },
//     { category: 'Fruits and vegetables', item: 'Citron', quantity: 3, note: '' },
//     {
//       category: 'Meats, tofu, and fish',
//       item: 'Salmon',
//       quantity: '300g',
//       note: 'Take fresh salmon',
//     },
//     { category: 'Meats, tofu, and fish', item: 'Chicken', quantity: '16oz', note: '' },
//     {
//       category: 'Pasta, rice, and canned goods',
//       item: 'Sun-dried tomatoes',
//       quantity: '300g',
//       note: '',
//     },
//     { category: 'Pasta, rice, and canned goods', item: 'Tomato paste', quantity: '38ml', note: '' },
//     { category: 'Pasta, rice, and canned goods', item: 'Walnuts', quantity: '300g', note: '' },
//     { category: 'Pasta, rice, and canned goods', item: 'Oil', quantity: '2L', note: '' },
//     {
//       category: 'Pasta, rice, and canned goods',
//       item: 'Cumin',
//       quantity: '1/2 teaspoon',
//       note: '',
//     },
//     { category: 'Pasta, rice, and canned goods', item: 'Paprika', quantity: '380g', note: '' },
//     { category: 'Pasta, rice, and canned goods', item: 'Cinnamon', quantity: '100ml', note: '' },
//     { category: 'Dairy products', item: 'Milk', quantity: '1/2 cup', note: '' },
//   ];

//   const filteredData = (category) => data.filter((row) => row.category === category);

//   return (
//     <Box
//       sx={{
//         mt: '32px',
//         backgroundColor: '#FFF',
//         border: '1px solid #000',
//         borderRadius: '15px',
//         p: '20px',
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexDirection: { xs: 'column', sm: 'row' },
//         }}
//       >
//         <Box
//           sx={{
//             textAlign: 'left',
//             mb: { xs: '10px', sm: 0 },
//             alignSelf: { sm: 'flex-start', xs: 'flex-start', md: 'center' }, // Align left for sm and xs, center for md and up
//           }}
//         >
//           <Typography sx={{ fontSize: '20px !important', fontWeight: '600' }}>
//             My grocery list
//           </Typography>
//           <Typography sx={{ fontSize: '12px !important', fontWeight: '400' }}>
//             Week #34 2023-03-06{' '}
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '10px',
//             alignItems: 'center',
//             flexWrap: { xs: 'wrap', sm: 'nowrap' }, // Wrap buttons on xs screens
//             justifyContent: { xs: 'space-between', sm: 'flex-start' }, // Space between buttons on xs
//             width: { xs: '100%', sm: 'auto' }, // Full width on xs
//           }}
//         >
//           <Button
//             sx={{
//               display: 'flex',
//               gap: '8px',
//               alignItems: 'center',
//               fontSize: '14px !important',
//               fontWeight: '400',
//               backgroundColor: '#272932',
//               ':hover': { backgroundColor: '#272932' },
//               color: '#fff',
//               p: '5px 10px',
//               flex: { xs: '1 0 48%', sm: 'none' }, // Each button takes up 48% of the row on xs
//             }}
//           >
//             Download <Iconify icon="oi:cloud-download" />
//           </Button>
//           <Button
//             sx={{
//               display: 'flex',
//               gap: '8px',
//               alignItems: 'center',
//               fontSize: '14px !important',
//               fontWeight: '400',
//               backgroundColor: '#272932',
//               ':hover': { backgroundColor: '#272932' },
//               color: '#fff',
//               p: '5px 10px',
//               flex: { xs: '1 0 48%', sm: 'none' }, // Each button takes up 48% of the row on xs
//             }}
//           >
//             Print <Iconify icon="ic:round-print" />
//           </Button>
//           <Button
//             sx={{
//               display: 'flex',
//               gap: '8px',
//               alignItems: 'center',
//               fontSize: '14px !important',
//               fontWeight: '400',
//               backgroundColor: '#272932',
//               ':hover': { backgroundColor: '#272932' },
//               color: '#fff',
//               p: '5px 10px',
//               flex: { xs: '1 0 48%', sm: 'none' }, // Each button takes up 48% of the row on xs
//             }}
//           >
//             Send by email <Iconify icon="ic:round-mail" />
//           </Button>
//           <Button
//             sx={{
//               display: 'flex',
//               gap: '8px',
//               alignItems: 'center',
//               fontSize: '14px !important',
//               fontWeight: '400',
//               backgroundColor: '#272932',
//               ':hover': { backgroundColor: '#272932' },
//               color: '#fff',
//               p: '5px 10px',
//               flex: { xs: '1 0 48%', sm: 'none' }, // Each button takes up 48% of the row on xs
//             }}
//           >
//             Send by SMS <Iconify icon="ic:round-sms" />
//           </Button>
//         </Box>
//       </Box>

//       {categories.map((category, index) => (
//         <Box
//           key={index}
//           sx={{
//             my: 2,
//           }}
//         >
//           <GlobalTable
//             columns={columns}
//             data={filteredData(category.label)}
//             categories={[category]}
//           />
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default MealTable;
