/* eslint-disable react/prop-types */
// Comments.js
import React, { useRef, useState, useEffect } from 'react';

import { Box, Typography, IconButton } from '@mui/material';

const Comments = ({ comments, height }) => {
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
      <Typography sx={{ fontSize: '16px !important', fontWeight: '600', pb: '8px', color: '#FFF' }}>
        Comments
      </Typography>
      {comments.map((comment, index) => (
        <Typography
          sx={{ fontSize: '14px !important', fontWeight: '400', color: '#FFF' }}
          key={index}
        >
          {`• ${comment}`}
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

export default Comments;
