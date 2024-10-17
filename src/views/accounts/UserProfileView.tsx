import { Grid} from '@mui/material';
import React, { useState } from 'react';

import TopBar from '../../components/TopBar';
import UserAccount from '../../microfrontends/accounts/UserAccount';

export const UserProfileView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  return ( <>
    <Grid container direction="column" 
          justifyContent="flex-start" 
          alignItems="center">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar> 
      <UserAccount isAppBarVisible={isAppBarVisible}/> 
      
    </Grid>
  </>
  )
}

export default UserProfileView