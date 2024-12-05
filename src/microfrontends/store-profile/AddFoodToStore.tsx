import React, { Suspense, lazy } from "react";
// @ts-ignore
const MFAddFoodToStore = lazy(() => import("MFSTORE/AddFoodToStore"))

const AddFoodToStore = () => {
    return (
        <div>
            <Suspense>
                <MFAddFoodToStore />
            </Suspense>
        </div>
    )
}

export default AddFoodToStore