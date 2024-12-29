import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFUserList = lazy(() => import("MFACC/UserList"))

const UserList: React.FC<{ isAppBarVisible: boolean, userRoles: string[] }> = ({ isAppBarVisible, userRoles }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFUserList isAppBarVisible={isAppBarVisible} userRoles={userRoles}/>
            </Suspense>
        </div>
    )
}

export default UserList