import { Box, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import TopBar from '../../components/TopBar';
import FoodListLocal from '../../microfrontends/food-profile/FoodListLocal';
import FoodEditList from '../../microfrontends/food-edits/FoodEditList';
import api from '../../api';
import NavigateBack from '../../components/NavigateBack';

export const FoodListLocalView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const [showSubmissions, setShowSubmissions] = useState(false)
  const token = window.sessionStorage.getItem("token") || window.localStorage.getItem("token")
  const [pendingCount, setPendingCount] = useState<number>(0);
  const pendingURL = "/submissions?pendingcount=true"
  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };

  const handleSwitchChange = (newValue:boolean) => {
    setShowSubmissions(newValue)
  };

  const handlePendingCountChange = (count: number) => {
    setPendingCount(count);
  };

  useEffect(()=>{
    api.get(pendingURL, {withCredentials: true,
      headers: {
          Authorization: "Bearer " + token
      }}
    )
    .then(res=>{
      setPendingCount(res.data.pendingCount)
    })
    .catch(error=>{
      console.log(error)
    })
  }, [])

  return ( 
    <Grid container direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
      <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
      <Box 
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "500px",
                position: 'fixed',
                top: isAppBarVisible?"50px":"0px",
                width:"100%",
                transition: "top 0.3s",
                backgroundColor: 'primary.dark', // Ensure visibility over content
                zIndex: 100,
                boxShadow: 3,
                overflow: "hidden", 
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
                    <Typography variant='h5' width="100%"  color="primary.contrastText" sx={{py:1}}>
                        Alimentos
                    </Typography>
                </Box>
                <Box sx={{display: "flex", flex: 1}}>
                </Box>
            </Box>
      <Box sx={{display: "flex", justifyContent: "center", pt:isAppBarVisible?"60px":"5px", pb:1}}> 
        <RadioGroup
            row
            value={showSubmissions ? "edits" : "food"} // Sets the selected value
            onChange={(e) => handleSwitchChange(e.target.value === "edits")} // Passes boolean to your handler
        >
            <FormControlLabel 
                value="food" 
                control={<Radio size="small" />} 
                label={<Typography variant="subtitle1">Ver lista de alimentos</Typography>} 
            />
            <FormControlLabel 
                value="edits" 
                control={<Radio size="small" />} 
                label={
                <Typography variant="subtitle1" sx={{display: "flex" }}>
                  Ver aportes de información 
                  <Typography variant='subtitle1' sx={{color: pendingCount>0?"warning.main":"primary.dark"}}>
                    : {pendingCount} pendiente(s)
                  </Typography>
                </Typography>} 
            />
        </RadioGroup>
      </Box>
     
      {
        showSubmissions 
          ? <FoodEditList isAppBarVisible={isAppBarVisible} onPendingCountChange = {handlePendingCountChange}/>
          : <FoodListLocal/>
      }
      
    </Grid>
  
  )
}

export default FoodListLocalView