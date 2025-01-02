import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import TopBar from '../../components/TopBar';
import FoodEdit from '../../microfrontends/food-edits/FoodEdit';
import api from '../../api';


export const FoodEditView = () => {
    const [isAppBarVisible, setIsAppBarVisible] = useState(true);
    const handleAppBarVisibilityChange = (visible: boolean) => {
        setIsAppBarVisible(visible);
    };
    const checkRoleURL = "/users"
    const token = window.sessionStorage.getItem("token") ?? window.localStorage.getItem("token")
    const currentUserId = window.sessionStorage.getItem("id") ?? window.localStorage.getItem("id")
    const [isExpert, setIsExpert] = useState(false)
  
    useEffect(()=>{
      api.get(`${checkRoleURL}/${currentUserId}/roles`, 
        {
          withCredentials: true,
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then(res => {
        const userRoles = res.data;
        const hasAllowedRoleExpert = userRoles.some((role:any) => role==="Expert");
        setIsExpert(hasAllowedRoleExpert)
      })
      .catch(error => {
        console.log(error)
      })
    },[])
    return (
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
        <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
        <FoodEdit isAppBarVisible={isAppBarVisible} isExpert={isExpert}/>
    </Grid>
    )
}


export default FoodEditView