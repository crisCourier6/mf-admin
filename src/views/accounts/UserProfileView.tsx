import { Box, CircularProgress, Grid, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';

import TopBar from '../../components/TopBar';
import UserAccount from '../../microfrontends/accounts/UserAccount';
import NavigateBack from '../../components/NavigateBack';
import UserNotificationCount from '../../microfrontends/notification/UserNotificationCount';
import { useNavigate } from 'react-router-dom';

export const UserProfileView = () => {
  const navigate = useNavigate()
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const [isReady, setIsReady] = useState(false)
  const currentUserId = window.sessionStorage.getItem("id") ?? window.localStorage.getItem("id")
  const handleReady = () => {
    setIsReady(true); // Set the state to true when ready
  };
  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };

  const handleNotif = () => {
    navigate("/users/" + currentUserId + "/notifications")
  }
  return (
    <Grid container direction="column" 
          justifyContent="flex-start" 
          width={"100vw"}
          alignItems="center" sx={{gap:2}}>
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar> 
      {!isReady 
        ? <CircularProgress/>
      : <>
      <Box 
      sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "500px",
          position: 'fixed',
          top: isAppBarVisible?"50px":"0px",
          width:"100%",
          transition: "top 0.3s",
          backgroundColor: 'primary.dark', // Ensure visibility over content
          zIndex: 100,
          boxShadow: 3,
          overflow: "hidden", 
          borderBottom: "5px solid",
          borderLeft: "5px solid",
          borderRight: "5px solid",
          borderColor: "secondary.main",
          boxSizing: "border-box",
          color: "primary.contrastText"
        }}
      >
         <Box sx={{display: "flex", flex: 1}}>
              <NavigateBack/>
          </Box>
          <Box sx={{display: "flex", flex: 4}}>
              <Typography variant='h6' width="100%"  color="primary.contrastText" sx={{py:1}}>
                  Mi perfil
              </Typography>
          </Box>
          <Box sx={{display: "flex", flex: 1}}>
          <IconButton
                onClick={handleNotif}
                size="small"
                color="inherit"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "none",
                }}
              >
              <UserNotificationCount/>
            </IconButton>
          </Box>
          </Box>
         
      </> 
      }
       <UserAccount isAppBarVisible={isAppBarVisible} onReady={handleReady}/> 
    </Grid>
  )
}

export default UserProfileView