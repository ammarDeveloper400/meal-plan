import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  Box,
  Menu,
  List,
  Drawer,
  MenuItem,
  ListItem,
  TextField,
  Typography,
  IconButton,
  ListItemText,
  useMediaQuery,
  InputAdornment,
} from '@mui/material';

const navItems = [
  { id: 'Home', link: '/' },
  { id: 'About us', link: '/about' },
  { id: 'Contact us', link: '/contact' },
  { id: 'FAQ', link: '/faq' },
  { id: 'My account', link: '/account' },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLang, setSelectedLang] = useState('ENG'); // Set default to abbreviation
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobileOrTablet = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const activeColor = '#F79256'; // Define the active link color

  // Set background color based on the current route
  // const isHomePage = location.pathname === '/';
  // const headerBackgroundColor = isHomePage ? '#FDE9DD' : 'transparent';

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (name) => {
    // Store language abbreviations instead of full names
    setSelectedLang(name === 'English' ? 'ENG' : 'FR');
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <Box  sx={{  py: '5px', px: { sm: '30px' } }}>
      {/* Language Dropdown */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Typography
          sx={{
            marginRight: '5px',
            color: '#000',
            fontSize: { md: '13px !important', xs: '10px !important' },
          }}
        >
          Language:
        </Typography>

        <Typography
          onClick={handleClick}
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            color: '#000',
            fontSize: { md: '13px !important', xs: '10px !important' },
            pt: { sm: '3px', xs: '0px' },
          }}
        >
          {selectedLang} {/* Display abbreviation */}
        </Typography>

        <IconButton
          disableRipple
          size="small"
          onClick={handleClick}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <img src="/assets/icons/dropdownicon.svg" alt="dropdown" />
        </IconButton>

        <Menu
          sx={{
            ml: { lg: '-150px', md: '-170px', sm: '-160px', xs: '-90px' },
            mt: '-20px', // Adjust positioning
            overflow: 'visible',
            '& .MuiPaper-root': {
              backgroundColor: '#fff',
              border: '4px solid #fff',
              position: 'relative',
              width: 'auto',
              maxWidth: '160px',
              padding: '0 10px',
              borderRadius: '10px',
              overflow: 'visible',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: '-10px',
                right: '-22px',
                width: '0',
                height: '0',
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderTop: '12px solid transparent',
                borderBottom: '24px solid #fff',
                transform: 'rotate(90deg)',
                zIndex: 0,
              },
            },
          }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem
            onClick={() => handleClose('English')}
            sx={{
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              '&:hover': {
                backgroundColor: '#F79256',
                color: 'white',
              },
            }}
          >
            English
          </MenuItem>
          <MenuItem
            onClick={() => handleClose('Français')}
            sx={{
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              '&:hover': {
                backgroundColor: '#F79256',
                color: 'white',
              },
            }}
          >
            Français
          </MenuItem>
        </Menu>
      </Box>

      {/* Logo and Navigation Links */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: { md: 'end', xs: 'center' },
          flexDirection: { xs: 'row', md: 'row' },
        }}
      >
        <Box
          sx={{
            height: { xs: '30px', sm: '88px' },
            width: { xs: '150px', md: '120px', lg: '244px' },
            cursor: 'pointer',
          }}
          onClick={() => navigate('/')}
        >
          <img height="100%" width="100%" src="/assets/logo.svg" alt="Logo" />
        </Box>

        {isMobileOrTablet ? (
          <IconButton onClick={() => toggleDrawer(true)}>
            <img width="40px" height="20px" src="/assets/icons/menuicon.svg" alt="menuicon" />
          </IconButton>
        ) : (
          <Box sx={{ flexGrow: 1, pb: { lg: 1, md: 2.5 } }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { lg: '68px', md: '40px' },
                flexWrap: { xs: 'wrap', sm: 'nowrap' },
              }}
            >
              {navItems.map(({ id, link }) => (
                <Typography
                  key={id}
                  variant="body2"
                  onClick={() => handleNavigation(link)}
                  sx={{
                    color: isActive(link) ? activeColor : '#000',
                    fontWeight: 600,
                    cursor: 'pointer',
                    '&:hover': {
                      color: '#F79256',
                    },
                  }}
                >
                  {id}
                </Typography>
              ))}
            </Box>
          </Box>
        )}

        {/* Search Bar */}
        {!isMobileOrTablet && (
          <Box sx={{ pb: { lg: 1, md: 2.5 }, display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              InputProps={{
                style: {
                  height: 40,
                  borderRadius: '50px',
                  backgroundColor: '#FAFAFA',
                  paddingRight: '3px',
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      disableRipple
                      sx={{
                        backgroundColor: '#F79256',
                        borderRadius: '50%',
                        color: 'white',
                        padding: '8px',
                        width: '35px',
                        height: '35px',
                      }}
                    >
                      <img src="/assets/icons/searchbaricon.svg" alt="Search" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ccc',
                  },
                  '& input': {
                    paddingRight: '4px',
                  },
                },
                width: { xs: '324px', md: '224px', lg: '324px' },
              }}
            />
          </Box>
        )}
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: drawerOpen ? '#FDE9DD' : 'initial',
          },
        }}
      >
        <Box
          sx={{ width: 270, p: 2 }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <IconButton
            style={{ backgroundColor: '#F79256' }}
            onClick={() => toggleDrawer(false)}
            sx={{ mb: 2 }}
          >
            <img src="/assets/icons/closeicon.svg" alt="close" />
          </IconButton>

          <Box sx={{ pt: 2, display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              InputProps={{
                style: {
                  height: 40,
                  borderRadius: '50px',
                  backgroundColor: '#FAFAFA',
                  paddingRight: '3px',
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      disableRipple
                      sx={{
                        backgroundColor: '#F79256',
                        borderRadius: '50%',
                        color: 'white',
                        padding: '8px',
                        width: '35px',
                        height: '35px',
                      }}
                    >
                      <img src="/assets/icons/searchbaricon.svg" alt="Search" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ccc',
                  },
                  '& input': {
                    paddingRight: '4px',
                  },
                },
                width: { xs: '324px', md: '224px', lg: '324px' },
              }}
            />
          </Box>

          <List sx={{ mt: 2 }}>
            {navItems.map(({ id, link }) => (
              <ListItem
                key={id}
                onClick={() => handleNavigation(link)}
                sx={{
                  backgroundColor: isActive(link) ? activeColor : 'transparent',
                  borderRadius: '8px',
                  my: 0.5,
                }}
              >
                <ListItemText primary={id} sx={{ color: '#000' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
