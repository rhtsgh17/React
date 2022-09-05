import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home(){
    const navigate = useNavigate();

    const [msg, setMsg] = React.useState("belum login")
    const handleLogin = () => {
        setMsg("proses login");
        setTimeout()

        return navigate("about", {replace: true});
    }
    return(
            <div>
                <p>nah iye home</p>
                <p>{msg}</p>
                <button onClick={handleLogin}>Login</button>
            </div>
    );
}