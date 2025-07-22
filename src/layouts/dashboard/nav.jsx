/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import { List, Collapse, ListItemText } from '@mui/material';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import { NAV } from './config-layout';
import navConfig from './config-navigation';
import LanguageSelector from './common/language-popover';

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();
  // const navigate = useNavigate();

  const upLg = useResponsive('up', 'lg');
  const navigate = useNavigate();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderMenu = (
    <Stack component="nav" spacing={2} sx={{ px: 2 }}>
      {navConfig.map((item) =>
        item?.children ? (
          <CollapsibleNavItem key={item.title} item={item} />
        ) : (
          <NavItem key={item.title} item={item} />
        )
      )}
    </Stack>
  );

  const renderUpgrade = (
    <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
      <LanguageSelector />
    </Box>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
        bgcolor: '#272932',
      }}
    >
      <Box onClick={() => navigate('/account')} sx={{ mt: 3, ml: 5, mb: 3, display: 'flex' }}>
        <img
          style={{ width: '190px', cursor: 'pointer' }}
          src="/assets/footerlogo.svg"
          alt="logo"
        />
      </Box>

      {renderMenu}

      <Box sx={{ flexGrow: 1 }} />

      {renderUpgrade}
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();
  const active = pathname.includes(item.path);

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        fontSize: '16px',
        color: active ? '#fff' : '#F79256',
        bgcolor: active ? '#F4630D' : 'transparent',
        fontWeight: '400',
        borderRadius: '10px',
        '&:hover': {
          bgcolor: active ? '#F4630D' : '#F79256',
          color: 'white',
          borderRadius: '10px',
        },
      }}
    >
      <Box flexshrink={0} component="span" sx={{ width: 24, minWidth: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};

// ----------------------------------------------------------------------

function CollapsibleNavItem({ item }) {
  const [openCollapsibleNavItem, setOpenCollapsibleNavItem] = useState(false);
  const navigate = useNavigate();
  const pathname = usePathname();
  const active = pathname.includes(item.path);

  useEffect(() => {
    if (pathname.includes(item.path) && pathname !== '/account' && pathname !== '/account/' && pathname !== '/account/card-detail/' && pathname !== '/account/card-detail') {
      setOpenCollapsibleNavItem(true);
    } else {
      setOpenCollapsibleNavItem(false);
    }
  }, [pathname, item.path]);

  const handleClick = () => {
    // setOpenCollapsibleNavItem(!openCollapsibleNavItem);
    if (item.path) {
      navigate(item.path);
    }
  };
  const navigationopen = (e) => {
    e.preventDefault();
    setOpenCollapsibleNavItem(!openCollapsibleNavItem);
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{
          minHeight: 44,
          fontSize: '16px',
          // color: '#fff',
          // textTransform: 'capitalize',
          fontWeight: 'fontWeightMedium',
          mb: 0,
          color: active ? '#fff' : '#F79256',
          bgcolor: active ? '#F4630D' : 'transparent',
          ':hover': {
            color: 'white',
            bgcolor: active ? '#F4630D' : '#F79256',
          },
          borderRadius: '8px',
        }}
      >
        <Box flexShrink={0} component="span" sx={{ width: 24, height: 24, mr: 2 }}>
          {item.icon}
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" width={1}>
          {item.title}{' '}
          {openCollapsibleNavItem ? (
            <Iconify icon="iconamoon:arrow-up-2-duotone" onClick={navigationopen} />
          ) : (
            <Iconify icon="iconamoon:arrow-down-2-duotone"  onClick={navigationopen}/>
          )}
        </Box>
      </ListItemButton>
      <Collapse in={openCollapsibleNavItem} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item?.children.map((navItem, index) => (
            <ListItemButton
              disableRipple
              onClick={() => navigate(navItem?.path)}
              key={index}
              sx={{
                // textAlign: 'center',
                color: pathname.includes(navItem?.path) ? '#fff' : '#fff',
                backgroundColor: pathname.includes(navItem?.path) ? '#F4630D' : '#F79256',
                borderRadius:
                  index === 0
                    ? '8px 8px 0 0'
                    : index === item.children.length - 1
                    ? '0 0 8px 8px'
                    : '0',
                ':hover': {
                  backgroundColor: pathname.includes(navItem?.path) ? '#F4630D' : '#F4630D',
                },
              }}
            >
              <ListItemText
                sx={{ '& .MuiTypography-root': { fontSize: '14px' } }}
                primary={navItem?.title}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}

CollapsibleNavItem.propTypes = {
  item: PropTypes.object,
};
