import React, { useEffect } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { useState } from 'react';
import UserList from '../../microfrontends/accounts/UserList';
import TopBar from '../../components/TopBar';
import api from '../../api';
import NotAllowed from '../../components/NotAllowed';

export const UserListView = () => {
  const id = window.sessionStorage.getItem("id") || window.localStorage.getItem("id")
  const token = window.sessionStorage.getItem("token") || window.localStorage.getItem("token")
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const allowedRoles = ["Admin", "Tech"]
  const [userRoles, setUserRoles] = useState<string[]>([])
  const [isAllowed, setIsAllowed] = useState(false)
  const [allDone, setAllDone] = useState(false)
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
      setUserRoles(userRoles)
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
    return ( allDone
              ? isAllowed
                  ?<Grid container display="flex" direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
                    <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
                    <UserList isAppBarVisible={isAppBarVisible} userRoles={userRoles} />
                  </Grid>
                  :<NotAllowed/>
              :<CircularProgress/>
    )
}


export default UserListView