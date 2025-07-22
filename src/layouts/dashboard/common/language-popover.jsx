// import { useState } from 'react';

// import Box from '@mui/material/Box';
// import Popover from '@mui/material/Popover';
// import MenuItem from '@mui/material/MenuItem';
// import IconButton from '@mui/material/IconButton';

// // ----------------------------------------------------------------------

// const LANGS = [
//   {
//     value: 'en',
//     label: 'English',
//     icon: '/assets/icons/ic_flag_en.svg',
//   },
//   {
//     value: 'de',
//     label: 'German',
//     icon: '/assets/icons/ic_flag_de.svg',
//   },
//   {
//     value: 'fr',
//     label: 'French',
//     icon: '/assets/icons/ic_flag_fr.svg',
//   },
// ];

// // ----------------------------------------------------------------------

// export default function LanguagePopover() {
//   const [open, setOpen] = useState(null);

//   const handleOpen = (event) => {
//     setOpen(event.currentTarget);
//   };

//   const handleClose = () => {
//     setOpen(null);
//   };

//   return (
//     <>
//       <IconButton
//         onClick={handleOpen}
//         sx={{
//           width: 40,
//           height: 40,
//           ...(open && {
//             bgcolor: 'action.selected',
//           }),
//         }}
//       >
//         <img src={LANGS[0].icon} alt={LANGS[0].label} />
//       </IconButton>

//       <Popover
//         open={!!open}
//         anchorEl={open}
//         onClose={handleClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//         PaperProps={{
//           sx: {
//             p: 0,
//             mt: 1,
//             ml: 0.75,
//             width: 180,
//           },
//         }}
//       >
//         {LANGS.map((option) => (
//           <MenuItem
//             key={option.value}
//             selected={option.value === LANGS[0].value}
//             onClick={() => handleClose()}
//             sx={{ typography: 'body2', py: 1 }}
//           >
//             <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

//             {option.label}
//           </MenuItem>
//         ))}
//       </Popover>
//     </>
//   );
// }
import React, { useState } from 'react';

import { Box, Menu, MenuItem, Typography, IconButton } from '@mui/material';

export default function LanguageSelector() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLang, setSelectedLang] = useState('ENG'); // Default to English

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (label) => {
    if (label) {
      setSelectedLang(label);
    }
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography
        sx={{
          marginRight: '5px',
          color: '#F79256',
          fontSize: { md: '13px !important', xs: '12px !important' },
        }}
      >
        Language:
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleClick}>
        <Typography
          sx={{
            pt: '3px !important',
            fontSize: { md: '13px !important', xs: '12px !important' },
            color: '#F79256',
          }}
        >
          {selectedLang}
        </Typography>
        <IconButton
          disableRipple
          size="small"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0, // Remove extra padding
            marginLeft: '5px', // Add some space between flag and dropdown icon
          }}
        >
          <img src="/assets/icons/dropdownicon1.svg" alt="dropdown" />
        </IconButton>
      </Box>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem
          onClick={() => handleClose('ENG')}
          sx={{
            color: 'black', // Set default text color
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              backgroundColor: '#F79256',
              color: 'white', // Change text color on hover
            },
          }}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => handleClose('FR')}
          sx={{
            color: 'black', // Set default text color
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              backgroundColor: '#F79256',
              color: 'white', // Change text color on hover
            },
          }}
        >
          Français
        </MenuItem>
      </Menu>
    </Box>
  );
}
