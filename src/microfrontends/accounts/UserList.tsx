import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFUserList = lazy(() => import("MFACC/UserList"))

const UserList: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFUserList isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default UserList