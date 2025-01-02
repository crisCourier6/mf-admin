import { Box, CircularProgress, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import api from '../../api';
import TopBar from '../../components/TopBar';
import FoodProfile from '../../microfrontends/food-profile/FoodProfile';
import AddFoodAdvice from '../../microfrontends/expert-profile/AddFoodAdvice';
import FoodAdviceList from '../../microfrontends/expert-profile/FoodAdviceList';
import AddFoodToStore from '../../microfrontends/store-profile/AddFoodToStore';
import FoodStoreList from '../../microfrontends/store-profile/FoodStoreList';

export const FoodProfileView = () => {
  const id = window.sessionStorage.getItem("id") ?? window.localStorage.getItem("id")
  const token = window.sessionStorage.getItem("token") ?? window.localStorage.getItem("token")
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
  const [canAddAdvice, setCanAddAdvice] = useState(false)
  const [canEditCatalogue, setCanEditCatalogue] = useState(false)
  const checkRoleURL = "/users"
  const [isReady, setIsReady] = useState(false);


  useEffect(()=>{
    api.get(`${checkRoleURL}/${id}/roles`, 
      {
        withCredentials: true,
        headers: { Authorization: "Bearer " + token },
      }
    )
    .then(res => {
      const userRoles = res.data;
      const hasAllowedRoleExpert = userRoles.some((role:any) => role==="Expert");
      const hasAllowedRoleStore = userRoles.some((role:any) => role==="Store");
      setCanAddAdvice(hasAllowedRoleExpert);
      setCanEditCatalogue(hasAllowedRoleStore)
    })
    .catch(error => {
      console.log(error)
    })
  },[])

    // This function will be passed to the microfrontend and called when it's ready
  const handleReady = () => {
      setIsReady(true); // Set the state to true when ready
  };

  return (
  <Grid container direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
      {!isReady && <CircularProgress/>}
      <FoodProfile isAppBarVisible={isAppBarVisible} onReady={handleReady}></FoodProfile>
      <Box sx={{
      display: "flex", 
      width: "100%", 
      position: 'fixed',
      bottom: 0, // 16px from the bottom
      zIndex: 100, // High zIndex to ensure it's on top of everything
      flexDirection: "row",
      justifyContent: "stretch",
      maxWidth: "500px",
      maxHeight: "50px",
      alignItems: "center",
      borderTop: "2px solid",
      borderColor: "secondary.main",
      bgcolor: "primary.dark"
      }}>
        <Box sx={{ flex: 1, padding:0
        }}>
          <FoodAdviceList/>
        </Box>
        {canAddAdvice && 
          <Box sx={{ flex: 1.5, borderLeft: "2px solid", borderColor: "secondary.main", padding:0
          }}>
            <AddFoodAdvice/>
          </Box>
        }
        {canEditCatalogue && 
          <Box sx={{ flex: 1.5, borderLeft: "2px solid", borderColor: "secondary.main", padding:0
          }}>
            <AddFoodToStore/>
          </Box>
        }
        <Box sx={{ flex: 1, borderLeft: "2px solid", borderColor: "secondary.main", padding:0
        }}>
          <FoodStoreList/>
        </Box>
      </Box>
    </Grid>
  )
}

export default FoodProfileView