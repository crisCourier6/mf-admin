import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFUserAccount = lazy(() => import("MFACC/UserAccount"))

const UserAccount: React.FC<{ isAppBarVisible: boolean, onReady:()=>void }> = ({ isAppBarVisible, onReady }) => {
    return (
        <div>
            <Suspense>
                <MFUserAccount isAppBarVisible={isAppBarVisible} onReady={onReady}/>
            </Suspense>
        </div>
    )
}

export default UserAccount