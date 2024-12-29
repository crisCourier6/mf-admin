import React, { Suspense, lazy } from "react";
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { Badge } from "@mui/material";
// @ts-ignore
const MFUserNotificationCount = lazy(() => import("MFNOTIF/UserNotificationCount"))

const UserNotificationCount: React.FC = () => {
    return (
        <div>
            <Suspense fallback={
                <Badge
                    color="default"
                    overlap="circular"
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    <NotificationsNoneRoundedIcon />
                </Badge> }
            >
                <MFUserNotificationCount/>
            </Suspense>
        </div>
    )
}

export default UserNotificationCount