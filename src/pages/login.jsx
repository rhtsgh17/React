import React from "react";
import {Navigate} from "react-router-dom";

export default function Login(){
    const navigate = Navigate();
    // eslint-disable-next-line no-unused-vars
    const handleLogin = () => {
      return navigate("login", {replace: true});
    };
    // eslint-disable-next-line no-unused-vars
    const handleRegister = () => {
        return navigate("register", {replace: true});
      }
    
    return (
        <div>
            <h1>Login Pages</h1>
           <div className="flex">
           <button className="p-3 bg-green-500 text-white rounded-xl" onClick={"handleRegister"}>Register</button>
           <button className="p-3 bg-green-500 text-white rounded-xl" onClick={"handleLogin"}>Login</button>
           </div>
        </div>
    )
}