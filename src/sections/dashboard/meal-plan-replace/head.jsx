import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';

import Iconify from '../../../components/iconify';

const Head = () => {
  const navigate = useNavigate();
  return (
    <Box pt="20px">
      {/* ----------- Main menu ----------- */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Box>
            <Button
              variant="contained"
              sx={{
                fontSize: '16px !important',
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                fontWeight: '400',
              }}
              onClick={() => window.history.back()}
            >
              Return to the previous section
              <Iconify sx={{ color: '#fff' }} icon="lets-icons:refund-back" />
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                fontSize: '16px !important',
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                fontWeight: '400 !important',
              }}
              onClick={() => navigate('/meal')}
            >
              Main menu
            </Button>
          </Box>
        </Box>
    </Box>
  );
};

export default Head;
