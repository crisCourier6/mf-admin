import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
// @ts-ignore
const MFRoleList = lazy(() => import("MFACC/RoleList"))

const RoleList: React.FC<{ isAppBarVisible: boolean }> = ({ isAppBarVisible }) => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFRoleList isAppBarVisible={isAppBarVisible}/>
            </Suspense>
        </div>
    )
}

export default RoleList