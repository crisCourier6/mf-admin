import React, { useCallback } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../public/EFbeta.png"
import { 
  Box, List, ListItem, ListItemButton, 
  ListItemIcon, Drawer, AppBar, 
  Toolbar, IconButton, Typography, 
  Paper, Slide} from "@mui/material";
import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import FoodListIcon from "../svgs/FoodListIcon";
import { useTheme } from "@mui/material/styles";
import RoleIcon from "../svgs/RoleIcon";
import UsersIcon from "../svgs/Users";
import NotificationManagerIcon from "../svgs/NotificationManagerIcon";
import SubmissionsIcon from "../svgs/SubmissionsIcon";
import ArticlesIcon from "../svgs/ArticlesIcon";

const HideOnScroll: React.FC<{ onVisibilityChange: (visible: boolean) => 
  void, children: React.ReactElement }> = ({ onVisibilityChange, children }) => {
    const [lastScrollSwitch, setLastScrollSwitch] = useState(0);
    const [lastScroll, setLastScroll] = useState(0);
    const [visible, setVisible] = useState(true);

    const hideThreshold = 100; // Amount to scroll down to hide the AppBar
    const showThreshold = 100; // Amount to scroll up to show the AppBar

    const handleScroll = useCallback(() => {
        const scroll = window.scrollY;

        // Logging scroll positions for debugging

        if (scroll > lastScrollSwitch && Math.abs(scroll - lastScrollSwitch) > hideThreshold) {
            // Scrolling down, hide the AppBar
            if (visible) {
                setVisible(false);
            }
            // Clear any previous timeout for reappearing the AppBar
        } 
        else if (scroll < lastScrollSwitch && Math.abs(scroll - lastScrollSwitch) > showThreshold) {
            // Scrolling up, show the AppBar after a delay
            if (!visible) {
                // Set a timeout to show the AppBar after a delay
                setVisible(true)
            }
        }
        else if (scroll<50){
          if (!visible) {
            // Set a timeout to show the AppBar after a delay
            setVisible(true)
        }
        }

        if(scroll<lastScroll && scroll>lastScrollSwitch){
          setLastScrollSwitch(lastScroll)
        }
        else if (scroll>lastScroll && scroll<lastScrollSwitch){
          setLastScrollSwitch(lastScroll)
        }

        setLastScroll(scroll);
        
    }, [lastScroll, lastScrollSwitch, visible]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
           
        };
    }, [handleScroll]);

    useEffect(() => {
        onVisibilityChange(visible);
    }, [visible, onVisibilityChange]);

    return (
        <Slide appear={false} direction="down" in={visible}>
            {children}
        </Slide>
    );
};


const TopBar: React.FC<{ onVisibilityChange: (visible: boolean) => void }> = ({ onVisibilityChange }) => {
    const navigate = useNavigate()
    const [openRight, setOpenRight] = React.useState(false);
    const [openLeft, setOpenLeft] = React.useState(false);

    const toggleDrawerRight = (newOpen: boolean) => () => {
      setOpenRight(newOpen);
    };

    const toggleDrawerLeft = (newOpen: boolean) => () => {
      setOpenLeft(newOpen);
    };

    const handleProfile = () => {
      navigate("/users" + window.localStorage.id)
    }

    const handleSettings = () => {
      navigate("/users" + window.localStorage.id + "/settings")
    }

    const handleNotif = () => {
      navigate("/users/" + window.localStorage.id + "/notif")
    }

    const handleLogout = () => {
        window.localStorage.clear()
        navigate("/login")
    }

    const handleScan = () => {
      window.location.replace("https://192.168.100.6:4002/")
    }

    const handleArticleEdit = () => {
      navigate("/articles")
    }

    const handleHome = () => {
      const currentPath = window.location.pathname; 
      navigate("/home")
    }

    const handleUsers = () => {
      const currentPath = window.location.pathname; 
      navigate("/users")
    }
    const handleFoodLocal = () => {
      const currentPath = window.location.pathname; 
      navigate("/food")
    }
    const handleFoodEdit = () => {
      navigate("/food-edit")
    }

    const handleRoleEdit = () => {
      navigate("/roles")
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
        {name: "Usuarios", allowedRoles: ["Admin", "Tech"], function: handleUsers, icon: <UsersIcon width='32px' height= '32px'/>},
        {name: "Notificaciones", allowedRoles: ["Admin", "Tech"], function: handleNotificationEdit, icon: <NotificationManagerIcon width='32px' height= '32px'/>},
        {name: "Lista local de alimentos", allowedRoles: ["Admin", "Tech", "Expert", "Store"], function: handleFoodLocal, icon: <FoodListIcon width='32px' height= '32px'/>},
        {name: "Aportes de usuarios", allowedRoles: ["Admin", "Tech", "Expert"], function: handleFoodEdit, icon: <SubmissionsIcon width='32px' height= '32px'/>},
        {name: "Gestión de roles y permisos", allowedRoles: ["Admin", "Tech"], function: handleRoleEdit, icon: <RoleIcon width='32px' height= '32px'/>},
        {name: "Artículos de salud", allowedRoles: ["Admin", "Tech", "Expert"], function: handleArticleEdit, icon: <ArticlesIcon width='32px' height= '32px'/>}
      ]
      const userRole = window.localStorage.role
      const filteredOptions = options.filter(option => 
        option.allowedRoles.includes(userRole)
      )
      setOptionsApp(filteredOptions);
    }, [])

    const optionsUser = [
      {name: "Mi perfil", function: handleProfile, icon: <AccountCircleRoundedIcon/>},
      {name: "Ajustes", function: handleSettings, icon: <SettingsRoundedIcon/>},
      {name: "Notificaciones", function: handleNotif, icon: <NotificationsNoneRoundedIcon/>},
      {name: "Cerrar sesión", function: handleLogout, icon: <LogoutRoundedIcon/>},
    ]

    const DrawerListUser = (
      <Box role="presentation" onClick={toggleDrawerRight(false)} 
      sx={{ 
        borderLeft: "3px solid",
        width: 250, 
        height: "100vh", 
        borderColor: "secondary.main", 
      }}>
        <Paper sx={{
          padding: "5px",
          display:"flex",
          borderRadius: 0,
          borderBottom: "3px solid",
          borderColor: "secondary.main",
          bgcolor: "primary.dark",
          textIndent: 10
          
        }}>
          <Typography variant="h5" color="primary.contrastText">
            {window.localStorage.name}
          </Typography>
          
        </Paper>
        <List>
          {optionsUser.map((option) => (
            <ListItem key={option.name} disablePadding>
              <ListItemButton onClick={option.function}>
                <ListItemIcon sx={{color:"secondary.contrastText"}}>
                  {option.icon}
                </ListItemIcon>
                <Typography   fontFamily={"Montserrat"} color={"primary.dark"}>
                {option.name} 
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    const DrawerListApp = (
      <Box role="presentation" onClick={toggleDrawerLeft(false)}
      sx={{  
        borderRight: "3px solid",
        width: 250, 
        height: "100vh", 
        borderColor: "secondary.main", 
      }}>
        <Paper sx={{
          padding: "10px",
          display:"flex",
          borderRadius: 0,
          borderBottom: "3px solid",
          borderColor: "secondary.main",
          bgcolor: "primary.dark",
          textIndent: 10
          
        }}>
          <Typography variant="h6" color="primary.contrastText">
            ¿Qué quieres hacer?
          </Typography>
        </Paper>
        <List>
          {optionsApp.map((option) => (
            <ListItem key={option.name} disablePadding>
              <ListItemButton onClick={option.function}>
                <ListItemIcon sx={{color:"primary.main"}}>
                  {option.icon}
                </ListItemIcon>
                <Typography   fontFamily={"Montserrat"} color={"primary.dark"}>
                  {option.name} 
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (<HideOnScroll onVisibilityChange={onVisibilityChange}>
        <AppBar position="sticky" 
           sx={{
          display: "flex",
          flexDirection: "row",
          // flexWrap: "nowrap",
          alignItems: "center",
           bgcolor: "secondary.main",
           color: "primary.dark",
           width: "100%",
           height: "50px"
           }}
        >
          <Toolbar sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width:"100%", height:"50px" }}>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawerLeft(true)}
            >
              <MenuIcon fontSize="large"></MenuIcon>
            </IconButton>
            <Box
              component="img"
              sx={{
                height: "70%",
                cursor: "pointer"
              }}
              alt="EyesFood logo"
              src={Logo}
              onClick={handleHome}
              />
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawerRight(true)}
            >
              <AccountCircleRoundedIcon fontSize="large"></AccountCircleRoundedIcon>
            </IconButton>
            
          </Toolbar>
          <Drawer anchor="right" open={openRight} onClose={toggleDrawerRight(false)}>
            {DrawerListUser}
          </Drawer>
          <Drawer anchor="left" open={openLeft} onClose={toggleDrawerLeft(false)}>
            {DrawerListApp}
          </Drawer>
        </AppBar>
      {/* </Box> */}
      
      </HideOnScroll>
    )
}

export default TopBar