import React, { Suspense, lazy } from "react";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Badge } from "@mui/material";
// @ts-ignore
const MFUserPendingCount = lazy(() => import("MFACC/UserPendingCount"))

const UserPendingCount: React.FC<{height?: string, width?:string}> = ({height="100%", width="100%"}) => {
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
                    <AccountCircleRoundedIcon />
                </Badge> }
            >
                <MFUserPendingCount height={height} width={width}/>
            </Suspense>
        </div>
    )
}

export default UserPendingCount