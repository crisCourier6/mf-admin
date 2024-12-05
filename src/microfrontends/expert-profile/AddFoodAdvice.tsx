import React, { Suspense, lazy } from "react";
// @ts-ignore
const MFAddFoodAdvice = lazy(() => import("MFEXPERT/AddFoodAdvice"))

const AddFoodAdvice = () => {
    return (
        <div>
            <Suspense>
                <MFAddFoodAdvice />
            </Suspense>
        </div>
    )
}

export default AddFoodAdvice