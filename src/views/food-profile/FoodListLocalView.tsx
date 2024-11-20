import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

import TopBar from '../../components/TopBar';
import FoodListLocal from '../../microfrontends/food-profile/FoodListLocal';

export const FoodListLocalView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  return ( 
    <Grid container direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
      <Typography variant='h5' width="100%" maxWidth="400px" sx={{py:1}}>
        Lista de alimentos local
      </Typography>
      
      <FoodListLocal></FoodListLocal>
    </Grid>
  
  )
}

export default FoodListLocalView