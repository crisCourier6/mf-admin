import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TopBar from './TopBar';

export const NotAllowed = () => {
    const navigate = useNavigate()
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };

  const handleGoHome = () => {
    navigate("/home")
  }

  return ( <>
    <Grid container direction="column" 
    justifyContent="flex-start" 
    alignItems="center">
        <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar> 
        <Box 
        sx={{
            top: isAppBarVisible?"50px":"0px",
            width:"100%",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}
        >
            <Typography variant="h4">
                Acceso restringido
            </Typography>
            <Typography variant="h6">
                Usuario sin permiso para acceder a este contenido
            </Typography>
            <Button onClick={handleGoHome}>
                <Typography variant="subtitle1" sx={{textDecoration: "underline"}}>
                    Volver al inicio
                </Typography>
            </Button>
        </Box>
      
    </Grid>
  </>
  )
}

export default NotAllowed