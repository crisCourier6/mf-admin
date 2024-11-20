import React from 'react';
import { Box, Grid } from '@mui/material';
import Login from '../../microfrontends/accounts/Login';
import EFLogo from '../../svgs/EFLogo';

export const LoginView = () => {
    return ( <><Grid container display="flex" direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
        
        <Box width={"90%"} sx={{maxWidth: "300px", display: "flex", alignItems: "center"}}>
            <EFLogo width={"100%"} height={"auto"}/>
          </Box>
          <Login/>
      
      </Grid></>
    )
}


export default LoginView