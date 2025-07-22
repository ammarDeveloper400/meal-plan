import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Header from './header';
import Footer from './footer';
// ----------------------------------------------------------------------
export default function LandingLayout({ children }) {
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: 0.9,
          // display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          // justifyContent: 'center',
        }}
      >
        <Box>{children}</Box>
      </Box>
      <Footer />
    </>
  );
}
LandingLayout.propTypes = {
  children: PropTypes.node,
};









