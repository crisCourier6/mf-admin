import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFArticleList = lazy(() => import("MFEXPERT/ArticleList"))

const ArticleList: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFArticleList isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default ArticleList