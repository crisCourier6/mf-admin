import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import EFLogo from "../svgs/EFLogo";
import { 
  Box, List, ListItem, ListItemButton, 
  ListItemIcon, Drawer, AppBar, 
  Toolbar, Typography, 
  Paper, Slide,
  Button} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import FoodListIcon from "../svgs/FoodListIcon";
import HelpIcon from '@mui/icons-material/Help';
import NotificationManagerIcon from "../svgs/NotificationManagerIcon";
import UserNotificationCount from "../microfrontends/notification/UserNotificationCount";
import UserPendingCount from "../microfrontends/accounts/UserPendingCount";
import FoodEditPendingCount from "../microfrontends/food-edits/FoodEditPendingCount";

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
    const currentUserId = window.sessionStorage.getItem("id") ?? window.localStorage.getItem("id")
    const currentUserName = window.sessionStorage.getItem("name") ?? window.localStorage.getItem("name")
    const toggleDrawerRight = (newOpen: boolean) => () => {
      setOpenRight(newOpen);
    };

    const toggleDrawerLeft = (newOpen: boolean) => () => {
      setOpenLeft(newOpen);
    };

    const handleProfile = () => {
      navigate("/users/" + currentUserId)
    }

    const handleNotifications = () => {
      navigate("/users/" + currentUserId + "/notifications")
    }

    const handleLogout = () => {
        window.localStorage.clear()
        window.sessionStorage.clear()
        navigate("/login")
    }

    const handleHome = () => {
      navigate("/home")
    }

    const handleUsers = () => {
      navigate("/users")
    }
    const handleFoodLocal = () => {
      navigate("/food")
    }

    const handleHelp = () => {
      navigate("/help")
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
        {name: "Usuarios", allowedRoles: ["Admin", "Tech"], function: handleUsers, icon: <UserPendingCount width='32px' height= '32px'/>},
        {name: "Notificaciones", allowedRoles: ["Admin", "Tech"], function: handleNotificationEdit, icon: <NotificationManagerIcon width='32px' height= '32px'/>},
        {name: "Alimentos", allowedRoles: ["Admin", "Tech", "Expert", "Store"], function: handleFoodLocal, icon: <FoodEditPendingCount width='32px' height= '32px'/>},
      ]
      const userRole = window.sessionStorage.role || window.localStorage.role
      const filteredOptions = options.filter(option => 
        option.allowedRoles.includes(userRole)
      )
      setOptionsApp(filteredOptions);
    }, [])

    const optionsUser = [
      {name: "Ir al inicio", allowedRoles: ["Core"], function: handleHome, icon: <HomeIcon width={28} height= {28}/>},
      {name: "Mi perfil", function: handleProfile, icon: <AccountCircleRoundedIcon/>},
      {name: "Notificaciones", function: handleNotifications, icon: <UserNotificationCount/>},
      {name: "Ayuda", function: handleHelp, icon: <HelpIcon width={28} height= {28}/>},
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
            {currentUserName}
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
          alignItems: "center",
           bgcolor: "secondary.main",
           color: "primary.dark",
           width: "100%",
           height: "50px"
           }}
        >
          <Toolbar sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width:"100%", height:"50px" }}>
            <Box sx={{display:"flex", justifyContent: "flex-start", flex:1}}>
              <Button
                onClick={toggleDrawerLeft(true)}
                size="small"
                color="inherit"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "none",
                  border: "2px"
                }}
              >
                <MenuIcon fontSize="medium" />
                <Typography variant="subtitle2">Menú</Typography>
              </Button>
            </Box>
            <Box height={"50px"} onClick={handleHome}
            sx={{
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              cursor: "pointer", flex:2
            }} 
            >
              <EFLogo width={"auto"} height={"70%"}/>
            </Box>
            <Box sx={{display:"flex", justifyContent: "flex-end", flex:1, gap:2}}>
              <Button
                onClick={handleLogout}
                size="small"
                color="inherit"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "none",
                  border: "2px"
                }}
              >
                <LogoutRoundedIcon fontSize="medium" />
                <Typography variant="subtitle2">Cerrar sesión</Typography>
              </Button>
              <Button
                onClick={toggleDrawerRight(true)}
                size="small"
                color="inherit"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "none",
                  border: "2px"
                }}
              >
                <AccountCircleRoundedIcon fontSize="medium"></AccountCircleRoundedIcon>
                <Typography variant="subtitle2">{currentUserName}</Typography>
              </Button>
            </Box>
          </Toolbar>
          <Drawer anchor="right" open={openRight} onClose={toggleDrawerRight(false)}>
            {DrawerListUser}
          </Drawer>
          <Drawer anchor="left" open={openLeft} onClose={toggleDrawerLeft(false)}>
            {DrawerListApp}
          </Drawer>
        </AppBar>
      
      </HideOnScroll>
    )
}

export default TopBar