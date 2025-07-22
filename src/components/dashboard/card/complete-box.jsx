import React from 'react'

import { Box, Grid } from '@mui/material'

import Steps from './steps'
import RecipeCard from './card'

const CompleteBox = () => (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={12} md={3.6}>
                <RecipeCard />
            </Grid>
            <Grid item xs={12} md={8.4}>
                <Steps />
            </Grid>
        </Grid>
    </Box>
  )

export default CompleteBox