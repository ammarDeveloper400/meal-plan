import * as React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import { Box, Container, Typography } from '@mui/material';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';

const HowItWorks = () => (
  <Box overflow="hidden">
    <Box position="relative" sx={{ display: { xs: 'none', lg: 'block' } }}>
      <Typography position="absolute" top="0%" right="-10%">
        <img width="345px" height="336px" src="/assets/images/dish.svg" alt="dish" />
      </Typography>
      <Typography position="absolute" top="240px" left="-5%">
        <img width="290px" height="309px" src="/assets/images/dish2.svg" alt="dish" />
      </Typography>
    </Box>
    <Container sx={{ pt: { xs: '50px', sm: '100px' }, pb: '80px' }}>
      <Typography variant="h1" textAlign="center" pb="20px">
        How it works
      </Typography>
      <Box sx={{ overflowX: 'auto' }}>
        <Timeline
          position="alternate"
          sx={{
            width: { xs: '1000px', sm: '1000px', md: '100%' }, // Ensure width is more than screen width on small screens
          }}
        >
          {/* ---------------Step 1---------------- */}
          <TimelineItem>
            <TimelineSeparator sx={{ pt: '0px' }}>
              <TimelineDot color="primary" sx={{ margin: '0' }} />
              <TimelineConnector sx={{ bgcolor: '#F79256', margin: '0' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Box display="flex" flexDirection="row" gap="10px" mt="0px">
                <Typography sx={{ width: '129px', height: '38px', mt: '-20px' }}>
                  <img src="/assets/icons/step1.svg" alt="step1" />
                </Typography>
                <Typography variant="h6" sx={{ whiteSpace: 'nowrap', mt: '-15px' }}>
                  Step 1
                </Typography>
                <Typography variant="h5" sx={{ mt: '-20px', pl: '30px' }}>
                  Subscribe to access all our recipes and features. Search individual recipes and
                  print, download or send them to your phone
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* ---------------Step 2---------------- */}
          <TimelineItem>
            <TimelineSeparator sx={{ m: 0, p: 0 }}>
              <TimelineDot color="primary" sx={{ margin: '0' }} />
              <TimelineConnector sx={{ bgcolor: '#F79256', margin: '0' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                gap="10px"
              >
                <Typography variant="h5" sx={{ textAlign: 'justify', flexGrow: 1, mt: '-10px', pr: '30px' }}>
                  Plan your next week by using our weekly suggested meal plan or generate a custom
                  one based on your preferences and needs
                </Typography>
                <Typography variant="h6" sx={{ whiteSpace: 'nowrap', mt: '-60px' }}>
                  Step 2
                </Typography>
                <Box sx={{ width: '129px', height: '38px', mt: '-70px' }}>
                  <img src="/assets/icons/step2.svg" alt="step2" />
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* ---------------Step 3---------------- */}
          <TimelineItem>
            <TimelineSeparator sx={{ m: 0, p: 0 }}>
              <TimelineDot color="primary" sx={{ margin: '0' }} />
              <TimelineConnector sx={{ bgcolor: '#F79256', margin: '0' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Box display="flex" flexDirection="row" gap="10px">
                <Typography sx={{ mt:"-15px"}}>
                  <img
                    width="51px"
                    height="38px"
                    src="/assets/icons/step3.svg"
                    alt="step3"
                    style={{ marginRight: '0px' }}
                  />
                </Typography>
                <Typography variant="h6" sx={{ whiteSpace: 'nowrap', mt:"-10px" }}>
                  Step 3
                </Typography>
                <Typography variant="h5" sx={{ mt:'-15px', pl: '30px' }}>
                  Modify, delete or add new dishes to your planning
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* ---------------Step 4---------------- */}
          <TimelineItem>
            <TimelineSeparator sx={{ m: 0, p: 0 }}>
              <TimelineDot color="primary" sx={{ margin: '0' }} />
              {/* No connector for the last item */}
            </TimelineSeparator>
            <TimelineContent>
              <Box display="flex" flexDirection="row" gap="10px">
                <Typography variant="h5" sx={{ flexGrow: 1, mt: '-15px', pr: '30px' }}>
                  Instantly print, download or send to your phone your personalized grocery list,
                  your meal plan or any recipes
                </Typography>
                <Typography variant="h6" sx={{ whiteSpace: 'nowrap', mt:"-15px" }}>
                  Step 4
                </Typography>
                <Typography sx={{ width: '109px', height: '38px', mt:"-20px" }}>
                  <img src="/assets/icons/step4.svg" alt="step4" />
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Container>
  </Box>
);

export default HowItWorks;
