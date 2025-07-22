import React from 'react'

import { Box } from '@mui/material'

import MealPlanning from './mealplanning';
import HeadMealPlanning from './headmealplanning'

const MealPlanningMain = () => (
  <Box >
    <HeadMealPlanning />
    <MealPlanning />
    {/* <MealTable/> */}
  </Box>
  )

export default MealPlanningMain