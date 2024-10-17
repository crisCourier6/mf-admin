import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFNotificationManager = lazy(() => import("MFNOTIF/NotificationManager"))

const NotificationManager: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFNotificationManager isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default NotificationManager