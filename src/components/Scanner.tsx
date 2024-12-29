import React from 'react';
import { useState } from "react"
import { useZxing } from "react-zxing"
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import NavigateBack from './NavigateBack';

export const Scanner: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    const navigate = useNavigate()
    const [manualCode, setManualCode] = useState("")
    const validDigits = [12, 13]
    const { ref } = useZxing({
        onDecodeResult(result) {
        if(validDigits.includes(result.getText().length)){
            navigate("/food/" + result.getText())
            
        }   
        },
    });

    const handleManualCode = () => {
        const validDigits = [12, 13]
        if (validDigits.includes(manualCode.length)){
            navigate("/food/" + manualCode)
        }
    }

    return (
        <Grid container display="flex" 
            flexDirection="column" 
            justifyContent="flex-start"
            alignItems="center"
            sx={{width: "100%", maxWidth:"600px", height: "100vh"}}
        >
            <Box 
                sx={{
                    position: 'sticky',
                    top: isAppBarVisible?"50px":"0px",
                    width:"100%",
                    maxWidth: "500px",
                    transition: "top 0.1s",
                    backgroundColor: 'primary.dark', // Ensure visibility over content
                    zIndex: 100,
                    boxShadow: 3,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderBottom: "5px solid",
                    borderLeft: "5px solid",
                    borderRight: "5px solid",
                    borderColor: "secondary.main",
                    boxSizing: "border-box",
                    color: "primary.contrastText"
                  }}
            >
                <Box sx={{display: "flex", flex: 1}}>
                    <NavigateBack/>
                </Box>
                <Box sx={{display: "flex", flex: 4}}>
                    <Typography variant='h6' width="100%"  color="primary.contrastText" sx={{py:1}}>
                        Escáner
                    </Typography>
                </Box>
                <Box sx={{display: "flex", flex: 1}}>
                </Box>
            </Box>
            <Paper elevation={0} sx={{
                display: "flex",
                color: "secondary.contrastText",
                width: "95%",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 0,
                bgcolor: "transparent",
                

            }}>
                <Typography variant='subtitle2' sx={{py:1}}>
                    Enfoca el código de barras del producto o ingresa el código numérico manualmente
                </Typography>
            </Paper>
            <Box 
            sx={{
                width: "90%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                py:1,
            }}>
                <TextField 
                value={manualCode} 
                label="Código de barras"  
                onChange={(e) => setManualCode(e.target.value)}
                sx={{
                    "& .MuiInputBase-root": {
                      height: "35px", // Adjust the overall height of the input
                    },
                    "& .MuiInputBase-input": {
                      padding: "8px", // Adjust padding for input text
                    },
                    "& .MuiInputLabel-root": {
                      transform: "translate(14px, 6px) scale(1)", // Center the label when the field is empty
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -6px) scale(0.75)", // Adjust label position when the field has a value
                    },
                  }}
                />
                <Button onClick={handleManualCode} disabled={manualCode.length<12} variant="contained">
                    Buscar
                </Button>
            </Box>
            <Box
            sx={{
                border: "5px solid",
                borderColor: "primary.dark",
                width:"90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box"
            }}
            > 
                <video ref={ref}/>
            </Box>
        </Grid>
  );
}