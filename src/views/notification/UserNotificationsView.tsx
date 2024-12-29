import { Grid } from '@mui/material';
import React, { useState } from 'react';
import TopBar from '../../components/TopBar';
import UserNotifications from '../../microfrontends/notification/UserNotifications';

export const UserNotificationsView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  
  return (
  <Grid container direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
        <UserNotifications isAppBarVisible={isAppBarVisible}/>
    </Grid>
  )
}

export default UserNotificationsView