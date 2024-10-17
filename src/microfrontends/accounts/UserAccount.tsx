import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFUserAccount = lazy(() => import("MFACC/UserAccount"))

const UserAccount: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFUserAccount isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default UserAccount