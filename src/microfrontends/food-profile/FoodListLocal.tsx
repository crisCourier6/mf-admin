import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodListLocal = lazy(() => import("MFFOOD/FoodListLocal"))

const FoodListLocal = () => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFFoodListLocal />
            </Suspense>
        </div>
    )
}

export default FoodListLocal