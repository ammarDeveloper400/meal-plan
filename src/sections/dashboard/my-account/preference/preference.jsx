import React, { useState } from 'react';

import {
  Box,
  Grid,
  Radio,
  Stack,
  Divider,
  Tooltip,
  Checkbox,
  useTheme,
  Typography,
  RadioGroup,
  FormControl,
  useMediaQuery,
  FormControlLabel,
} from '@mui/material';

import AntSwitch from './switch'; // Ensure the correct path

const Preference = () => {
  const [hideCaloriesChecked, setHideCaloriesChecked] = useState(false);
  const [receiveNewsletterChecked, setReceiveNewsletterChecked] = useState(false);

  const handleHideCaloriesChange = (event) => {
    setHideCaloriesChecked(event.target.checked);
  };

  const handleReceiveNewsletterChange = (event) => {
    setReceiveNewsletterChecked(event.target.checked);
  };

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box px={2}>
      <Typography sx={{ fontSize: '20px !important', fontWeight: '600', pb: '40px', pt: '30px' }}>
        Account details
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={5} md={4.2}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Box display="flex" flexDirection="column" sx={{ width: isXs ? '100%' : 'auto' }}>
              <Typography sx={{ fontSize: '18px !important', fontWeight: '600', pb: '30px' }}>
                My preferences
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  flexDirection: isXs ? 'column' : 'row',
                }}
              >
                <Typography sx={{ fontSize: '14px !important', fontWeight: '400' }}>
                  Language by default:
                </Typography>

                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    defaultValue="English"
                    sx={{ flexDirection: isXs ? 'column' : 'row' }}
                  >
                    <FormControlLabel
                      value="French"
                      control={<Radio />}
                      label="French"
                      sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px !important' } }}
                    />
                    <FormControlLabel
                      value="English"
                      control={<Radio />}
                      label="English"
                      sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px !important' } }}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isXs ? 'column' : 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  pt: '35px',
                  gap: isXs ? '15px' : '10px', // Adjust gap for column and row modes
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '14px !important', fontWeight: '400' }}>
                    Hide calories:
                  </Typography>
                  <Tooltip
                    title="This option is only if you want to hide the calories. They will be hidden in search filters, recipes, and in the generated and modified meal plan."
                    arrow
                    placement="right"
                    sx={{
                      ml: 1, // Add margin to separate icon from text
                      backgroundColor: '#fff',
                      color: '#000',
                      boxShadow: 3, // to add slight shadow
                      '& .MuiTooltip-arrow': {
                        color: '#fff', // Match arrow color with the tooltip background
                      },
                    }}
                    PopperProps={{
                      modifiers: [
                        {
                          name: 'arrow',
                          options: {
                            placement: 'bottom-start',
                          },
                        },
                      ],
                    }}
                  >
                    <img
                      src="/assets/icons/questionmark1.svg"
                      alt="calories"
                      style={{ marginLeft: '10px', verticalAlign: 'middle' }} // Adjust margin and alignment
                    />
                  </Tooltip>
                </Box>

                <Stack
                  direction="row" // Keep the switch layout in a row, regardless of the screen size
                  spacing={2}
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      color: hideCaloriesChecked ? '#000' : '#F79256',
                      fontSize: '16px !important',
                    }}
                  >
                    Off
                  </Typography>
                  <AntSwitch checked={hideCaloriesChecked} onChange={handleHideCaloriesChange} />
                  <Typography
                    sx={{
                      color: hideCaloriesChecked ? '#F79256' : '#000',
                      fontSize: '16px !important',
                    }}
                  >
                    On
                  </Typography>
                </Stack>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  flexDirection: isXs ? 'column' : 'row',
                  pt: '35px',
                }}
              >
                <Typography sx={{ fontSize: '14px !important', fontWeight: '400' }}>
                  Receive the newsletter:
                </Typography>

                <Stack direction={isXs ? 'column' : 'row'} spacing={1} alignItems="center">
                  <Typography
                    sx={{
                      color: receiveNewsletterChecked ? '#000' : '#F79256',
                      fontSize: '16px !important',
                    }}
                  >
                    Off
                  </Typography>
                  <AntSwitch
                    checked={receiveNewsletterChecked}
                    onChange={handleReceiveNewsletterChange}
                  />
                  <Typography
                    sx={{
                      color: receiveNewsletterChecked ? '#F79256' : '#000',
                      fontSize: '16px !important',
                    }}
                  >
                    On
                  </Typography>
                </Stack>
              </Box>
            </Box>

            {!isXs && !isSm && (
              <Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ height: '230px', margin: '0 16px', border: '1px solid #000' }}
                />
              </Box>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={4.2}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Box display="flex" flexDirection="column" sx={{ width: isXs ? '100%' : 'auto' }}>
              <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: '600', mb: '20px' }}>
                Communication preferences
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '14px' }}>New recipes</Typography>
                  <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                </Box>

                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '14px' }}>Website news</Typography>
                  <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                </Box>

                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '14px' }}>Most liked product</Typography>
                  <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                </Box>

                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Typography sx={{ fontSize: '14px' }}>Promotions</Typography>
                  <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                </Box>
              </Box>
            </Box>

            {!isXs && !isSm && (
              <Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ height: '230px', margin: '0 16px', border: '1px solid #000' }}
                />
              </Box>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <Box display="flex" flexDirection="column">
            <Typography sx={{ fontSize: '18px', fontWeight: '600', mb: '20px' }}>
              Communication channel
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { sm: 'column', xs: 'row' }, gap: '10px' }}>
              <Box sx={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '14px' }}>Email</Typography>
                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
              </Box>

              <Box sx={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '14px' }}>SMS</Typography>
                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Preference;
