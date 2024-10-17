import React from 'react';
import { Grid } from '@mui/material';
import { useState } from 'react';
import FoodEditList from '../../microfrontends/food-edits/FoodEditList';
import TopBar from '../../components/TopBar';

export const FoodEditListView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
    return ( <><Grid container display="flex" direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
          <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
          <FoodEditList isAppBarVisible={isAppBarVisible} />
      
      </Grid></>
    )
}


export default FoodEditListView