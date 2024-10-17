import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodEditList = lazy(() => import("MFEDIT/FoodEditList"))

const FoodEditList: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFFoodEditList isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default FoodEditList