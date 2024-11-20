import React from 'react';
import { Grid } from '@mui/material';
import { useState } from 'react';
import UserList from '../../microfrontends/accounts/UserList';
import TopBar from '../../components/TopBar';

export const UserListView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
    return ( <Grid container display="flex" direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
          <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
          <UserList isAppBarVisible={isAppBarVisible} />
      
      </Grid>
    )
}


export default UserListView