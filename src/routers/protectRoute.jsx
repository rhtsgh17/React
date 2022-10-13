import React from "react";
import Cookies from "js-cookie";
import {Navigate} from "react-router-dom";


export default function ProtectedRoute({children}) {
    const auth = Cookies.get('myapps_token')
    console.log("auth =>", auth)
    return auth !== undefined ? children : <Navigate to="/login" replace={true}/>;
}