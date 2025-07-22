import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Box, Grid, Button, Container, Typography } from '@mui/material';

export default function App() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex); // Use realIndex for correct index
  };

  const content = [
    {
      image: '/assets/images/bar.svg',
      title: 'Smoothie Bar',
      description:
        'Enjoy a wide range of delicious smoothies made from the freshest fruits and vegetables.',
    },
    {
      image: '/assets/images/bbq.svg',
      title: 'BBQ Bar',
      description: 'Savor the taste of perfectly grilled meats and vegetables at our BBQ bar.',
    },
    {
      image: '/assets/images/burger.svg',
      title: 'Burger',
      description: 'Indulge in our mouth-watering burgers made with the finest ingredients.',
    },
    {
      image: '/assets/images/cocktails.svg',
      title: 'Cocktails',
      description: 'Sip on expertly crafted cocktails made by our talented mixologists.',
    },
    {
      image: '/assets/images/cook.svg',
      title: 'Cook',
      description:
        'Watch our chefs in action as they prepare gourmet dishes right before your eyes.',
    },
    {
      image: '/assets/images/coffee.svg',
      title: 'Coffee',
      description:
        'Start your day with a cup of freshly brewed coffee, available in various flavors.',
    },
    {
      image: '/assets/images/Dessert.svg',
      title: 'Dessert',
      description: 'Treat yourself to a variety of sweet and decadent Dessert.',
    },
    {
      image: '/assets/images/fryer.svg',
      title: 'Fryer',
      description: 'Enjoy crispy and delicious fried foods made to perfection.',
    },
    {
      image: '/assets/images/gluten.svg',
      title: 'Gluten-Free',
      description:
        'Explore our gluten-free options that are just as tasty as their traditional counterparts.',
    },
  ];

  return (
    <Box>
      <Container sx={{ pb: { sm: '240px', md: '180px', xs: '150px' } }}>
        <Typography sx={{ fontSize: '30px !important', fontWeight: '700', textAlign: 'center' }}>
          Some of our top categories
        </Typography>
      </Container>
      <Container
        sx={{
          position: 'relative', // Needed for absolute positioning
          pb: { md: '90px', xs: '210px' },
          pl: { md: '300px', xs: '20px' },
          pr: { md: '0', xs: '20px' },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            right: { md: '-12%', xs: '18%' },
            // left: '100px',
            bottom: { md: '80px', xs: '90px', sm: '120px' },
            textAlign: { md: 'right', xs: 'center' },
            display: 'flex',
            gap: '30px',
            flexWrap: 'wrap',
            flexDirection: { md: 'row', xs: 'column' },
          }}
        >
          <Box
          //  sx={{width:{md:'33%',xs:'100%'}}}
          >
            <Typography
              sx={{
                fontSize: { md: '40px !important', xs: '20px !important' },
                fontWeight: '500',
                textAlign: { md: 'left', xs: 'center' },
                display: { md: 'block', xs: 'none' },
              }}
            >
              Follow us
            </Typography>
            <Typography
              sx={{
                fontSize: { md: '40px !important' },
                fontWeight: 500,
                display: { md: 'block', xs: 'none' }, // Moved display outside fontSize
              }}
            >
              on social media
            </Typography>

            <Typography
              sx={{
                fontSize: { md: '40px !important', xs: '20px !important', sm: '40px !important' },
                fontWeight: '500',
                textAlign: { md: 'right', xs: 'center' },
                display: { md: 'none', xs: 'block' },
              }}
            >
              Follow us on social media
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '30px',
              flexWrap: 'wrap',
              pb: { md: '0px', xs: '90px' },
              justifyContent: { md: 'flex-end', xs: 'center' },
            }}
          >
            <Box sx={{ width: { md: '100px', xs: '60px', sm: '80px' } }}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/facebook.svg" alt="facebook" />
              </a>
            </Box>
            <Box sx={{ width: { md: '100px', xs: '60px', sm: '80px' } }}>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/instagram.svg" alt="instagram" />
              </a>
            </Box>
          </Box>
        </Box>
      </Container>

      <Grid sx={{ background: '#272932', pb: { sm: '80px', xs: '40px' } }} container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', minHeight: 300, mt: { sm: '-200px', xs: '-100px' } }}>
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
              loop
              className="mySwiper"
              onSlideChange={handleSlideChange}
            >
              {content.map((item, index) => {
                const isRightMost = index === (activeIndex + 2) % content.length;
                return (
                  <SwiperSlide style={{ scale: isRightMost ? '1' : '0.8' }} key={index}>
                    <Box
                      sx={{
                        transition: 'height 0.3s ease',
                        overflow: 'hidden',
                        width: 1,
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Box
              sx={{
                position: 'absolute',
                bottom: { sm: '-30px', xs: '-10px' },
                display: 'flex',
                gap: '20px',
                // pb: '20px',
                pl: '140px',
              }}
            >
              <Button
                onClick={handlePrev}
                sx={{
                  backgroundColor: '#F79256',
                  ':hover': {
                    backgroundColor: '#F67B34',
                  },
                  color: '#fff',
                  borderRadius: '50%',
                  minWidth: '40px',
                  height: '40px',
                }}
              >
                &#x276E;
              </Button>
              <Button
                onClick={handleNext}
                sx={{
                  backgroundColor: '#F79256',
                  ':hover': {
                    backgroundColor: '#F67B34',
                  },
                  color: '#fff',
                  borderRadius: '50%',
                  minWidth: '40px',
                  height: '40px',
                }}
              >
                &#x276F;
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: '20px',
              pt: { lg: '120px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ color: '#fff', fontSize: '25px !important', fontWeight: '600' }}>
              {content[(activeIndex + 2) % content.length].title}
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                marginTop: '10px',
                fontSize: '16px !important',
                fontWeight: '400',
              }}
            >
              {content[(activeIndex + 2) % content.length].description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
