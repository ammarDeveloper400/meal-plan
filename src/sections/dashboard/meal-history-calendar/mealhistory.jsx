import React from 'react'

import { Box } from '@mui/material'

// import MealPlanHistory from './meal-history' 
import HeadMealPlanning from './meal-history-head'
import MealPlanning1 from '../meal-consult/mealplanning'



const MealHistory = () => (
    <Box px={2}>
    <HeadMealPlanning/>
    {/* <MealPlanHistory/> */}
      <MealPlanning1/>
    </Box>
  )

export default MealHistory