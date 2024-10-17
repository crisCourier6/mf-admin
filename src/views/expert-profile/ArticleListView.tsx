import React from 'react';
import { Grid } from '@mui/material';
import { useState } from 'react';
import ArticleList from '../../microfrontends/expert-profile/ArticleList';
import TopBar from '../../components/TopBar';

export const ArticleListView = () => {
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  const handleAppBarVisibilityChange = (visible: boolean) => {
      setIsAppBarVisible(visible);
  };
    return ( <><Grid container display="flex" direction="column" justifyContent="flex-start" alignItems="center" width="100vw">
          <TopBar onVisibilityChange={handleAppBarVisibilityChange}></TopBar>
          <ArticleList isAppBarVisible={isAppBarVisible} />
      
      </Grid></>
    )
}


export default ArticleListView