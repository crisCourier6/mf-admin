import React, { Suspense, lazy } from "react";
// @ts-ignore
const MFFoodStoreList = lazy(() => import("MFSTORE/FoodStoreList"))

const FoodStoreList = () => {
    return (
        <div>
            <Suspense>
                <MFFoodStoreList />
            </Suspense>
        </div>
    )
}

export default FoodStoreList