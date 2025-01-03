import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import RoleList from '../../microfrontends/accounts/RoleList';
import TopBar from '../../components/TopBar';
import api from '../../api';
import NotAllowed from '../../components/NotAllowed';

export const RoleListView = () => {
  const id = window.sessionStorage.getItem("id") ?? window.localStorage.getItem("id")
  const token = window.sessionStorage.getItem("token") ?? window.localStorage.getItem("token")
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const allowedRoles = ["Admin", "Tech"]
  const [allDone, setAllDone] = useState(false)
  const [isAllowed, setIsAllowed] = useState(false)
  const checkRoleURL = "/users"

  useEffect(()=>{
    api.get(`${checkRoleURL}/${id}/roles`, 
      {
        withCredentials: true,
        headers: { Authorization: "Bearer " + token },
      }
    )
    .then(res => {
      const userRoles = res.data;
      const hasAllowedRole = userRoles.some((role:any) => allowedRoles.includes(role));
      setIsAllowed(hasAllowedRole);
    })
    .catch(error => {
      console.log(error)
    })
    .finally(()=>{
      setAllDone(true)
    })
  },[])

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
    return ( allDone? isAllowed?<Grid container display="flex" direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
          <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
          <RoleList isAppBarVisible={isAppBarVisible} />
      
      </Grid>
      :<NotAllowed></NotAllowed>:<CircularProgress></CircularProgress>
    )
}


export default RoleListView