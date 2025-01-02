import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import NavigateBack from '../components/NavigateBack';
import { Help } from '../components/Help';

export const HelpView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };

  return (
    <Grid container direction="column" 
          justifyContent="flex-start" 
          alignItems="center" sx={{gap:2}}>
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar> 
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
                  Ayuda
              </Typography>
          </Box>
          <Box sx={{display: "flex", flex: 1}}>
          </Box>
    </Box>
    <Help isAppBarVisible={isAppBarVisible}/>
    </Grid>
  )
}

export default HelpView