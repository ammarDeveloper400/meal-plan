// import React, { useState } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';

// import { Box, Button } from '@mui/material';

// import Iconify from '../../../components/iconify';

// const Head = () => {
//   const navigate = useNavigate();
//   const [isLiked, setIsLiked] = useState(false);

//   const [searchParams] = useSearchParams();

//   const handleLikeClick = () => {
//     setIsLiked(!isLiked);
//   };

//   return (
//     <Box pt="20px">
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: { xs: 'column', md: 'row' },
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap', // Allows wrapping of content to avoid overflow
//         }}
//       >
//         <Box
//           sx={{
//             mb: { xs: '10px', md: '0' }, // Margin-bottom on smaller screens
//             width: { xs: '100%', md: 'auto' }, // Full width on smaller screens
//           }}
//         >
//           <Button
//             variant="contained"
//             sx={{
//               fontSize: '16px !important',
//               display: 'flex',
//               gap: '5px',
//               alignItems: 'center',
//               fontWeight: '400',
//             }}
//             onClick={() => navigate('/meal')}
//           >
//             Return to main menu <Iconify sx={{ color: '#fff' }} icon="lets-icons:refund-back" />
//           </Button>
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

//       {/* <Box sx={{ pt: '20px' }}>
//         <Typography
//           sx={{ display: 'flex', gap: '10px', fontSize: '20px !important', fontWeight: '500' }}
//         >
//           My actual meal plan:{' '}
//           <Typography sx={{ fontSize: '20px !important', fontWeight: '500' }}>
//             Week #34 2023-03-06
//           </Typography>
//         </Typography>
//       </Box> */}
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           pt: '20px',
//           flexDirection: { xs: 'column', md: 'row' },
//           gap: { xs: '10px', md: '20px' }, // Adjust gap for different screen sizes
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             gap: '10px',
//             alignItems: 'center',
//             flexDirection: { xs: 'column', sm: 'row' }, // Stack buttons vertically on xs, row on md and up
//             width: { xs: '100%', md: 'auto' }, // Full width on xs
//           }}
//         >
//           <Button
//             variant="contained"
//             sx={{
//               width: { xs: '100%', md: 'auto' },
//             }}
//           >
//             Detailed version
//           </Button>
//           <Button
//             onClick={() => navigate('/meal/my-meal-plan?hide_modify_btn=true')}
//             variant="outlined"
//             sx={{
//               color: '#000',
//               width: { xs: '100%', md: 'auto' },
//             }}
//           >
//             Calendar version
//           </Button>
//         </Box>

//         <Box
//           sx={{
//             display: 'flex',
//             gap: '10px',
//             alignItems: 'center',
//             flexDirection: { xs: 'column', md: 'row' },
//             width: { xs: '100%', md: 'auto' },
//           }}
//         >
//           {searchParams?.get('hide_modify_btn') === 'true' ? null :  (
//             <Button
//               onClick={() => navigate('/meal/modify-meal')}
//               variant="contained"
//               sx={{
//                 width: { xs: '100%', md: 'auto' },
//                 mb: { xs: '10px', md: '0' },
//               }}
//             >
//               Modify this meal plan <Iconify icon="basil:edit-solid" />
//             </Button>
//           )}
//           <Button
//             disableRipple
//             variant="contained"
//             onClick={handleLikeClick}
//             sx={{
//               display: 'flex',
//               gap: '5px',
//               width: { xs: '100%', md: 'auto' },
//             }}
//           >
//             Like this meal plan <Iconify icon={isLiked ? 'twemoji:red-heart' : 'ph:heart-light'} />
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Head;
