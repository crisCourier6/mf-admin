import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";

// @ts-ignore
const MFLogin = lazy(() => import("MFACC/LoginAdmin"))

const Login = () => {
    return (
        <div>
            <Suspense fallback={<CircularProgress/>}>
                <MFLogin />
            </Suspense>
        </div>
    )
}

export default Login