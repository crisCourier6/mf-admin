import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodEditList = lazy(() => import("MFEDIT/FoodEditList"))

const FoodEditList: React.FC<{ isAppBarVisible: boolean, onPendingCountChange: (count:number)=>void }> = ({ isAppBarVisible, onPendingCountChange }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFFoodEditList isAppBarVisible={isAppBarVisible} onPendingCountChange={onPendingCountChange}/>
            </Suspense>
        </div>
    )
}

export default FoodEditList