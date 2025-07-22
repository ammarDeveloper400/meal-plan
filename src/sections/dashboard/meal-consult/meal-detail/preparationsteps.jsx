/* eslint-disable react/prop-types */
// PreparationSteps.js
import React, { useRef, useState, useEffect } from 'react';

import { Box, Typography, IconButton } from '@mui/material';
// import Iconify from '../../../../components/iconify';

const PreparationSteps = ({ steps, height }) => {
  const scrollRef = useRef(null);
  const [showScrollUp, setShowScrollUp] = useState(false);

  const handleScroll = () => {
    const ref = scrollRef.current;
    if (ref.scrollTop > 0 && ref.scrollTop + ref.clientHeight < ref.scrollHeight) {
      setShowScrollUp(true);
    } else if (ref.scrollTop === 0) {
      setShowScrollUp(false);
    } else if (ref.scrollTop + ref.clientHeight >= ref.scrollHeight) {
      setShowScrollUp(true);
    }
  };

  const handleScrollDown = () => {
    scrollRef.current.scrollBy({ top: 100, behavior: 'smooth' });
  };

  const handleScrollUp = () => {
    scrollRef.current.scrollBy({ top: -100, behavior: 'smooth' });
  };

  useEffect(() => {
    const ref = scrollRef.current;
    ref.addEventListener('scroll', handleScroll);
    return () => ref.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#F79256',
        borderRadius: '12px',
        py: '10px',
        px: '20px',
        height,
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
      ref={scrollRef}
    >
      <Typography sx={{ fontSize: '16px !important', fontWeight: '600', pb: '0px', color: '#FFF' }}>
        Preparation steps
      </Typography>
      {/* <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Iconify
          style={{ color: 'white' }}
          // sx={{ color: 'white', height: '30px', width: '30px' }}
          icon="il:clock"
        />
        <Typography
          sx={{
            color: 'white',
            fontSize: '12px !important',
            pl: '3px',
            fontWeight: '500 !important',
          }}
        >
          10 min
        </Typography>
      </Box> */}
      {steps.map((step, index) => (
        <Typography
          sx={{ fontSize: '14px !important', fontWeight: '400', color: '#FFF' }}
          key={index}
        >
          {step}
        </Typography>
      ))}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {showScrollUp ? (
          <IconButton
            sx={{
              position: 'absolute',
              top: '5px',
              right: '5px',
            }}
            onClick={handleScrollUp}
          >
            <img src="/assets/icons/arrowup.svg" alt="arrowup" />
          </IconButton>
        ) : (
          <IconButton
            sx={{
              position: 'absolute',
              bottom: '5px',
              right: '5px',
            }}
            onClick={handleScrollDown}
          >
            <img src="/assets/icons/arrowdown.svg" alt="arrowdown" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default PreparationSteps;
