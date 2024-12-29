import React, { useState } from 'react';
import { Scanner } from '../components/Scanner';
import { Grid } from '@mui/material';
import TopBar from '../components/TopBar';

export const ScannerView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
    setIsAppBarVisible(visible);
};
  return ( <Grid container
    display="flex" 
    direction="column" 
    justifyContent="flex-start" 
    alignItems="center" 
    width="100vw"
    >
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}/>
      <Scanner isAppBarVisible={isAppBarVisible}></Scanner>
  </Grid>
  )
}

export default ScannerView