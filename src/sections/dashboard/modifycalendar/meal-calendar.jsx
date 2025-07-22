import React from 'react'

import { Box } from '@mui/material'

import Calendar from './modify-calendar';
import HeadMealCalendar from './headmealcalendar';

const MealCalendar = () => (
  <Box px={2}>
    <HeadMealCalendar />
    <Calendar />
  </Box>
  )

export default MealCalendar