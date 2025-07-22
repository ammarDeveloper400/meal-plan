import React from 'react';

import { Box } from '@mui/material';

// import Banner from '../banner';
// import Banner2 from '../banner2';
import SliderSection from '../slider';
import NewBanner from '../new-banner';
import HowitWorks from '../howitworks';
import NewBanner2 from '../new-banner2';


const HomePageView = () => (
  <Box sx={{pb:'20px'}}>
  {/* <Banner />
  <Banner2 /> */}
  <NewBanner/>
  <NewBanner2/>
  <HowitWorks />
  <SliderSection />
  </Box>
  
);

export default HomePageView;
  