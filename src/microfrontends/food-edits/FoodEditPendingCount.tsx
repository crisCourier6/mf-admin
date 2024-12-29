import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFFoodEditPendingCount = lazy(() => import("MFEDIT/FoodEditPendingCount"))

const FoodEditPendingCount: React.FC<{height?: string, width?:string}> = ({height="100%", width="100%"}) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFFoodEditPendingCount height={height} width={width}/>
            </Suspense>
        </div>
    )
}

export default FoodEditPendingCount