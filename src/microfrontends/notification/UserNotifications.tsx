import React, { Suspense, lazy } from "react";
// @ts-ignore
const MFUserNotifications = lazy(() => import("MFNOTIF/UserNotifications"))

const UserNotifications: React.FC<{ isAppBarVisible: boolean}> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense>
                <MFUserNotifications isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default UserNotifications