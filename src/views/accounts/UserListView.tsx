import React from 'react';
import { Box, Tabs, Tab, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import UserList from '../../microfrontends/accounts/UserList';
import Logo from "../../../public/EFbeta.png"
import TopBar from '../../components/TopBar';

export const UserListView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
    return ( <><Grid container display="flex" direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
          <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
          <UserList isAppBarVisible={isAppBarVisible} />
      
      </Grid></>
    )
}


export default UserListView