import React, { Suspense, lazy } from "react";
// @ts-ignore
const MFFoodProfile = lazy(() => import("MFFOOD/FoodProfile"))

const FoodProfile: React.FC<{ isAppBarVisible: boolean, onReady: ()=>void }> = ({ isAppBarVisible, onReady }) => {
    return (
        <div>
            <Suspense>
                <MFFoodProfile isAppBarVisible={isAppBarVisible} onReady={onReady}/>
            </Suspense>
        </div>
    )
}

export default FoodProfile