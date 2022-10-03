import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../komponen/button";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen row-span-2">
      <Button
        title={"Login"}
        onClick={() => {
          return navigate("/Admin/Dashboard", { replace: true });
        }}
        add={"h-[50%]"}
      />
      <Button
        title={"Home"}
        onClick={() => {
          return navigate("/", { replace: true });
        }}
        add={"h-[50%]"}
      />
    </div>
  );
}

export default Login;