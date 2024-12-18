import React, { useEffect, useState } from 'react';
import { Button, Box, Typography, Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RoleIcon from '../svgs/RoleIcon';
import FoodListIcon from '../svgs/FoodListIcon';
import NotificationManagerIcon from '../svgs/NotificationManagerIcon';
import SubmissionsIcon from '../svgs/SubmissionsIcon';
import UsersIcon from '../svgs/Users';

export const HomeOptions:React.FC= () => {
  const navigate = useNavigate()

  const handleUsers = () => {
    navigate("/users")
  }
  const handleFoodLocal = () => {
    navigate("/food")
  }
  const handleFoodEdit = () => {
    navigate("/food-edit")
  }

  const handleRoleEdit = () => {
    navigate("/roles")
  }

  const handleArticleEdit = () => {
    navigate("/articles")
  }

  const handleNotificationEdit = () => {
    navigate("/notifications")
  }

  const [optionsApp, setOptionsApp] = useState([
    {name: "Lista local de alimentos", 
      allowedRoles: ["Admin", "Tech", "Expert", "Store"], 
      function: handleFoodLocal, 
      icon: <FoodListIcon width='100%' height= 'auto'/>
    }])

  useEffect(()=>{
    const options = [
      {name: "Usuarios", allowedRoles: ["Admin", "Tech"], function: handleUsers, icon: <UsersIcon width='100%' height= 'auto'/>},
      {name: "Notificaciones", allowedRoles: ["Admin", "Tech"], function: handleNotificationEdit, icon: <NotificationManagerIcon width='100%' height= 'auto'/>},
      {name: "Lista local de alimentos", allowedRoles: ["Admin", "Tech", "Expert", "Store"], function: handleFoodLocal, icon: <FoodListIcon width='100%' height= 'auto'/>},
      {name: "Aportes de usuarios", allowedRoles: ["Admin", "Tech", "Expert"], function: handleFoodEdit, icon: <SubmissionsIcon width='100%' height= 'auto'/>},
      {name: "Gestión de roles y permisos", allowedRoles: ["Admin", "Tech"], function: handleRoleEdit, icon: <RoleIcon width='100%' height= 'auto'/>},
      // {name: "Artículos de salud", allowedRoles: ["Admin", "Tech", "Expert"], function: handleArticleEdit, icon: <ArticlesIcon width='100%' height= 'auto'/>}
    ]
    const userRole = window.sessionStorage.role || window.localStorage.role
    const filteredOptions = options.filter(option => 
      option.allowedRoles.includes(userRole)
    )
    setOptionsApp(filteredOptions);
  }, [])

    return <Grid container display="flex" 
                flexDirection="row" 
                justifyContent="space-around"
                alignItems="stretch"
                sx={{width: "100vw", maxWidth:"800px", gap:"5px", flexWrap: "wrap", pb: 7}}
            >
            {optionsApp.map((option) => (
              <Button key={option.name} variant='dashed' onClick={option.function} 
              sx={{display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  justifyContent: "stretch",
                  width: "30%", 
                  maxWidth: "200px",
                  fontWeight: "bold"
              }}
              > 
                <Box width="70%" color="inherit">
                  {option.icon}
                </Box>
                
                <Typography variant='h6'>
                    {option.name}
                </Typography>
            </Button>
          ))}
      </Grid>
}