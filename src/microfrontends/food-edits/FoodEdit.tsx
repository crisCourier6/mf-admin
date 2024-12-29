import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodEdit = lazy(() => import("MFEDIT/FoodEdit"))

const FoodEdit: React.FC<{ isAppBarVisible: boolean, isExpert: boolean }> = ({ isAppBarVisible, isExpert }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFFoodEdit isAppBarVisible={isAppBarVisible} isExpert={isExpert}/>
            </Suspense>
        </div>
    )
}

export default FoodEdit