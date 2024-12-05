import React from 'react';
import Lottie from 'react-lottie-player'
import animationData from "../../public/loadingAnim2.json"; // Import the Lottie JSON
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const InvalidRoute = () => {
    const navigate = useNavigate()
    return (
        <Grid container direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
        <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: 300, height: "auto" }}
        />
        <Typography variant='h5'>
            Nada por aquí
        </Typography>
        <Button onClick={()=>navigate("/home")}>
            <Typography variant="subtitle1" sx={{textDecoration: "underline"}}>
                Volver al inicio
            </Typography>
        </Button>
        </Grid>
    );
};

export default InvalidRoute;